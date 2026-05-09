"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "About", href: "/about" },
  { number: "03", label: "Services", href: "/services" },
  { number: "04", label: "Works", href: "/projects" },
  { number: "05", label: "Careers", href: "/careers" },
  { number: "06", label: "Clients", href: "/client" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 bg-[var(--bg-color)]
        ${scrolled ? "h-[85px] border-b border-current/5 shadow-sm" : "h-[100px] border-b border-transparent"}
      `}
    >
      <div className="container-wide h-full flex items-center justify-between">
        <Link href="/" className="block">
          <img src="/images/logo.png" alt="Nextron Solution" className="h-[36px] w-auto hover:opacity-80 transition-opacity" />
        </Link>

        <div className="flex items-center gap-10">
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium opacity-60 hover:opacity-100 uppercase tracking-widest flex items-center gap-[6px] relative group/link py-4 transition-opacity duration-150"
              >
                {link.label}
                <span className="absolute bottom-3 left-0 w-0 h-[1.5px] bg-current group-hover/link:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center font-medium uppercase tracking-wider bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300 text-[10px] px-8 py-3"
          >
            Let&apos;s Talk
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-12 h-12 border border-current/10 flex items-center justify-center hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[99] bg-[var(--bg-color)] flex flex-col">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-12 h-12 border border-current/10 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 text-3xl font-medium uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
              >
                <span className="text-lg opacity-40">{link.number}</span>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pb-12 px-8 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-2">Location</p>
              <p className="text-sm opacity-70">Kadi, Gujarat</p>
              <p className="text-sm opacity-70">India</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-2">Connect</p>
              <a href="mailto:nextronsolution@gmail.com" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">nextronsolution@gmail.com</a>
              <a href="tel:+919586141881" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">+91 9586 141 881</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
