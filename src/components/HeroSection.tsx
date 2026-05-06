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
  return (
    <section className="relative min-h-screen pt-[120px] w-full overflow-hidden bg-[var(--bg-color)] text-[var(--text-color)] flex flex-col justify-center">
      <div className="container-wide relative z-10 py-12">
        <AnimatedCounter />
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-[-0.03em] leading-[0.92] mb-8 text-black" style={{ fontFamily: "Author, sans-serif" }}>
          <span className="block">DESIGN.</span>
          <span className="block">DEVELOP.</span>
          <span className="block">DEPLOY.</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-12 opacity-70 leading-relaxed">
          Experience the perfect blend of strategy, innovation, and design. We build high-performance digital products tailored to your goals.
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

        <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-12">
          Trusted tech partners delivering proven results since 2022.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { title: "Expert Engineering", desc: "Scalable, high-performance code built with precision and modern best practices." },
            { title: "AI Integration", desc: "Intelligent solutions that learn and adapt to your specific business needs." },
            { title: "Future-Proof", desc: "Products designed to grow alongside your vision, ensuring long-term success." },
            { title: "Premium Design", desc: "Visual excellence that captures your brand and converts your users." },
          ].map((item) => (
            <div key={item.title} className="group">
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
