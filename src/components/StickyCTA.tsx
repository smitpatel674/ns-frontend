"use client";
import { useState, useEffect } from "react";

export function StickyCTA() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`sticky-cta${shown ? " is-shown" : ""}`}
      id="stickyCta"
      data-cursor=""
    >
      <span className="sc-dot" />
      Free Consultation <span className="arr">→</span>
    </a>
  );
}
