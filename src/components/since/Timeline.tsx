import { Reveal } from "@/components/motion/Reveal";

const ITEMS = [
  {
    y: "1998",
    t: "Begins",
    d: "First paying clients in Indio. A rag, a bucket, and too much patience.",
  },
  {
    y: "2007",
    t: "Certified",
    d: "International Detailing Association professional certification.",
  },
  {
    y: "2014",
    t: "Ceramic Era",
    d: "Authorized installer for professional-grade ceramic coating systems.",
  },
  {
    y: "2026",
    t: "Today",
    d: "By appointment. Daily drivers, family SUVs, concours entries — same standard.",
  },
] as const;

export function Timeline() {
  return (
    <div className="timeline" aria-label="Practice timeline">
      {ITEMS.map((it, i) => (
        <Reveal
          key={it.y}
          className="tl-item"
          delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
        >
          <div className="y">{it.y}</div>
          <div className="t">{it.t}</div>
          <div className="d">{it.d}</div>
        </Reveal>
      ))}
    </div>
  );
}
