"use client";

import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const serviceData = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development",
    desc: "Modern, responsive websites and web applications built with cutting-edge frameworks for optimal performance.",
    deliverables: [
      "Responsive & mobile-first design",
      "Interactive UI with smooth scroll animations",
      "Custom CMS integration & dynamic content",
      "E-commerce capabilities & payment integration",
      "Performance optimization & SEO-ready structure",
      "API integration & third-party services",
    ],
  },
  {
    id: "digital-marketing",
    number: "02",
    title: "Digital Marketing",
    desc: "Data-driven digital marketing strategies to boost brand visibility, traffic, and conversions.",
    deliverables: [
      "Google Ads & PPC campaign management",
      "Meta (Facebook & Instagram) ad campaigns",
      "Content marketing & blog strategy",
      "Email marketing campaigns",
      "Audience targeting & lead generation",
      "Performance tracking & analytics reports",
    ],
  },
  {
    id: "seo",
    number: "03",
    title: "SEO Optimization",
    desc: "Expert SEO techniques to improve search rankings and drive organic growth for your business.",
    deliverables: [
      "On-page SEO optimization",
      "Technical SEO audit & fixes",
      "Keyword research & strategy",
      "Link building & authority growth",
      "Local SEO for Gujarat businesses",
      "Monthly SEO reports & insights",
    ],
  },
  {
    id: "mobile-dev",
    number: "04",
    title: "Mobile Development",
    desc: "Cross-platform mobile applications with seamless user experience and native performance.",
    deliverables: [
      "React Native / Flutter development",
      "iOS & Android native apps",
      "Push notifications & real-time features",
      "App Store & Play Store deployment",
      "In-app purchases & subscription models",
      "App analytics & crash reporting",
    ],
  },
  {
    id: "ui-ux",
    number: "05",
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interface designs that capture your brand identity and convert users effectively.",
    deliverables: [
      "User research & persona development",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Design system creation",
      "Usability testing & iteration",
      "Responsive design across devices",
    ],
  },
  {
    id: "analytics",
    number: "06",
    title: "Analytics & Insights",
    desc: "Comprehensive analytics and data-driven insights to measure performance and optimize business outcomes.",
    deliverables: [
      "Google Analytics setup & configuration",
      "Custom dashboard & reporting",
      "Conversion tracking & funnel analysis",
      "User behavior analytics (heatmaps, session recording)",
      "A/B testing & optimization",
      "ROI measurement & KPI tracking",
    ],
  },
  {
    id: "ai-ml",
    number: "07",
    title: "AI/ML Development",
    desc: "Intelligent AI and machine learning solutions that automate processes and drive smarter business decisions.",
    deliverables: [
      "AI prediction & classification systems",
      "Natural Language Processing (NLP)",
      "Computer vision solutions",
      "Chatbot & virtual assistant development",
      "Data pipeline & model deployment",
      "Custom ML model training & optimization",
    ],
  },
  {
    id: "ecommerce",
    number: "08",
    title: "E-Commerce",
    desc: "Scalable online stores with secure payment gateways and comprehensive product management systems.",
    deliverables: [
      "Custom Shopify & WooCommerce setups",
      "Secure payment gateway integration",
      "Inventory & order management systems",
      "Conversion rate optimization (CRO)",
      "B2B and B2C marketplace development",
      "Mobile commerce & shopping apps",
    ],
  },
  {
    id: "wordpress",
    number: "09",
    title: "WordPress",
    desc: "Custom WordPress themes, plugins, and highly manageable content systems tailored to your business needs.",
    deliverables: [
      "Custom theme design & development",
      "Plugin development & integration",
      "Website speed & performance optimization",
      "WordPress security & maintenance",
      "Seamless CMS migration to WordPress",
      "SEO-friendly site architecture",
    ],
  },
];

const methodologySteps = [
  { number: "01", title: "Discovery & Strategy", desc: "Workshops, audits, and goal-setting. We map the business problem before we open the design tool." },
  { number: "02", title: "Design & Wireframe", desc: "Interaction design, brand language, and pixel-perfect prototypes — validated against real users." },
  { number: "03", title: "Development", desc: "Engineering sprints with weekly demos. Production-grade code, fully typed, fully tested." },
  { number: "04", title: "Testing & QA", desc: "Cross-browser, accessibility, performance, and load tests. We don't ship anything we wouldn't bet on." },
  { number: "05", title: "Launch & Support", desc: "Smooth deployment, analytics setup, and ongoing partnership — with a named lead on every account." },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(serviceData[0].id);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }); }, { threshold: 0.1 });
    document.querySelectorAll(".gsap-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeData = serviceData.find((s) => s.id === activeService) || serviceData[0];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 overflow-x-hidden transition-all duration-500">
        <h1 className="sr-only">Our Services - Web Development & Digital Marketing | Nextron Solution</h1>

        {/* Hero Header */}
        <section className="container-wide pt-[15vh] mb-24 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-16 border-b border-current/10 pb-20">
          <div className="flex flex-col shrink-0">
            <h2 className="text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] font-medium tracking-tighter leading-[0.8] mb-8 whitespace-nowrap" style={{ fontFamily: "Author, sans-serif" }}>
              Our Services
            </h2>
            <div className="w-32 h-[1px] bg-current opacity-40" />
          </div>
          <div className="flex flex-col items-start xl:items-end text-left xl:text-right pb-4 w-full">
            <p className="text-[10px] font-mono opacity-40 tracking-widest uppercase mb-4">[Nextron Solution]</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] opacity-50 max-w-2xl text-balance">
              We Deploy Elite Web Design And Development Services In Gujarat, Engineered For Scale And Performance.
            </p>
          </div>
        </section>

        {/* Sidebar + content */}
        <section className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-0 relative items-start">
          <div className="lg:col-span-3 lg:sticky lg:top-32 self-start border-t lg:border-t-0 lg:border-r border-current/10 pt-8 lg:pt-0">
            <div className="space-y-0">
              {serviceData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left px-6 py-3 text-[10px] font-medium tracking-[0.3em] transition-all duration-300 border-l-2 ${
                    activeService === service.id
                      ? "border-current text-current"
                      : "border-transparent opacity-20 hover:opacity-60"
                  }`}
                >
                  <span className="opacity-40 mr-3">{service.number}</span>
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9 lg:pl-16 pt-16 lg:pt-32">
            <p className="text-xs font-mono opacity-40 mb-12 tracking-wider">Service Details // Active</p>
            <p className="text-xs opacity-40 font-mono mb-4">{activeData.number}</p>
            <h3 className="text-3xl md:text-4xl font-medium mb-4">{activeData.title}</h3>
            <p className="text-lg opacity-70 mb-12">{activeData.desc}</p>

            <div className="mb-16">
              <h4 className="text-xs uppercase tracking-[0.2em] opacity-40 mb-8">Deliverables</h4>
              <div className="space-y-4">
                {activeData.deliverables.map((d, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-xs opacity-40 font-mono min-w-[24px]">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm opacity-70">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/contact" className="btn-pro px-8 py-4 text-[10px]">
              Get Started
            </Link>
          </div>
        </section>

        {/* Methodology */}
        <section className="container-wide mt-40 pt-24 border-t border-current/10 gsap-reveal">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Our Methodology</p>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]" style={{ fontFamily: "Author, sans-serif" }}>
                Our<span className="block">Approach</span>
              </h2>
            </div>
            <div />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {methodologySteps.map((step) => (
              <div key={step.number} className="border-t border-current/10 pt-8">
                <p className="text-xs font-mono opacity-40 mb-4">{`[Step // ${step.number}]`}</p>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{step.desc}</p>
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
