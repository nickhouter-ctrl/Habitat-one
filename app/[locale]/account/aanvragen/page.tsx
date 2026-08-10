import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { RegisterForm } from "@/components/account/register-form";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "account" });
  return { title: t("metaRequest"), robots: { index: false, follow: false } };
}

export default async function RegisterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("account");
  return (
    <section className="mx-auto max-w-lg px-6 pb-24 pt-36">
      <h1 className="mb-2 text-2xl font-medium">{t("requestTitle")}</h1>
      <p className="mb-6 text-sm text-ink-soft">{t("requestIntro")}</p>
      <RegisterForm locale={locale} />
    </section>
  );
}
