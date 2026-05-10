"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const REVEAL_SELECTOR = ".gsap-fade-up, .gsap-reveal, [data-animate]";

export function SiteMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const lenis = new Lenis({
      duration: isTouchDevice ? 0.9 : 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    const isInInitialViewport = (element: Element) => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

      return rect.top < viewportHeight - 24 && rect.bottom > 0 && rect.left < viewportWidth && rect.right > 0;
    };

    const observe = (root: ParentNode = document) => {
      root.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
        if (!element.classList.contains("is-visible")) {
          if (isInInitialViewport(element)) {
            element.classList.add("is-visible");
          } else {
            observer.observe(element);
          }
        }
      });
    };

    observe();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches(REVEAL_SELECTOR)) {
              observer.observe(node);
            }
            observe(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
