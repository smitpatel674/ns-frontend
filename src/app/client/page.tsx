"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const reviews = [
  {
    name: "Pokar Greens",
    quote: "Nextron Solution built an outstanding business platform for us. The e-commerce capabilities and supply chain management features are exactly what we needed. The team was professional and delivered on time.",
  },
  {
    name: "Wealth Genius Institute",
    quote: "The educational platform developed by Nextron Solution exceeded our expectations. Interactive courses, real-time market data integration, and student analytics — everything works seamlessly.",
  },
  {
    name: "Metal Made Global",
    quote: "Outstanding website design and smooth user experience! The team perfectly understood our manufacturing business requirements and delivered a modern, fast, and fully responsive corporate website.",
  },
  {
    name: "NBFAB Tech",
    quote: "Nextron Solution delivered a cutting-edge technology website with excellent service portfolios and case study presentations. Their attention to detail and technical expertise is truly impressive.",
  },
  {
    name: "Shreya Patel",
    quote: "Outstanding website design and smooth user experience! The team perfectly understood our business requirements and delivered a modern, fast, and fully responsive website. Highly recommended for anyone looking for professional web development services.",
  },
  {
    name: "Pratham Bhatt",
    quote: "Nextron Solution delivers exceptional digital marketing and web development services. Their team offers clear strategies and practical solutions, making them a great partner for businesses looking to grow their online presence.",
  },
];

export default function ClientPage() {
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

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 overflow-x-hidden transition-all duration-500">
        <h1 className="sr-only">NEXTRON SOLUTION CLIENT FEEDBACK – VERIFIED REVIEWS</h1>

        {/* Hero */}
        <section className="container-wide pt-[15vh] mb-24 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-16 border-b border-current/10 pb-20">
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] font-medium tracking-tighter leading-[0.8] mb-8 whitespace-nowrap" style={{ fontFamily: "Author, sans-serif" }}>
              Trust
            </h2>
            <div className="w-32 h-[1px] bg-current opacity-40" />
          </div>
          <div className="flex flex-col items-start xl:items-end text-left xl:text-right pb-4 w-full">
            <p className="text-[10px] font-mono opacity-40 tracking-widest uppercase mb-4">[Nextron Solution]</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] opacity-50 max-w-2xl text-balance">
              A Global Network Of Partners, Unified By Exceptional Results And Technical Integrity.
            </p>
          </div>
        </section>

        {/* Reviews Header */}
        <section className="container-wide mb-16">
          <div className="flex items-center justify-between border-t border-b border-current/10 py-6">
            <p className="text-xs uppercase tracking-[0.2em] opacity-40">Verified Reviews</p>
            <button className="bg-[var(--text-color)] text-[var(--bg-color)] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
              Write a Review
            </button>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="container-wide mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="border border-current/10 rounded-2xl p-8 hover:border-current/20 transition-colors duration-300 gsap-reveal">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-4">Verified Review</p>
                <blockquote className="text-xs leading-relaxed opacity-70 mb-8 min-h-[120px] uppercase">
                  {review.quote}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-current/10 flex items-center justify-center text-sm font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs tracking-tight uppercase">{review.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Project Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
