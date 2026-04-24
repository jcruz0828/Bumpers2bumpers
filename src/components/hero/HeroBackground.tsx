"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  src: string;
  alt: string;
  blurDataURL?: string;
};

const DEFAULT_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAEAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AH8AAP/Z";

export function HeroBackground({ src, alt, blurDataURL = DEFAULT_BLUR }: Props) {
  const bgRef = useRef<HTMLDivElement | null>(null);

  // Scale 108% → 100% on mount via GSAP so it coexists with the scroll parallax
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    gsap.from(el, {
      scale: 1.08,
      duration: 1.6,
      ease: "power2.out",
      delay: 0.06,
    });
  }, []);

  // Parallax on scroll (scrub-linked)
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement!,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el.parentElement) st.kill();
      });
    };
  }, []);

  return (
    <div className="hero-bg" ref={bgRef} aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={85}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurDataURL}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}
