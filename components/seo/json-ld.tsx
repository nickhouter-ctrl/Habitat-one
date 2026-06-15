// Renders a JSON-LD <script> for structured data (schema.org).
// Server component — the JSON is serialised at render time.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, app-authored content (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Sitewide business identity — used in the root layout so every page carries it.
export const localBusinessJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  "@id": "https://habitat-one.com/#business",
  name: "Habitat One",
  url: "https://habitat-one.com",
  image: "https://habitat-one.com/opengraph-image",
  email: "hi@habitat-one.com",
  telephone: "+31651170545",
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camí de la Fontana 3, Locales 2, 3 en 5",
    addressLocality: "Jávea (Xàbia)",
    postalCode: "03730",
    addressRegion: "Alicante",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.795,
    longitude: 0.1655,
  },
  areaServed: { "@type": "Place", name: "Costa Blanca" },
  knowsLanguage: ["en", "nl", "es", "de"],
  // Social/profielen die Google aan dit bedrijf koppelt (alleen echte URL's).
  sameAs: ["https://www.instagram.com/habitatonejavea/"],
  hasMap:
    "https://www.google.com/maps/dir/?api=1&destination=Cam%C3%AD+de+la+Fontana+3%2C+03730+J%C3%A1vea%2C+Alicante%2C+Spain",
};
