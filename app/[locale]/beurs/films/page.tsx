import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, MapPin } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { BEURSFILMS } from "@/lib/data/beursfilms";
import { FERIA, feriaStandLabel } from "@/lib/data/feria";
import { site } from "@/lib/data/site";

/**
 * De films van de stand, om na de beurs door te sturen.
 *
 * Wat de bezoekers op de tv zagen staan hier terug: stille films met Spaanse en
 * Engelse tekst in beeld, dus dezelfde pagina werkt voor iedereen. Bewust niet
 * in Google: dit is de bladzijde achter een link in onze opvolgmail.
 */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "fairFilms" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    robots: { index: false, follow: false },
  };
}

export default async function BeursFilmsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("fairFilms");
  const stand = feriaStandLabel(t("standWord"), t("hallWord"));

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <div className="container-x pt-28 pb-12 md:pt-32 md:pb-16">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta-300">
            {FERIA.name} · {stand}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-3xl leading-[1.06] tracking-[-0.02em] sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/80">{t("lead")}</p>
        </div>
      </section>

      <Section className="bg-paper py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            {BEURSFILMS.map((film) => (
              <figure key={film.id}>
                <div className="overflow-hidden rounded-sm bg-ink ring-1 ring-ink/10">
                  {/* Met de knoppen erbij en zonder vooraf downloaden: de bezoeker
                      besluit zelf of hij hem start. */}
                  <video
                    src={film.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-video h-full w-full bg-ink object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <h2 className="font-display text-xl text-ink md:text-2xl">{t(`${film.id}Title`)}</h2>
                  <p className="mt-1 text-sm text-ink-soft">
                    {film.duur} · {t(`${film.id}Text`)}
                  </p>
                </figcaption>
              </figure>
            ))}

            <div className="border-t border-ink/10 pt-8">
              <p className="text-[1.02rem] leading-relaxed text-ink-soft">{t("outro")}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
                <Link href="/products/flexible-stone" className="btn btn-primary">
                  {t("cta")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <span className="flex items-center gap-2 text-ink-soft">
                  <MapPin className="h-4 w-4 text-terracotta-700" />
                  {site.email} · {site.phone}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
