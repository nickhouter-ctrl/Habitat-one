import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { ProductCard } from "@/components/cards/product-card";
import { Container, Section } from "@/components/ui/section";
import { catalogProducts } from "@/lib/data/catalog";
import { BRANDS } from "@/lib/data/brands";
import { term } from "@/lib/data/catalog-i18n";

/**
 * Een merk aankondigen op een collectiepagina: logo, een regel uitleg, en
 * doorverwijzingen naar de producttypes van dat merk.
 *
 * Nodig omdat de collectiepagina alleen producten mét foto toont. Een
 * assortiment waarvan de beelden nog moeten komen zou daar onzichtbaar zijn,
 * terwijl het er wél is — deze strook is de ingang ernaartoe.
 */
export async function BrandStrip({
  slug,
  collection,
  locale,
}: {
  slug: string;
  collection?: string;
  locale: string;
}) {
  const merk = BRANDS[slug];
  if (!merk) return null;
  const t = await getTranslations("brands");

  const producten = catalogProducts.filter(
    (p) => p.brand === slug && (!collection || p.collection === collection),
  );
  if (producten.length === 0) return null;

  // De types met de meeste producten eerst; dat is ook de volgorde waarin je
  // ze in een badkamer kiest.
  const types = Object.entries(
    producten.reduce<Record<string, number>>((acc, p) => {
      if (p.productType) acc[p.productType] = (acc[p.productType] ?? 0) + 1;
      return acc;
    }, {}),
  ).sort((a, b) => b[1] - a[1]);

  // Vier voorbeelden: per type het eerste product mét foto, elk in een andere
  // kleur — een proefje van het assortiment, de merkpagina doet de rest.
  const voorbeelden: Array<{ product: (typeof producten)[number]; kleur: string | null }> = [];
  for (const [type] of types) {
    const p = producten.find((x) => x.productType === type && x.image && !voorbeelden.some((v) => v.product.id === x.id));
    if (!p) continue;
    const kleuren = (p.optionAxes?.find((a) => a.key === "kleur")?.values ?? []).filter((w) => w.image);
    voorbeelden.push({ product: p, kleur: kleuren.length ? kleuren[voorbeelden.length % kleuren.length].value : null });
    if (voorbeelden.length === 4) break;
  }

  return (
    <Section className="bg-sand-50">
      <Container>
        <div className="grid gap-8 md:grid-cols-[16rem_1fr] md:gap-14">
          <div>
            <Image
              src={merk.logo}
              alt={merk.name}
              width={merk.logoWidth}
              height={merk.logoHeight}
              className="h-7 w-auto max-w-[11rem] object-contain"
            />
            <Link
              href={`/brands/${slug}`}
              className="mt-5 inline-block text-sm text-ink underline underline-offset-4 hover:text-ink-soft"
            >
              {t("inBathroom")}
            </Link>
          </div>
          <div>
            <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">{t("brauerLead")}</p>
            {types.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {types.map(([type, n]) => (
                  <Link
                    key={type}
                    href={`/brands/${slug}?type=${encodeURIComponent(type)}`}
                    className="rounded-sm border border-ink/15 px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink/40 hover:text-ink"
                  >
                    {term(type, locale)}
                    <span className="ml-2 text-ink/40">{n}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {voorbeelden.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {voorbeelden.map(({ product, kleur }) => (
              <ProductCard key={product.id} product={product} kleur={kleur} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
