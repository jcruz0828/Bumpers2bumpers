import { CITIES } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValleyMap } from "./ValleyMap";

/**
 * § 04 — "We Come To You". Explains the mobile model without making it sound
 * exclusive: a van with water + power + climate-controlled chemistry shows up
 * in a driveway. Right column lists every served city so nobody self-selects
 * out.
 */
export function USP() {
  return (
    <section className="wrap with-top-rule" id="usp" aria-labelledby="usp-title">
      <SectionHeader
        id="usp-title"
        num="04"
        eyebrow="We Come To You"
        title={
          <>
            The vehicle{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              doesn&rsquo;t move.
            </em>{" "}
            Richie does.
          </>
        }
      />

      <div className="usp">
        <Reveal>
          <ValleyMap />
        </Reveal>

        <Reveal className="usp-body" delay={1}>
          <p className="lead">
            A mobile unit carries its own filtered water, pure-sine inverter
            power, climate-controlled chemistry, and a full set of professional
            polishers. Your driveway becomes the workshop. Your Saturday stays
            yours.
          </p>

          <div className="cities" aria-label="Cities served">
            {CITIES.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>

          <div className="usp-stats">
            <div>
              <div className="figure">{CITIES.length}</div>
              <div className="caption">Cities served</div>
            </div>
            <div>
              <div className="figure">1</div>
              <div className="caption">Vehicle at a time</div>
            </div>
            <div>
              <div className="figure">0</div>
              <div className="caption">Hidden fees</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
