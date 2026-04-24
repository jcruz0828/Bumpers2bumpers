"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import type { BeforeAfter } from "@/lib/types";

type Props = { item: BeforeAfter; idx: number };

/**
 * 16:9 before/after with draggable reveal.
 * - Pointer tracking is direct (no tween) for precise, responsive feel.
 * - Supports mouse, touch, keyboard (arrows + Home/End).
 * - Before layer is grayscale+dimmed to read as the "untouched" state.
 * - Divider = 2px gold with a 20px glow; handle = 56px gold circle w/ 6px ring.
 */
export function BASlider({ item, idx }: Props) {
  const [x, setX] = useState(50);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = rootRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    setX(pct);
  }, []);

  useEffect(() => {
    const mm = (e: MouseEvent) => { if (dragging.current) setFromClientX(e.clientX); };
    const tm = (e: TouchEvent) => {
      if (dragging.current && e.touches[0]) setFromClientX(e.touches[0].clientX);
    };
    const end = () => { dragging.current = false; };
    window.addEventListener("mousemove", mm, { passive: true });
    window.addEventListener("touchmove", tm, { passive: true });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);
    window.addEventListener("touchcancel", end);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
      window.removeEventListener("touchcancel", end);
    };
  }, [setFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft")  { e.preventDefault(); setX((v) => Math.max(0, v - 4)); }
    if (e.key === "ArrowRight") { e.preventDefault(); setX((v) => Math.min(100, v + 4)); }
    if (e.key === "Home")       { e.preventDefault(); setX(0);   }
    if (e.key === "End")        { e.preventDefault(); setX(100); }
  };

  return (
    <Reveal as="figure" delay={((idx % 3) + 1) as 1 | 2 | 3} className="ba-figure">
      <div
        className="ba"
        ref={rootRef}
        role="slider"
        aria-label={`Before/after comparison — ${item.vehicle}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(x)}
        aria-valuetext={`${Math.round(x)} percent after`}
        tabIndex={0}
        style={{ "--x": `${x}%` } as React.CSSProperties}
        onMouseDown={(e) => { dragging.current = true; setFromClientX(e.clientX); }}
        onTouchStart={(e) => {
          dragging.current = true;
          if (e.touches[0]) setFromClientX(e.touches[0].clientX);
        }}
        onKeyDown={onKeyDown}
      >
        <div
          className="img before"
          style={{ backgroundImage: `url(${item.before})` }}
          aria-hidden="true"
        />
        <div
          className="img after"
          style={{ backgroundImage: `url(${item.after})` }}
          aria-hidden="true"
        />
        <span className="tag before">Before</span>
        <span className="tag after">After</span>
        <div className="divider" aria-hidden="true" />
        <div className="handle" aria-hidden="true">↔</div>
      </div>
      <figcaption className="ba-caption">
        <span>{item.label}</span>
        <span className="meta">
          Case {String(idx + 1).padStart(3, "0")} · {item.vehicle}
        </span>
      </figcaption>
    </Reveal>
  );
}
