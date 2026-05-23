"use client";

import { useEffect, useState } from "react";

export function AboutSection() {
  const terminalLines = [
    "$ cat mission.txt",
    "> we build for founders who move fast",
    "> we design for users who think less",
    "> we code for products that scale hard",
    "> small team. zero fluff. all output.",
    "$ -nextron solution",
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>(terminalLines.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let lineIndex = 0;
    let charIndex = 0;

    const typeNext = () => {
      if (lineIndex >= terminalLines.length) return;
      const targetLine = terminalLines[lineIndex];

      if (charIndex < targetLine.length) {
        charIndex += 1;
        setDisplayedLines((current) => {
          const next = [...current];
          next[lineIndex] = targetLine.slice(0, charIndex);
          return next;
        });
        timeouts.push(setTimeout(typeNext, 40));
      } else {
        lineIndex += 1;
        charIndex = 0;
        setActiveLine(lineIndex);
        if (lineIndex < terminalLines.length) {
          timeouts.push(setTimeout(typeNext, 250));
        }
      }
    };

    setActiveLine(0);
    typeNext();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal">
            <span className="label">/ 02 - ABOUT COMPANY</span>
            <h2>Empowering startups &amp; enterprises to build <em>scalable</em> digital products.</h2>
            <p>Nextron Solution is a young studio with veteran instincts. We pair <strong>senior engineering</strong> with <strong>editorial design</strong> to build websites, products and growth systems that punch far above their weight.</p>
            <p>Founded in 2025 in Kadi, Gujarat, we serve founders and teams across India and globally - from local family businesses to venture-backed startups. We&apos;re small on purpose: every project gets principal-level attention.</p>
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
              {displayedLines.map((line, index) => {
                const prefix = line.charAt(0);
                const text = line.slice(1);
                return (
                  <div key={index} className="line">
                    <span className="s">{prefix}</span>
                    {text && " "}
                    <span>{text}</span>
                    {activeLine === index && <span className="cursor"></span>}
                  </div>
                );
              })}
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
