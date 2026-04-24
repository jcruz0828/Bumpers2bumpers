import { CITIES, SERVICES } from "./data";

export const BOOKING_SERVICE_NAMES = SERVICES.map((s) => s.name);

export type BookingFormState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<BookingField, string>>;
  values?: Partial<Record<BookingField, string>>;
  submittedName?: string;
  submittedVehicle?: string;
};

export type BookingField =
  | "name"
  | "phone"
  | "email"
  | "vehicle"
  | "service"
  | "city"
  | "notes";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Accepts digits + common separators, ignores formatting; enforces 10+ digits. */
const PHONE_DIGITS_RE = /\d/g;

export function validateBooking(data: Record<BookingField, string>): {
  fieldErrors: Partial<Record<BookingField, string>>;
} {
  const fieldErrors: Partial<Record<BookingField, string>> = {};

  const name = data.name.trim();
  if (name.length < 2) fieldErrors.name = "Please share your name.";
  else if (name.length > 120) fieldErrors.name = "Too long.";

  const phoneDigits = data.phone.match(PHONE_DIGITS_RE)?.length ?? 0;
  if (phoneDigits < 10) fieldErrors.phone = "Enter a valid phone number.";

  const email = data.email.trim();
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Enter a valid email.";

  const vehicle = data.vehicle.trim();
  if (vehicle.length < 3) fieldErrors.vehicle = "Year · make · model.";
  else if (vehicle.length > 160) fieldErrors.vehicle = "Too long.";

  if (!BOOKING_SERVICE_NAMES.includes(data.service))
    fieldErrors.service = "Choose a service.";

  if (!CITIES.includes(data.city as (typeof CITIES)[number]))
    fieldErrors.city = "Choose a city.";

  if (data.notes.length > 2000) fieldErrors.notes = "Keep notes under 2,000 characters.";

  return { fieldErrors };
}
