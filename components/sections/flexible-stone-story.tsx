import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, Flame, Waves, Bath, Layers, Hammer, Repeat } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import {
  FS_APPS,
  FS_BENEFITS,
  FS_FAMILIES,
  FS_FAQ,
  FS_FAQ_IMAGES,
  FS_FORMATS,
  FS_INSTALL,
  FS_INTRO,
  FS_TECH_GROUPS,
  flexibleStoneHref,
} from "@/lib/data/flexible-stone-story";

const BENEFIT_ICON = { curves: Repeat, inOut: Waves, bathroom: Bath, slim: Layers, renovation: Hammer, fire: Flame } as const;

const eyebrow = "text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft";
const h2 = "mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-ink md:text-4xl";
const lead = "mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-[1.05rem]";

/**
 * De uitleg bij Flexible Stone: wat het is, waarom, techniek, formaten,
 * plaatsing, toepassingen, de collectie per textuur en veelgestelde vragen.
 * Beeld en feiten komen uit de distributeurspresentatie (okt 2026); elk staal
 * linkt naar het paneel waar het bij hoort.
 */
export async function FlexibleStoneStory() {
  const t = await getTranslations("flexibleStone");

  return (
    <>
      {/* ---- Wat is Flexible Stone ---- */}
      <Section id="fs-what" className="scroll-mt-24 border-t border-ink/10 bg-paper py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <Reveal>
                <p className={eyebrow}>{t("whatEyebrow")}</p>
                <h2 className={h2}>{t("whatTitle")}</h2>
                <p className={lead}>{t("whatText")}</p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">{t("whatText2")}</p>
              </Reveal>
              <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-ink/15 pt-6">
                {(["thin", "format", "finishes"] as const).map((k) => (
                  <div key={k}>
                    <dd className="text-2xl font-medium tracking-tight text-ink md:text-3xl">{t(`fact.${k}.value`)}</dd>
                    <dt className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft">{t(`fact.${k}.label`)}</dt>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-[1.4fr_1fr] gap-4">
              <div className="relative min-h-[320px] overflow-hidden bg-sand-100">
                <Image src={FS_INTRO.bend} alt={t("whatAltBend")} fill sizes="(max-width:1024px) 60vw, 35vw" className="object-cover" />
              </div>
              <div className="grid gap-4">
                <div className="relative aspect-square overflow-hidden bg-sand-100">
                  <Image src={FS_INTRO.layers} alt={t("whatAltLayers")} fill sizes="25vw" className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden bg-sand-100">
                  <Image src={FS_INTRO.column} alt={t("whatAltColumn")} fill sizes="25vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Zes voordelen ---- */}
      <Section id="fs-benefits" className="scroll-mt-24 bg-background py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className={eyebrow}>{t("benefitsEyebrow")}</p>
            <h2 className={h2}>{t("benefitsTitle")}</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {FS_BENEFITS.map(({ key, image }, i) => {
              const Icon = BENEFIT_ICON[key];
              return (
                <Reveal key={key} delay={i * 0.05}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                    <Image src={image} alt={t(`benefits.${key}.title`)} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/15 text-terracotta-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-ink md:text-lg">{t(`benefits.${key}.title`)}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t(`benefits.${key}.text`)}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-10 text-xs text-ink-soft/70">{t("benefitsNote")}</p>
        </Container>
      </Section>

      {/* ---- Techniek ---- */}
      <Section id="fs-tech" className="scroll-mt-24 bg-ink py-20 text-paper md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-terracotta-300">{t("techEyebrow")}</p>
              <h2 className="mt-4 text-3xl font-medium leading-[1.06] tracking-[-0.018em] md:text-4xl">{t("techTitle")}</h2>
              <p className="mt-5 text-base leading-relaxed text-paper/75">{t("techText")}</p>
              <div className="mt-8 flex gap-10">
                <div>
                  <p className="font-display text-5xl leading-none">A2-s1</p>
                  <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-paper/60">{t("techFire")}</p>
                </div>
                <div>
                  <p className="font-display text-5xl leading-none">0</p>
                  <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-paper/60">{t("techZero")}</p>
                </div>
              </div>
              <a href="#documentatie" className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-paper underline underline-offset-[6px] decoration-paper/35 hover:decoration-paper">
                {t("techDownload")}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="space-y-10">
              {FS_TECH_GROUPS.map((group) => (
                <div key={group.key}>
                  <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/60">{t(`techGroup.${group.key}`)}</p>
                  <dl className="divide-y divide-paper/10 border-y border-paper/15 text-sm">
                    {group.rows.map((row) => (
                      <div key={row.key} className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 py-3">
                        <dt className="text-paper/85">{t(`tech.${row.key}`)}</dt>
                        <dd className="text-paper">{row.value}</dd>
                        <dd className="text-paper/50">{row.method}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---- Formaten ---- */}
      <Section id="fs-formats" className="scroll-mt-24 bg-paper py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[16/10] overflow-hidden bg-sand-50">
              <Image src={FS_FORMATS.large} alt={t("formatsLargeTitle")} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className={eyebrow}>{t("formatsEyebrow")}</p>
              <h2 className={h2}>{t("formatsTitle")}</h2>
              <p className={lead}>{t("formatsText")}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {FS_FORMATS.small.map((f) => (
                  <div key={f.name}>
                    <div className="relative aspect-[16/9] overflow-hidden bg-sand-50">
                      <Image src={f.image} alt={f.name} fill sizes="25vw" className="object-cover" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-ink">{f.size}</p>
                    <p className="text-xs text-ink-soft">{f.name} · {f.area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {FS_FORMATS.examples.map((f) => {
              const href = flexibleStoneHref(f.name);
              const inner = (
                <>
                  <div className="relative aspect-[16/9] overflow-hidden bg-sand-50">
                    <Image src={f.image} alt={f.name} fill sizes="12vw" className="object-cover" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-ink">{f.name}</p>
                  <p className="text-[0.68rem] text-ink-soft">{f.size}</p>
                </>
              );
              return href ? <Link key={f.name} href={href} className="group block">{inner}</Link> : <div key={f.name}>{inner}</div>;
            })}
          </div>
          <p className="mt-6 text-xs text-ink-soft/70">{t("formatsNote")}</p>
        </Container>
      </Section>

      {/* ---- Plaatsing ---- */}
      <Section id="fs-install" className="scroll-mt-24 bg-background py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className={eyebrow}>{t("installEyebrow")}</p>
            <h2 className={h2}>{t("installTitle")}</h2>
            <p className={lead}>{t("installText")}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {FS_INSTALL.map(({ key, image }, i) => (
              <Reveal key={key} delay={i * 0.08}>
                <div className="relative aspect-[16/9] overflow-hidden bg-sand-100">
                  <Image src={image} alt={t(`install.${key}.title`)} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                </div>
                <p className="mt-4 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-terracotta-700">0{i + 1}</p>
                <h3 className="mt-1 text-lg font-medium text-ink">{t(`install.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(`install.${key}.text`)}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-ink/15 pt-8 md:grid-cols-3">
            {(["setOut", "keepClean", "edges"] as const).map((k) => (
              <div key={k}>
                <h3 className="text-base font-medium text-ink">{t(`installTips.${k}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(`installTips.${k}.text`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Toepassingen ---- */}
      <Section id="fs-apps" className="scroll-mt-24 bg-paper py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className={eyebrow}>{t("appsEyebrow")}</p>
            <h2 className={h2}>{t("appsTitle")}</h2>
            <p className={lead}>{t("appsText")}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FS_APPS.map(({ key, image }, i) => (
              <Reveal key={key} delay={(i % 3) * 0.05}>
                <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                  <Image src={image} alt={t(`apps.${key}.title`)} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover" />
                </div>
                <h3 className="mt-4 text-base font-medium text-ink md:text-lg">{t(`apps.${key}.title`)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t(`apps.${key}.text`)}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- De collectie per textuur ---- */}
      <Section id="fs-collection" className="scroll-mt-24 bg-background py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className={eyebrow}>{t("familiesEyebrow")}</p>
            <h2 className={h2}>{t("familiesTitle")}</h2>
            <p className={lead}>{t("familiesText")}</p>
          </div>
          <div className="mt-12 space-y-14">
            {FS_FAMILIES.map((fam) => (
              <div key={fam.key}>
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-3">
                  <h3 className="text-xl font-medium text-ink md:text-2xl">{t(`families.${fam.key}.title`)}</h3>
                  <p className="hidden text-sm text-ink-soft md:block">{t(`families.${fam.key}.text`)}</p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                  {fam.swatches.map((s) => {
                    const href = flexibleStoneHref(s.name);
                    const inner = (
                      <>
                        <div className="relative aspect-[3/4] overflow-hidden bg-sand-100">
                          <Image src={s.image} alt={`${s.name} ${s.colour}`} fill sizes="(max-width:640px) 50vw, 16vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                        </div>
                        <p className="mt-3 text-sm font-medium leading-snug text-ink">{s.name}</p>
                        <p className="text-xs text-ink-soft">{s.colour} · {s.code}</p>
                      </>
                    );
                    return href ? (
                      <Link key={s.code} href={href} className="group block">{inner}</Link>
                    ) : (
                      <div key={s.code}>{inner}</div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-ink-soft/70">{t("familiesNote")}</p>
        </Container>
      </Section>

      {/* ---- Veelgestelde vragen ---- */}
      <Section id="fs-faq" className="scroll-mt-24 bg-paper py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <p className={eyebrow}>{t("faqEyebrow")}</p>
              <h2 className={h2}>{t("faqTitle")}</h2>
              <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/15">
                {FS_FAQ.map((k) => (
                  <div key={k} className="py-5">
                    <dt className="text-base font-medium text-ink">{t(`faq.${k}.q`)}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{t(`faq.${k}.a`)}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 gap-4 self-start lg:grid-cols-1">
              <div className="relative aspect-square overflow-hidden bg-sand-100 lg:aspect-[4/3]">
                <Image src={FS_FAQ_IMAGES.bend} alt={t("whatAltBend")} fill sizes="(max-width:1024px) 50vw, 30vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden bg-sand-100 lg:aspect-[4/3]">
                <Image src={FS_FAQ_IMAGES.curve} alt={t("whatAltColumn")} fill sizes="(max-width:1024px) 50vw, 30vw" className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
