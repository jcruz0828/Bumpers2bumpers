"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Root-level smooth scroll.
 * Lenis drives the scroll, GSAP ticker drives Lenis, ScrollTrigger listens to Lenis.
 *
 * Exposes:
 *   - window.__lenis        — Lenis instance
 *   - gsap.ticker           — shared RAF loop
 *   - ScrollTrigger (registered)
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);

    if (prefersReduced) {
      // Skip Lenis smoothing entirely; ScrollTrigger falls back to native scroll.
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    // Lenis ↔ ScrollTrigger bridge
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis off GSAP's ticker so only one RAF loop exists.
    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
