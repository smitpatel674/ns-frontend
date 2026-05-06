"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[9999] p-4 bg-[var(--bg-color)] text-[var(--text-color)] border border-black/10 hover:border-black transition-all duration-300 w-[54px] h-[54px] flex items-center justify-center overflow-hidden"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
