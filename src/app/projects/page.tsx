"use client";

import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const projects = [
  {
    title: "KALAPI FASHION",
    desc: "Modern MERN stack fashion e-commerce platform with product management, secure Razorpay payments, responsive UI, and seamless checkout experience.",
    image: "/images/kalapi-fashion.png",
    tags: ["E-Commerce Store"],
  },
  {
    title: "Ashion",
    desc: "A full-featured e-commerce platform built with Python Flask, featuring role-based access control and secure payments.",
    image: "/images/ashion.jpg",
    tags: ["Full-Stack Development"],
  },
  {
    title: "Prysmor Website – Complete Modernization",
    desc: "A fully modernized company website featuring responsive design, performance optimization, and dynamic content integration.",
    image: "/images/prysmor.jpg",
    tags: ["Full-Stack Development / UI Modernization"],
  },
  {
    title: "CCMS – Cyber Cafe Management System",
    desc: "A production-ready, full-stack Cyber Cafe Management System designed to digitize and automate operations for cyber cafes and common service centers. Features include PC session management, smart appointment booking (In-Person & Virtual), secure video conferencing (WebRTC/Jitsi), AI-powered chat assistant (Google Gemini), real-time support chat, QR-based tracking, billing & wallet system, delivery partner module, analytics dashboard, and Razorpay payment integration with role-based access control.",
    image: "/images/ccms.jpg",
    tags: ["Full Stack Development"],
  },
  {
    title: "Road Traffic Accident Severity Prediction",
    desc: "A machine learning web application that predicts accident severity based on road conditions, weather, and traffic data.",
    image: "/images/road-traffic-accident.webp",
    tags: ["AI / Machine Learning"],
  },
  {
    title: "Makhan & Mirch – E-Restaurant Management System",
    desc: "A role-based e-restaurant management system enabling online food ordering, table reservations, and kitchen management.",
    image: "/images/makhan-mirch.webp",
    tags: ["Full-Stack Development"],
  },
  {
    title: "Mitrayana – Senior Care Service Platform",
    desc: "A role-based web platform connecting senior citizens with service providers for healthcare, companionship, and assistance.",
    image: "/images/mitrayana.webp",
    tags: ["Full-Stack Development"],
  },
];

const allTags = [
  "All",
  "E-Commerce Store",
  "Full-Stack Development",
  "Full-Stack Development / UI Modernization",
  "Full Stack Development",
  "AI / Machine Learning",
];

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
        <h1 className="sr-only">Our Work - Portfolio | DVLOP Technologies Gujarat</h1>

        {/* Hero */}
        <section className="container-wide pt-20 mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Our Work</p>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: "Author, sans-serif" }}>
              Our Work
            </h2>
            <div className="w-16 h-[2px] bg-current opacity-20 mb-8" />
            <p className="text-lg md:text-xl leading-relaxed opacity-70">
              A Curated Selection Of Digital Artifacts, Built With Technical Precision And Design Intentionality.
            </p>
          </div>
          <div className="opacity-30">
            <p className="text-xs font-mono">[DVLOP Technologies]</p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="container-wide mb-16">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-5 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300 ${
                  activeFilter === tag
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Want A New Website/<span className="block">Renovate Your Old One?</span>
            </h2>
            <p className="text-sm uppercase tracking-widest opacity-40">Contact Us</p>
            <p className="text-lg opacity-70 max-w-xl leading-relaxed">
              Reach out to us to see how we can do it for you. Let&apos;s join hands for a great future..
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
