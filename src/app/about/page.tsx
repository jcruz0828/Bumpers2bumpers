import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "About · Richie Herrera",
  description:
    "Twenty-seven years, one detailer. The practice, certifications, and standards behind Bumpers2Bumpers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="eyebrow">
          <span className="dot" />
          About
        </div>
        <h1>
          Twenty-seven years.
          <br />
          <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
            One detailer.
          </em>
        </h1>
        <p>
          Richie Herrera has practiced mobile detailing across the Coachella
          Valley since {BRAND.foundedYear}. No franchise. No staff. No
          shortcuts.
        </p>
      </section>

      <section className="wrap">
        <div
          className="legal"
          style={{ maxWidth: "70ch", margin: "0 auto" }}
        >
          <p>
            Richie started detailing before ceramic coatings had a name. Before
            paint-depth gauges were common. Before YouTube. He learned by
            watching masters, by ruining his own cars, and by spending weekends
            on a single fender until it disappeared into the next panel.
          </p>

          <h2>Who the work is for</h2>
          <p>
            Exotics, daily drivers, classics, family SUVs, trucks, boats, RVs,
            motorcycles — every vehicle that pulls into a driveway gets the
            same obsessive treatment. A Ferrari 812 and a 2012 Civic receive
            the same process, the same documentation, and the same warranty
            language. The only variable is scope.
          </p>

          <h2>Documentation</h2>
          <p>
            Every vehicle gets a file. Every file gets photographs. Every
            ceramic or graphene coating is registered with the manufacturer in
            the owner&rsquo;s name — not a shop&rsquo;s — so the warranty
            travels with the car.
          </p>

          <h2>Certification</h2>
          <p>
            Richie is certified by the International Detailing Association
            ({BRAND.certIdNumber}). The IDA certification covers surface
            decontamination, multi-stage paint correction, ceramic coating
            application, and interior restoration chemistry. It was earned by
            examination, not by paying a franchise fee.
          </p>

          <h2>How to engage</h2>
          <p>
            Bumpers2Bumpers operates by appointment only — not as a velvet rope,
            but because Richie personally handles every vehicle. One car at a
            time keeps the standard honest. Share a few details on the{" "}
            <Link
              href="/book"
              style={{ color: "var(--color-accent)", fontStyle: "italic" }}
            >
              booking page
            </Link>{" "}
            and expect a response within 24 hours.
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
