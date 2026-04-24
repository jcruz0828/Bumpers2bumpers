import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GALLERY } from "@/lib/data";
import { slugify } from "@/lib/slug";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return GALLERY.map((g) => ({ slug: slugify(g.tag) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = GALLERY.find((g) => slugify(g.tag) === slug);
  if (!item) return { title: "Gallery" };
  return {
    title: item.tag,
    description: `${item.tag} — detailed by Bumpers2Bumpers.`,
    alternates: { canonical: `/gallery/${slug}` },
  };
}

const KIND_LABEL: Record<string, string> = {
  exotic: "Exotic",
  truck: "Truck",
  suv: "SUV",
  classic: "Classic",
  daily: "Daily driver",
  other: "Other",
};

export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = GALLERY.find((g) => slugify(g.tag) === slug);
  if (!item) notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="eyebrow">
          <span className="dot" />
          {KIND_LABEL[item.kind] ?? "Work"}
        </div>
        <h1>{item.tag}</h1>
      </section>

      <section className="wrap" style={{ paddingTop: "calc(var(--pad-y) * 0.4)" }}>
        <div
          style={{
            position: "relative",
            aspectRatio: "4 / 5",
            maxWidth: 720,
            margin: "0 auto",
            overflow: "hidden",
            border: "1px solid var(--color-line)",
          }}
        >
          <Image
            src={item.url}
            alt={item.tag}
            fill
            sizes="(max-width: 860px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <Link href="/gallery" className="back-link">
          <span aria-hidden="true">←</span> All gallery
        </Link>
      </section>
    </main>
  );
}
