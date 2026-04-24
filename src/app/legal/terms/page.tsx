import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${BRAND.name}.`,
  alternates: { canonical: "/legal/terms" },
  robots: { index: true, follow: false },
};

const UPDATED = "April 2026";

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="eyebrow">
          <span className="dot" />
          Legal
        </div>
        <h1>Terms of Service</h1>
        <p>Last updated {UPDATED}.</p>
      </section>

      <section className="wrap">
        <div className="legal" style={{ margin: "0 auto" }}>
          <p>
            These terms govern your engagement with {BRAND.name} for mobile
            detailing services. By booking an appointment you agree to the
            terms below.
          </p>

          <h2>Appointments</h2>
          <ul>
            <li>Bookings are by appointment only and subject to availability.</li>
            <li>A 25% deposit is required to confirm the appointment.</li>
            <li>
              Cancellations with less than 48 hours&rsquo; notice forfeit the
              deposit.
            </li>
            <li>
              Inclement weather may force rescheduling; you will not be
              penalized for weather-driven reschedules.
            </li>
          </ul>

          <h2>Scope of work</h2>
          <p>
            The scope of each appointment is confirmed in writing before work
            begins. Changes mid-service require mutual agreement and may
            affect duration and pricing. A minimum engagement of 4 hours
            applies.
          </p>

          <h2>Vehicle condition</h2>
          <p>
            Pre-existing damage (rust, deep paint defects beyond measured
            correction limits, structural issues, interior contamination
            beyond what is disclosed) is documented at arrival and shared with
            the owner. We do not accept liability for pre-existing conditions.
          </p>

          <h2>Ceramic & graphene coatings</h2>
          <p>
            Coatings are applied per manufacturer specification and registered
            in the owner&rsquo;s name. Manufacturer warranty terms apply and
            will be shared in writing before application. Proper aftercare
            (wash schedule, chemistry limits) is a condition of warranty.
          </p>

          <h2>Payment</h2>
          <p>
            Balance is due upon completion by card or ACH. Returned payments
            incur a $35 fee.
          </p>

          <h2>Liability</h2>
          <p>
            Except for damage directly caused by the work performed, liability
            is limited to the amount paid for the service in question.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the State of California,
            County of Riverside.
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
