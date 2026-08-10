"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CRM_API } from "@/lib/account/crm";
import { Field, fieldCls as field } from "./form-field";

export function RegisterForm({ locale }: { locale: string }) {
  const t = useTranslations("account");
  const [kind, setKind] = useState<"particulier" | "zakelijk">("particulier");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const f = new FormData(e.currentTarget);
    const body = {
      name: String(f.get("name") ?? ""),
      email: String(f.get("email") ?? ""),
      phone: String(f.get("phone") ?? ""),
      kind,
      businessName: String(f.get("businessName") ?? ""),
      vatNumber: String(f.get("vatNumber") ?? ""),
      address: String(f.get("address") ?? ""),
      message: String(f.get("message") ?? ""),
      locale,
    };
    try {
      const res = await fetch(`${CRM_API}/api/portal/register`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        setError(data.issues?.[0] ?? t("genericError"));
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setError(t("sendError"));
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-black/10 bg-white p-6 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-green-600" />
        <h2 className="mt-3 text-lg font-medium">{t("receivedTitle")}</h2>
        <p className="mt-2 text-sm text-ink-soft">{t("receivedText")}</p>
        <Link href="/" className="mt-4 inline-block text-sm font-medium text-ink underline">{t("backToSite")}</Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Keuzeknoppen i.p.v. radio's — aria-pressed maakt de actieve keuze hoorbaar. */}
      <div className="flex gap-2" role="group" aria-label={t("requestTitle")}>
        {(["particulier", "zakelijk"] as const).map((k) => (
          <button
            key={k}
            type="button"
            aria-pressed={kind === k}
            onClick={() => setKind(k)}
            className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${
              kind === k ? "border-ink bg-ink text-white" : "border-black/15 bg-white text-ink-soft hover:border-ink"
            }`}
          >
            {k === "particulier" ? t("private") : t("business")}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field label={t("name")} htmlFor="reg-name">
          <input id="reg-name" name="name" required autoComplete="name" className={field} />
        </Field>
        <Field label={t("email")} htmlFor="reg-email">
          <input id="reg-email" name="email" type="email" required autoComplete="email" className={field} />
        </Field>
        <Field label={t("phoneOptional")} htmlFor="reg-phone" className="sm:col-span-2">
          <input id="reg-phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </Field>
      </div>

      {kind === "zakelijk" && (
        <div className="grid gap-3 rounded-lg bg-black/[0.03] p-3 sm:grid-cols-2">
          <Field label={t("businessName")} htmlFor="reg-business">
            <input id="reg-business" name="businessName" required autoComplete="organization" className={field} />
          </Field>
          <Field label={t("vatNumber")} htmlFor="reg-vat">
            <input id="reg-vat" name="vatNumber" required className={field} />
          </Field>
          <Field label={t("addressOptional")} htmlFor="reg-address" className="sm:col-span-2">
            <input id="reg-address" name="address" autoComplete="street-address" className={field} />
          </Field>
          <p className="text-xs text-ink-soft sm:col-span-2">{t("businessRequiredNote")}</p>
        </div>
      )}

      <Field label={t("messageOptional")} htmlFor="reg-message">
        <textarea id="reg-message" name="message" rows={3} className={field} />
      </Field>

      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-ink px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? t("submitting") : t("submitRequest")}
      </button>
      <p className="text-center text-xs text-ink-soft">
        {t("haveAccount")} <Link href="/account/login" className="underline">{t("login")}</Link>
      </p>
    </form>
  );
}
