import { MARQUEE_BRANDS } from "@/lib/data";

/**
 * Infinite horizontal marquee of vehicle brands.
 * Mix is deliberate: Ferrari, Toyota, Porsche, Ford, Rolls-Royce, Honda,
 * Lamborghini, Chevrolet, Bentley, Jeep, Mercedes, RAM — the strongest
 * visual signal on the page that B2B details EVERY vehicle, not just exotics.
 *
 * Duplicated once so `translateX(-50%)` produces a seamless loop.
 * Pure CSS animation (marquee-scroll keyframe, 50s linear).
 * aria-hidden since the list is decorative.
 */
export function Marquee() {
  return (
    <div id="marquee" className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((m, i) => (
          <span key={`${m}-${i}`}>{m}</span>
        ))}
      </div>
    </div>
  );
}
