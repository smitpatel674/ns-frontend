import Link from "next/link";
import { TechPills } from "./TechStackSection";

export function SpotlightSection() {
  return (
    <section className="spotlight">
      <div className="spotlight-grid">
        <div className="sp-copy reveal x-in">
          <span className="label">/ FEATURED CASE STUDY</span>
          <h2>Pokar Greens.<br /><em>Fresh, daily.</em></h2>
          <p className="sp-problem">
            &ldquo;We needed a storefront that respected the produce - calm, modern, and fast enough for chefs ordering at 6am.&rdquo;
          </p>
          <div className="sp-results">
            <div className="sp-result"><span className="v">+182%</span><span className="l">Online orders YoY</span></div>
            <div className="sp-result"><span className="v">-46%</span><span className="l">Page load time</span></div>
            <div className="sp-result"><span className="v">4.9&#9733;</span><span className="l">Average review</span></div>
          </div>
          <Link href="#" className="btn btn-lime sp-cta" data-cursor="">Read Case Study <span className="arr">&#8594;</span></Link>
          <div style={{ marginTop: 34 }}>
            <TechPills keys={["react","tailwind","gsap","node"]} />
          </div>
        </div>
        <div className="sp-mockup reveal delay-1">
          <div className="browser">
            <div className="bar">
              <span className="d" /><span className="d" /><span className="d" />
              <span className="url">pokargreens.com / shop</span>
            </div>
            <div className="screen">
              <span className="hs">&#9658; Fresh from the farm</span>
              <span className="hh">Greens, picked at sunrise.</span>
              <div className="blk"><div /><div /><div /><div /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
