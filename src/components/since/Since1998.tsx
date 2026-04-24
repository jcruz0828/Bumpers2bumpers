import { BRAND } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SinceNumeral } from "./SinceNumeral";
import { Timeline } from "./Timeline";

/**
 * Heritage section. Split grid — giant 1998 numeral (left, scroll-scaled) and
 * 3 paragraphs of body copy (right, first has a gold italic drop-cap).
 * Below: signature block, then a full-width 4-stop timeline.
 *
 * Body copy deliberately reinforces the core positioning rule: EVERY vehicle
 * gets the same obsessive treatment — not just exotics.
 */
export function Since1998() {
  return (
    <section
      className="wrap with-top-rule"
      id="since"
      aria-labelledby="since-title"
    >
      <SectionHeader
        id="since-title"
        num="03"
        eyebrow="Heritage"
        title={
          <>
            Twenty-seven years.{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              One detailer.
            </em>
          </>
        }
      />

      <div className="since">
        <Reveal>
          <SinceNumeral />
        </Reveal>

        <Reveal className="since-body" delay={1}>
          <p>
            Richie Herrera started detailing before ceramic coatings had a name.
            Before paint-depth gauges were common. Before YouTube. He learned by
            watching masters, by ruining his own cars, by spending weekends on a
            single fender until it disappeared into the next panel.
          </p>
          <p>
            Today he runs a one-man mobile operation across the Coachella Valley.
            Exotics, daily drivers, classics, family SUVs, trucks, boats, RVs,
            motorcycles — every vehicle that pulls into a driveway gets the same
            obsessive treatment. No franchise. No staff. No shortcuts.
          </p>
          <p>
            Every car gets a file. Every file gets photographs. Every coating is
            registered with the manufacturer in the owner&rsquo;s name.
          </p>

          <div className="signature">
            <div className="sig" aria-hidden="true">Richie Herrera</div>
            <div className="who">
              <b>{BRAND.owner}</b>
              Owner · {BRAND.cert} · {BRAND.certIdNumber}
            </div>
          </div>
        </Reveal>
      </div>

      <Timeline />
    </section>
  );
}
