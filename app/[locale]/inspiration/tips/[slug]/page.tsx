import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { seoAlternates } from "@/lib/seo/alternates";

// Gepubliceerde artikelen (slug). Voeg hier toe zodra een nieuw artikel klaar is.
const PUBLISHED = ["bouwen-in-spanje-nie-vergunningen", "materialen-mediterraan-klimaat", "onze-open-prijsopbouw", "binnen-buiten-een-materiaal"];

type Article = {
  eyebrow: string;
  title: string;
  readTime: string;
  intro: string;
  sections: { heading: string; body: string[]; points?: string[] }[];
  ctaTitle: string;
  ctaText: string;
};

export function generateStaticParams() {
  return PUBLISHED.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!PUBLISHED.includes(slug)) return { title: "Tips & advies" };
  const t = await getTranslations({ locale, namespace: "tipsArticles" });
  const a = t.raw(slug) as Article;
  return {
    title: a.title,
    description: a.intro,
    alternates: seoAlternates(locale, `/inspiration/tips/${slug}`),
  };
}

export default async function TipArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!PUBLISHED.includes(slug)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("tipsArticles");
  const a = t.raw(slug) as Article;

  const prefix = locale === "en" ? "" : `/${locale}`;
  const url = `https://www.habitat-one.com${prefix}/inspiration/tips/${slug}`;
  const articleJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.intro,
    inLanguage: locale,
    image: "https://www.habitat-one.com/projects/wip/87.jpg",
    datePublished: "2026-06-15",
    author: { "@type": "Organization", name: "Habitat One" },
    publisher: {
      "@type": "Organization",
      name: "Habitat One",
      logo: { "@type": "ImageObject", url: "https://www.habitat-one.com/logo-habitat.png" },
    },
    mainEntityOfPage: url,
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: `https://www.habitat-one.com${prefix}` },
    { name: "Tips & advies", url: `https://www.habitat-one.com${prefix}/inspiration/tips` },
    { name: a.title, url },
  ]);

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumb} />
      <PageHeader eyebrow={`${a.eyebrow} · ${a.readTime}`} title={a.title} intro={a.intro} image="/projects/wip/87.jpg" />

      <Section>
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-10">
            {a.sections.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="font-display text-2xl text-ink md:text-3xl">{s.heading}</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-lg leading-relaxed text-ink-soft">{p}</p>
                  ))}
                </div>
                {s.points && (
                  <ul className="mt-5 flex flex-col gap-2 border-l-2 border-terracotta-300 pl-5">
                    {s.points.map((pt) => (
                      <li key={pt} className="text-ink-soft">{pt}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sand-50">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-ink md:text-4xl">{a.ctaTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{a.ctaText}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Contact
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/inspiration/tips" className="btn btn-ghost">Tips &amp; advies</Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
