import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookingForm } from "./BookingForm";
import { BookingSide } from "./BookingSide";

/**
 * § 07 — "Schedule". Booking form on the left (client island, server action
 * validated), structured-expectations + direct-line aside on the right.
 * Section anchor `#book` is what nav + CTAs link to.
 */
export function Book() {
  return (
    <section className="wrap with-top-rule" id="book" aria-labelledby="book-title">
      <SectionHeader
        id="book-title"
        num="07"
        eyebrow="Schedule"
        title={
          <>
            Introductions are{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              by appointment.
            </em>
          </>
        }
      />

      <div className="book-grid">
        <BookingForm />
        <BookingSide />
      </div>
    </section>
  );
}
