import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${BRAND.name}.`,
  alternates: { canonical: "/legal/privacy" },
  robots: { index: true, follow: false },
};

const UPDATED = "April 2026";

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="eyebrow">
          <span className="dot" />
          Legal
        </div>
        <h1>Privacy Policy</h1>
        <p>Last updated {UPDATED}.</p>
      </section>

      <section className="wrap">
        <div className="legal" style={{ margin: "0 auto" }}>
          <p>
            {BRAND.name} (&ldquo;Bumpers2Bumpers&rdquo;, &ldquo;we&rdquo;)
            operates <code>bumpers2bumpers.detail</code>. This page describes
            what information we collect, how we use it, and the choices you
            have.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>
              <b>Booking inquiries.</b> Name, phone, email, vehicle, city, and
              notes you submit via the booking form.
            </li>
            <li>
              <b>Vehicle records.</b> Photographs, paint-depth readings, and
              service history stored against the vehicle file.
            </li>
            <li>
              <b>Usage.</b> Aggregate site metrics (page views, referrer,
              device class) via Vercel Analytics. No personal identifiers are
              collected by analytics.
            </li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To schedule, perform, and document detailing work.</li>
            <li>To contact you about your vehicle or pending appointments.</li>
            <li>To register ceramic/graphene coating warranties in your name.</li>
          </ul>

          <h2>How we do not use it</h2>
          <ul>
            <li>We do not sell personal information.</li>
            <li>We do not run third-party ad retargeting.</li>
            <li>We do not share vehicle files with anyone but the owner.</li>
          </ul>

          <h2>Retention</h2>
          <p>
            Vehicle files are retained for as long as you remain a client,
            plus two years, to support warranty claims. You can request
            deletion at any time by emailing{" "}
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
          </p>

          <h2>Your rights</h2>
          <p>
            California residents have rights under the CCPA to know, delete,
            correct, and opt-out of sale. Since we do not sell personal
            information, only the first three apply in practice. Requests are
            honored within 45 days.
          </p>

          <h2>Contact</h2>
          <p>
            Questions: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/" className="back-link">
            <span aria-hidden="true">←</span> Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
