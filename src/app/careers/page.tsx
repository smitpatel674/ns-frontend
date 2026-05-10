import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { motionDelay } from "@/lib/motion";

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 overflow-x-hidden transition-all duration-500">
        <h1 className="sr-only">Careers at Nextron Solution - Join Our Team | Jobs in Gujarat</h1>

        {/* Hero */}
        <section className="container-wide pt-[15vh] mb-24 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-16 border-b border-current/10 pb-20">
          <div className="w-full md:w-1/2 flex flex-col" data-animate="fade-up">
            <h2 className="text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] font-medium tracking-tighter leading-[0.8] mb-8 whitespace-nowrap" style={{ fontFamily: "Author, sans-serif" }}>
              Careers
            </h2>
            <div className="w-32 h-[1px] bg-current opacity-40" />
          </div>
          <div className="flex flex-col items-start xl:items-end text-left xl:text-right pb-4 w-full" data-animate="fade-left" style={motionDelay(1, 120)}>
            <p className="text-[10px] font-mono opacity-40 tracking-widest uppercase mb-4">[Nextron Solution]</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] opacity-50 max-w-2xl text-balance">
              We Are Building The Future Of Digital Infrastructure. Join Us In Our Mission To Create Exceptional Technology.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="container-wide mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { letter: "E", title: "Excellence", desc: "We Maintain The Highest Standards Of Engineering And Design In Every Project We Undertake." },
              { letter: "X", title: "Innovation", desc: "Our Team Constantly Explores New Technologies To Provide Cutting-Edge Solutions For Our Clients." },
              { letter: "I", title: "Integrity", desc: "We Believe In Transparent Communication And Honest Partnerships To Drive Successful Outcomes." },
            ].map((v, index) => (
              <div key={v.letter} className="border-t border-current/10 pt-8 gsap-reveal motion-card" style={motionDelay(index, 80)}>
                <div className="text-4xl font-light opacity-20 mb-4" style={{ fontFamily: "Author, sans-serif" }}>{v.letter}</div>
                <h3 className="text-xl font-medium mb-3">{v.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="container-wide mb-40 pt-20 border-t border-current/10 gsap-reveal">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Open Positions</p>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]" style={{ fontFamily: "Author, sans-serif" }}>
                0<span className="block">Roles Available</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-lg opacity-70 leading-relaxed">
                No Positions Currently Available.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-wide mb-40 gsap-reveal" style={motionDelay(1, 80)}>
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium leading-[0.85] tracking-tighter mb-8" style={{ fontFamily: "Author, sans-serif" }}>
              Become Part Of<span className="block">The Team.</span>
            </h2>
            <p className="text-lg opacity-70 mb-8 max-w-xl leading-relaxed">
              We Are Always Looking For Talented Professionals To Join Our Team. If You Are Ready For A New Challenge, We Want To Hear From You.
            </p>
            <Link href="/contact" className="btn-pro px-8 py-4 text-[10px]">
              Apply Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
