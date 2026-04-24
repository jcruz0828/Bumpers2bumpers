import type { Testimonial } from "@/lib/types";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  t: Testimonial;
  index: number;
};

export function TestimonialCard({ t, index }: Props) {
  const delay = ((index % 3) + 1) as 1 | 2 | 3;
  return (
    <Reveal className="t-card" delay={delay}>
      <div className="quote-mark" aria-hidden="true">
        &ldquo;
      </div>
      <div
        className="stars"
        aria-label={`${t.stars.length} out of 5 stars`}
        role="img"
      >
        {t.stars}
      </div>
      <blockquote>{t.quote}</blockquote>
      <div className="attr">
        <div className="who">
          <b>{t.name}</b>
          <span>{t.title}</span>
        </div>
        <div className="vehicle" aria-label="Vehicle">
          {t.vehicle}
        </div>
      </div>
    </Reveal>
  );
}
