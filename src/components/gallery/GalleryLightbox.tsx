"use client";

import Image from "next/image";
import { useEffect } from "react";

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
};

export function GalleryLightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Full size: ${alt}`} onClick={onClose}>
      <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>×</button>
      <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="95vw"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <p className="lightbox-caption">{alt}</p>
    </div>
  );
}
