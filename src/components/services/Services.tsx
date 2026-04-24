import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/data";
import { ServiceRow } from "./ServiceRow";

export function Services() {
  return (
    <section
      className="wrap with-top-rule"
      id="services"
      aria-labelledby="services-title"
    >
      <SectionHeader
        id="services-title"
        num="01"
        eyebrow="The Work"
        title={
          <>
            A catalogue of{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              obsessions.
            </em>
          </>
        }
      />

      <div className="services">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.slug} service={s} index={i} />
        ))}
      </div>

      {/*
        Footer row — the single strongest textual signal that B2B details
        more than just the 7 signature services. Links to /services for the
        full catalogue (RV / boat / motorcycle / fleet called out by name).
      */}
      <Link href="/services" className="services-footer">
        <span className="label">
          <b>Also:</b> Boats · RVs · Motorcycles · Fleet — by arrangement
        </span>
        <span className="arrow" aria-hidden="true">↗ Full catalogue</span>
      </Link>
    </section>
  );
}
