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
  telephone: "+34965001122",
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer del Pla",
    addressLocality: "Xàbia (Jávea)",
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
};
