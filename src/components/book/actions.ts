"use server";

import {
  validateBooking,
  type BookingField,
  type BookingFormState,
} from "@/lib/booking";

const FIELDS: BookingField[] = [
  "name",
  "phone",
  "email",
  "vehicle",
  "service",
  "city",
  "notes",
];

/**
 * Booking server action. Validates and (in a production deployment) would
 * persist + notify. Here it returns a structured state object for the
 * `useActionState` consumer to render either the thank-you state or inline
 * field errors. No PII is logged.
 */
export async function submitBooking(
  _prev: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  if (formData.get("reset") === "1") {
    return { ok: false };
  }

  const raw = Object.fromEntries(
    FIELDS.map((f) => [f, String(formData.get(f) ?? "").slice(0, 5000)]),
  ) as Record<BookingField, string>;

  const { fieldErrors } = validateBooking(raw);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors,
      values: raw,
    };
  }

  // Production: send to CRM / email / SMS gateway here. Intentionally a no-op
  // in this build to keep the form verifiable without outbound calls.
  await Promise.resolve();

  return {
    ok: true,
    submittedName: raw.name.trim().split(/\s+/)[0] ?? "friend",
    submittedVehicle: raw.vehicle.trim(),
  };
}
