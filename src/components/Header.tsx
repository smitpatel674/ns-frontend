"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onLoaded = () => setLoaded(true);
    document.addEventListener("nextron-loaded", onLoaded);
    const t = setTimeout(() => setLoaded(true), 2500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("nextron-loaded", onLoaded);
      clearTimeout(t);
    };
  }, []);

  const cls = ["nav", loaded ? "is-loaded" : "", scrolled ? "is-scrolled" : ""].filter(Boolean).join(" ");

  return (
    <header className={cls} id="nav" aria-label="Primary">
      <Link href="/#top" className="brand" data-cursor="">
        <Image
          src="/images/logo.png"
          alt="Nextron Solution"
          width={110}
          height={110}
          priority
          className="nav-logo"
        />
      </Link>
      <nav className="nav-links">
        <Link href="/#home" data-cursor="">Home</Link>
        <Link href="/#about" data-cursor="">About</Link>
        <Link href="/#services" data-cursor="">Services</Link>
        <Link href="/#works" data-cursor="">Works</Link>
        <Link href="/#careers" data-cursor="">Careers</Link>
        <Link href="/#clients" data-cursor="">Clients</Link>
      </nav>
      <Link href="/#contact" className="nav-cta" data-cursor="">
        Let&apos;s Talk <span className="arr">→</span>
      </Link>
    </header>
  );
}
