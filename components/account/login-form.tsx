"use client";

import { useState } from "react";
import { useRouter, Link } from "@/i18n/navigation";

const field = "w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-ink";

export function LoginForm() {
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
        setError("Onjuiste e-mail of wachtwoord, of je account is nog niet geactiveerd.");
        setStatus("error");
        return;
      }
      router.push("/account");
      router.refresh();
    } catch {
      setError("Kon niet inloggen. Probeer het later opnieuw.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="email" type="email" required placeholder="E-mail" className={field} />
      <input name="password" type="password" required placeholder="Wachtwoord" className={field} />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-ink px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Inloggen…" : "Inloggen"}
      </button>
      <p className="text-center text-xs text-ink-soft">
        Nog geen account? <Link href="/account/aanvragen" className="underline">Account aanvragen</Link>
      </p>
    </form>
  );
}
