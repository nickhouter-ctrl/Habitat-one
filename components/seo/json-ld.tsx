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
  "@id": "https://www.habitat-one.com/#business",
  name: "Habitat One",
  url: "https://www.habitat-one.com",
  image: "https://www.habitat-one.com/opengraph-image",
  logo: "https://www.habitat-one.com/logo-habitat.png",
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

// Homepage: WebSite-schema met zoekactie (kans op een sitelinks-zoekbox in Google).
export const websiteJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.habitat-one.com/#website",
  url: "https://www.habitat-one.com",
  name: "Habitat One",
  inLanguage: ["en", "nl", "es", "de"],
  publisher: { "@id": "https://www.habitat-one.com/#business" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.habitat-one.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Breadcrumb-trail voor detailpagina's — helpt breadcrumb-rich-results in de SERP.
export function breadcrumbJsonLd(items: { name: string; url: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
