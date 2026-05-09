"use client";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "Workshops, audits, and goal-setting. We map the business problem before we open the design tool.",
  },
  {
    num: "02",
    title: "Design & Wireframe",
    desc: "Interaction design, brand language, and pixel-perfect prototypes — validated against real users.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Engineering sprints with weekly demos. Production-grade code, fully typed, fully tested.",
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "Cross-browser, accessibility, performance, and load tests. We don't ship anything we wouldn't bet on.",
  },
  {
    num: "05",
    title: "Launch & Support",
    desc: "Smooth deployment, analytics setup, and ongoing partnership — with a named lead on every account.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-32 border-t border-current/10">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Header Area */}
          <div className="lg:col-span-5 gsap-fade-up">
            <div className="sticky top-32">
              <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-6">— How We Work</p>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: "Author, sans-serif" }}>
                From kickoff<span className="block">to launch.</span>
              </h2>
              <p className="text-lg opacity-70 max-w-sm leading-relaxed">
                A proven five-step engagement
              </p>
            </div>
          </div>

          {/* Steps Area */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <div 
                  key={step.num} 
                  className={`group flex flex-col md:flex-row gap-6 md:gap-12 py-10 gsap-fade-up ${
                    index === 0 ? "border-t border-current/10" : ""
                  } border-b border-current/10 hover:bg-current/[0.02] transition-colors duration-300`}
                >
                  <div className="md:w-24 shrink-0">
                    <p className="text-sm font-mono opacity-40 group-hover:opacity-100 transition-opacity">STEP {step.num}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-300">{step.title}</h3>
                    <p className="text-base opacity-60 leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
