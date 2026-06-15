import { routing } from "@/i18n/routing";

const BASE = "https://www.habitat-one.com";

/**
 * Bouwt `alternates` (canonical + hreflang-talen + x-default) voor één pagina.
 * `path` zonder locale-prefix, bv. "/" of "/about" of "/products/foo".
 * localePrefix is "as-needed": `en` zonder prefix, de rest met /nl, /es, /de.
 */
export function seoAlternates(locale: string, path = "/") {
  const clean = path === "/" ? "" : path;
  const urlFor = (loc: string) =>
    loc === routing.defaultLocale ? `${BASE}${clean}` || BASE : `${BASE}/${loc}${clean}`;

  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = urlFor(l);
  languages["x-default"] = urlFor(routing.defaultLocale);

  return { canonical: urlFor(locale), languages };
}
