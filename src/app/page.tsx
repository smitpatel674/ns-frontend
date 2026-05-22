import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeTrustBar } from "@/components/MarqueeTrustBar";
import { MetricsBar } from "@/components/MetricsBar";
import { PillarsStrip } from "@/components/PillarsStrip";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorksSection } from "@/components/WorksSection";
import { SectionDivider } from "@/components/SectionDivider";
import { SpotlightSection } from "@/components/SpotlightSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { TeamSection } from "@/components/TeamSection";
import { ClientMarquee } from "@/components/ClientMarquee";
import { IndustriesSection } from "@/components/IndustriesSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AvailabilityBanner } from "@/components/AvailabilityBanner";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { RevealObserver } from "@/components/RevealObserver";
import { ParticleCanvas } from "@/components/ParticleCanvas";

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <div className="grain" aria-hidden="true" />
      <canvas id="particles" className="particles" aria-hidden="true" />
      <Header />
      <main>
        <h1 className="sr-only">Web Development &amp; Digital Marketing | Nextron Solution</h1>
        <HeroSection />
        <MarqueeTrustBar />
        <MetricsBar />
        <PillarsStrip />
        <AboutSection />
        <ServicesSection />
        <WorksSection />
        <SectionDivider />
        <SpotlightSection />
        <ProcessSection />
        <WhyUsSection />
        <TeamSection />
        <ClientMarquee />
        <IndustriesSection />
        <TechStackSection />
        <TestimonialsSection />
        <AvailabilityBanner />
        <ContactSection />
        <SectionDivider />
        <CTASection />
      </main>
      <Footer />
      <StickyCTA />
      <RevealObserver />
      <ParticleCanvas />
    </>
  );
}
