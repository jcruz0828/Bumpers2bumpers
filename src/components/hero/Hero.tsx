import Link from "next/link";
import { BRAND, HERO_IMAGES } from "@/lib/data";
import { HeroBackground } from "./HeroBackground";
import { HeroTitle } from "./HeroTitle";

/**
 * Cinematic above-the-fold.
 *   - Full-bleed warm bg with 120→100% ease + scroll parallax (25%)
 *   - Top meta row: coords (left) / cert (right)
 *   - 3-line letter-rise headline, middle italic gold
 *   - Lead copy emphasizes "every vehicle — from daily drivers to concours entries"
 *   - Primary + ghost CTAs
 *   - Scroll indicator
 *
 * `aria-labelledby` ties the section to the h1 id.
 */
export function Hero() {
  const img = HERO_IMAGES[0]!;
  const headlineId = "hero-headline";

  return (
    <section
      id="top"
      className="hero"
      aria-labelledby={headlineId}
    >
      <HeroBackground src={img.url} alt={img.alt} />

      <div className="hero-content">
        <div className="hero-meta">
          <div className="col">
            <span>{BRAND.coordsDisplay}</span>
            <span className="dim">{BRAND.region.toUpperCase()}</span>
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            <span>Est. MCMXCVIII</span>
            <span className="dim">{BRAND.cert.toUpperCase()}</span>
          </div>
        </div>

        <HeroTitle
          id={headlineId}
          lines={["Detailing is not", "a service.", "It is attention."]}
        />

        <div className="hero-bottom">
          <p>
            Richie Herrera has been detailing vehicles across the Coachella Valley
            for over twenty-seven years — every vehicle, from daily drivers to
            concours entries. One detailer. One vehicle at a time. He arrives at
            your driveway, sets up his own power and water, and works until the
            vehicle is finished.
          </p>
          <div className="actions">
            <Link href="/#book" className="btn-primary">
              <span>Book a visit</span>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/#services" className="btn-ghost">
              <span>The work</span>
            </Link>
          </div>
        </div>
      </div>

     
    </section>
  );
}
