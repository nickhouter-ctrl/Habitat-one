import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { HoverLabel } from "@/components/ui/hover-label";
import { PageVeil } from "@/components/ui/page-veil";
import { ChapterIndicator } from "@/components/ui/chapter-indicator";
import { QuoteProvider } from "@/components/quote-context";
import { QuoteRequestForm } from "@/components/quote-request-form";
import { JsonLd, localBusinessJsonLd } from "@/components/seo/json-ld";
import { CookieConsent } from "@/components/analytics/cookie-consent";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf4e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0f2e36" },
  ],
  colorScheme: "light",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL("https://www.habitat-one.com"),
    title: { default: t("title"), template: `%s · ${t("siteName")}` },
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: t("siteName"),
      locale,
      type: "website",
    },
    // Google Search Console: set GOOGLE_SITE_VERIFICATION in Vercel to the
    // "content" value of the HTML-tag verification method (or verify by DNS).
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink antialiased">
        <JsonLd data={localBusinessJsonLd} />
        <CookieConsent locale={locale} />
        <NextIntlClientProvider>
          <QuoteProvider>
            <PageVeil />
            <HoverLabel />
            <ChapterIndicator />
            <ScrollProgress />
            {/* Grain — keep it cheap: no mix-blend (forces a full-screen composite layer on each paint). */}
            <div className="pointer-events-none fixed inset-0 z-[60] hidden opacity-[0.05] [background-image:url('/site/grain.svg')] [background-size:140px_140px] motion-safe:lg:block" aria-hidden />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <QuoteRequestForm />
          </QuoteProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
