const TESTIMONIALS = [
  {
    initial: "K",
    name: "Ketul Patel",
    role: "Business Owner",
    quote: "Nextron Solution transformed our business completely. Their digital marketing strategy increased our leads by 100%.",
  },
  {
    initial: "R",
    name: "Ravi Patel",
    role: "Entrepreneur",
    quote: "Their SEO expertise helped us rank on the first page for competitive keywords, driving significant organic traffic.",
  },
  {
    initial: "L",
    name: "Love Patel",
    role: "Startup Founder",
    quote: "The mobile app exceeded our expectations. The UX is exceptional and performance is flawless.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <div className="section-head-row reveal x-in">
          <div>
            <span className="label">/ 10 — TRUSTED BY</span>
            <h2 className="section-title">
              From the people<br />who <em>pay our invoices.</em>
            </h2>
          </div>
        </div>
        <div className="t-grid">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className={`t-card reveal s-in${i > 0 ? ` delay-${i}` : ""}`}
            >
              <span className="bg-quote">&ldquo;</span>
              <div className="t-stars" aria-label="5 stars">★ ★ ★ ★ ★</div>
              <blockquote>{t.quote}</blockquote>
              <div className="t-author">
                <div className="t-avatar">{t.initial}</div>
                <div className="who">
                  <span className="nm">{t.name}</span>
                  <span className="ro">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
