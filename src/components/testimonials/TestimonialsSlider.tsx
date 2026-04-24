"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";
import { TESTIMONIALS } from "@/lib/data";

function initials(name: string) {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

export function TestimonialsSlider() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <div className="t-slider" aria-roledescription="carousel" aria-label="Customer testimonials">
      <div className="t-slider-viewport" ref={emblaRef}>
        <div className="t-slider-track">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="t-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${i + 1} of ${total}`}
            >
              <div className="t-card">
                <div className="t-card-top">
                  <div className="t-stars" aria-label={`${t.stars.length} stars`} role="img">
                    {t.stars}
                  </div>
                  <div className="t-deco" aria-hidden="true">&ldquo;</div>
                </div>

                <blockquote className="t-quote">{t.quote}</blockquote>

                <footer className="t-attr">
                  <div className="t-avatar" aria-hidden="true">
                    {initials(t.name)}
                  </div>
                  <div className="t-who">
                    <strong>{t.name}</strong>
                    <span>{t.title}</span>
                  </div>
                  <div className="t-vehicle">{t.vehicle}</div>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="t-controls">
        <span className="t-counter" aria-live="polite" aria-atomic="true">
          <b>{pad(current)}</b>&ensp;/&ensp;{pad(total - 1)}
        </span>

        <div className="t-progress-track" aria-hidden="true">
          <div
            className="t-progress-fill"
            style={{ transform: `scaleX(${(current + 1) / total})` }}
          />
        </div>

        <div className="t-arrows">
          <button type="button" className="t-arrow" onClick={prev} aria-label="Previous testimonial">←</button>
          <button type="button" className="t-arrow" onClick={next} aria-label="Next testimonial">→</button>
        </div>
      </div>

      <div className="t-dots" role="tablist" aria-label="Testimonial slides">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`t-dot${i === current ? " active" : ""}`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
