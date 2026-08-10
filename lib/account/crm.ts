// Gedeelde CRM-constanten — importeer deze overal i.p.v. de URL te dupliceren.
// Veilig voor client én server: de URL is publiek (NEXT_PUBLIC) en de cookie-naam
// is geen geheim; de token zelf blijft in een httpOnly-cookie op de server.

/** Basis-URL van het Habitat One CRM (publiek). */
export const CRM_API = process.env.NEXT_PUBLIC_CRM_API_URL ?? "https://habitat-crm-delta.vercel.app";

/** Naam van de httpOnly-sessiecookie met de CRM-portaltoken. */
export const PORTAL_COOKIE = "hb_portal";

/** Talen die het CRM (incl. bevestigingsmails) ondersteunt. */
export type CrmLocale = "nl" | "de" | "en" | "es";

/** Map een site-locale naar een CRM-taal — fr/zh (en onbekend) vallen terug op en. */
export function toCrmLocale(locale: string): CrmLocale {
  return locale === "nl" || locale === "de" || locale === "es" ? locale : "en";
}
