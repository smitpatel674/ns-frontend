const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zM6.5 6.7C5.5 6.7 4.8 6 4.8 5s.7-1.7 1.7-1.7S8.2 4 8.2 5s-.7 1.7-1.7 1.7zM20 19h-3v-5.6c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V19h-3V8h3v1.3c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1V19z"/>
  </svg>
);

export function TeamSection() {
  const team = [
    { initials: "NK", name: "N. Kadia",  role: "Founder · Engineering" },
    { initials: "RP", name: "R. Patel",  role: "Design Lead" },
    { initials: "AM", name: "A. Mehta",  role: "Marketing & Strategy" },
  ];
  return (
    <section className="section" id="careers">
      <div className="wrap">
        <div className="section-head-row reveal x-in">
          <div>
            <span className="label">/ 07 — THE PEOPLE</span>
            <h2 className="section-title">The people<br />behind the <em>work.</em></h2>
          </div>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <div className={`team-card reveal s-in${i > 0 ? ` delay-${i}` : ""}`} key={m.name}>
              <div className="team-avatar">{m.initials}</div>
              <span className="nm">{m.name}</span>
              <span className="ro">{m.role}</span>
              <a className="lin" href="#" data-cursor="" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
          ))}
        </div>
        <div className="team-hire reveal">
          We&apos;re hiring <a href="#" data-cursor="">View Open Roles &#8594;</a>
        </div>
      </div>
    </section>
  );
}
