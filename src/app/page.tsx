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
