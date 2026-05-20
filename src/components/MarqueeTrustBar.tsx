export function MarqueeTrustBar() {
  const services = [
    "WEB DEVELOPMENT","DIGITAL MARKETING","SEO","UI/UX DESIGN",
    "AI/ML","MOBILE APPS","E-COMMERCE","ANALYTICS",
    "WEB DEVELOPMENT","DIGITAL MARKETING","SEO","UI/UX DESIGN",
    "AI/ML","MOBILE APPS","E-COMMERCE","ANALYTICS",
  ];
  return (
    <div className="marquee">
      <div className="marquee-row r1">
        <div className="marquee-track">
          {services.map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>
      <div className="marquee-row r2">
        <div className="marquee-track">
          {[...services].reverse().map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>
    </div>
  );
}
