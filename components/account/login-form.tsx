"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, Link } from "@/i18n/navigation";

const field = "w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-ink";

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
      <input name="email" type="email" required placeholder={t("email")} className={field} />
      <input name="password" type="password" required placeholder={t("password")} className={field} />
      {error && <p className="text-sm text-red-600">{error}</p>}
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
