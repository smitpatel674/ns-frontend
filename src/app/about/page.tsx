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
        <section className="container-wide pt-20 mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">About Us</p>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: "Author, sans-serif" }}>
              About Us
            </h2>
            <div className="w-16 h-[2px] bg-current opacity-20 mb-8" />
            <p className="text-lg md:text-xl leading-relaxed opacity-70">
              As A Leading Web Development & Digital Marketing Company In Gujarat, We Don&apos;t Just Build Websites. We Craft Digital Success Stories Through Innovation And Strategic Design.
            </p>
          </div>
          <div className="opacity-30">
            <p className="text-xs font-mono">[Nextron Solution]</p>
          </div>
        </section>

        {/* Wide Hero Image */}
        <div className="w-full aspect-[21/9] bg-current/5 mb-32 overflow-hidden relative group border-y border-current/10">
          <img src="/images/about-hero.jpg" alt="Nextron Solution Studio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* Values */}
        <section className="container-wide mb-32">
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
        <section className="container-wide mb-40 pt-20 border-t border-current/10 gsap-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: "Author, sans-serif" }}>
                Empowering Businesses:<span className="block">Inspiring Innovation</span><span className="block">And Experiences</span>
              </h2>
            </div>
            <div />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", label: "Vision", title: "Next Digital Success", desc: "We Envision A World Where Every Business Has Access To World-Class Digital Solutions That Drive Growth, Innovation, And Lasting Success." },
              { num: "02", label: "Mission", title: "From Idea To Impact", desc: "To Bridge The Gap Between Concept And Execution. We Empower Businesses To Launch High-Performance Digital Products Designed To Drive Sustainable Growth." },
              { num: "03", label: "Values", title: "Radical Transparency", desc: "Collaboration, Results, And Integrity. Every Solution We Build Is Guided By A Commitment To Uncompromising Quality And Client Satisfaction." },
            ].map((item) => (
              <div key={item.num} className="gsap-reveal">
                <p className="text-xs font-mono opacity-40 mb-4">{`[${item.num} // ${item.label}]`}</p>
                <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
        <section className="container-wide mt-40 pt-20 border-t border-current/10 gsap-reveal">
          <div className="flex flex-col gap-10 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] opacity-40">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium leading-[0.85] tracking-tighter" style={{ fontFamily: "Author, sans-serif" }}>
              Have A Project To<span className="block">Collaborate On?</span>
            </h2>
            <p className="text-sm uppercase tracking-widest opacity-40">Get A Quote</p>
            <p className="text-lg opacity-70 max-w-xl leading-relaxed">
              If you think we can do the job for you, do not hesitate. Drop us a message or call us for any web development, digital marketing, or AI/ML services anywhere in the world.
            </p>
            <Link href="/contact" className="btn-pro self-start px-8 py-4 text-[10px]">
              Start Project ↗
            </Link>
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
