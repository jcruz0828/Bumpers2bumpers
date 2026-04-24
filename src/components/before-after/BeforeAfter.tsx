import { SectionHeader } from "@/components/ui/SectionHeader";
import { BEFORE_AFTER } from "@/lib/data";
import { BASlider } from "./BASlider";

export function BeforeAfter() {
  return (
    <section
      className="wrap with-top-rule"
      id="dossier"
      aria-labelledby="dossier-title"
    >
      <SectionHeader
        id="dossier-title"
        num="02"
        eyebrow="Dossier"
        title={
          <>
            Same car.{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              Eight hours apart.
            </em>
          </>
        }
      />
      <div className="ba-wrap">
        {BEFORE_AFTER.map((b, i) => (
          <BASlider key={b.slug} item={b} idx={i} />
        ))}
      </div>
    </section>
  );
}
