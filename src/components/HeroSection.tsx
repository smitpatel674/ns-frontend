"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function AnimatedCounter() {
  const [values, setValues] = useState(["0", "0", "0"]);

  useEffect(() => {
    const intervals = [
      setInterval(() => setValues((prev) => [String(Math.floor(Math.random() * 10)), prev[1], prev[2]]), 100),
      setInterval(() => setValues((prev) => [prev[0], String(Math.floor(Math.random() * 10)), prev[2]]), 150),
      setInterval(() => setValues((prev) => [prev[0], prev[1], String(Math.floor(Math.random() * 10))]), 200),
    ];
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="flex items-center gap-1 text-xs font-mono text-white opacity-30 tracking-widest mb-6">
      {values.map((v, i) => (
        <span key={i}>{v}</span>
      ))}
    </div>
  );
}

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-[120px] w-full overflow-hidden bg-[var(--bg-color)] text-[var(--text-color)] flex flex-col justify-center">
      <div className="container-wide relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <AnimatedCounter />
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-[-0.03em] leading-[0.92] mb-8 text-black" style={{ fontFamily: "Author, sans-serif" }}>
              <span className="block">DESIGN.</span>
              <span className="block">DEVELOP.</span>
              <span className="block">DEPLOY.</span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mb-12 opacity-70 leading-relaxed">
              Next Digital Success — We build high-performance websites, deliver data-driven digital marketing, and craft innovative solutions to accelerate your business growth.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/contact"
                className="btn-pro px-5 py-3 md:px-8 md:py-4 text-[10px] md:text-sm"
              >
                Start Project ↗
              </Link>
              <Link
                href="/services"
                className="btn-outline px-5 py-3 md:px-8 md:py-4 text-[10px] md:text-sm"
              >
                Explore Services
              </Link>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] opacity-40">
              Trusted tech partners delivering proven results — Next Digital Success.
            </p>
          </div>

          <div className="hidden lg:flex justify-center items-center relative h-full" style={{ perspective: "1000px" }}>
            <div 
              className="relative w-[500px] h-[500px] flex items-center justify-center opacity-80 scale-90 xl:scale-100 transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) rotateX(${mousePos.y * 10}deg) rotateY(${mousePos.x * -10}deg)`,
              }}
            >
              {/* Spinning Atomic Globe */}
              <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_40s_linear_infinite]">
                <defs>
                  <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                {Array.from({ length: 12 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="25"
                    fill="none"
                    stroke="url(#globeGrad)"
                    strokeWidth="0.5"
                    transform={`rotate(${i * 15} 100 100)`}
                  />
                ))}
              </svg>
              
              {/* Counter-Spinning Inner Rings */}
              <div 
                className="absolute inset-0 flex items-center justify-center animate-[spin_60s_linear_infinite_reverse] transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
                }}
              >
                <svg viewBox="0 0 200 200" className="w-[80%] h-[80%]">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <circle
                      key={i}
                      cx="100"
                      cy="100"
                      r={30 + i * 15}
                      fill="none"
                      stroke="currentColor"
                      strokeOpacity={0.1 + i * 0.05}
                      strokeWidth="0.5"
                      strokeDasharray="4 6"
                    />
                  ))}
                </svg>
              </div>

              {/* Center Frosted Badge */}
              <div 
                className="absolute w-24 h-24 rounded-full backdrop-blur-md bg-white/10 flex items-center justify-center border border-black/10 shadow-[0_0_40px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px) scale(1.1)`,
                }}
              >
                 <div className="flex flex-col items-center">
                    <span className="font-mono text-[10px] tracking-widest opacity-40">EST.</span>
                    <span className="font-medium tracking-widest opacity-80">2025</span>
                 </div>
              </div>
              
              {/* Floating Nodes */}
              <div className="absolute top-12 left-1/2 w-2 h-2 bg-black rounded-full blur-[1px] animate-pulse" />
              <div className="absolute bottom-24 right-20 w-1.5 h-1.5 bg-black rounded-full blur-[1px] animate-pulse delay-75" />
              <div className="absolute top-1/3 left-16 w-1 h-1 bg-black rounded-full blur-[0.5px] animate-pulse delay-150" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 border border-current/10">
          {[
            {
              title: "Expert Engineering",
              desc: "Scalable, high-performance code built with precision and modern best practices.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              ),
            },
            {
              title: "AI Integration",
              desc: "Intelligent solutions that learn and adapt to your specific business needs.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h.01" /><path d="M15 9h.01" /><path d="M9 15h.01" /><path d="M15 15h.01" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
              ),
            },
            {
              title: "Future-Proof",
              desc: "Products designed to grow alongside your vision, ensuring long-term success.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
              ),
            },
            {
              title: "Premium Design",
              desc: "Visual excellence that captures your brand and converts your users.",
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
              ),
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`p-8 md:p-10 flex flex-col justify-between min-h-[200px] ${
                index > 0 ? "border-l border-current/10" : ""
              } ${index >= 2 ? "border-t md:border-t-0 border-current/10" : ""}`}
            >
              <div className="opacity-40 mb-8">{item.icon}</div>
              <div>
                <h3 className="text-base font-semibold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-xs opacity-50 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Black CTA card */}
          <Link
            href="/contact"
            className="hidden md:flex flex-col items-center justify-center bg-black text-white min-h-[200px] border-l border-current/10 group/cta hover:bg-black/90 transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform duration-300"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
