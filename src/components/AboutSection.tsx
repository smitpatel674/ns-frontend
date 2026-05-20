export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <span className="label">/ 02 — ABOUT COMPANY</span>
            <h2>Empowering startups &amp; enterprises to build <em>scalable</em> digital products.</h2>
            <p>Nextron Solution is a young studio with veteran instincts. We pair <strong>senior engineering</strong> with <strong>editorial design</strong> to build websites, products and growth systems that punch far above their weight.</p>
            <p>Founded in 2025 in Kadi, Gujarat, we serve founders and teams across India and globally — from local family businesses to venture-backed startups. We&apos;re small on purpose: every project gets principal-level attention.</p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="v"><span className="count" data-target="50">0</span><span className="plus">+</span></span>
                <span className="l">Projects Completed</span>
              </div>
              <div className="about-stat">
                <span className="v"><span className="count" data-target="1">0</span><span className="plus">+</span></span>
                <span className="l">Years Experience</span>
              </div>
              <div className="about-stat">
                <span className="v"><span className="count" data-target="30">0</span><span className="plus">+</span></span>
                <span className="l">Happy Clients</span>
              </div>
              <div className="about-stat">
                <span className="v"><span className="count" data-target="100">0</span><span className="pct">%</span></span>
                <span className="l">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="about-panel reveal delay-1">
            <span className="est-badge">&#9658; EST. 2025</span>
            <svg className="circuit" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="circ" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M0 15h10M20 15h10M15 0v10M15 20v10" stroke="rgba(240,237,230,0.12)" strokeWidth="0.7" fill="none"/>
                  <circle cx="15" cy="15" r="1.2" fill="rgba(240,237,230,0.2)"/>
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#circ)"/>
            </svg>
            <div className="term" id="terminal">
              <div className="line"><span className="s">$</span> <span className="k">nextron</span> deploy --target production</div>
              <div className="line"><span className="s">&#8250;</span> initializing build pipeline...</div>
              <div className="line"><span className="s">&#8250;</span> <span className="k">typescript</span> &#10003; <span className="k">tests</span> &#10003; <span className="k">lighthouse</span> 100</div>
              <div className="line"><span className="s">&#8250;</span> shipping to edge network...</div>
              <div className="line"><span className="s">$</span> deployment <span className="k">successful</span> in 24.3s</div>
              <div className="line"><span className="s">$</span> <span className="cursor"></span></div>
            </div>
            <div className="panel-meta">
              <div><span>Studio</span><span className="v">Kadi, Gujarat IN</span></div>
              <div><span>Stack</span><span className="v">Modern, typed, tested</span></div>
              <div><span>Avail.</span><span className="v">Q3 2026 open</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
