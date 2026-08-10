// Gedeelde valuta-opmaak voor accountprijzen (dashboard, PriceTag).
// Eén bron voor de site-locale → BCP-47-mapping, zodat bedragen overal
// hetzelfde geformatteerd worden.

/** Site-locale → volledige BCP-47-tag voor Intl-API's. */
export const LOCALE_TAGS: Record<string, string> = {
  nl: "nl-NL",
  en: "en-GB",
  de: "de-DE",
  fr: "fr-FR",
  es: "es-ES",
  zh: "zh-CN",
};

/** Formatteer een bedrag als euro's in de gegeven site-locale. */
export function formatEur(amount: number, locale: string): string {
  return new Intl.NumberFormat(LOCALE_TAGS[locale] ?? "en-GB", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(amount);
}
