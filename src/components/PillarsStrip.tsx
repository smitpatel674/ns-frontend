export function PillarsStrip() {
  const pillars = [
    {
      num: "01",
      title: "Expert Engineering",
      desc: "Scalable, precision-built code - patterns that survive long after launch.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" strokeWidth="1.4"><circle cx="16" cy="16" r="3"/><path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.3 6.3l2.8 2.8M22.9 22.9l2.8 2.8M6.3 25.7l2.8-2.8M22.9 9.1l2.8-2.8"/></svg>',
    },
    {
      num: "02",
      title: "AI Integration",
      desc: "Intelligent, adaptive systems wired into your workflow - not bolted on top.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" strokeWidth="1.4"><circle cx="8" cy="8" r="2.5"/><circle cx="24" cy="8" r="2.5"/><circle cx="8" cy="24" r="2.5"/><circle cx="24" cy="24" r="2.5"/><circle cx="16" cy="16" r="3"/><path d="M10 9l4 5M22 9l-4 5M10 23l4-5M22 23l-4-5"/></svg>',
    },
    {
      num: "03",
      title: "Future-Proof",
      desc: "Architecture that grows with your vision - and the next three pivots after it.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" strokeWidth="1.4"><circle cx="16" cy="16" r="13"/><path d="M16 10v6l4 3"/><path d="M11 4l-2 4M21 4l2 4"/></svg>',
    },
    {
      num: "04",
      title: "Premium Design",
      desc: "Visual excellence that converts - every pixel pulling its commercial weight.",
      icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" strokeWidth="1.4"><path d="M16 4 L28 14 L16 28 L4 14 Z"/><path d="M4 14h24M16 4v24"/></svg>',
    },
  ];

  return (
    <section style={{ position: "relative", zIndex: 2 }}>
      <div className="wrap" style={{ padding: "60px 40px 0" }}>
        <div className="section-head-row reveal x-in">
          <div>
            <span className="label">/ 01 - THE FOUNDATION</span>
            <h2 className="section-title">Four pillars,<br />one <em>promise.</em></h2>
          </div>
          <div className="right-meta">A small studio with senior taste.<br />Built for founders who care.</div>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 60, padding: "0 40px 80px" }}>
        <div className="strip">
          {pillars.map((p, i) => (
            <div className={`strip-card reveal s-in${i > 0 ? ` delay-${i}` : ""}`} key={p.num}>
              <div className="num">{p.num}</div>
              <div className="icon" dangerouslySetInnerHTML={{ __html: p.icon }} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
