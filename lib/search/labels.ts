// De zoekindex heeft vertaalde labels nodig (productnamen, collecties, ruimtes).
// Die staan in de next-intl-berichten, dus haalt deze helper ze op en giet ze in
// de vorm die lib/search verwacht. Apart bestand zodat de index zelf puur blijft
// en zonder next-intl te testen is.

import { getTranslations } from "next-intl/server";
import type { SearchLabels } from "@/lib/search";

export async function getSearchLabels(locale: string): Promise<SearchLabels> {
  const t = await getTranslations({ locale, namespace: "products" });
  const ts = await getTranslations({ locale, namespace: "spaces" });
  const tf = await getTranslations({ locale, namespace: "furniture" });
  const tq = await getTranslations({ locale, namespace: "search" });

  const kind = { collection: "kindCategory", space: "kindSpace", service: "kindService" } as const;

  return {
    productName: (slug) => (t.has(`i18n.${slug}.name`) ? t(`i18n.${slug}.name`) : null),
    productShort: (slug) => (t.has(`i18n.${slug}.short`) ? t(`i18n.${slug}.short`) : null),
    collectionLabel: (key) => (t.has(key) ? t(key) : key),
    spaceName: (slug) => (ts.has(`names.${slug}`) ? ts(`names.${slug}`) : slug),
    furnitureTitle: tf("title"),
    categoryKind: (group) => tq(kind[group]),
  };
}
