"use client";

import dynamic from "next/dynamic";

// Dynamic import for GPU-accelerated map
const MapLibreMap = dynamic(() => import("./MapLibreMap"), { 
  ssr: false,
  loading: () => (
    <div className="usp-map-loading">
      <div className="eyebrow">Initializing Vector Map...</div>
    </div>
  )
});

/**
 * Wrapper for the modern MapLibre GL JS map.
 */
export function ValleyMap() {
  return (
    <div className="usp-map" role="region" aria-label="Interactive map of coverage">
      <div className="usp-map-inner">
        <MapLibreMap />
      </div>
      <div className="usp-map-overlay-vignette" />
    </div>
  );
}
