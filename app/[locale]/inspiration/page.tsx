import type { Metadata } from "next";
import { seoAlternates } from "@/lib/seo/alternates";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { LazyVideo } from "@/components/ui/lazy-video";

type Shot = { room?: string; src: string; fire?: boolean };

const INDOOR: Shot[] = [
  { room: "kitchen", src: "/spaces/kitchen/kitchen-01.jpg" },
  { room: "living-room", src: "/spaces/living-room/travertine-white-golden-dining-room.jpg" },
  { fire: true, src: "/products/sfeerhaarden/flame-wide.jpg" },
  { room: "bathroom", src: "/spaces/bathroom/kkr-bath-oval-freestanding.jpg" },
  { room: "kitchen", src: "/spaces/kitchen/travertine-pure-white-modern.jpg" },
  { room: "bedroom", src: "/spaces/bedroom/roman-huge-travertine-white-golden.jpg" },
  { fire: true, src: "/products/sfeerhaarden/hero.jpg" },
  { room: "living-room", src: "/spaces/living-room/rough-granite-dark-grey-moody.jpg" },
  { room: "bathroom", src: "/spaces/bathroom/acryl-bath-amber.jpg" },
  { room: "kitchen", src: "/spaces/kitchen/kitchen-acryl-island.jpg" },
  { room: "bedroom", src: "/spaces/bedroom/travertine-beige.jpg" },
  { fire: true, src: "/spaces/living-room/acryl-fireplace.jpg" },
];

const OUTDOOR: Shot[] = [
  { room: "pool-area", src: "/spaces/pool-area/terrazzo-light-grey-infinity-pool.jpg" },
  { room: "terrace", src: "/spaces/terrace/yellow-rough-stone-mediterranean-villa.jpg" },
  { room: "garden", src: "/spaces/garden/terrazzo-dark-grey-twilight-villa.jpg" },
  { room: "outdoor-kitchen", src: "/spaces/outdoor-kitchen/outdoor-kitchen-01.jpg" },
  { room: "pool-area", src: "/spaces/pool-area/rough-granite-pure-white-villa-pool.jpg" },
  { room: "terrace", src: "/spaces/terrace/square-line-stone-red-mediterranean.jpg" },
  { room: "garden", src: "/spaces/garden/garden-planters-canyon.jpg" },
  { room: "pool-area", src: "/spaces/pool-area/square-line-stone-beige-villa-pool.jpg" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "inspiration" });
  return {
    alternates: seoAlternates(locale, "/inspiration"), title: t("title"), description: t("intro") };
}

export default async function InspirationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("inspiration");
  const ts = await getTranslations("spaces");

  function Gallery({ title, shots }: { title: string; shots: Shot[] }) {
    return (
      <Container>
        <Reveal>
          <h2 className="text-3xl text-ink sm:text-4xl">{title}</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {shots.map((shot) => {
            const label = shot.fire ? t("fireplaceLabel") : ts(`names.${shot.room}`);
            const href = shot.fire ? "/products/sfeerhaarden" : `/spaces/${shot.room}`;
            return (
              <Link
                key={shot.src}
                href={href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-sand-200"
              >
                <Image
                  src={shot.src}
                  alt={label}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sea-900/55 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-paper/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                  {label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-terracotta-700" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    );
  }

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image="/spaces/living-room/travertine-white-golden-dining-room.jpg" />

      <Section>
        <Gallery title={t("indoorTitle")} shots={INDOOR} />
      </Section>

      {/* ---- Cinematic full-bleed video band ---- */}
      <section className="relative w-full overflow-hidden bg-ink">
        <LazyVideo
          src="/site/inspiration-feature.mp4"
          className="h-[70svh] min-h-[440px] w-full object-cover"
        />
      </section>

      <Section className="bg-sand-50">
        <Gallery title={t("outdoorTitle")} shots={OUTDOOR} />
      </Section>

      <Section>
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-ink md:text-4xl">{t("ctaTitle")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t("ctaText")}</p>
            <Link href="/products" className="btn btn-primary mt-7 inline-flex">
              {t("ctaButton")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
