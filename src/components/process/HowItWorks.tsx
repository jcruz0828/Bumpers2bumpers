import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  {
    num: "01",
    title: "Book online",
    desc: "Pick your service, share your vehicle details, and choose a window that works. Takes two minutes.",
  },
  {
    num: "02",
    title: "We come to you",
    desc: "Richie arrives at your driveway with his own power, water, and equipment. You don't lift a finger.",
  },
  {
    num: "03",
    title: "Drive away clean",
    desc: "Inspect the finished vehicle, ask any questions. Pay when satisfied. No shop drop-off, no waiting rooms.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="how-wrap" aria-labelledby="how-title">
      <p className="how-eyebrow" id="how-title">How it works</p>
      <ol className="how-steps" role="list">
        {STEPS.map((s, i) => (
          <Reveal key={s.num} as="li" delay={((i + 1) as 1 | 2 | 3)} className="how-step">
            <span className="how-num" aria-hidden="true">{s.num}</span>
            <strong className="how-title">{s.title}</strong>
            <p className="how-desc">{s.desc}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
