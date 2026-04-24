import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return {
    title: `${service.name} · Bumpers2Bumpers`,
    description: service.desc,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="eyebrow">
          <span className="dot" />
          Service · {service.num}
        </div>
        <h1>
          {service.name}
          <br />
          <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
            {service.tag}
          </em>
        </h1>
        <p>{service.desc}</p>

        <div className="svc-detail-meta">
          <div className="svc-detail-stat">
            <span className="svc-detail-stat-label">Starting at</span>
            <span className="svc-detail-stat-value">{service.price}</span>
          </div>
          <div className="svc-detail-divider" aria-hidden="true" />
          <div className="svc-detail-stat">
            <span className="svc-detail-stat-label">Duration</span>
            <span className="svc-detail-stat-value">{service.duration}</span>
          </div>
          <div className="svc-detail-divider" aria-hidden="true" />
          <div className="svc-detail-stat">
            <span className="svc-detail-stat-label">Location</span>
            <span className="svc-detail-stat-value">Your driveway</span>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: "calc(var(--pad-y) * 0.4)" }}>
        <div className="svc-detail-grid">
          <div className="svc-detail-img-col">
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", border: "1px solid var(--color-line)" }}>
              <Image
                src={service.img}
                alt={`${service.name} reference image`}
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover", filter: "grayscale(0.2) brightness(0.75)" }}
              />
            </div>
          </div>

          <div className="svc-detail-content-col">
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="dot" />
              What&rsquo;s included
            </div>
            <ul className="svc-includes">
              {service.includes.map((item) => (
                <li key={item}>
                  <span className="svc-includes-check" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid var(--color-line)" }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                <span className="dot" />
                Works on every vehicle
              </div>
              <p style={{ color: "var(--color-fg-2)", lineHeight: 1.7, fontSize: 15 }}>
                Exotics, daily drivers, classics, family SUVs, trucks — the same process and
                standard applies regardless of make or model. Richie arrives with his own
                power and water. You don&rsquo;t need to go anywhere.
              </p>
            </div>

            <div style={{ marginTop: 40 }}>
              <Link href="/#book" className="btn-primary">
                <span>Book this service</span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <Link href="/services" className="back-link">
          <span aria-hidden="true">←</span> All services
        </Link>
      </section>
    </main>
  );
}
