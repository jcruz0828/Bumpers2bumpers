"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
  /** Extra attributes */
  id?: string;
  style?: React.CSSProperties;
};

/**
 * Lightweight IntersectionObserver reveal primitive.
 * Matches the prototype's `.reveal` + `.in` CSS classes (threshold 0.15, rootMargin "0px 0px -8% 0px").
 * Respects prefers-reduced-motion via CSS.
 *
 * Uses a shared observer per mounted tree via module-level lazy init to avoid
 * allocating an observer per element.
 */
let sharedIO: IntersectionObserver | null = null;
const pending = new WeakSet<Element>();

function ensureIO() {
  if (sharedIO) return sharedIO;
  if (typeof window === "undefined") return null;
  sharedIO = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          sharedIO?.unobserve(e.target);
          pending.delete(e.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  return sharedIO;
}

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  id,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = ensureIO();
    if (!io) return;
    if (!pending.has(el)) {
      io.observe(el);
      pending.add(el);
    }
    return () => {
      if (pending.has(el)) {
        io.unobserve(el);
        pending.delete(el);
      }
    };
  }, []);

  const cls = clsx("reveal", delay ? `d${delay}` : null, className);

  // @ts-expect-error — runtime Tag is fine, React's intrinsic generic is conservative
  return <Tag ref={ref} id={id} className={cls} style={style}>{children}</Tag>;
}
