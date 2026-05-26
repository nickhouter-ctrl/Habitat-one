import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/reveal";

export async function CtaBanner({
  image = "/scenery/sunset-terrace.jpg",
}: {
  image?: string;
}) {
  const t = await getTranslations("home");
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <Image src={image} alt="" fill className="object-cover opacity-30" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45" />
      <div className="container-x relative py-24 md:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/70">
              {t("ctaSecondary")}
            </span>
            <h2 className="mt-5 text-3xl font-medium leading-[1.06] tracking-[-0.018em] text-paper sm:text-4xl md:text-[2.8rem]">
              {t("ctaTitle")}
            </h2>
            <p className="mt-6 max-w-lg text-paper/75 md:text-lg">{t("ctaText")}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-outline-light">
                {t("ctaButton")}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/showroom"
                className="inline-flex items-center gap-2 self-center text-[0.78rem] font-medium uppercase tracking-[0.18em] text-paper underline underline-offset-[6px] decoration-paper/35 hover:decoration-paper"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
