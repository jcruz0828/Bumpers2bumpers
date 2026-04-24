import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialsSlider } from "./TestimonialsSlider";

export function Testimonials() {
  return (
    <section
      className="wrap with-top-rule"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <SectionHeader
        id="testimonials-title"
        num="06"
        eyebrow="Testimony"
        title={
          <>
            Quiet endorsements{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              from loud garages.
            </em>
          </>
        }
      />

      <TestimonialsSlider />
    </section>
  );
}
