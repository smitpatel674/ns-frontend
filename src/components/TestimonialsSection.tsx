"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Nirzari Patel",
    quote: "We got our Event Management System developed by DVLOP Technologies, and the quality of work was very impressive. The system is well structured, user-friendly, and completed on time. Their support and communication throughout the project were very good. Highly recommended for academic and software projects.",
  },
  {
    name: "Pratham Bhatt",
    quote: "This developer website is a great learning platform for AI, Machine Learning, and modern programming languages and tools. It offers clear explanations and practical resources, making it useful for both beginners and growing developers",
  },
  {
    name: "Shreya Patel",
    quote: "Outstanding website design and smooth user experience! The team perfectly understood our business requirements and delivered a modern, fast, and fully responsive website. Highly recommended for anyone looking for professional web development services.",
  },
  {
    name: "Harshitasindhi Harshitasindhi",
    quote: "Thank you so much for creating the tour & travels website for me. It was very responsive and beautifully designed. The functions you added, like online booking and payment options through UPI, net banking, and QR code, were amazing. My project guide really liked the website, and I received a very good rating for it.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="container-wide py-32 border-t border-current/10 transition-colors duration-500 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 gsap-fade-up">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Testimonials</p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]" style={{ fontFamily: "Author, sans-serif" }}>
            Trusted By
          </h2>
        </div>

        <div className="flex items-end gap-6">
          <div className="flex gap-2">
            <button onClick={goPrev} className="w-12 h-12 border border-current/10 flex items-center justify-center hover:bg-current hover:text-[var(--bg-color)] transition-colors" aria-label="Previous testimonial">
              <ArrowLeft size={18} />
            </button>
            <button onClick={goNext} className="w-12 h-12 border border-current/10 flex items-center justify-center hover:bg-current hover:text-[var(--bg-color)] transition-colors" aria-label="Next testimonial">
              <ArrowRight size={18} />
            </button>
          </div>

          <button className="bg-[var(--text-color)] text-[var(--bg-color)] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
            Write a Review
          </button>
        </div>
      </div>

      <div className="relative overflow-visible">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className={`transition-all duration-500 ${index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 absolute top-0 left-0 translate-y-4 pointer-events-none"}`}
          >
            <blockquote className="text-lg md:text-xl leading-relaxed opacity-70 mb-8 max-w-3xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="text-lg font-light opacity-30">{testimonial.name.charAt(0)}</div>
              <div>
                <h4 className="font-medium text-sm tracking-tight">{testimonial.name}</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-40">Project Client</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
