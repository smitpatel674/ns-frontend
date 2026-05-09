"use client";

import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const projects = [
  {
    title: "Pokar Greens Business Platform",
    desc: "A comprehensive business platform for Pokar Greens showcasing sustainable agricultural solutions with modern e-commerce capabilities and supply chain management features.",
    image: "/images/pokar.png",
    tags: ["Web Solutions"],
  },
  {
    title: "Wealth Genius Institute Portal",
    desc: "An advanced educational platform for stock market training with interactive courses, real-time market data integration, and student performance analytics for financial education.",
    image: "/images/wealth.png",
    tags: ["Web Solutions"],
  },
  {
    title: "Metal Made Global Showcase",
    desc: "A dynamic corporate website for Metal Made Global featuring an extensive product catalog, project galleries, and client collaboration tools for international manufacturing partnerships.",
    image: "/images/metal made global.jpeg",
    tags: ["Web Solutions"],
  },
  {
    title: "NBFAB Tech Solutions",
    desc: "A cutting-edge technology solutions provider website with service portfolios, case study presentations, and technical documentation for enterprise clients seeking digital transformation.",
    image: "/images/bnfabtech.png",
    tags: ["Web Solutions"],
  },
];

const allTags = ["All", "Web Solutions"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }); }, { threshold: 0.1 });
    document.querySelectorAll(".gsap-fade-up, .gsap-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 overflow-x-hidden transition-all duration-500">
        <h1 className="sr-only">Our Showcase - Portfolio | Nextron Solution Gujarat</h1>

        {/* Hero */}
        <section className="container-wide pt-[15vh] mb-24 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-16 border-b border-current/10 pb-20">
          <div className="flex flex-col shrink-0">
            <h2 className="text-[120px] md:text-[140px] lg:text-[180px] font-medium tracking-tighter leading-[0.8] mb-8 whitespace-nowrap" style={{ fontFamily: "Author, sans-serif" }}>
              Our Work
            </h2>
            <div className="w-32 h-[1px] bg-current opacity-40" />
          </div>
          <div className="flex flex-col items-start xl:items-end text-left xl:text-right pb-4 w-full">
            <p className="text-[10px] font-mono opacity-40 tracking-widest uppercase mb-4">[Nextron Solution]</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] opacity-50 max-w-2xl text-balance">
              A Curated Selection Of Digital Artifacts, Built With Technical Precision And Design Intentionality.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="container-wide mb-16">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-5 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300 ${activeFilter === tag
                  ? "bg-current text-[var(--bg-color)] border-current"
                  : "border-current/10 hover:border-current/30 opacity-50 hover:opacity-100"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Project Grid */}
        <section className="container-wide mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <div key={project.title} className="group cursor-pointer gsap-reveal">
                <div className="aspect-square overflow-hidden mb-6 relative rounded-3xl border border-current/10">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm opacity-50 leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container-wide mb-40 pt-20 border-t border-current/10 gsap-reveal">
          <div className="flex flex-col gap-10 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] opacity-40">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium leading-[0.85] tracking-tighter" style={{ fontFamily: "Author, sans-serif" }}>
              Want A New Website/<span className="block">Grow Your Business?</span>
            </h2>
            <p className="text-sm uppercase tracking-widest opacity-40">Contact Us</p>
            <p className="text-lg opacity-70 max-w-xl leading-relaxed">
              Reach out to us to see how we can help. Let&apos;s join hands for your next digital success.
            </p>
            <Link href="/contact" className="btn-pro self-start px-8 py-4 text-[10px]">
              Start Project ↗
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
