import type {
  BeforeAfter,
  GalleryItem,
  Service,
  Testimonial,
  ValleyPin,
} from "./types";

/* ────────────────────────────────────────────────────────────
   BRAND · contact · geo
   ──────────────────────────────────────────────────────────── */
export const BRAND = {
  name: "Bumpers2Bumpers Mobile Car Detail Service LLC",
  shortName: "Bumpers2Bumpers",
  owner: "Richie Herrera",
  phoneDisplay: "(760) 555·0198",
  phoneTel: "+17605550198",
  email: "richie@bumpers2bumpers.detail",
  handle: "@bumpers2bumpers",
  foundedYear: 1998,
  coords: { lat: 33.7456, lon: -116.3744 },
  coordsDisplay: "33.7456° N · 116.3744° W",
  region: "Coachella Valley · CA",
  cert: "Cert. Prof. Detailer · IDA",
  certIdNumber: "IDA Cert #4482",
} as const;

/* ────────────────────────────────────────────────────────────
   NAV
   ──────────────────────────────────────────────────────────── */
export const NAV_LINKS = [
  { href: "/#services",     label: "Services" },
  { href: "/#since",        label: "Since 1998" },
  { href: "/#gallery",      label: "Gallery" },
  { href: "/#testimonials", label: "Testimony" },
  { href: "/#book",         label: "Booking" },
] as const;

/* ────────────────────────────────────────────────────────────
   HERO IMAGES
   ──────────────────────────────────────────────────────────── */
export const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=2400&q=85",
    alt: "Dark detailing bay with a single vehicle under moody lighting.",
  },
  {
    url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=2400&q=85",
    alt: "Silver sport sedan polished to a glass-like finish.",
  },
  {
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2400&q=85",
    alt: "Showroom-ready sports car captured in studio half-light.",
  },
] as const;

/* ────────────────────────────────────────────────────────────
   MARQUEE · mix of exotic + everyday.
   ──────────────────────────────────────────────────────────── */
export const MARQUEE_BRANDS = [
  "Ferrari",
  "Toyota",
  "Porsche",
  "Ford",
  "Rolls-Royce",
  "Honda",
  "Lamborghini",
  "Chevrolet",
  "Bentley",
  "Jeep",
  "Mercedes",
  "RAM",
] as const;

/* ────────────────────────────────────────────────────────────
   SERVICES · 7 signature rows for homepage.
   Full catalogue lives on /services.
   ──────────────────────────────────────────────────────────── */
export const SERVICES: readonly Service[] = [
  {
    num: "01",
    slug: "showroom-package",
    name: "Showroom Package",
    tag: "Concours",
    desc: "Multi-stage paint correction, ceramic coating, full interior restoration. 10–14 hours. For vehicles meant to be looked at twice.",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&q=80",
    price: "from $800",
    duration: "10–14 hrs",
    includes: [
      "Multi-stage paint correction (2–3 stage)",
      "Ceramic coating (3-year rated)",
      "Full interior steam extraction",
      "Leather clean & condition",
      "Engine bay detail",
      "Wheel & caliper detail",
      "Glass treatment inside and out",
      "Paint-depth gauge measurement before and after",
    ],
  },
  {
    num: "02",
    slug: "executive-detail",
    name: "Executive Detail",
    tag: "Weekly",
    desc: "Full exterior decontamination, ceramic spray sealant, leather conditioning, steam-sanitized interior. The standard a daily-driver deserves.",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=80",
    price: "from $249",
    duration: "3–4 hrs",
    includes: [
      "Hand wash & clay bar decon",
      "Ceramic spray sealant",
      "Wheel & tire detail",
      "Interior vacuum & wipe-down",
      "Leather conditioning",
      "Steam-sanitized surfaces",
      "Glass cleaned inside and out",
      "Tire dressing",
    ],
  },
  {
    num: "03",
    slug: "paint-correction",
    name: "Paint Correction",
    tag: "1-, 2-, 3-stage",
    desc: "Swirl removal, scratch removal, oxidation reversal under controlled lighting. Measured with a paint-depth gauge before every pass.",
    img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80",
    price: "from $350",
    duration: "6–10 hrs",
    includes: [
      "Paint-depth gauge measurement",
      "Machine polish — 1, 2, or 3 stages based on condition",
      "Swirl and fine scratch removal",
      "Oxidation reversal",
      "Controlled lighting inspection",
      "Final wipe-down & IPA panel wipe",
      "Coating prep (sealant or ceramic add-on available)",
    ],
  },
  {
    num: "04",
    slug: "ceramic-graphene",
    name: "Ceramic & Graphene",
    tag: "1yr · 3yr · 5yr",
    desc: "Professional-grade coatings applied on-site. Hydrophobic, UV-stable, chemical-resistant. Warranty registered in the owner's name.",
    img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=900&q=80",
    price: "from $600",
    duration: "4–6 hrs",
    includes: [
      "Paint decontamination & prep wash",
      "IPA panel wipe for bonding",
      "Professional ceramic or graphene coating application",
      "Warranty registration in owner's name",
      "1-year, 3-year, or 5-year rated options",
      "UV-stable, hydrophobic, chemical-resistant finish",
      "Wheel coating available as add-on",
    ],
  },
  {
    num: "05",
    slug: "interior-restoration",
    name: "Interior Restoration",
    tag: "Leather · cloth · Alcantara",
    desc: "Deep steam extraction, leather reconditioning, Alcantara revival, pet-hair removal, odor neutralization. Kid-safe chemistry throughout.",
    img: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=900&q=80",
    price: "from $199",
    duration: "3–5 hrs",
    includes: [
      "Full vacuum — seats, carpets, trunk",
      "Steam extraction for fabric & carpets",
      "Leather clean, condition & protect",
      "Alcantara revival (where applicable)",
      "Pet hair removal",
      "Enzyme odor neutralization",
      "Dash, trim & vent dressing",
      "Interior glass cleaned",
      "Kid-safe, fragrance-free chemistry available on request",
    ],
  },
  {
    num: "06",
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    tag: "OEM-clear",
    desc: "Multi-stage wet sanding, polishing, UV sealant. Restored to OEM clarity — not the yellow plastic everyone else accepts.",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&q=80",
    price: "from $89",
    duration: "1–2 hrs",
    includes: [
      "Multi-stage wet sanding (400–2000 grit)",
      "Machine polish to optical clarity",
      "UV-stable sealant coat",
      "Before and after photo documentation",
      "Both lenses included in base price",
    ],
  },
  {
    num: "07",
    slug: "fleet-collections",
    name: "Fleet & Collections",
    tag: "On retainer",
    desc: "For households or companies with multiple vehicles. Scheduled rotation, dedicated file per vehicle, quarterly paint-health reports.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    price: "custom quote",
    duration: "scheduled",
    includes: [
      "Dedicated file per vehicle (condition tracking)",
      "Scheduled maintenance rotation",
      "Quarterly paint-health reports",
      "Priority scheduling",
      "Consistent detailer (Richie) — no hand-offs",
      "Available for households, dealerships, and corporate fleets",
    ],
  },
] as const;

/* ────────────────────────────────────────────────────────────
   TESTIMONIALS · deliberately mixed: exotic / daily driver / family SUV.
   ──────────────────────────────────────────────────────────── */
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    stars: "★★★★★",
    quote:
      "Richie treats my 812 like it belongs in a museum. Two years in, still beads like day one.",
    name: "D. Pemberton",
    title: "Collector · Indian Wells",
    vehicle: "Ferrari 812 Superfast",
  },
  {
    stars: "★★★★★",
    quote:
      "I'm a teacher — my Civic sees a lot of miles. Richie gave it the same attention he gives his exotic-owner clients. Showed up in my driveway at 8 a.m., quoted honestly, left it looking new.",
    name: "M. Alvarado",
    title: "Teacher · Indio",
    vehicle: "2015 Honda Civic",
  },
  {
    stars: "★★★★★",
    quote:
      "Three kids, a dog, and years of spilled juice boxes in the Tahoe. He pulled things out of those seats I didn't want to see. Smells new. Looks new. Worth every penny.",
    name: "The Harpers",
    title: "Family · Palm Desert",
    vehicle: "Chevrolet Tahoe",
  },
  {
    stars: "★★★★★",
    quote:
      "I manage a small fleet for our real estate office — seven vehicles, all different ages and conditions. Richie built a rotation schedule, keeps a file on each one, and never once showed up late. It's the most professional vendor relationship I have.",
    name: "C. Noriega",
    title: "Broker · Rancho Mirage",
    vehicle: "Office Fleet · 7 vehicles",
  },
  {
    stars: "★★★★★",
    quote:
      "The headlights on my Tacoma were so yellow I failed the smog prep check. Richie restored them in under two hours. Passed the next day. Charged me less than any shop quoted. I'll never go anywhere else.",
    name: "J. Morales",
    title: "Contractor · Cathedral City",
    vehicle: "2016 Toyota Tacoma TRD",
  },
  {
    stars: "★★★★★",
    quote:
      "I've owned Porsches for thirty years and had them detailed across three states. Richie is the first detailer who measured the paint before touching it and explained exactly what he was going to do and why. That's rare.",
    name: "R. Whitfield",
    title: "Collector · Palm Springs",
    vehicle: "Porsche 911 GT3 RS",
  },
  {
    stars: "★★★★★",
    quote:
      "We had our wedding car detailed the morning of the ceremony. Richie was done by 9 a.m., didn't disturb anything we'd set up, and left the Rolls looking like it came out of the factory. Exactly what we needed.",
    name: "T. & S. Okafor",
    title: "Newlyweds · La Quinta",
    vehicle: "Rolls-Royce Ghost",
  },
  {
    stars: "★★★★★",
    quote:
      "My F-150 is a work truck — it earns its dirt. I book Richie once a month to keep it presentable for client site visits. He's reliable, fast, and never tries to upsell me on things I don't need.",
    name: "A. Reyes",
    title: "General Contractor · Coachella",
    vehicle: "2021 Ford F-150",
  },
] as const;

/* ────────────────────────────────────────────────────────────
   CITIES · 15 served
   ──────────────────────────────────────────────────────────── */
export const CITIES = [
  "Palm Springs",
  "Cathedral City",
  "Rancho Mirage",
  "Palm Desert",
  "Indian Wells",
  "La Quinta",
  "Indio",
  "Coachella",
  "Desert Hot Springs",
  "Thousand Palms",
  "Bermuda Dunes",
  "Thermal",
  "Mecca",
  "North Shore",
  "Salton City",
] as const;

/* ────────────────────────────────────────────────────────────
   VALLEY MAP PINS (percent positions for USP section)
   ──────────────────────────────────────────────────────────── */
export const VALLEY_PINS: readonly ValleyPin[] = [
  { t: 12, l: 22, name: "Desert Hot Springs" },
  { t: 22, l: 32, name: "Palm Springs", hl: true },
  { t: 30, l: 42, name: "Cathedral City" },
  { t: 36, l: 52, name: "Rancho Mirage" },
  { t: 44, l: 58, name: "Palm Desert", hl: true },
  { t: 52, l: 65, name: "Indian Wells" },
  { t: 58, l: 70, name: "La Quinta" },
  { t: 48, l: 78, name: "Indio", hl: true },
  { t: 66, l: 78, name: "Coachella" },
  { t: 78, l: 72, name: "Thermal" },
  { t: 86, l: 64, name: "Mecca" },
  { t: 90, l: 40, name: "Salton City" },
  { t: 78, l: 30, name: "North Shore" },
  { t: 42, l: 72, name: "Bermuda Dunes" },
  { t: 26, l: 48, name: "Thousand Palms" },
] as const;

/* ────────────────────────────────────────────────────────────
   GALLERY · 8 items, deliberately mixed.
   ──────────────────────────────────────────────────────────── */
export const GALLERY: readonly GalleryItem[] = [
  { url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80", tag: "Aventador SVJ",   kind: "exotic"  },
  { url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&q=80", tag: "911 GT3 RS",      kind: "exotic"  },
  { url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80", tag: "Tacoma TRD lifted", kind: "truck"   },
  { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80", tag: "Tahoe · family",   kind: "suv"     },
  { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=80", tag: "Rolls-Royce Ghost", kind: "exotic" },
  { url: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80", tag: "Urus",             kind: "exotic"  },
  { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=80", tag: "'67 Mustang",       kind: "classic" },
  { url: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=900&q=80", tag: "F-150 daily",      kind: "truck"   },
] as const;

/* ────────────────────────────────────────────────────────────
   BEFORE / AFTER · at least one NON-exotic subject.
   ──────────────────────────────────────────────────────────── */
export const BEFORE_AFTER: readonly BeforeAfter[] = [
  {
    slug: "porsche-swirl-removal",
    before:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&q=80",
    after:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80",
    label: "Paint correction · swirl removal",
    vehicle: "Porsche 911 Turbo S · Chalk",
  },
  {
    slug: "daily-civic-revival",
    before:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80",
    after:
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1600&q=80",
    label: "Neglected daily · full revival",
    vehicle: "2012 Honda Civic · teacher's commuter",
  },
  {
    slug: "db11-interior-exterior",
    before:
      "https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?w=1600&q=80",
    after:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1600&q=80",
    label: "Full interior + exterior",
    vehicle: "Aston Martin DB11 · Magnetic Silver",
  },
] as const;

/* ────────────────────────────────────────────────────────────
   FULL SERVICE CATALOGUE for /services route.
   Kept separate from homepage 7 — this is the comprehensive list
   for SEO + discoverability. Explicitly names RV / Boat / Motorcycle / Fleet.
   ──────────────────────────────────────────────────────────── */
export const SERVICE_CATEGORIES = [
  {
    id: "exterior",
    title: "Exterior",
    items: [
      "Hand Wash & Dry",
      "Clay Bar Decon",
      "Paint Decon",
      "Machine Polish / Paint Correction — 1, 2, 3-step",
      "Swirl & Scratch Removal",
      "Ceramic Coating",
      "PPF Prep",
      "Wheel & Tire Detail",
      "Tire Dressing",
      "Engine Bay",
      "Headlight Restoration",
      "Glass Treatment / Rain Repellent",
    ],
  },
  {
    id: "interior",
    title: "Interior",
    items: [
      "Full Vacuum",
      "Dash & Trim Dressing",
      "Leather Clean & Condition",
      "Fabric & Carpet Shampoo",
      "Steam Clean & Sanitize",
      "Odor Elimination",
      "Window & Mirror (interior)",
      "Seat Stain Removal",
    ],
  },
  {
    id: "packages",
    title: "Signature Packages",
    items: ["Essential", "Premium", "Executive", "Showroom", "Fleet"],
  },
  {
    id: "specialty",
    title: "Specialty",
    items: [
      "Ceramic Coating — 1yr / 3yr / 5yr",
      "Graphene Coating",
      "PPF Prep",
      "Pet Hair Removal",
      "RV Detailing",
      "Boat Detailing",
      "Motorcycle Detailing",
      "Post-Event / Wedding Day",
      "Monthly Maintenance Plans",
    ],
  },
] as const;
