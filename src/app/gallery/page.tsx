import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GALLERY } from "@/lib/data";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A ledger of recent work — exotics, daily drivers, classics, trucks, SUVs. Every vehicle, the same obsession.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="eyebrow">
          <span className="dot" />
          Recent visits
        </div>
        <h1>
          A ledger of
          <br />
          <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
            recent work.
          </em>
        </h1>
        <p>
          Every vehicle leaves with photographs in its file. A sampling below —
          from a teacher&rsquo;s daily driver to a concours entry. Same
          process, same standard.
        </p>
      </section>

      <section className="wrap">
        <div className="grid-gallery">
          {GALLERY.map((item) => {
            const slug = slugify(item.tag);
            return (
              <Link
                key={slug}
                href={`/gallery/${slug}`}
                className="tile"
                aria-label={item.tag}
              >
                <Image
                  src={item.url}
                  alt={item.tag}
                  width={800}
                  height={1000}
                  sizes="(max-width: 860px) 50vw, 33vw"
                />
                <span className="tag">{item.tag}</span>
              </Link>
            );
          })}
        </div>

        <Link href="/" className="back-link">
          <span aria-hidden="true">←</span> Back to home
        </Link>
      </section>
    </main>
  );
}
