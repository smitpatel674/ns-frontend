"use client";

import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const serviceData = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Project",
    desc: "Responsive React/Vue based web application with modern UI.",
    deliverables: [
      "Responsive & mobile optimization",
      "Interactive hero section + smooth scroll animations",
      "Portfolio with filter + case study pages",
      "Pricing calculator / instant quote generator",
      "Testimonials (video + rating) + client logos section",
      "Live chat / WhatsApp floating button + quick enquiry form",
    ],
  },
  {
    id: "fullstack",
    number: "02",
    title: "Full Stack App",
    desc: "Complete MERN/Python Application with Database Integration.",
    deliverables: [
      "Responsive & mobile optimization",
      "Role-based login (Admin / Client / User)",
      "Admin dashboard (manage projects, leads, content)",
      "Payment integration (Razorpay/UPI) + invoices",
      "Real-time notifications (Email/SMS/In-app)",
      "Advanced search + filters + export (Excel/PDF)",
    ],
  },
  {
    id: "ai-ml",
    number: "03",
    title: "AI/ML Model",
    desc: "Python-based Machine Learning model with Streamlit interface.",
    deliverables: [
      "AI prediction / classification system",
      "Model API integration (FastAPI/Flask)",
      "Real-time results dashboard + charts",
      "Dataset upload + preprocessing panel",
      "Model versioning + accuracy tracking",
      "Explainability (confidence score / reasons)",
    ],
  },
  {
    id: "custom-web",
    number: "04",
    title: "Custom Web App",
    desc: "Scalable, production-ready web application for business operations.",
    deliverables: [
      "Role-based login (Admin/User/Client)",
      "Admin dashboard (CRUD + management)",
      "Notifications (Email/SMS/In-app)",
      "Advanced search + filters",
      "File upload/download (PDF/Excel/Images)",
      "Activity logs + user tracking",
    ],
  },
  {
    id: "ecommerce",
    number: "05",
    title: "E-Commerce Store",
    desc: "Full-featured online store with payment gateway and admin panel.",
    deliverables: [
      "Product management (variants, stock, categories)",
      "Cart + wishlist + checkout flow",
      "Payment gateway (Razorpay/Stripe/UPI)",
      "Order tracking + invoice generation",
      "Coupon/discount system",
      "Admin analytics (sales, top products, users)",
      "SEO Optimization",
    ],
  },
  {
    id: "digital-marketing",
    number: "06",
    title: "Digital Marketing",
    desc: "Data-driven digital marketing services to boost brand visibility, traffic, and conversions.",
    deliverables: [
      "SEO optimization for higher search rankings",
      "Google Ads & GPT ads campaign management",
      "Meta (Facebook & Instagram) ad campaigns",
      "Content marketing & blog strategy",
      "Email marketing campaigns",
      "Audience targeting & lead generation",
      "Performance tracking & analytics reports",
    ],
  },
  {
    id: "social-media",
    number: "07",
    title: "Social Media Management",
    desc: "Professional social media management to grow brand visibility, engagement, and audience across platforms.",
    deliverables: [
      "Social media account setup & optimization",
      "Content planning & post scheduling",
      "Creative post design & captions",
      "Audience engagement & comment management",
      "Monthly analytics & performance reports",
      "Hashtag strategy & growth optimization",
    ],
  },
];

const methodologySteps = [
  { number: "01", title: "Research", desc: "Understanding Users, Business Goals, And Market Expectations To Define Clear Design Direction." },
  { number: "02", title: "Concept", desc: "Transforming Research Insights Into Clear Design Ideas, Structured User Flows, And Intuitive Interaction Models." },
  { number: "03", title: "Strategy", desc: "Defining Experience Strategies That Align User Needs, Business Goals, And Long-Term Product Vision." },
  { number: "04", title: "Development", desc: "Creating Scalable, Developer-Ready UI Design Systems For Smooth Implementation." },
  { number: "05", title: "Testing", desc: "Validating Usability And Performance Through Structured Testing And Real User Feedback Loops." },
  { number: "06", title: "Handover", desc: "Delivering Final Design Assets, Guidelines, And Documentation For Smooth And Accurate Implementation." },
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
        <h1 className="sr-only">Our Services - Website Development & Design | DVLOP Technologies</h1>

        {/* Hero Header */}
        <section className="container-wide pt-[28vh] mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-current/10 pb-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Our Services</p>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-4" style={{ fontFamily: "Author, sans-serif" }}>
              DVLOP Strategic Services
            </h2>
            <p className="text-xs font-mono opacity-40 mb-8 tracking-wider">OPERATIONAL PROTOCOLS</p>
            <div className="w-16 h-[2px] bg-current opacity-20 mb-8" />
            <p className="text-lg md:text-xl leading-relaxed opacity-70">
              We Deploy Elite Web Design And Development Services In Gujarat, Engineered For Scale And Performance.
            </p>
          </div>
          <div className="opacity-30">
            <p className="text-xs font-mono">[DVLOP Technologies]</p>
          </div>
        </section>

        {/* 12-column grid: sidebar + content */}
        <section className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-0 relative items-start">
          {/* Sidebar - 3 cols */}
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

          {/* Content - 9 cols */}
          <div className="lg:col-span-9 lg:pl-16 pt-16 lg:pt-32">
            <p className="text-xs font-mono opacity-40 mb-12 tracking-wider">Protocol Navigation // Active</p>
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
              Start Protocol
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
