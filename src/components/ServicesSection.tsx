import Link from "next/link";

const SERVICES = [
  { num: "01", title: "Web Development", desc: "Modern responsive websites and web apps built with cutting-edge frameworks for optimal performance." },
  { num: "02", title: "Digital Marketing", desc: "Data-driven strategies to boost brand visibility, traffic and conversions across every channel." },
  { num: "03", title: "SEO Optimization", desc: "Expert SEO to improve search rankings and drive organic growth that compounds month over month." },
  { num: "04", title: "Mobile Development", desc: "Cross-platform mobile apps with seamless UX and native-grade performance on iOS and Android." },
  { num: "05", title: "UI / UX Design", desc: "Beautiful intuitive interfaces that capture brand identity and convert users into customers." },
  { num: "06", title: "Analytics & Insights", desc: "Comprehensive data-driven analytics to measure performance and optimise business outcomes." },
  { num: "07", title: "AI / ML Development", desc: "Intelligent ML solutions that automate processes and drive smarter decisions at scale." },
  { num: "08", title: "E-Commerce", desc: "Scalable online stores with secure payment gateways and rich product management workflows." },
  { num: "09", title: "WordPress", desc: "Custom themes, plugins and content systems tailored to your business and editorial team." },
];

const ArrowSvg = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" strokeWidth="1.6">
    <path d="M3 4L7 7L3 10M7 4L11 7L7 10"/>
  </svg>
);

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head-row reveal x-in">
          <div>
            <span className="label">/ 03 - OUR SERVICES</span>
            <h2 className="section-title">What we do,<br /><em>end to end.</em></h2>
          </div>
          <div className="right-meta">09 Total<br />Capabilities</div>
        </div>
        <div className="services-list">
          {SERVICES.map((s) => (
            <Link className="svc-row reveal" key={s.num} href="/#contact" data-cursor="">
              <div className="svc-num">{s.num}</div>
              <h3 className="svc-title">{s.title}</h3>
              <div className="svc-desc">{s.desc}</div>
              <div className="svc-arrow"><ArrowSvg /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
