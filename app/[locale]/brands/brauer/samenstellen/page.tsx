import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { MeubelConfigurator } from "@/components/meubel-configurator";
import { Container, Section } from "@/components/ui/section";
import { BRANDS } from "@/lib/data/brands";
import { seoAlternates } from "@/lib/seo/alternates";

/**
 * Brauer-badkamermeubel samenstellen. De losse meubeldelen staan bewust niet
 * als producten op de site (te veel losse kastjes zonder context); hier kies
 * je ze in samenhang, met breedte en kleur, en gaat de set naar de offerte.
 */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "brands" });
  return { title: `${t("composeTitle")} · BRAUER`, description: t("composeLead"), alternates: seoAlternates(locale, "/brands/brauer/samenstellen") };
}

export default async function SamenstellenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("brands");
  const merk = BRANDS.brauer;
  return (
    <Section className="pt-28">
      <Container>
        <div className="max-w-3xl">
          <Image src={merk.logo} alt={merk.name} width={merk.logoWidth} height={merk.logoHeight} className="h-7 w-auto max-w-[11rem] object-contain" />
          <h1 className="mt-6 font-display text-3xl leading-[1.05] text-ink md:text-4xl">{t("composeTitle")}</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-[1.05rem]">{t("composeLead")}</p>
        </div>
        <div className="mt-10">
          <MeubelConfigurator />
        </div>
      </Container>
    </Section>
  );
}
