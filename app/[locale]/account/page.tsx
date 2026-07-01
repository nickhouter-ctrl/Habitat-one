import { setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { fetchAccountMe } from "@/lib/account/server";
import { LogoutButton } from "@/components/account/logout-button";

export const metadata = { title: "Mijn account — Habitat One" };

type Commission = { referee: string; base: number; pct: number; amount: number; status: string; date: string };

function fmt(n: number) {
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(n);
}

export default async function AccountPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const me = await fetchAccountMe();

  if (!me.loggedIn) {
    return (
      <section className="mx-auto max-w-md px-6 pb-24 pt-36 text-center">
        <h1 className="mb-2 text-2xl font-medium">Mijn account</h1>
        <p className="mb-6 text-sm text-ink-soft">Log in om je account en de prijzen te bekijken.</p>
        <div className="flex justify-center gap-3">
          <Link href="/account/login" className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white">Inloggen</Link>
          <Link href="/account/aanvragen" className="rounded-lg border border-black/15 px-5 py-2.5 text-sm font-medium">Account aanvragen</Link>
        </div>
      </section>
    );
  }

  const commissions = (me.commissions as Commission[]) ?? [];

  return (
    <section className="mx-auto max-w-2xl px-6 pb-24 pt-36">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">Mijn account</h1>
        <LogoutButton />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-ink-soft">E-mail</p>
          <p className="mt-1 font-medium">{me.account.email}</p>
          {me.account.businessName && <p className="text-sm text-ink-soft">{me.account.businessName}</p>}
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-ink-soft">Prijsniveau</p>
          <p className="mt-1 font-medium">{me.account.tier === "aannemer" ? "Zakelijk" : "Particulier"}</p>
          <p className="text-sm text-ink-soft">Prijzen zijn nu zichtbaar op de producten.</p>
        </div>
      </div>

      {(commissions.length > 0 || me.commissionTotal > 0) && (
        <div className="mt-6 rounded-xl border border-black/10 bg-white p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Mijn commissie</h2>
            <span className="font-semibold">{fmt(me.commissionTotal)}</span>
          </div>
          {commissions.length > 0 && (
            <table className="mt-3 w-full text-sm">
              <thead className="text-left text-ink-soft">
                <tr>
                  <th className="py-1 font-normal">Klant</th>
                  <th className="py-1 text-right font-normal">Order</th>
                  <th className="py-1 text-right font-normal">%</th>
                  <th className="py-1 text-right font-normal">Commissie</th>
                </tr>
              </thead>
              <tbody>
                {commissions.map((c, i) => (
                  <tr key={i} className="border-t border-black/5">
                    <td className="py-1.5">{c.referee}</td>
                    <td className="py-1.5 text-right tabular-nums">{fmt(c.base)}</td>
                    <td className="py-1.5 text-right tabular-nums text-ink-soft">{c.pct}%</td>
                    <td className="py-1.5 text-right font-medium tabular-nums">{fmt(c.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <p className="mt-2 text-xs text-ink-soft">Commissie op de bestellingen van klanten die je hebt aangebracht.</p>
        </div>
      )}
    </section>
  );
}
