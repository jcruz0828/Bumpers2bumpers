"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FAQS = [
  {
    q: "Do you bring your own water and power?",
    a: "Yes. Richie arrives fully self-contained — generator, fresh water tank, pressure washer, and all chemistry. You don't need to provide anything.",
  },
  {
    q: "How long does a detail take?",
    a: "An Executive Detail typically runs 3–4 hours. Paint correction starts at 6 hours and can go to 14+ for a full Showroom Package. You'll get a time estimate when you book.",
  },
  {
    q: "Do you work on everyday cars, not just exotics?",
    a: "Absolutely. Most of Richie's clients are teachers, families, and daily-driver owners. The same process and attention applies to a 2012 Honda Civic as to a Ferrari. The vehicle determines the chemistry and technique — not the brand.",
  },
  {
    q: "Where exactly do you serve?",
    a: "The entire Coachella Valley: Palm Springs, Cathedral City, Rancho Mirage, Palm Desert, Indian Wells, La Quinta, Indio, Coachella, Desert Hot Springs, and surrounding areas. If you're unsure, just ask when booking.",
  },
  {
    q: "What is ceramic coating, and do I need it?",
    a: "Ceramic coating is a liquid polymer that bonds to your paint and creates a hard, hydrophobic layer. It resists UV, chemicals, and light scratches, and keeps the car cleaner longer. It's not required, but it dramatically extends the value of a paint correction. Richie will tell you honestly if your vehicle is a good candidate.",
  },
  {
    q: "Can you remove pet hair and kid smells?",
    a: "Yes. Steam extraction, enzyme odor neutralizers, and pet-hair removal are part of the Interior Restoration package. Richie has dealt with worse — he won't judge.",
  },
  {
    q: "How do I pay?",
    a: "Payment is due when the work is done and you're satisfied. Richie accepts cash, card, Venmo, and Zelle. No deposit required for most services.",
  },
  {
    q: "Do you work on RVs, boats, or motorcycles?",
    a: "Yes to all three. RV and boat details require more lead time. Let Richie know the make, model, and condition when booking so he can schedule appropriately.",
  },
] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="wrap with-top-rule" id="faq" aria-labelledby="faq-title">
      <SectionHeader
        id="faq-title"
        num="08"
        eyebrow="Common questions"
        title={
          <>
            Straight answers,{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              no fluff.
            </em>
          </>
        }
      />

      <dl className="faq-list">
        {FAQS.map((item, i) => (
          <div key={i} className={`faq-item${open === i ? " is-open" : ""}`}>
            <dt>
              <button
                type="button"
                className="faq-q"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-q-${i}`}
              >
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  {open === i ? "−" : "+"}
                </span>
              </button>
            </dt>
            <dd
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className="faq-a"
              hidden={open !== i}
            >
              <p>{item.a}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
