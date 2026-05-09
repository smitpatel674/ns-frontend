"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorksSection } from "@/components/WorksSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".gsap-fade-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)] transition-all duration-500">
        <h1 className="sr-only">Web Development & Digital Marketing | Nextron Solution</h1>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorksSection />
        <ProcessSection />
        <CTASection />
        <TestimonialsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
