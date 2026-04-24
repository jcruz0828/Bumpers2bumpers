"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyBookCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past ~80vh (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <Link href="/#book" className="sticky-cta-btn" tabIndex={visible ? 0 : -1}>
        Book a Visit
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
