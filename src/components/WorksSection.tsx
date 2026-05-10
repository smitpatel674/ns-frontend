"use client";

import Link from "next/link";
import { motionDelay } from "@/lib/motion";

const projects = [
  {
    title: "Pokar Greens Business Platform",
    desc: "A comprehensive business platform showcasing sustainable agricultural solutions with modern e-commerce capabilities and supply chain management features.",
    image: "/images/pokar.png",
    tag: "Web Solutions",
    tech: ["React", "Tailwind CSS", "GSAP", "Node.js"],
  },
  {
    title: "Wealth Genius Institute Portal",
    desc: "An advanced educational platform for stock market training with interactive courses, real-time market data integration, and student performance analytics.",
    image: "/images/wealth.png",
    tag: "Web Solutions",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Firebase"],
  },
  {
    title: "Metal Made Global Showcase",
    desc: "A dynamic corporate website featuring an extensive product catalog, project galleries, and client collaboration tools for international manufacturing partnerships.",
    image: "/images/metal made global.jpeg",
    tag: "Web Solutions",
    tech: ["React", "Node.js", "MongoDB", "Three.js"],
  },
  {
    title: "NBFAB Tech Solutions",
    desc: "A cutting-edge technology solutions provider website with service portfolios, case study presentations, and technical documentation for enterprise clients.",
    image: "/images/bnfabtech.png",
    tag: "Web Solutions",
    tech: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
  },
];

export function WorksSection() {
  return (
    <section className="py-32 bg-current/5 relative overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div data-animate="fade-right">
            <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Our Showcase</p>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]" style={{ fontFamily: "Author, sans-serif" }}>
              Our Selected<span className="block">Work</span>
            </h2>
          </div>
          <div className="flex items-end gap-6" data-animate="fade-left" style={motionDelay(1, 100)}>
            <Link href="/projects" className="inline-flex items-center text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity border-b border-current/20 pb-1">
              Full Portfolio
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="group cursor-pointer gsap-reveal motion-card" style={motionDelay(index, 90)}>
              <div className="aspect-[4/3] overflow-hidden mb-6 relative rounded-[2rem] bg-current/5 flex items-center justify-center p-12 group-hover:bg-current/10 transition-colors duration-500">
                <div className="absolute top-6 left-6 z-10 bg-[var(--bg-color)] px-4 py-2 rounded text-[10px] font-medium tracking-widest uppercase shadow-sm">
                  {project.tag}
                </div>
                <img src={project.image} alt={project.title} className="w-full h-full object-contain motion-card-media" />
              </div>
              <h3 className="text-xl font-medium tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-300 mb-3">
                {project.title}
              </h3>
              <p className="text-sm opacity-50 leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] uppercase tracking-wider opacity-40 border border-current/10 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
