"use client";
import { useEffect, useRef } from "react";

const METRICS = [
  { value: 50, suffix: "+", label: "Projects Completed", arrow: "↑ Growing" },
  { value: 100, suffix: "%", label: "Client Satisfaction", arrow: "↑ Consistent" },
  { value: 12, suffix: "+", label: "Industries Served", arrow: "↑ Diverse" },
  { value: 3, suffix: "×", label: "Average ROI", arrow: "↑ Measured" },
];

function animateCount(el: HTMLElement) {
  if (!el || (el as any).dataset.counted) return;
  (el as any).dataset.counted = "1";
  const target = parseInt((el as any).dataset.target || "0", 10) || 0;
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

export function MetricsBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll<HTMLElement>(".count").forEach(animateCount);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="metrics" ref={ref}>
      <div className="metrics-grid">
        {METRICS.map((m) => (
          <div className="metric" key={m.label}>
            <span className="arr-up">↑ {m.label.split(" ")[0]}</span>
            <span className="val">
              <span className="count" data-target={m.value}>0</span>
              <span className={m.suffix === "%" ? "pct" : m.suffix === "×" ? "x" : "plus"}>{m.suffix}</span>
            </span>
            <span className="lbl">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
