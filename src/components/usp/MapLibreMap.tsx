"use client";

import Map, { Marker, Popup } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";
import { BRAND } from "@/lib/data";

type City = {
  pos: [number, number];
  name: string;
  hl?: boolean;
};

const CITIES: City[] = [
  { pos: [-116.5453, 33.8303], name: "Palm Springs", hl: true },
  { pos: [-116.3745, 33.7222], name: "Palm Desert", hl: true },
  { pos: [-116.2146, 33.7206], name: "Indio", hl: true },
  { pos: [-116.2425, 33.6784], name: "La Quinta" },
  { pos: [-116.3006, 33.7100], name: "Indian Wells" },
  { pos: [-116.4414, 33.7414], name: "Rancho Mirage" },
  { pos: [-116.4653, 33.7806], name: "Cathedral City" },
  { pos: [-116.5094, 33.9533], name: "Desert Hot Springs" },
];

/**
 * Modern GPU-accelerated map using MapLibre GL JS.
 * Style: CartoDB Dark Matter (clean, high-contrast dark).
 */
export default function MapLibreMap() {
  const [popupInfo, setPopupInfo] = useState<{ name: string; pos: [number, number] } | null>(null);

  return (
    <div style={{ height: "100%", width: "100%", background: "#0e0b08" }}>
      <Map
        initialViewState={{
          longitude: -116.35,
          latitude: 33.76,
          zoom: 9.2
        }}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
        interactive={false}
      >
        {CITIES.map((city) => (
          <Marker
            key={city.name}
            longitude={city.pos[0]}
            latitude={city.pos[1]}
            anchor="center"
            onClick={e => {
              e.originalEvent.stopPropagation();
              setPopupInfo({ name: city.name, pos: city.pos });
            }}
          >
            <div className={`map-marker-dot ${city.hl ? 'highlight' : ''}`} />
          </Marker>
        ))}

        {/* HQ Marker */}
        <Marker
          longitude={BRAND.coords.lon}
          latitude={BRAND.coords.lat}
          anchor="center"
        >
          <div className="map-marker-dot highlight" style={{ background: 'var(--color-accent)' }} />
        </Marker>

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.pos[0]}
            latitude={popupInfo.pos[1]}
            onClose={() => setPopupInfo(null)}
            closeButton={false}
            maxWidth="200px"
          >
            <div style={{ 
              color: "#0e0b08", 
              fontFamily: "var(--f-mono)", 
              fontSize: "10px", 
              textTransform: "uppercase",
              padding: "4px 8px"
            }}>
              <strong>{popupInfo.name}</strong><br />
              Coverage Area
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
