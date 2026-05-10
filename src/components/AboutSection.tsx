"use client";

import { useState, useEffect, useRef } from "react";
import { motionDelay } from "@/lib/motion";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let startTime: number;
    let animationFrame: number;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.ceil(easeProgress * value));
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(step);
            }
          };
          
          animationFrame = requestAnimationFrame(step);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(node);
    
    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export function AboutSection() {
  return (
    <section className="container-wide py-24 relative z-10 gsap-fade-up">
      <div className="flex flex-col lg:flex-row gap-16 mb-20 items-start gsap-fade-up">
        <div className="lg:w-1/3" data-animate="fade-right">
          <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Achievements</p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none" style={{ fontFamily: "Author, sans-serif" }}>
            About<span className="block">Company</span>
          </h2>
        </div>

        <div className="lg:w-2/3" data-animate="fade-left" style={motionDelay(1, 100)}>
          <p className="text-lg leading-relaxed opacity-70 mb-8">
            Nextron Solution is a leading web development and digital marketing company in Gujarat, India. We offer expert web development, digital marketing, SEO optimization, UI/UX design, mobile development, analytics, and AI/ML development services. We empower startups and enterprises to build scalable, high-performance digital products for sustainable growth — Next Digital Success.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 border border-current/10 divide-y md:divide-y-0 md:divide-x divide-current/10 gsap-fade-up">
        {[
          { value: 5, suffix: "+", label: "Projects Completed" },
          { value: 2, suffix: "+", label: "Years Experience" },
          { value: 3, suffix: "+", label: "Happy Clients" },
          { value: 100, suffix: "%", label: "Client Satisfaction" },
        ].map((s, index) => (
          <div key={s.label} className="text-center py-12 gsap-reveal" style={motionDelay(index, 65)}>
            <div className="text-4xl md:text-5xl font-medium mb-2" style={{ fontFamily: "Author, sans-serif" }}>
              <AnimatedNumber value={s.value} suffix={s.suffix} />
            </div>
            <p className="text-xs opacity-50 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
