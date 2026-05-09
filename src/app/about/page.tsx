"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }); }, { threshold: 0.1 });
    document.querySelectorAll(".gsap-fade-up, .gsap-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 overflow-x-hidden transition-all duration-500">
        <h1 className="sr-only">About Us - Nextron Solution | Web Development & Digital Marketing</h1>

        {/* Hero Header */}
        <section className="container-wide pt-[15vh] mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] font-medium tracking-tighter leading-[0.8] mb-8 whitespace-nowrap" style={{ fontFamily: "Author, sans-serif" }}>
              About Us
            </h2>
            <div className="w-32 h-[1px] bg-current opacity-40" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right pb-4">
            <p className="text-[10px] font-mono opacity-40 tracking-widest uppercase mb-4">[Nextron Solution]</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] opacity-50 max-w-2xl text-balance">
              As A Leading Web Development Company In Gujarat, We Don&apos;t Just Build Software. We Craft Digital Legacies Through Precision Engineering And Strategic Design.
            </p>
          </div>
        </section>

        {/* Wide Hero Image */}
        <div className="w-full aspect-[21/9] bg-current/5 mb-32 overflow-hidden relative group border-y border-current/10">
          <img src="/images/about-hero.jpg" alt="Nextron Solution Studio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* Values (Next-Gen Solutions, etc.) */}
        <section className="container-wide mb-32 hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { letter: "N", title: "Next-Gen Solutions", desc: "We Deliver Cutting-Edge Digital Solutions Using The Latest Technologies To Keep Your Business Ahead Of The Competition." },
              { letter: "D", title: "Digital Excellence", desc: "Every Project Is Built With A Focus On Quality, Performance, And User Experience To Drive Real Business Results." },
              { letter: "S", title: "Strategic Growth", desc: "We Combine Web Development, SEO, And Digital Marketing To Create Comprehensive Growth Strategies For Your Business." },
            ].map((v) => (
              <div key={v.letter} className="border-t border-current/10 pt-8 gsap-reveal">
                <div className="text-4xl font-light opacity-20 mb-4" style={{ fontFamily: "Author, sans-serif" }}>{v.letter}</div>
                <h3 className="text-xl font-medium mb-3">{v.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision / Mission / Values */}
        <section className="container-wide mb-40 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tighter leading-[0.85] sticky top-32" style={{ fontFamily: "Author, sans-serif" }}>
                Empowering<span className="block">Businesses:</span><span className="block">Inspiring</span><span className="block">Innovation</span><span className="block">And</span><span className="block">Experiences</span>
              </h2>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-24 pt-4 lg:pl-16">
              {[
                { num: "01", label: "Vision", title: "Crafting The Digital Future", desc: "We Design And Develop Scalable Digital Solutions For Modern Businesses. From Front-End Development To Full-Stack Systems, We Turn Complex Ideas Into Powerful Digital Experiences." },
                { num: "02", label: "Mission", title: "From Idea To Impact", desc: "To Bridge The Gap Between Concept And Execution. We Empower Businesses To Launch High-Performance Products Designed Not Just To Function, But To Drive Sustainable Business Growth." },
                { num: "03", label: "Values", title: "Radical Transparency", desc: "Collaboration, Results, And Integrity. Every Solution We Build Is Guided By A Commitment To Uncompromising Quality, Ensuring You Have Reliable Technology That Secures Your Success." },
              ].map((item) => (
                <div key={item.num} className="gsap-reveal">
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase opacity-40 mb-4">{`[${item.num} // ${item.label}]`}</p>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">{item.title}</h3>
                  <p className="text-lg md:text-xl font-medium opacity-40 leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container-wide mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-current/10 divide-y md:divide-y-0 md:divide-x divide-current/10 gsap-reveal">
            {[
              { num: "5+", label: "Projects Completed" },
              { num: "2+", label: "Years Experience" },
              { num: "3+", label: "Happy Clients" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="text-center py-12">
                <div className="text-4xl md:text-5xl font-medium mb-2" style={{ fontFamily: "Author, sans-serif" }}>{s.num}</div>
                <p className="text-xs opacity-50 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </section>



        {/* CTA */}
        <section className="container-wide mt-40 pt-20 pb-16">
          <div className="flex flex-col gap-0">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-8 font-mono">Get In Touch</p>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-4">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tighter max-w-4xl" style={{ fontFamily: "Author, sans-serif" }}>
                Have A Project To<span className="block">Collaborate On?</span>
              </h2>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-4 bg-black text-white px-8 py-4 text-[10px] font-medium uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
              >
                Get A Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </Link>
            </div>

            <div className="w-full h-[1px] bg-current/10 my-8" />

            <p className="text-sm opacity-60">
              If you think we can do the job for you, do not hesitate. Drop us a message/call us for any web services in Gujarat or<br />anywhere in world.
            </p>
          </div>
        </section>

        {/* Explore Works */}
        <section className="container-wide mb-40 pt-20 border-t border-current/10 gsap-reveal">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Explore Success Stories</p>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]" style={{ fontFamily: "Author, sans-serif" }}>
                Our Works
              </h2>
            </div>
            <Link href="/projects" className="btn-outline px-8 py-4 text-[10px]">
              View All Works
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pokar Greens Business Platform", tag: "Web Solutions", image: "/images/pokar.png" },
              { title: "Wealth Genius Institute Portal", tag: "Web Solutions", image: "/images/wealth.png" },
              { title: "Metal Made Global Showcase", tag: "Web Solutions", image: "/images/metal made global.jpeg" },
            ].map((project) => (
              <div key={project.title} className="group cursor-pointer gsap-reveal">
                <div className="aspect-square overflow-hidden mb-6 relative rounded-3xl border border-current/10">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">{project.tag}</p>
                <h3 className="text-2xl font-medium tracking-tight leading-none group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
