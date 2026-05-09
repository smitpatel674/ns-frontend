"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Ketul Patel",
    role: "Business Owner",
    quote: "Nextron Solution transformed our business completely. Their team delivered beyond our expectations with an effective digital marketing strategy that increased our leads by 100%.",
  },
  {
    name: "Ravi Patel",
    role: "Entrepreneur",
    quote: "Working with Nextron Solution was a game-changer for our business. Their SEO expertise helped us rank on the first page for competitive keywords, driving significant organic traffic to our site.",
  },
  {
    name: "Love Patel",
    role: "Startup Founder",
    quote: "The mobile app developed by Nextron Solution exceeded our expectations in every way. The user experience is exceptional, and the performance is flawless. Highly recommended for any mobile development needs.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="container-wide py-32 border-t border-current/10 transition-colors duration-500 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 gsap-fade-up">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Testimonials</p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]" style={{ fontFamily: "Author, sans-serif" }}>
            Trusted By
          </h2>
        </div>

        <div className="flex items-end gap-4">
          <div className="flex gap-2">
            <button className="w-12 h-12 border border-current/10 flex items-center justify-center hover:bg-current hover:text-[var(--bg-color)] transition-colors" aria-label="Previous testimonial">
              <ArrowLeft size={18} />
            </button>
            <button className="w-12 h-12 border border-current/10 flex items-center justify-center hover:bg-current hover:text-[var(--bg-color)] transition-colors" aria-label="Next testimonial">
              <ArrowRight size={18} />
            </button>
          </div>

          <button className="bg-[var(--text-color)] text-[var(--bg-color)] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
            Write a Review
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-black text-white rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[320px]"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="flex gap-1 text-yellow-400 text-sm">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l2 2" /></svg>
              </div>
            </div>

            <blockquote className="text-base md:text-lg leading-relaxed mb-10 opacity-90">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold uppercase">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-sm tracking-tight">{testimonial.name}</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-50">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
