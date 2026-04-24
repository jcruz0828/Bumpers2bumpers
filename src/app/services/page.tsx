import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services · Full catalogue",
  description:
    "Every detailing service Richie performs — exterior, interior, signature packages, plus RV, boat, motorcycle, and fleet. Every vehicle, the same standard.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="eyebrow">
          <span className="dot" />
          Full catalogue
        </div>
        <h1>
          Every service.
          <br />
          Every vehicle.
        </h1>
        <p>
          Daily drivers, family SUVs, classics, exotics, boats, RVs,
          motorcycles, and fleets — all receive the same process and the same
          documentation. Browse the catalogue below, or start a request on the{" "}
          <Link href="/book" style={{ color: "var(--color-accent)" }}>
            booking page
          </Link>
          .
        </p>
      </section>

      <section className="wrap">
        <div className="catalogue">
          {SERVICE_CATEGORIES.map((group) => (
            <div key={group.id} className="group">
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80 }}>
          <div className="eyebrow">
            <span className="dot" />
            Signature rows
          </div>
          <div className="services" style={{ marginTop: 32 }}>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="service-row"
              >
                <div className="service-num">{s.num}</div>
                <div className="service-main">
                  <div className="service-name">
                    {s.name}{" "}
                    <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
                      {s.tag}
                    </em>
                  </div>
                  <p className="service-desc">{s.desc}</p>
                </div>
                <div className="service-arrow" aria-hidden="true">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link href="/" className="back-link">
          <span aria-hidden="true">←</span> Back to home
        </Link>
      </section>
    </main>
  );
}
