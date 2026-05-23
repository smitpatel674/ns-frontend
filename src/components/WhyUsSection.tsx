export function WhyUsSection() {
  const cards = [
    {
      title: "Speed Without Compromise",
      desc: "We move fast and ship clean. Weekly demos, rapid iterations and on-time delivery - always.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>`,
    },
    {
      title: "Quality You Can Measure",
      desc: "Every line of code is typed, tested and reviewed. We build for performance, not just appearance.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>`,
    },
    {
      title: "Partnership, Not Projects",
      desc: "Named lead on every account. We stay invested long after launch day - your growth is our growth.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M3 11l6-3 4 4 8-4"/><path d="M3 18h18"/></svg>`,
    },
  ];
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="section-head-row reveal x-in">
          <div>
            <span className="label">/ 06 - WHY NEXTRON</span>
            <h2 className="section-title">Three reasons<br />to <em>pick up the phone.</em></h2>
          </div>
        </div>
        <div className="why-grid">
          {cards.map((c, i) => (
            <div className={`why-card reveal s-in${i > 0 ? ` delay-${i}` : ""}`} key={c.title}>
              <div className="ico-wrap" dangerouslySetInnerHTML={{ __html: c.icon }} />
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
