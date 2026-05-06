"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const reviews = [
  {
    name: "Mahima Panchal",
    quote: "Our experience with DVLOP Technologies was very positive. They built a beautiful and responsive travel website that showcases tour packages perfectly. The work was completed on time and the design quality was impressive. I would definitely recommend their services.",
  },
  {
    name: "Khushi Nayak",
    quote: "The online food delivery system created by DVLOP Technologies exceeded our expectations. The website is responsive, fast, and easy to use. Their team was very supportive throughout the project and delivered a high-quality solution.",
  },
  {
    name: "Hemakshi Adroja",
    quote: "DVLOP Technologies created a tour and travel website for our academic project, and we are very satisfied with the result. The website design looks modern and attractive, and the navigation is smooth. They delivered exactly what we needed and provided great support during the development process.",
  },
  {
    name: "Vidhan R",
    quote: "We are extremely satisfied with the quality of work delivered. The website design is modern, responsive, and aligned perfectly with our brand identity. The team demonstrated professionalism, technical expertise, and strong attention to detail throughout the project.",
  },
  {
    name: "Harshitasindhi Harshitasindhi",
    quote: "Thank you so much for creating the tour & travels website for me. It was very responsive and beautifully designed. The functions you added, like online booking and payment options through UPI, net banking, and QR code, were amazing. My project guide really liked the website, and I received a very good rating for it.",
  },
  {
    name: "Shreya Patel",
    quote: "Outstanding website design and smooth user experience! The team perfectly understood our business requirements and delivered a modern, fast, and fully responsive website. Highly recommended for anyone looking for professional web development services.",
  },
  {
    name: "Pratham Bhatt",
    quote: "This developer website is a great learning platform for AI, Machine Learning, and modern programming languages and tools. It offers clear explanations and practical resources, making it useful for both beginners and growing developers.",
  },
  {
    name: "Nirzari Patel",
    quote: "We got our event management system developed by DVLOP Technologies, and the quality of work was very impressive. The system is well structured, user-friendly, and completed on time. Their support and communication throughout the project were very good. Highly recommended for academic and software projects.",
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
        <h1 className="sr-only">DVLOP CLIENT FEEDBACK – VERIFIED REVIEWS</h1>

        {/* Hero */}
        <section className="container-wide pt-20 mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono opacity-40 mb-4 tracking-wider">DVLOP CLIENT FEEDBACK – VERIFIED REVIEWS</p>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: "Author, sans-serif" }}>
              Trust
            </h2>
            <div className="w-16 h-[2px] bg-current opacity-20 mb-8" />
            <p className="text-lg md:text-xl leading-relaxed opacity-70">
              A Global Network Of Partners, Unified By Exceptional Results And Technical Integrity.
            </p>
          </div>
          <div className="opacity-30">
            <p className="text-xs font-mono">[DVLOP Technologies]</p>
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
