"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Giant "1998'" display numeral with scroll-linked scale 1 → 1.08 as it
 * enters the viewport. Runs off the Lenis-driven GSAP ticker (wired in
 * LenisProvider), so it scrubs with the smooth scroll — not native scroll.
 */
export function SinceNumeral() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 1 },
        {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <div className="since-num" ref={ref} aria-label="Practicing since 1998">
      <span className="small">Practicing since</span>
      1998
      <sup aria-hidden="true">&rsquo;</sup>
    </div>
  );
}
