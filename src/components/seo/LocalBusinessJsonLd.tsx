import { BRAND, CITIES, SERVICE_CATEGORIES } from "@/lib/data";

const SITE = "https://bumpers2bumpers.detail";

/**
 * LocalBusiness schema.org JSON-LD for the homepage.
 *
 * Positioning-critical: the Service catalogue explicitly lists RV, Boat,
 * Motorcycle, and Fleet detailing so search engines never categorize us as a
 * luxury-only vendor. The `areaServed` enumerates all 15 cities so local
 * search picks us up equally in Indio and Indian Wells.
 */
export function LocalBusinessJsonLd() {
  const services = SERVICE_CATEGORIES.flatMap((group) => group.items);

  const data = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "@id": `${SITE}/#business`,
    name: BRAND.name,
    alternateName: BRAND.shortName,
    url: SITE,
    telephone: BRAND.phoneTel,
    email: BRAND.email,
    foundingDate: String(BRAND.foundedYear),
    founder: { "@type": "Person", name: BRAND.owner },
    priceRange: "$$$",
    image: `${SITE}/og-default.jpg`,
    logo: `${SITE}/logo.png`,
    description:
      "Mobile auto detailing serving the Coachella Valley since 1998. Every vehicle — from daily drivers and family SUVs to classics, exotics, trucks, boats, RVs, motorcycles, and fleets — receives the same obsessive treatment. Certified professional detailer, by appointment only.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
      addressLocality: "Coachella Valley",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BRAND.coords.lat,
      longitude: BRAND.coords.lon,
    },
    areaServed: CITIES.map((c) => ({
      "@type": "City",
      name: c,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Coachella Valley, California",
      },
    })),
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Certification",
        name: BRAND.cert,
        identifier: BRAND.certIdNumber,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((name, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
    sameAs: [`https://instagram.com/${BRAND.handle.replace(/^@/, "")}`],
    makesOffer: services.map((name) => ({
      "@type": "Offer",
      name,
      areaServed: CITIES.map((c) => ({ "@type": "City", name: c })),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
