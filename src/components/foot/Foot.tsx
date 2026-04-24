import Link from "next/link";
import { BRAND, CITIES, SERVICES } from "@/lib/data";

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Global footer. Four-column desktop grid, brand mark + positioning copy
 * spanning the first column. Service and city columns link back to homepage
 * anchors. Legal row + brand-wide tagline reinforce the "every vehicle"
 * positioning.
 */
export function Foot() {
  return (
    <footer className="foot" aria-labelledby="foot-brand">
      <div className="foot-brand">
        <div className="mark" id="foot-brand">
          Bumpers<em>2</em>Bumpers<sup>LLC</sup>
        </div>
        <div className="mark-mobile" id="foot-brand-mobile">
          Bumpers<br/>2<br/>Bumpers<br/><span className="llc">LLC</span>
        </div>
        <p>
          Mobile detailing for every vehicle in the Coachella Valley — from
          daily drivers to concours entries. One vehicle at a time, since{" "}
          {BRAND.foundedYear}.
        </p>
      </div>

      <div className="foot-col">
        <h4>Services</h4>
        <ul>
          {SERVICES.slice(0, 5).map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`}>{s.name}</Link>
            </li>
          ))}
          <li>
            <Link href="/services">Full catalogue →</Link>
          </li>
        </ul>
      </div>

      <div className="foot-col">
        <h4>Service Area</h4>
        <ul>
          {CITIES.slice(0, 6).map((c) => (
            <li key={c}>
              <Link href="/#usp">{c}</Link>
            </li>
          ))}
          <li>
            <Link href="/#usp">+ {CITIES.length - 6} more</Link>
          </li>
        </ul>
      </div>

      <div className="foot-col">
        <h4>Contact</h4>
        <ul>
          <li>
            <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phoneDisplay}</a>
          </li>
          <li>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </li>
          <li>
            <Link href="/book">Book appointment</Link>
          </li>
          <li>
            <Link href="/about">About Richie</Link>
          </li>
        </ul>
      </div>

      <div className="foot-bottom">
        <span>
          &copy; {CURRENT_YEAR} {BRAND.name}
          {"  ·  "}
          <Link href="/legal/privacy">Privacy</Link>
          {"  ·  "}
          <Link href="/legal/terms">Terms</Link>
        </span>
        <span>Made in the desert · {BRAND.coordsDisplay}</span>
      </div>
    </footer>
  );
}