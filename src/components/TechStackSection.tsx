"use client";
import { useEffect, useRef } from "react";

const TECH: Record<string, { name: string; color: string; svg: string }> = {
  react:    { name: "React",      color: "#61DAFB", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="1.4"><circle cx="12" cy="12" r="2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/></svg>` },
  nextjs:   { name: "Next.js",    color: "#FFFFFF", svg: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#000" stroke="#fff" stroke-width="0.8"/><path d="M8 7v10M8 7l9 10" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M16 7v6" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>` },
  vue:      { name: "Vue.js",     color: "#42B883", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M2 4h5l5 8 5-8h5L12 21 2 4z" fill="#42B883"/><path d="M7 4h3l2 3 2-3h3l-5 8-5-8z" fill="#35495E"/></svg>` },
  node:     { name: "Node.js",    color: "#3C873A", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 1 L22 7 V17 L12 23 L2 17 V7 Z" fill="#3C873A"/><path d="M11 9c1-1 3-1 4 0v6c-1 1-3 1-4 0M11 9v6" stroke="#fff" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>` },
  typescript:{ name: "TypeScript", color: "#3178C6", svg: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6"/><text x="12" y="16" text-anchor="middle" font-family="Arial Black" font-size="9" font-weight="900" fill="#fff">TS</text></svg>` },
  python:   { name: "Python",     color: "#FFD43B", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2c-3 0-5 1-5 4v3h5v1H5c-2 0-3 2-3 5s1 5 3 5h2v-3c0-2 2-3 4-3h3c2 0 3-1 3-3V6c0-2-2-4-5-4z" fill="#4B8BBE"/><path d="M12 22c3 0 5-1 5-4v-3h-5v-1h7c2 0 3-2 3-5s-1-5-3-5h-2v3c0 2-2 3-4 3h-3c-2 0-3 1-3 3v5c0 2 2 4 5 4z" fill="#FFD43B"/></svg>` },
  mongodb:  { name: "MongoDB",    color: "#47A248", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2c-2 6-5 8-5 13 0 4 2 7 5 7s5-3 5-7c0-5-3-7-5-13z" fill="#47A248"/><path d="M12 4v18" stroke="#fff" stroke-width="0.8"/></svg>` },
  postgres: { name: "PostgreSQL", color: "#336791", svg: `<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="14" rx="9" ry="7" fill="#336791"/><circle cx="9" cy="12" r="1.5" fill="#fff"/><circle cx="15" cy="12" r="1.5" fill="#fff"/></svg>` },
  firebase: { name: "Firebase",   color: "#FFCA28", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 18l4-14 3 6-4 10z" fill="#FFA000"/><path d="M5 18l11-13 2 14z" fill="#F57C00"/><path d="M5 18l13-5-5 9z" fill="#FFCA28"/></svg>` },
  figma:    { name: "Figma",      color: "#F24E1E", svg: `<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="6" r="3" fill="#F24E1E"/><circle cx="15" cy="6" r="3" fill="#FF7262"/><circle cx="9" cy="12" r="3" fill="#A259FF"/><circle cx="15" cy="12" r="3" fill="#1ABCFE"/><circle cx="9" cy="18" r="3" fill="#0ACF83"/></svg>` },
  gsap:     { name: "GSAP",       color: "#88CE02", svg: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill="#88CE02"/><text x="12" y="16" text-anchor="middle" font-family="Arial Black" font-size="10" font-weight="900" fill="#0a0a0a">G</text></svg>` },
  tailwind: { name: "Tailwind",   color: "#38BDF8", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 13c1.5-4 4-5 8-4 2 .5 3 2 5 2.5s3.5 0 5-1.5c-1.5 4-4 5-8 4-2-.5-3-2-5-2.5s-3.5 0-5 1.5z" fill="#38BDF8"/></svg>` },
  threejs:  { name: "Three.js",   color: "#FFFFFF", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.2"><path d="M12 3l9 16H3z"/><path d="M12 3v16M3 19l9-8 9 8"/></svg>` },
  aws:      { name: "AWS",        color: "#FF9900", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 16c5 3 13 3 18 0M19 14l2 2-2 2" stroke="#FF9900" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  docker:   { name: "Docker",     color: "#2496ED", svg: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="3" height="3" fill="#2496ED"/><rect x="7" y="11" width="3" height="3" fill="#2496ED"/><rect x="11" y="11" width="3" height="3" fill="#2496ED"/><rect x="15" y="11" width="3" height="3" fill="#2496ED"/><rect x="7" y="7" width="3" height="3" fill="#2496ED"/><rect x="11" y="7" width="3" height="3" fill="#2496ED"/><path d="M3 15h17c0 2-2 4-5 4H8c-3 0-5-2-5-4z" fill="#2496ED"/></svg>` },
};

interface TechPillProps {
  techKey: string;
}

function TechPill({ techKey }: TechPillProps) {
  const t = TECH[techKey];
  if (!t) return null;
  const ref = useRef<HTMLSpanElement>(null);
  const onEnter = () => { if (ref.current) { ref.current.style.borderColor = t.color; ref.current.style.boxShadow = `0 8px 24px ${t.color}22`; } };
  const onLeave = () => { if (ref.current) { ref.current.style.borderColor = ""; ref.current.style.boxShadow = ""; } };
  return (
    <span className="tech-pill" ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <span dangerouslySetInnerHTML={{ __html: t.svg }} style={{ width: 18, height: 18, display: "flex", flexShrink: 0 }} />
      <span>{t.name}</span>
    </span>
  );
}

export function TechPills({ keys }: { keys: string[] }) {
  return (
    <div className="tech-grid">
      {keys.map((k) => <TechPill key={k} techKey={k} />)}
    </div>
  );
}

export function TechStackSection() {
  const STACK = ["react","nextjs","vue","node","python","typescript","mongodb","postgres","firebase","figma","gsap","tailwind","threejs","aws","docker"];
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <div className="section-head-row reveal x-in">
          <div>
            <span className="label">/ 09 — TECHNOLOGIES WE USE</span>
            <h2 className="section-title">What&apos;s under<br /><em>the hood.</em></h2>
          </div>
          <p className="kicker" style={{ maxWidth: 340 }}>Boring &amp; proven — and the occasional new tool we genuinely believe in.</p>
        </div>
        <div className="reveal">
          <TechPills keys={STACK} />
        </div>
      </div>
    </section>
  );
}
