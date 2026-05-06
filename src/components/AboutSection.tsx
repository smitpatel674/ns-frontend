export function AboutSection() {
  return (
    <section className="container-wide py-24 relative z-10 gsap-fade-up">
      <div className="flex flex-col lg:flex-row gap-16 mb-20 items-start gsap-fade-up">
        <div className="lg:w-1/3">
          <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Achievements</p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none" style={{ fontFamily: "Author, sans-serif" }}>
            About<span className="block">Company</span>
          </h2>
        </div>

        <div className="lg:w-2/3">
          <p className="text-lg leading-relaxed opacity-70 mb-8">
            DVLOP Technologies is a leading web development company in Gujarat, delivering innovative digital solutions that drive business success. We specialize in custom web development, e-commerce platforms, and AI-powered software, enabling startups and enterprises to build scalable, high-performance products for sustainable growth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-current/10 divide-y md:divide-y-0 md:divide-x divide-current/10 gsap-fade-up">
        {[
          { num: "4+", label: "Years Of Agency Experience" },
          { num: "50+", label: "Quality Websites Delivered" },
          { num: "100%", label: "Clients Satisfied & Retention" },
        ].map((s) => (
          <div key={s.label} className="text-center py-12">
            <div className="text-4xl md:text-5xl font-medium mb-2" style={{ fontFamily: "Author, sans-serif" }}>{s.num}</div>
            <p className="text-xs opacity-50 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
