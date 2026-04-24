import { BRAND } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

const EXPECTATIONS: readonly [string, string][] = [
  ["Response", "< 24 hrs"],
  ["Consultation", "Complimentary"],
  ["Minimum engagement", "4 hrs"],
  ["Deposit", "25%"],
  ["Cancellation", "48 hrs"],
  ["Weather contingency", "Rescheduled"],
];

export function BookingSide() {
  return (
    <Reveal className="book-side" delay={1}>
      <div>
        <div className="eyebrow">
          <span className="dot" />
          What to expect
        </div>
        <h3>Structured. Unhurried.</h3>
      </div>

      <div>
        {EXPECTATIONS.map(([k, v]) => (
          <div key={k} className="line-item">
            <span>{k}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>

      <div className="direct">
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          <span className="dot" />
          Direct line
        </div>
        <h3>
          <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phoneDisplay}</a>
        </h3>
        <div className="micro">
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
        </div>
      </div>
    </Reveal>
  );
}
