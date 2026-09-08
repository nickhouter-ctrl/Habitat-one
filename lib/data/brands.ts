/**
 * De merken die we voeren.
 *
 * Klein en met de hand bijgehouden: er komen een paar merken bij, geen
 * honderden, en het logo moet toch als bestand in `public/brands/` gecommit
 * worden. Een tabel eromheen zou alleen maar bewegende delen toevoegen.
 *
 * `brandOf()` is de enige manier waarop de rest van de site aan een merk komt,
 * zodat het merk van een product nergens meer uit de productnaam geraden hoeft
 * te worden.
 */

export type Brand = {
  slug: string;
  name: string;
  /** Pad in `public/`. SVG waar het kan, anders webp. */
  logo: string;
  /** Verhouding van het logobestand, zodat next/image niet hoeft te gokken. */
  logoWidth: number;
  logoHeight: number;
  url?: string;
};

export const BRANDS: Record<string, Brand> = {
  brauer: {
    slug: "brauer",
    name: "BRAUER",
    logo: "/brands/brauer.svg",
    logoWidth: 600,
    logoHeight: 102,
    url: "https://www.brauerkranen.nl",
  },
  caracole: {
    slug: "caracole",
    name: "Caracole",
    logo: "/brands/caracole.svg",
    logoWidth: 220,
    logoHeight: 40,
    url: "https://caracole.eu.com/",
  },
  cornelius: {
    slug: "cornelius",
    name: "Cornelius Lifestyle",
    logo: "/brands/cornelius.webp",
    logoWidth: 73,
    logoHeight: 80,
    url: "https://www.corneliuslifestyle.com/",
  },
};

/** Het merk van een product, of null voor ons eigen assortiment. */
export function brandOf(product: { brand?: string | null }): Brand | null {
  const slug = product.brand?.toLowerCase().trim();
  return slug ? (BRANDS[slug] ?? null) : null;
}
