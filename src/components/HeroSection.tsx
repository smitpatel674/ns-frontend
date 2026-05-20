"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

function animateCount(el: HTMLElement) {
  if (!el || (el as any).dataset.counted) return;
  (el as any).dataset.counted = "1";
  const target = parseInt((el as any).dataset.target || el.textContent || "0", 10) || 0;
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

export function HeroSection() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eyebrow = document.getElementById("heroEyebrow");
    const rows = ["hr1", "hr2", "hr3"].map((id) => document.getElementById(id));
    const heroCtas = document.getElementById("heroCtas");
    const heroSub = document.getElementById("heroSub");
    const stack = stackRef.current;

    const triggerIntro = () => {
      if (eyebrow) setTimeout(() => eyebrow.classList.add("is-in"), 100);
      rows.forEach((r, i) => {
        if (r) setTimeout(() => r.classList.add("is-in"), 200 + i * 180);
      });
      if (heroSub) setTimeout(() => heroSub.classList.add("is-in"), 900);
      if (heroCtas) setTimeout(() => heroCtas.classList.add("is-in"), 1100);
      document.querySelectorAll<HTMLElement>(".hero .count").forEach(animateCount);
    };

    document.addEventListener("nextron-loaded", triggerIntro);
    const fallback = setTimeout(triggerIntro, 2600);

    let cleanup = () => {};
    if (stack) {
      stack.style.opacity = "0";
      stack.style.transition = "opacity 1.2s ease 1.2s";
      setTimeout(() => { if (stack) stack.style.opacity = "1"; }, 50);

      const hero = document.getElementById("home");
      if (hero) {
        let tx = -18, ty = -8, cx = -18, cy = -8, raf: number | null = null;
        const update = () => {
          cx += (tx - cx) * 0.08;
          cy += (ty - cy) * 0.08;
          stack.style.transform = `rotateX(${cy}deg) rotateY(${cx}deg)`;
          if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
            raf = requestAnimationFrame(update);
          } else raf = null;
        };
        const onMove = (e: MouseEvent) => {
          const r = hero.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          tx = -18 + (px - 0.5) * 28;
          ty = -8 + (py - 0.5) * -16;
          if (!raf) raf = requestAnimationFrame(update);
        };
        const onLeave = () => {
          tx = -18; ty = -8;
          if (!raf) raf = requestAnimationFrame(update);
        };
        hero.addEventListener("mousemove", onMove);
        hero.addEventListener("mouseleave", onLeave);
        cleanup = () => {
          hero.removeEventListener("mousemove", onMove);
          hero.removeEventListener("mouseleave", onLeave);
          if (raf) cancelAnimationFrame(raf);
        };
      }
    }

    return () => {
      document.removeEventListener("nextron-loaded", triggerIntro);
      clearTimeout(fallback);
      cleanup();
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="mesh" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      <div className="hero-top">
        <div className="hero-eyebrow" id="heroEyebrow">
          <span className="tri">&#9658;</span> NEXT DIGITAL SUCCESS &mdash; EST. 2025
        </div>
        <div className="hero-counter">
          <span className="num"><span className="count" data-target="50">0</span>+</span>
          <span className="lbl">Projects Shipped</span>
        </div>
      </div>

      <h1 className="hero-headline" aria-label="We Build Digital Futures.">
        <span className="clip-row" id="hr1"><span className="l-up">We Build</span></span>
        <span className="clip-row" id="hr2"><span className="l-italic"><em>Digital</em></span></span>
        <span className="clip-row" id="hr3"><span className="l-up">Futures.</span></span>
      </h1>

      <div className="hero-3d" id="hero3d" aria-hidden="true">
        <div className="h3d-scene">
          <div className="h3d-stack" id="h3dStack" ref={stackRef}>
            <div className="fcard fcard-3">
              <div className="fcard-edge" />
              <div className="fcard-inner">
                <div className="fcard-top">
                  <span className="fcard-n">03</span>
                  <span className="fcard-tag">PHASE</span>
                </div>
                <div className="fcard-title">Deploy<span className="fcard-dot" /></div>
                <div className="fcard-meta">
                  <span>SHIP · MONITOR · GROW</span>
                  <span className="fcard-arr">↗</span>
                </div>
                <div className="fcard-grid">
                  {Array.from({ length: 8 }).map((_, i) => <span key={i} />)}
                </div>
              </div>
            </div>
            <div className="fcard fcard-2">
              <div className="fcard-edge" />
              <div className="fcard-inner">
                <div className="fcard-top">
                  <span className="fcard-n">02</span>
                  <span className="fcard-tag">PHASE</span>
                </div>
                <div className="fcard-title">Develop<span className="fcard-dot" /></div>
                <div className="fcard-meta">
                  <span>BUILD · TEST · REFINE</span>
                  <span className="fcard-arr">↗</span>
                </div>
                <div className="fcard-bars">
                  <i style={{"--w": "80%"} as React.CSSProperties} />
                  <i style={{"--w": "62%"} as React.CSSProperties} />
                  <i style={{"--w": "94%"} as React.CSSProperties} />
                  <i style={{"--w": "48%"} as React.CSSProperties} />
                </div>
              </div>
            </div>
            <div className="fcard fcard-1">
              <div className="fcard-edge" />
              <div className="fcard-inner">
                <div className="fcard-top">
                  <span className="fcard-n">01</span>
                  <span className="fcard-tag">PHASE</span>
                </div>
                <div className="fcard-title">Design<span className="fcard-dot" /></div>
                <div className="fcard-meta">
                  <span>RESEARCH · SKETCH · SYSTEM</span>
                  <span className="fcard-arr">↗</span>
                </div>
              </div>
            </div>
            <div className="fcard-orbit" />
            <div className="fcard-spark s1" />
            <div className="fcard-spark s2" />
            <div className="fcard-spark s3" />
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <p className="hero-sub reveal" id="heroSub">
          We build <strong>high-performance websites</strong>, data-driven{" "}
          <strong>digital marketing</strong> &amp; <strong>AI solutions</strong> to
          accelerate your business growth.
        </p>
        <div className="hero-ctas reveal" id="heroCtas">
          <Link href="/#contact" className="btn btn-lime" data-cursor="">
            Start a Project <span className="arr">→</span>
          </Link>
          <Link href="/#services" className="btn btn-ghost" data-cursor="">
            Explore Services
          </Link>
        </div>
      </div>

      <div className="hero-badge">
        <div className="orbit">
          <svg viewBox="0 0 200 200" width="160" height="160">
            <defs>
              <path id="heroTextPath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text fontSize="11" letterSpacing="3" fill="#1A1A1A" fontFamily="JetBrains Mono, monospace">
              <textPath href="#heroTextPath">EST · 2025 · GUJARAT · NEXTRON ·</textPath>
            </text>
          </svg>
        </div>
        <div className="b-core">
          <span className="est">EST</span>
          <span className="yr">2025</span>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span className="ln" />
        Scroll
      </div>
    </section>
  );
}
