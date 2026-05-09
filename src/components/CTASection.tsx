import Link from "next/link";

export function CTASection() {
  return (
    <section className="container-wide py-32 border-t border-current/10 gsap-fade-up">
      <div className="flex flex-col gap-0">
        <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-6">Get In Touch</p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-0">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.85] tracking-tighter" style={{ fontFamily: "Author, sans-serif" }}>
            Have A Project To<span className="block">Collaborate On?</span>
          </h2>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-3 bg-black text-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
          >
            Get A Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
          </Link>
        </div>

        <div className="w-full h-[1px] bg-current/10 my-10" />

        <p className="text-lg opacity-70 max-w-2xl leading-relaxed">
          If you think we can do the job for you, do not hesitate. Drop us a message or call us for any web development, digital marketing, or AI/ML services in Gujarat or anywhere in the world.
        </p>
      </div>
    </section>
  );
}
