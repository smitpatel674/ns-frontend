"use client";

import Link from "next/link";

const projects = [
  {
    title: "KALAPI FASHION",
    desc: "Modern MERN stack fashion e-commerce platform with product management, secure Razorpay payments, responsive UI, and seamless checkout experience.",
    image: "/images/kalapi-fashion.png",
    tag: "E-Commerce Store",
  },
  {
    title: "Ashion",
    desc: "A full-featured e-commerce platform built with Python Flask, featuring role-based access control and secure payments.",
    image: "/images/ashion.jpg",
    tag: "Full-Stack Development",
  },
  {
    title: "Prysmor Website – Complete Modernization",
    desc: "A fully modernized company website featuring responsive design, performance optimization, and dynamic content integration.",
    image: "/images/prysmor.jpg",
    tag: "Full-Stack Development / UI Modernization",
  },
  {
    title: "CCMS – Cyber Cafe Management System",
    desc: "A production-ready, full-stack Cyber Cafe Management System designed to digitize and automate operations for cyber cafes and common service centers. Features include PC session management, smart appointment booking (In-Person & Virtual), secure video conferencing (WebRTC/Jitsi), AI-powered chat assistant (Google Gemini), real-time support chat, QR-based tracking, billing & wallet system, delivery partner module, analytics dashboard, and Razorpay payment integration with role-based access control.",
    image: "/images/ccms.jpg",
    tag: "Full Stack Development",
  },
];

export function WorksSection() {
  return (
    <section className="py-32 bg-current/5 relative overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Case Studies</p>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]" style={{ fontFamily: "Author, sans-serif" }}>
              Our Selected<span className="block">Work</span>
            </h2>
          </div>

          <div className="flex items-end gap-6">
            <Link href="/projects" className="inline-flex items-center text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity border-b border-current/20 pb-1">
              Full Portfolio
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-6 relative rounded-3xl">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">{project.tag}</p>
              <h3 className="text-xl font-medium tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-300 mb-3">
                {project.title}
              </h3>
              <p className="text-sm opacity-50 leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
