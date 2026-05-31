"use client";

import { ArrowUpRight, Check, Plus } from "lucide-react";
import { useQuote } from "@/components/quote-context";
import { Magnetic } from "@/components/ui/magnetic";

export function ProductQuoteActions({
  slug,
  name,
  variant = null,
  sku,
  image = null,
  labels,
}: {
  slug: string;
  name: string;
  variant?: string | null;
  sku: string | null;
  image?: string | null;
  labels: {
    enquire: string;
    addToQuote: string;
    inQuote: string;
  };
}) {
  const { addItem, hasVariant, openQuote } = useQuote();
  const item = { slug, name, variant, sku, image };
  const added = hasVariant(item);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Magnetic>
        <button
          type="button"
          onClick={() => {
            addItem(item);
            openQuote();
          }}
          className="btn btn-primary"
        >
          {labels.enquire}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </Magnetic>
      <button
        type="button"
        onClick={() => addItem(item)}
        className="btn btn-ghost"
      >
        {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        {added ? labels.inQuote : labels.addToQuote}
      </button>
    </div>
  );
}
