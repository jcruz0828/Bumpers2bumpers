"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_LINKS, BRAND } from "@/lib/data";
import { cn } from "@/lib/utils";

function useSmoothHashClick(onAfter?: () => void) {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") ?? "";
    const hash = href.includes("#") ? "#" + href.split("#")[1] : null;
    if (!hash) return;
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    onAfter?.();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", hash);
  }, [onAfter]);
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const lastY = useRef(0);

  const smoothClick = useSmoothHashClick();
  const smoothClickDrawer = useSmoothHashClick(() => setDrawer(false));

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 200 && y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (drawer) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [drawer]);

  useEffect(() => {
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setDrawer(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer]);

  return (
    <>
      <header className={cn("nav", scrolled && "is-scrolled", hidden && !drawer && "is-hidden")}>
        <Link href="/" className="brand" aria-label="Bumpers2Bumpers — home">
          <span className="name">{BRAND.shortName}</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={smoothClick}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href={`tel:${BRAND.phoneTel}`} className="nav-phone" aria-label={`Call ${BRAND.phoneDisplay}`}>
          {BRAND.phoneDisplay}
        </a>
        <Link href="/#book" className="cta" onClick={smoothClick}>Book Now</Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={drawer}
          aria-controls="mobile-nav-drawer"
          aria-label={drawer ? "Close menu" : "Open menu"}
          onClick={() => setDrawer((v) => !v)}
        >
          {drawer ? (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M3 6h14M3 14h14" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </header>

      <div
        id="mobile-nav-drawer"
        className={cn("nav-drawer", drawer && "is-open")}
        aria-hidden={!drawer}
      >
        <ul>
          {NAV_LINKS.map((l, i) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={smoothClickDrawer}
                style={{
                  opacity: drawer ? 1 : 0,
                  transform: drawer ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity .5s ${i * 60 + 200}ms, transform .6s cubic-bezier(.2,.7,.1,1) ${i * 60 + 200}ms`,
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#book" onClick={smoothClickDrawer} className="cta">
          Schedule a visit
        </Link>
        <div className="meta">
          <span>Coachella Valley · CA</span>
          <span>By appointment · Since 1998</span>
        </div>
      </div>
    </>
  );
}
