import { SectionHeader } from "@/components/ui/SectionHeader";
import { GalleryInteractive } from "./GalleryInteractive";

export function Gallery() {
  return (
    <section
      className="wrap with-top-rule"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <SectionHeader
        id="gallery-title"
        num="05"
        eyebrow="Recent Visits"
        title={
          <>
            A quiet{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              ledger
            </em>{" "}
            of work.
          </>
        }
      />

      <GalleryInteractive />
    </section>
  );
}
