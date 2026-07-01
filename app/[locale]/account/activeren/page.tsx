import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";

import { ActivateForm } from "@/components/account/activate-form";

export const metadata = { title: "Wachtwoord instellen — Habitat One" };

export default async function ActivatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <section className="mx-auto max-w-md px-6 pb-24 pt-36">
      <h1 className="mb-2 text-2xl font-medium">Wachtwoord instellen</h1>
      <p className="mb-6 text-sm text-ink-soft">Stel je wachtwoord in om je account te activeren.</p>
      <Suspense>
        <ActivateForm />
      </Suspense>
    </section>
  );
}
