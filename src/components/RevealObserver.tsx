"use client";
import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            // trigger count-up on child .count elements
            e.target.querySelectorAll<HTMLElement>(".count").forEach(animateCount);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(".reveal:not(.is-in), .clip-row:not(.is-in)").forEach((el) => io.observe(el));
    };

    observe();

    const mutObs = new MutationObserver(observe);
    mutObs.observe(document.body, { childList: true, subtree: true });

    // Process track sequential activation
    const ptIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const steps = e.target.querySelectorAll(".process-step");
            steps.forEach((s, i) =>
              setTimeout(() => s.classList.add("is-active"), 180 + i * 260)
            );
            ptIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    const pt = document.getElementById("processTrack");
    if (pt) ptIO.observe(pt);

    // Marquee pause on hover
    document.querySelectorAll(".marquee, .client-marquee").forEach((m) => {
      m.addEventListener("mouseenter", () =>
        m.querySelectorAll<HTMLElement>(".marquee-track, .cm-row").forEach((t) => (t.style.animationPlayState = "paused"))
      );
      m.addEventListener("mouseleave", () =>
        m.querySelectorAll<HTMLElement>(".marquee-track, .cm-row").forEach((t) => (t.style.animationPlayState = "running"))
      );
    });

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal, .clip-row").forEach((el) => el.classList.add("is-in"));
    }

    return () => {
      io.disconnect();
      mutObs.disconnect();
      ptIO.disconnect();
    };
  }, []);

  return null;
}

function animateCount(el: HTMLElement) {
  if (!el || el.dataset.counted) return;
  el.dataset.counted = "1";
  const target = parseInt(el.dataset.target || el.textContent || "0", 10) || 0;
  const dur = 1500;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.floor(eased * target));
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = String(target);
  };
  requestAnimationFrame(tick);
}
