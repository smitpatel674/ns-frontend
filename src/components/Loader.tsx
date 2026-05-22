"use client";
import { useEffect } from "react";
import Image from "next/image";

export function Loader() {
  useEffect(() => {
    const loader = document.getElementById("loader");
    if (!loader) return;
    const mark = loader.querySelector(".l-mark") as HTMLElement | null;
    const bar = loader.querySelector(".l-bar") as HTMLElement | null;

    setTimeout(() => {
      if (mark) { mark.style.opacity = "1"; mark.style.transform = "translateY(0)"; }
      if (bar) bar.style.opacity = "1";
    }, 50);

    setTimeout(() => loader.classList.add("is-progress"), 300);

    setTimeout(() => {
      loader.classList.add("is-lifting");
      document.dispatchEvent(new CustomEvent("nextron-loaded"));
    }, 1300);

    setTimeout(() => { loader.style.display = "none"; }, 2300);
  }, []);

  return (
    <div className="loader" id="loader" aria-hidden="true">
      <div className="l-mark">
        <Image
          src="/images/logo.png"
          alt="Nextron Solution"
          width={280}
          height={280}
          priority
          className="loader-logo"
        />
      </div>
      <div className="l-bar" />
    </div>
  );
}
