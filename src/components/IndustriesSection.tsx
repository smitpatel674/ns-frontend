const INDUSTRIES = [
  "Healthcare", "Education", "Real Estate", "Retail", "Finance",
  "Manufacturing", "Agriculture", "Logistics", "Legal", "SaaS",
];

export function IndustriesSection() {
  return (
    <section className="section" id="industries">
      <div className="wrap">
        <div className="section-head-row reveal x-in">
          <div>
            <span className="label">/ 08 — INDUSTRIES WE SERVE</span>
            <h2 className="section-title">
              Worked across<br /><em>most of them.</em>
            </h2>
          </div>
        </div>
        <div className="industries-pills">
          {INDUSTRIES.map((ind, i) => (
            <span className="ind-pill" key={ind}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
