"use client";

import Image from "next/image";
import { useState } from "react";
import { GalleryLightbox } from "./GalleryLightbox";
import { GALLERY } from "@/lib/data";

export function GalleryInteractive() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const strip = [...GALLERY, ...GALLERY];

  return (
    <>
      <div className="gallery" aria-label="Gallery of recent vehicles detailed">
        <div className="gallery-strip">
          {strip.map((item, i) => (
            <button
              key={`${item.tag}-${i}`}
              type="button"
              className="g-item"
              data-kind={item.kind}
              aria-hidden={i >= GALLERY.length ? "true" : undefined}
              aria-label={i < GALLERY.length ? `View full size: ${item.tag}` : undefined}
              onClick={i < GALLERY.length ? () => setLightbox({ src: item.url, alt: item.tag }) : undefined}
            >
              <Image
                src={item.url}
                alt={item.tag}
                width={420}
                height={525}
                sizes="420px"
                loading="lazy"
              />
              <span className="tag">{item.tag}</span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <GalleryLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
