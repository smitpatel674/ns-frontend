export function ProcessSection() {
  const steps = [
    { num: "01", lbl: "Discovery", title: "Discovery & Strategy", desc: "Workshops, audits and goal-setting. We map the business problem before we open any design tool." },
    { num: "02", lbl: "Design",    title: "Design & Wireframe",   desc: "Interaction design, brand language and pixel-perfect prototypes - validated against real users." },
    { num: "03", lbl: "Build",     title: "Development",          desc: "Engineering sprints with weekly demos. Production-grade code, fully typed, fully tested." },
    { num: "04", lbl: "QA",        title: "Testing & QA",         desc: "Cross-browser, accessibility, performance and load tests. We don't ship anything we wouldn't bet on." },
    { num: "05", lbl: "Launch",    title: "Launch & Support",     desc: "Smooth deployment, analytics setup and ongoing partnership with a named lead on every account." },
  ];
  return (
    <section className="section process-section" id="process">
      <div className="wrap">
        <div className="section-head-row reveal x-in">
          <div>
            <span className="label">/ 05 - HOW WE WORK</span>
            <h2 className="section-title">From <em>kickoff</em><br />to launch.</h2>
          </div>
          <p style={{ maxWidth: 360, color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }} className="kicker">A proven five-step engagement.</p>
        </div>
        <div className="process-track" id="processTrack">
          {steps.map((s, i) => (
            <div className={`process-step reveal${i > 0 ? ` delay-${i}` : ""}`} key={s.num}>
              <div className="num-dot">{s.num}</div>
              <span className="lbl">{s.lbl}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <span className="bg-num">{s.num}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
