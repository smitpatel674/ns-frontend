"use client";
import { useEffect } from "react";

export function ParticleCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("particles") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    interface Particle { x: number; y: number; r: number; s: number; o: number }
    let parts: Particle[] = [];
    let rafId: number;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      parts = [];
      for (let i = 0; i < 40; i++) {
        parts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.6 + 0.4,
          s: Math.random() * 0.4 + 0.1,
          o: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y -= p.s;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        const edgeFade = Math.min(1, Math.min(p.y, h - p.y) / 120);
        ctx.beginPath();
        ctx.fillStyle = `rgba(26,26,26,${p.o * edgeFade * 0.55})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    };

    const onResize = () => { resize(); init(); };
    window.addEventListener("resize", onResize);
    resize();
    init();
    tick();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
