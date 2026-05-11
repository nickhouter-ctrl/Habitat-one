import { getTranslations } from "next-intl/server";
import { ArrowUpRight, Compass } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/section";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-sea-900 text-cream">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-terracotta-600/25 blur-3xl" />
      <Container className="relative text-center">
        <span className="numeral text-7xl text-terracotta-300 md:text-9xl">404</span>
        <h1 className="mx-auto mt-4 max-w-xl font-display text-3xl text-cream md:text-5xl">{t("title")}</h1>
        <p className="mx-auto mt-5 max-w-md text-cream/70">{t("text")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            {t("button")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/products" className="btn btn-outline-light">
            <Compass className="h-4 w-4" />
            {t("browse")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
