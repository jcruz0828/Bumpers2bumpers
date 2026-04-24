import { BRAND } from "@/lib/data";

const STATS = [
  { value: "4.9", label: "Google rating", suffix: "★" },
  { value: "180+", label: "verified reviews", suffix: "" },
  { value: String(new Date().getFullYear() - BRAND.foundedYear), label: "years serving the Valley", suffix: "" },
  { value: "15", label: "cities covered", suffix: "" },
] as const;

export function SocialProof() {
  return (
    <div className="social-proof" aria-label="Trust statistics">
      {STATS.map((s) => (
        <div key={s.label} className="sp-stat">
          <span className="sp-value">
            {s.value}
            {s.suffix && <span className="sp-suffix" aria-hidden="true">{s.suffix}</span>}
          </span>
          <span className="sp-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
