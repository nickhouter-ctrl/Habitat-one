import { getTranslations, setRequestLocale } from "next-intl/server";

import { RegisterForm } from "@/components/account/register-form";

export const metadata = { title: "Account aanvragen — Habitat One" };

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
