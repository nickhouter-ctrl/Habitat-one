import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPin, Mail, Phone } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { FairLeadForm } from "@/components/fair-lead-form";
import { StandMode } from "@/components/stand-mode";
import { FERIA, feriaStandLabel } from "@/lib/data/feria";
import { site } from "@/lib/data/site";

/**
 * Waar de QR-code op de stand naartoe wijst: de bezoeker laat zijn gegevens
 * achter in plaats van een visitekaartje af te geven.
 *
 * Eén scherm, in één hand te bedienen, met het formulier meteen in beeld — wie
 * dit scant staat aan onze balie en is in twintig seconden weer weg. Geen menu
 * vol afleiding, en bewust niet in Google: de pagina hoort bij deze beurs.
 *
 * Met `?stand=1` gebruiken wij dezelfde pagina op de iPad op de balie. Dan
 * hoeft het CRM niet open te staan op een apparaat dat de hele dag onbeheerd
 * ligt: deze pagina kan alleen gegevens ópsturen, niets ophalen.
 */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "fairLead" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    robots: { index: false, follow: false },
  };
}

export default async function BeursPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("fairLead");
  const stand = (await searchParams).stand === "1";
  const standLabel = feriaStandLabel(t("standWord"), t("hallWord"));

  // ---- Op de stand: alleen het formulier, groot genoeg voor een iPad die
  //      rechtop op de balie staat. ----
  if (stand) {
    return (
      <>
        <StandMode />
        <div className="min-h-dvh bg-sand-50">
          <div className="mx-auto max-w-3xl px-5 py-8 md:px-8 md:py-10">
            <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
              <Image
                src={FERIA.logos.fairBlack}
                alt={FERIA.name}
                width={342}
                height={74}
                className="h-8 w-auto md:h-9"
                priority
              />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ink-soft">{standLabel}</span>
            </div>
            <h1 className="mt-7 font-display text-3xl leading-tight text-ink md:text-4xl">{t("standTitle")}</h1>
            <p className="mt-2 text-ink-soft">{t("standLead")}</p>
            <div className="mt-7 rounded-sm border border-ink/10 bg-paper p-6 md:p-8">
              <FairLeadForm stand />
            </div>
          </div>
        </div>
      </>
    );
  }

  // ---- De bezoeker, met zijn eigen telefoon ----
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <div className="container-x pt-28 pb-10 md:pt-32 md:pb-14">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Image
              src={FERIA.logos.fairWhite}
              alt={FERIA.name}
              width={171}
              height={37}
              className="h-9 w-auto md:h-10"
              priority
            />
            <span className="hidden h-7 w-px bg-paper/25 sm:block" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta-300">{standLabel}</span>
          </div>
          <h1 className="mt-7 max-w-2xl font-display text-3xl leading-[1.06] tracking-[-0.02em] sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/80">{t("lead")}</p>
        </div>
      </section>

      <Section className="bg-sand-50 py-10 md:py-16">
        <Container>
          <div className="mx-auto max-w-2xl rounded-sm border border-ink/10 bg-paper p-6 md:p-8">
            <FairLeadForm />
          </div>

          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-soft">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-terracotta-700" />
              {FERIA.venue} · {standLabel}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 underline underline-offset-4 decoration-ink/25 hover:decoration-ink">
                <Mail className="h-4 w-4 text-terracotta-700" /> {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 underline underline-offset-4 decoration-ink/25 hover:decoration-ink">
                <Phone className="h-4 w-4 text-terracotta-700" /> {site.phone}
              </a>
            </li>
          </ul>

          <p className="mt-8 text-center text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft">
            <Link href="/feria" className="underline underline-offset-[6px] decoration-ink/25 hover:decoration-ink">
              {t("fairInfo")}
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}
