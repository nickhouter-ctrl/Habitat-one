"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useRouter, Link } from "@/i18n/navigation";

const field = "w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-ink";

export function ActivateForm() {
  const t = useTranslations("account");
  const params = useSearchParams();
  const token = params.get("token") ?? "";
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const password = String(f.get("password") ?? "");
    if (password.length < 8) {
      setError(t("pwTooShort"));
      setStatus("error");
      return;
    }
    if (password !== String(f.get("confirm") ?? "")) {
      setError(t("pwMismatch"));
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/account/activate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) {
        setError(t("activateInvalid"));
        setStatus("error");
        return;
      }
      router.push("/account");
      router.refresh();
    } catch {
      setError(t("activateFailed"));
      setStatus("error");
    }
  }

  if (!token) {
    return (
      <p className="text-sm text-ink-soft">
        {t("noValidLink")}<Link href="/account/login" className="underline">{t("logInWord")}</Link>.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="password" type="password" required placeholder={t("choosePassword")} className={field} />
      <input name="confirm" type="password" required placeholder={t("repeatPassword")} className={field} />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-ink px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? t("activating") : t("activateSubmit")}
      </button>
    </form>
  );
}
