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
        <h1 className="sr-only">About Us - DVLOP Technologies | Web Development Company</h1>

        {/* Hero Header */}
        <section className="container-wide pt-20 mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">About Us</p>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: "Author, sans-serif" }}>
              About Us
            </h2>
            <div className="w-16 h-[2px] bg-current opacity-20 mb-8" />
            <p className="text-lg md:text-xl leading-relaxed opacity-70">
              As A Leading Web Development Company In Gujarat, We Don&apos;t Just Build Software. We Craft Digital Legacies Through Precision Engineering And Strategic Design.
            </p>
          </div>
          <div className="opacity-30">
            <p className="text-xs font-mono">[DVLOP Technologies]</p>
          </div>
        </section>

        {/* Wide Hero Image */}
        <div className="w-full aspect-[21/9] bg-current/5 mb-32 overflow-hidden relative group border-y border-current/10">
          <img src="/images/about-hero.jpg" alt="DVLOP Technologies Studio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* V.I.C.E Values */}
        <section className="container-wide mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { letter: "V", title: "Velocity", desc: "We Operate With Extreme Focus, Delivering High-Velocity Output Without Compromising Structural Integrity." },
              { letter: "I", title: "Integrity", desc: "Code Is Duty. We Build With Security And Scalability As Non-Negotiable Fundamentals From Day Zero." },
              { letter: "C", title: "Collective", desc: "A Specialized Network Of Senior Talent, Assembled Dynamically To Solve Specific, Complex Challenges." },
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
              { num: "01", label: "Vision", title: "Crafting The Digital Future", desc: "We Design And Develop Scalable Digital Solutions For Modern Businesses. From Front-End Development To Full-Stack Systems, We Turn Complex Ideas Into Powerful Digital Experiences." },
              { num: "02", label: "Mission", title: "From Idea To Impact", desc: "To Bridge The Gap Between Concept And Execution. We Empower Businesses To Launch High-Performance Products Designed Not Just To Function, But To Drive Sustainable Business Growth." },
              { num: "03", label: "Values", title: "Radical Transparency", desc: "Collaboration, Results, And Integrity. Every Solution We Build Is Guided BY A Commitment To Uncompromising Quality, Ensuring You Have Reliable Technology That Secures Your Success." },
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
          <div className="grid grid-cols-1 md:grid-cols-3 border border-current/10 divide-y md:divide-y-0 md:divide-x divide-current/10 gsap-reveal">
            {[
              { num: "4+", label: "Years Of Agency Experience" },
              { num: "50+", label: "Quality Websites Delivered" },
              { num: "100%", label: "Clients Satisfied & Retention" },
            ].map((s) => (
              <div key={s.label} className="text-center py-12">
                <div className="text-4xl md:text-5xl font-medium mb-2" style={{ fontFamily: "Author, sans-serif" }}>{s.num}</div>
                <p className="text-xs opacity-50 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="container-wide mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">[Leadership]</p>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: "Author, sans-serif" }}>
                Leadership
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-lg opacity-70 leading-relaxed">
                The Strategic Force Driving Our Vision And Ensuring Technical Superiority In Every Protocol.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { name: "Aman Nayak", role: "Founder & Technical Lead", desc: "Leading DVLOP with a focus on technical excellence and scalable digital growth.", image: "/images/aman-nayak.jpg" },
              { name: "Hiren Dadhaniya", role: "Co-Founder & Project Manager", desc: "Leading DVLOP with a focus on technical excellence and scalable digital growth.", image: "/images/hiren-dadhaniya.jpg" },
            ].map((leader) => (
              <div key={leader.name} className="group gsap-reveal">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-4 border border-current/10">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-medium mb-1">{leader.name}</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">{leader.role}</p>
                <p className="text-sm opacity-60 leading-relaxed">{leader.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-current/10 pt-16 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Team</p>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tighter leading-[0.9]" style={{ fontFamily: "Author, sans-serif" }}>
                  Team<span className="block">Roster</span>
                </h3>
              </div>
              <div className="flex items-end">
                <p className="text-sm opacity-50">
                  [The Collective] A Specialized Network Of Senior Talent Assembled To Solve Specific, Complex Challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Unnati Dubal", role: "Graphic Designer", image: "/images/unnati-dubal.jpg" },
              { name: "Rahul Chaudhary", role: "Web Developer & Creative Designer", image: "/images/rahul-chaudhary.png" },
            ].map((member) => (
              <div key={member.name} className="group gsap-reveal">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-4 border border-current/10">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-40">{member.role}</p>
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
              If you think we can do the job for you, do not hesitate. Drop us a message/call us for any web services in Calicut or anywhere in world.
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
              { title: "Mitrayana – Senior Care Service Platform", tag: "Full-Stack Development", image: "/images/mitrayana.webp" },
              { title: "Makhan & Mirch – E-Restaurant Management System", tag: "Full-Stack Development", image: "/images/makhan-mirch.webp" },
              { title: "Road Traffic Accident Severity Prediction", tag: "AI / Machine Learning", image: "/images/road-traffic-accident.webp" },
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
