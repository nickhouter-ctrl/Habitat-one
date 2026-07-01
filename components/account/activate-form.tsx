"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter, Link } from "@/i18n/navigation";

const field = "w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-ink";

export function ActivateForm() {
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
      setError("Kies een wachtwoord van minimaal 8 tekens.");
      setStatus("error");
      return;
    }
    if (password !== String(f.get("confirm") ?? "")) {
      setError("De wachtwoorden komen niet overeen.");
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
        setError("Deze activatielink is verlopen of ongeldig. Vraag een nieuwe aan.");
        setStatus("error");
        return;
      }
      router.push("/account");
      router.refresh();
    } catch {
      setError("Kon het wachtwoord niet instellen. Probeer het later opnieuw.");
      setStatus("error");
    }
  }

  if (!token) {
    return (
      <p className="text-sm text-ink-soft">
        Geen geldige activatielink. Open de link uit je e-mail, of <Link href="/account/login" className="underline">log in</Link>.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="password" type="password" required placeholder="Kies een wachtwoord" className={field} />
      <input name="confirm" type="password" required placeholder="Herhaal wachtwoord" className={field} />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-ink px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Instellen…" : "Wachtwoord instellen & inloggen"}
      </button>
    </form>
  );
}
