import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import {
  FS_PANEL_SCENES,
  flexibleStoneFamily,
  flexibleStoneSwatchesFor,
} from "@/lib/data/flexible-stone-story";

/**
 * Blok op elke Flexible Stone-paneelpagina: drie sfeerbeelden uit dezelfde
 * textuurfamilie (dus geen travertijnfoto bij een houtlook) plus de
 * fabrieksstalen met MS-code die bij dít paneel horen, met links naar de
 * collectie- en toepassingensecties op /products/flexible-stone.
 */
export async function FlexibleStonePanel({ slug, name }: { slug: string; name: string }) {
  const t = await getTranslations("flexibleStone");
  const family = flexibleStoneFamily(slug, name);
  const scenes = FS_PANEL_SCENES[family];
  const swatches = flexibleStoneSwatchesFor(slug);

  return (
    <Section id="fs-panel" className="scroll-mt-24 border-t border-ink/10 bg-paper py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">{t("panelEyebrow")}</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl">{t("panelTitle")}</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{t("panelText")}</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/products/flexible-stone#fs-collection"
              className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
            >
              {t("panelMore")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/products/flexible-stone#fs-apps"
              className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink"
            >
              {t("panelApps")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <Reveal className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {scenes.map((sc) => {
            const caption = t(`${sc.caption.ns}.${sc.caption.key}.title`);
            return (
              <figure key={sc.image}>
                <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                  <Image src={sc.image} alt={`${name} – ${caption}`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                </div>
                <figcaption className="mt-3 text-[0.68rem] uppercase tracking-[0.2em] text-ink-soft">{caption}</figcaption>
              </figure>
            );
          })}
        </Reveal>

        {swatches.length > 0 && (
          <div className="mt-14 border-t border-ink/10 pt-8">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">{t("panelSwatches")}</p>
            <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
              {swatches.map((sw) => (
                <figure key={sw.code}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-sand-100">
                    <Image src={sw.image} alt={`${sw.name} · ${sw.colour} · ${sw.code}`} fill sizes="(max-width:640px) 33vw, 16vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-2 text-sm text-ink">
                    {sw.colour}
                    <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-ink-soft">{sw.code}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
