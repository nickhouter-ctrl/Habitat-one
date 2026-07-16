/**
 * Properties for sale — fetched live from the Habitat CRM's public feed.
 * Set CRM_API_URL to the CRM's base URL (e.g. https://habitat-crm-delta.vercel.app).
 * The CRM calls /api/revalidate here whenever a property changes, invalidating
 * the `crm-properties` cache tag.
 */
import type { Locale } from "@/i18n/routing";

export type CrmProperty = {
  id: string;
  reference: string | null;
  title: string;
  status: "available" | "reserved" | "under_offer" | "sold" | "withdrawn" | string;
  type:
    | "villa"
    | "apartment"
    | "townhouse"
    | "plot"
    | "renovation_project"
    | "commercial"
    | "other"
    | string;
  priceEur: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  builtSqm: number | null;
  plotSqm: number | null;
  location: string | null;
  description: string | null;
  images: string[] | null;
  updatedAt: string;
};

const BASE = process.env.CRM_API_URL?.replace(/\/$/, "");

export const CRM_PROPERTIES_TAG = "crm-properties";

/** Statuses that mean the property is no longer on the market. */
export const SOLD_STATUSES = new Set(["sold", "withdrawn"]);

export function isAvailable(p: CrmProperty): boolean {
  return !SOLD_STATUSES.has(p.status);
}

export async function getPublishedProperties(): Promise<CrmProperty[]> {
  if (!BASE) return [];
  try {
    // No caching: a property that's unpublished or set to sold/withdrawn in the
    // CRM must disappear from / move on the site immediately.
    const res = await fetch(`${BASE}/api/public/properties`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = (await res.json()) as { properties?: CrmProperty[] };
    return Array.isArray(data.properties) ? data.properties : [];
  } catch {
    return [];
  }
}

/** Split into "still available" and "sold / no longer available". */
export async function getPropertiesGrouped(): Promise<{
  available: CrmProperty[];
  unavailable: CrmProperty[];
}> {
  const all = await getPublishedProperties();
  return {
    available: all.filter(isAvailable),
    unavailable: all.filter((p) => !isAvailable(p)),
  };
}

export async function getPublishedProperty(id: string): Promise<CrmProperty | null> {
  const all = await getPublishedProperties();
  return all.find((p) => p.id === id) ?? null;
}

/* --------------------------------------------------------------- i18n bits */

export const PROPERTY_TYPE_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    villa: "Villa",
    apartment: "Apartment",
    townhouse: "Townhouse",
    plot: "Building plot",
    renovation_project: "Renovation project",
    commercial: "Commercial",
    other: "Property",
  },
  nl: {
    villa: "Villa",
    apartment: "Appartement",
    townhouse: "Rijwoning",
    plot: "Bouwgrond",
    renovation_project: "Renovatieproject",
    commercial: "Commercieel",
    other: "Pand",
  },
  es: {
    villa: "Villa",
    apartment: "Apartamento",
    townhouse: "Adosado",
    plot: "Parcela",
    renovation_project: "Proyecto de reforma",
    commercial: "Local comercial",
    other: "Propiedad",
  },
  de: {
    villa: "Villa",
    apartment: "Wohnung",
    townhouse: "Reihenhaus",
    plot: "Baugrundstück",
    renovation_project: "Renovierungsprojekt",
    commercial: "Gewerbeobjekt",
    other: "Immobilie",
  },
  fr: {
    villa: "Villa",
    apartment: "Appartement",
    townhouse: "Maison de ville",
    plot: "Terrain constructible",
    renovation_project: "Projet de rénovation",
    commercial: "Local commercial",
    other: "Bien immobilier",
  },
  zh: {
    villa: "别墅",
    apartment: "公寓",
    townhouse: "联排别墅",
    plot: "建筑用地",
    renovation_project: "翻新项目",
    commercial: "商业物业",
    other: "房产",
  },
};

export const PROPERTY_STATUS_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    available: "Available",
    reserved: "Reserved",
    under_offer: "Under offer",
    sold: "Sold",
    withdrawn: "No longer available",
  },
  nl: {
    available: "Beschikbaar",
    reserved: "Gereserveerd",
    under_offer: "Onder bod",
    sold: "Verkocht",
    withdrawn: "Niet meer beschikbaar",
  },
  es: {
    available: "Disponible",
    reserved: "Reservado",
    under_offer: "En negociación",
    sold: "Vendido",
    withdrawn: "Ya no disponible",
  },
  de: {
    available: "Verfügbar",
    reserved: "Reserviert",
    under_offer: "Reserviert",
    sold: "Verkauft",
    withdrawn: "Nicht mehr verfügbar",
  },
  fr: {
    available: "Disponible",
    reserved: "Réservé",
    under_offer: "Sous offre",
    sold: "Vendu",
    withdrawn: "N'est plus disponible",
  },
  zh: {
    available: "在售",
    reserved: "已预订",
    under_offer: "洽谈中",
    sold: "已售出",
    withdrawn: "已下架",
  },
};

export const PROPERTIES_UI: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    none: string;
    from: string;
    bedrooms: string;
    bathrooms: string;
    built: string;
    plot: string;
    back: string;
    enquire: string;
    details: string;
    priceOnRequest: string;
    soldHeading: string;
    soldIntro: string;
    soldBadgeCard: string;
  }
> = {
  en: {
    eyebrow: "For sale",
    title: "Properties",
    intro:
      "Selected villas, homes, plots and renovation projects in and around Xàbia — handled end to end by Habitat One.",
    none: "There are no properties listed right now. Get in touch and we'll find something for you.",
    from: "from",
    bedrooms: "bedrooms",
    bathrooms: "bathrooms",
    built: "built",
    plot: "plot",
    back: "Properties",
    enquire: "Enquire about this property",
    details: "View details",
    priceOnRequest: "Price on request",
    soldHeading: "Sold & no longer available",
    soldIntro: "Recent sales and listings that have come off the market.",
    soldBadgeCard: "Sold",
  },
  nl: {
    eyebrow: "Te koop",
    title: "Panden",
    intro:
      "Geselecteerde villa's, woningen, bouwgrond en renovatieprojecten in en rond Xàbia — van begin tot eind verzorgd door Habitat One.",
    none: "Er staan nu geen panden online. Neem contact op, dan zoeken we iets voor je.",
    from: "vanaf",
    bedrooms: "slaapkamers",
    bathrooms: "badkamers",
    built: "bebouwd",
    plot: "perceel",
    back: "Panden",
    enquire: "Informeer naar dit pand",
    details: "Bekijk details",
    priceOnRequest: "Prijs op aanvraag",
    soldHeading: "Verkocht & niet meer beschikbaar",
    soldIntro: "Recent verkochte panden en aanbod dat van de markt is.",
    soldBadgeCard: "Verkocht",
  },
  es: {
    eyebrow: "En venta",
    title: "Propiedades",
    intro:
      "Una selección de villas, viviendas, parcelas y proyectos de reforma en Xàbia y alrededores — gestionados de principio a fin por Habitat One.",
    none: "Ahora mismo no hay propiedades publicadas. Contáctanos y buscaremos algo para ti.",
    from: "desde",
    bedrooms: "dormitorios",
    bathrooms: "baños",
    built: "construidos",
    plot: "parcela",
    back: "Propiedades",
    enquire: "Consultar sobre esta propiedad",
    details: "Ver detalles",
    priceOnRequest: "Precio a consultar",
    soldHeading: "Vendido y ya no disponible",
    soldIntro: "Ventas recientes y propiedades que ya no están en el mercado.",
    soldBadgeCard: "Vendido",
  },
  de: {
    eyebrow: "Zu verkaufen",
    title: "Immobilien",
    intro:
      "Ausgewählte Villen, Häuser, Grundstücke und Renovierungsprojekte in und um Xàbia — von A bis Z betreut von Habitat One.",
    none: "Derzeit sind keine Immobilien gelistet. Kontaktieren Sie uns, wir finden etwas für Sie.",
    from: "ab",
    bedrooms: "Schlafzimmer",
    bathrooms: "Badezimmer",
    built: "bebaut",
    plot: "Grundstück",
    back: "Immobilien",
    enquire: "Anfrage zu dieser Immobilie",
    details: "Details ansehen",
    priceOnRequest: "Preis auf Anfrage",
    soldHeading: "Verkauft & nicht mehr verfügbar",
    soldIntro: "Kürzlich verkaufte Objekte und Angebote, die nicht mehr am Markt sind.",
    soldBadgeCard: "Verkauft",
  },
  fr: {
    eyebrow: "À vendre",
    title: "Biens immobiliers",
    intro:
      "Une sélection de villas, maisons, terrains et projets de rénovation à Xàbia et ses environs — pris en charge de bout en bout par Habitat One.",
    none: "Aucun bien n'est publié pour le moment. Contactez-nous et nous trouverons quelque chose pour vous.",
    from: "à partir de",
    bedrooms: "chambres",
    bathrooms: "salles de bains",
    built: "construits",
    plot: "terrain",
    back: "Biens immobiliers",
    enquire: "Se renseigner sur ce bien",
    details: "Voir les détails",
    priceOnRequest: "Prix sur demande",
    soldHeading: "Vendus & retirés du marché",
    soldIntro: "Ventes récentes et biens qui ne sont plus sur le marché.",
    soldBadgeCard: "Vendu",
  },
  zh: {
    eyebrow: "出售",
    title: "房产",
    intro:
      "精选 Xàbia 及周边的别墅、住宅、地块与翻新项目——由 Habitat One 全程负责。",
    none: "目前暂无在售房产。欢迎联系我们，我们会为您寻找合适的选择。",
    from: "起价",
    bedrooms: "卧室",
    bathrooms: "浴室",
    built: "建筑面积",
    plot: "地块",
    back: "房产",
    enquire: "咨询此房产",
    details: "查看详情",
    priceOnRequest: "价格面议",
    soldHeading: "已售出与已下架",
    soldIntro: "近期成交及已退出市场的房源。",
    soldBadgeCard: "已售出",
  },
};

export function formatPriceEUR(value: string | null, locale: Locale): string | null {
  if (!value) return null;
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return null;
  return new Intl.NumberFormat(
    locale === "en"
      ? "en-IE"
      : locale === "nl"
        ? "nl-NL"
        : locale === "es"
          ? "es-ES"
          : locale === "fr"
            ? "fr-FR"
            : locale === "zh"
              ? "zh-CN"
              : "de-DE",
    { style: "currency", currency: "EUR", maximumFractionDigits: 0 },
  ).format(n);
}
