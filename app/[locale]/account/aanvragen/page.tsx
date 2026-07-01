import { setRequestLocale } from "next-intl/server";

import { RegisterForm } from "@/components/account/register-form";

export const metadata = { title: "Account aanvragen — Habitat One" };

export default async function RegisterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <section className="mx-auto max-w-lg px-6 pb-24 pt-36">
      <h1 className="mb-2 text-2xl font-medium">Account aanvragen</h1>
      <p className="mb-6 text-sm text-ink-soft">
        Vraag een account aan om de prijzen te bekijken. Na goedkeuring krijg je een e-mail om je wachtwoord in te stellen.
      </p>
      <RegisterForm locale={locale} />
    </section>
  );
}
