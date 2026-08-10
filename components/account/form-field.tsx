// Gedeeld formulierveld voor de account-formulieren: een zichtbaar label boven
// het veld (screenreader- én zichtbaar-vriendelijk, i.p.v. alleen placeholder).

import type { ReactNode } from "react";

export const fieldCls =
  "w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-ink";

export function Field({ label, htmlFor, children, className = "" }: { label: string; htmlFor: string; children: ReactNode; className?: string }) {
  return (
    <label htmlFor={htmlFor} className={`block ${className}`}>
      <span className="mb-1 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">{label}</span>
      {children}
    </label>
  );
}
