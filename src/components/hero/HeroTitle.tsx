/**
 * Three-line hero headline with letter-rise on mount.
 * Middle line is italic gold. Each line animates via CSS keyframe `hero-rise`
 * (0.9s cubic-bezier(.2,.7,.1,1), 180ms stagger) — see globals.css .hero-title.
 *
 * Server component — no client JS needed; the rise is pure CSS.
 */
type Props = {
  lines: readonly [string, string, string];
  /** used by the parent section as its <h1>; pass id for aria-labelledby wiring */
  id?: string;
};

export function HeroTitle({ lines, id }: Props) {
  return (
    <h1 id={id} className="display hero-title">
      <span className="line">
        <span>{lines[0]}</span>
      </span>
      <span className="line">
        <span style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
          {lines[1]}
        </span>
      </span>
      <span className="line">
        <span>{lines[2]}</span>
      </span>
    </h1>
  );
}
