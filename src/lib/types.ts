export type Service = {
  num: string;
  slug: string;
  name: string;
  /** secondary italic tag shown after the name */
  tag: string;
  desc: string;
  img: string;
  /** starting price shown on card, e.g. "from $149" */
  price: string;
  /** approximate time range, e.g. "2–3 hrs" */
  duration: string;
  /** bullet list of what's included, shown on detail page */
  includes: readonly string[];
};

export type Testimonial = {
  stars: string;
  quote: string;
  name: string;
  title: string;
  vehicle: string;
};

export type GalleryItem = {
  url: string;
  tag: string;
  kind: "exotic" | "daily" | "truck" | "suv" | "classic" | "other";
};

export type BeforeAfter = {
  slug: string;
  before: string;
  after: string;
  label: string;
  vehicle: string;
};

export type ValleyPin = {
  /** viewport percent top (0–100) */
  t: number;
  /** viewport percent left (0–100) */
  l: number;
  name: string;
  /** slightly larger/brighter pin */
  hl?: boolean;
};
