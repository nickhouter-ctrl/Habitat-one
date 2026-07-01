"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";

const CRM_API = process.env.NEXT_PUBLIC_CRM_API_URL ?? "https://habitat-crm-delta.vercel.app";

const field = "w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-ink";

export function RegisterForm({ locale }: { locale: string }) {
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
        setError(data.issues?.[0] ?? "Er ging iets mis. Controleer je gegevens.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setError("Kon de aanvraag niet versturen. Probeer het later opnieuw.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-black/10 bg-white p-6 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-green-600" />
        <h2 className="mt-3 text-lg font-medium">Aanvraag ontvangen</h2>
        <p className="mt-2 text-sm text-ink-soft">
          Bedankt! We beoordelen je aanvraag en sturen je een e-mail zodra je account klaarstaat om je wachtwoord in te stellen.
        </p>
        <Link href="/" className="mt-4 inline-block text-sm font-medium text-ink underline">Terug naar de site</Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex gap-2">
        {(["particulier", "zakelijk"] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium capitalize transition ${
              kind === k ? "border-ink bg-ink text-white" : "border-black/15 bg-white text-ink-soft hover:border-ink"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Naam" className={field} />
        <input name="email" type="email" required placeholder="E-mail" className={field} />
        <input name="phone" placeholder="Telefoon (optioneel)" className={`${field} sm:col-span-2`} />
      </div>

      {kind === "zakelijk" && (
        <div className="grid gap-3 rounded-lg bg-black/[0.03] p-3 sm:grid-cols-2">
          <input name="businessName" required placeholder="Bedrijfsnaam" className={field} />
          <input name="vatNumber" required placeholder="IVA / BTW-nummer" className={field} />
          <input name="address" placeholder="Adres (optioneel)" className={`${field} sm:col-span-2`} />
          <p className="text-xs text-ink-soft sm:col-span-2">Voor een zakelijk account zijn bedrijfsnaam en IVA/BTW-nummer verplicht.</p>
        </div>
      )}

      <textarea name="message" rows={3} placeholder="Opmerking (optioneel)" className={field} />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-ink px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Versturen…" : "Account aanvragen"}
      </button>
      <p className="text-center text-xs text-ink-soft">
        Al een account? <Link href="/account/login" className="underline">Inloggen</Link>
      </p>
    </form>
  );
}
