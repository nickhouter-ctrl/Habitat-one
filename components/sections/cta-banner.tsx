import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export async function CtaBanner({
  image = "/scenery/sunset-terrace.jpg",
}: {
  image?: string;
}) {
  const t = await getTranslations("home");
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-sea-900 px-7 py-14 text-cream shadow-[0_50px_100px_-40px_rgba(15,46,54,0.6)] md:px-16 md:py-20">
            <Image src={image} alt="" fill className="object-cover opacity-25" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-sea-900 via-sea-900/85 to-clay-800/40" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-terracotta-600/30 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="eyebrow is-light">{t("ctaSecondary")}</p>
              <h2 className="mt-4 text-3xl leading-tight text-cream md:text-[2.9rem]">{t("ctaTitle")}</h2>
              <p className="mt-5 max-w-lg text-cream/75 md:text-lg">{t("ctaText")}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  {t("ctaButton")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/showroom" className="btn btn-outline-light">
                  {t("ctaSecondary")}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
