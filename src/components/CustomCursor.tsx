"use client";
import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(loop);

    const bindHover = () => {
      document.querySelectorAll(
        "a, button, [data-cursor], .svc-row, .work, .strip-card, .why-card, .t-card, .tech-pill, .ind-pill, .client-badge, .team-card, .metric, input, textarea, select"
      ).forEach((el) => {
        if ((el as HTMLElement & { _cursorBound?: boolean })._cursorBound) return;
        (el as HTMLElement & { _cursorBound?: boolean })._cursorBound = true;
        el.addEventListener("mouseenter", () => {
          ring.classList.add("is-hovering");
          dot.classList.add("is-hovering");
        });
        el.addEventListener("mouseleave", () => {
          ring.classList.remove("is-hovering");
          dot.classList.remove("is-hovering");
        });
      });
    };

    bindHover();
    const obs = new MutationObserver(bindHover);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" id="cursorRing" />
      <div className="cursor-dot" id="cursorDot" />
    </>
  );
}
