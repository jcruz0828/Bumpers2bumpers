"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CITIES, SERVICES } from "@/lib/data";
import type { BookingFormState } from "@/lib/booking";
import { submitBooking } from "./actions";

const INITIAL: BookingFormState = { ok: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn-primary book-submit"
      disabled={pending}
      aria-busy={pending}
    >
      <span>{pending ? "Sending…" : "Request appointment"}</span>
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <div id={id} className="field-error" role="alert">
      {message}
    </div>
  );
}

export function BookingForm() {
  const [state, formAction] = useActionState(submitBooking, INITIAL);

  if (state.ok) {
    return (
      <div className="book-thanks reveal in">
        <div className="eyebrow">
          <span className="dot" />
          Request received
        </div>
        <h3>Thank you, {state.submittedName}.</h3>
        <p className="lead">
          Richie personally reviews every inquiry. You&rsquo;ll hear back within
          24 hours with a quote and available windows for your{" "}
          {state.submittedVehicle || "vehicle"}.
        </p>
        <form action={formAction}>
          <button type="submit" name="reset" value="1" className="btn-ghost">
            <span>Submit another</span>
          </button>
        </form>
      </div>
    );
  }

  const v = state.values ?? {};
  const errs = state.fieldErrors ?? {};

  return (
    <form className="book-form" action={formAction} noValidate>
      {state.message && (
        <div className="book-form-error" role="alert">
          {state.message}
        </div>
      )}

      <div className={`book-field${errs.name ? " has-error" : ""}`}>
        <label htmlFor="book-name">Your name</label>
        <input
          id="book-name"
          name="name"
          required
          defaultValue={v.name ?? ""}
          placeholder="First and last"
          aria-invalid={Boolean(errs.name)}
          aria-describedby={errs.name ? "book-name-err" : undefined}
          autoComplete="name"
        />
        <FieldError id="book-name-err" message={errs.name} />
      </div>

      <div className="book-row">
        <div className={`book-field${errs.phone ? " has-error" : ""}`}>
          <label htmlFor="book-phone">Phone</label>
          <input
            id="book-phone"
            name="phone"
            required
            inputMode="tel"
            defaultValue={v.phone ?? ""}
            placeholder="(xxx) xxx-xxxx"
            aria-invalid={Boolean(errs.phone)}
            aria-describedby={errs.phone ? "book-phone-err" : undefined}
            autoComplete="tel"
          />
          <FieldError id="book-phone-err" message={errs.phone} />
        </div>
        <div className={`book-field${errs.email ? " has-error" : ""}`}>
          <label htmlFor="book-email">Email</label>
          <input
            id="book-email"
            name="email"
            type="email"
            required
            defaultValue={v.email ?? ""}
            placeholder="you@domain.com"
            aria-invalid={Boolean(errs.email)}
            aria-describedby={errs.email ? "book-email-err" : undefined}
            autoComplete="email"
          />
          <FieldError id="book-email-err" message={errs.email} />
        </div>
      </div>

      <div className={`book-field${errs.vehicle ? " has-error" : ""}`}>
        <label htmlFor="book-vehicle">Vehicle</label>
        <input
          id="book-vehicle"
          name="vehicle"
          required
          defaultValue={v.vehicle ?? ""}
          placeholder="Year · Make · Model"
          aria-invalid={Boolean(errs.vehicle)}
          aria-describedby={errs.vehicle ? "book-vehicle-err" : undefined}
        />
        <FieldError id="book-vehicle-err" message={errs.vehicle} />
      </div>

      <div className="book-row">
        <div className={`book-field${errs.service ? " has-error" : ""}`}>
          <label htmlFor="book-service">Service</label>
          <select
            id="book-service"
            name="service"
            defaultValue={v.service ?? SERVICES[0]!.name}
            aria-invalid={Boolean(errs.service)}
            aria-describedby={errs.service ? "book-service-err" : undefined}
          >
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          <FieldError id="book-service-err" message={errs.service} />
        </div>
        <div className={`book-field${errs.city ? " has-error" : ""}`}>
          <label htmlFor="book-city">City</label>
          <select
            id="book-city"
            name="city"
            defaultValue={v.city ?? "Palm Desert"}
            aria-invalid={Boolean(errs.city)}
            aria-describedby={errs.city ? "book-city-err" : undefined}
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <FieldError id="book-city-err" message={errs.city} />
        </div>
      </div>

      <div className={`book-field${errs.notes ? " has-error" : ""}`}>
        <label htmlFor="book-notes">Notes · concerns · preferred date</label>
        <textarea
          id="book-notes"
          name="notes"
          defaultValue={v.notes ?? ""}
          placeholder="Anything Richie should know before arriving."
          aria-invalid={Boolean(errs.notes)}
          aria-describedby={errs.notes ? "book-notes-err" : undefined}
        />
        <FieldError id="book-notes-err" message={errs.notes} />
      </div>

      <SubmitButton />
    </form>
  );
}
