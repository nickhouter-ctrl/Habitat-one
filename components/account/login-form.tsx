"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, Link } from "@/i18n/navigation";
import { Field, fieldCls as field } from "./form-field";

export function LoginForm() {
  const t = useTranslations("account");
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const f = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/account/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: f.get("email"), password: f.get("password") }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        setError(t("loginError"));
        setStatus("error");
        return;
      }
      router.push("/account");
      router.refresh();
    } catch {
      setError(t("loginFailed"));
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label={t("email")} htmlFor="login-email">
        <input id="login-email" name="email" type="email" required autoComplete="email" className={field} />
      </Field>
      <Field label={t("password")} htmlFor="login-password">
        <input id="login-password" name="password" type="password" required autoComplete="current-password" className={field} />
      </Field>
      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-ink px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? t("submitting") : t("login")}
      </button>
      <p className="text-center text-xs text-ink-soft">
        {t("noAccount")} <Link href="/account/aanvragen" className="underline">{t("submitRequest")}</Link>
      </p>
    </form>
  );
}
