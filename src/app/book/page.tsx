import type { Metadata } from "next";
import { Book } from "@/components/book/Book";

export const metadata: Metadata = {
  title: "Book an appointment",
  description:
    "Request a mobile detailing appointment in the Coachella Valley. Richie personally reviews every inquiry.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="eyebrow">
          <span className="dot" />
          Schedule
        </div>
        <h1>
          Introductions are
          <br />
          <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
            by appointment.
          </em>
        </h1>
        <p>
          Richie personally reviews every inquiry. Share a few details below
          and expect a reply within 24 hours with a quote and available
          windows for your vehicle.
        </p>
      </section>
      <Book />
    </main>
  );
}
