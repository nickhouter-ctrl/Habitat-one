import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ActivateForm } from "@/components/account/activate-form";

export const metadata = { title: "Wachtwoord instellen — Habitat One" };

export default async function ActivatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("account");
  return (
    <section className="mx-auto max-w-md px-6 pb-24 pt-36">
      <h1 className="mb-2 text-2xl font-medium">{t("activateTitle")}</h1>
      <p className="mb-6 text-sm text-ink-soft">{t("activateIntro")}</p>
      <Suspense>
        <ActivateForm />
      </Suspense>
    </section>
  );
}
