import Image from "next/image";
import Link from "next/link";
import { TechPills } from "./TechStackSection";

const WORKS = [
  {
    image: "/images/pokar.png",
    label: "/ 01 - Web · Commerce", kicker: "Pokar Greens", name: "Fresh, daily.",
    title: "Pokar Greens Business Platform",
    desc: "Sustainable agricultural platform with e-commerce and supply chain management for a Gujarat-based agritech brand.",
    tech: ["react","tailwind","gsap","node"],
  },
  {
    image: "/images/wealth.png",
    label: "/ 02 - Edu · Platform", kicker: "Wealth Genius", name: "Money, taught.",
    title: "Wealth Genius Institute Portal",
    desc: "Stock market training platform with real-time data, live cohorts and student performance analytics.",
    tech: ["nextjs","typescript","firebase"],
  },
  {
    image: "/images/metal made global.jpeg",
    label: "/ 03 - Web · 3D", kicker: "Metal Made Global", name: "Industrial, refined.",
    title: "Metal Made Global Showcase",
    desc: "Corporate site with product catalogue and international manufacturing partnership tools - with a 3D plant tour.",
    tech: ["react","node","mongodb","threejs"],
  },
  {
    image: "/images/nbfabtech.png",
    label: "/ 04 - Web · Data", kicker: "NBFAB Tech", name: "Enterprise, alive.",
    title: "NBFAB Tech Solutions",
    desc: "Technology solutions website with service portfolios, dashboards and enterprise documentation.",
    tech: ["vue","postgres"],
  },
];

export function WorksSection() {
  return (
    <section className="section" id="works">
      <div className="wrap">
        <div className="section-head-row reveal x-in">
          <div>
            <span className="label">/ 04 - SELECTED WORK</span>
            <h2 className="section-title">Recent projects,<br />quietly <em>proud of.</em></h2>
          </div>
          <Link className="btn btn-ghost" href="#" data-cursor="">Full Portfolio <span className="arr">&#8594;</span></Link>
        </div>
        <div className="works-grid">
          {WORKS.map((w, i) => (
            <Link className={`work reveal s-in${i % 2 !== 0 ? " delay-1" : ""}`} key={w.title} href="#" data-cursor="">
              <div className="work-image">
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  sizes="(max-width:900px) 100vw, 50vw"
                  className="work-thumb"
                />
                <span className="top-label">{w.label}</span>
                <div className="overlay"><span className="view">View Case Study &#8594;</span></div>
              </div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
              <TechPills keys={w.tech} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
