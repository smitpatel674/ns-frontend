const ROW1 = ["Web Development","Digital Marketing","SEO Optimization","UI/UX Design","AI & Machine Learning","Mobile Apps"];
const ROW2 = ["E-Commerce","Analytics","WordPress","Cloud Solutions","Performance","Conversion Rate"];

export function MarqueeTrustBar() {
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee-row r1">
        <div className="marquee-track">
          {ROW1.map((s, i) => <span key={i}>{s}</span>)}
          {ROW1.map((s, i) => <span key={`d${i}`}>{s}</span>)}
        </div>
      </div>
      <div className="marquee-row r2">
        <div className="marquee-track">
          {ROW2.map((s, i) => <span key={i}>{s}</span>)}
          {ROW2.map((s, i) => <span key={`d${i}`}>{s}</span>)}
        </div>
      </div>
    </section>
  );
}
