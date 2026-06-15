import type { Metadata } from "next";
import { seoAlternates } from "@/lib/seo/alternates";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Mail, Phone, MapPin, Clock, Languages } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/ui/contact-form";
import { site } from "@/lib/data/site";

const subjectKeys = ["general", "materials", "renovation", "property", "legal", "showroom"] as const;
type SubjectKey = (typeof subjectKeys)[number];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    alternates: seoAlternates(locale, "/contact"), title: t("title"), description: t("intro") };
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ subject?: string }>;
}) {
  const { locale } = await params;
  const { subject } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const defaultSubject = subjectKeys.includes(subject as SubjectKey) ? (subject as SubjectKey) : undefined;

  const info = [
    { icon: MapPin, label: t("addressLabel"), lines: site.addressLines },
    { icon: Phone, label: t("phoneLabel"), lines: [site.phone], href: `tel:${site.phoneHref}` },
    { icon: Mail, label: t("emailLabel"), lines: [site.email], href: `mailto:${site.email}` },
    { icon: Clock, label: t("hoursLabel"), lines: [t("hoursByAppointment")] },
    { icon: Languages, label: t("languagesLabel"), lines: [site.languages.join(" · ")] },
  ];

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/scenery/sea-window.jpg" />

      <Section className="bg-sand-50">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="surface rounded-[2rem] p-7 md:p-9">
                <h2 className="font-display text-2xl text-ink md:text-3xl">{t("formTitle")}</h2>
                <div className="mt-7">
                  <ContactForm defaultSubject={defaultSubject} />
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <div className="rounded-[2rem] bg-clay-800 p-7 text-cream md:p-9">
                <h3 className="font-display text-xl text-cream">{t("infoTitle")}</h3>
                <ul className="mt-6 space-y-5">
                  {info.map((row) => {
                    const I = row.icon;
                    return (
                      <li key={row.label} className="flex items-start gap-3.5">
                        <span className="grid grid-cols-1 h-9 w-9 shrink-0 place-items-center rounded-xl bg-cream/10 text-terracotta-300">
                          <I className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream/45">{row.label}</p>
                          {row.lines.map((l) =>
                            row.href ? (
                              <a key={l} href={row.href} className="block text-sm text-cream transition-colors hover:text-terracotta-300">
                                {l}
                              </a>
                            ) : (
                              <p key={l} className="text-sm text-cream/85">
                                {l}
                              </p>
                            ),
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-7 rounded-2xl bg-cream/5 p-4 text-xs leading-relaxed text-cream/60">{t("mapNote")}</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <div>
              <h3 className="font-display text-xl text-ink">{t("mapTitle")}</h3>
              <div className="mt-5 overflow-hidden rounded-[2rem] border border-sand-200 shadow-[0_30px_60px_-40px_rgba(84,48,31,0.4)]">
                <iframe
                  title={t("mapTitle")}
                  src={site.mapEmbed}
                  className="h-[360px] w-full md:h-[440px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
