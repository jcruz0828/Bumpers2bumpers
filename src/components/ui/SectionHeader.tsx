import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  num: string;
  eyebrow: string;
  title: ReactNode;
  id?: string;
};

/**
 * Editorial section header shared by every section. Two-column grid on desktop:
 *   left = mono "§ NN EYEBROW" runhead
 *   right = large h2 with optional italic-gold emphasis nested inside
 * Children on both sides are individually Reveal-animated.
 */
export function SectionHeader({ num, eyebrow, title, id }: Props) {
  return (
    <div className="section-hd" id={id}>
      <Reveal className="num">
        <span className="label">§ {num}</span>
        {eyebrow}
      </Reveal>
      <Reveal as="h2" className="h2" delay={1}>
        {title}
      </Reveal>
    </div>
  );
}
