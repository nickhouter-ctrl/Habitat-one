import { getTranslations } from "next-intl/server";
import { Download, FileText } from "lucide-react";

import { FLEXIBLE_STONE_DATASHEET } from "@/lib/data/product-docs";

/**
 * Technische fiche van Flexible Stone op de collectiepagina: de Engelse en de
 * Spaanse versie naast elkaar (op de productpagina's staat alleen de versie in
 * de taal van de bezoeker, via ProductDocuments).
 */
export async function FlexibleStoneDocs() {
  const t = await getTranslations("products");
  const docs = [
    { file: FLEXIBLE_STONE_DATASHEET.en, label: t("docDatasheetEn") },
    { file: FLEXIBLE_STONE_DATASHEET.es, label: t("docDatasheetEs") },
  ];
  return (
    <section id="documentatie" className="scroll-mt-24 border-t border-ink/10 bg-paper py-14 md:py-20" data-chapter={t("docsTitle")}>
      <div className="container-x">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">{t("docsTitle")}</p>
            <p className="mt-3 text-ink-soft">{t("fsDocsLead")}</p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {docs.map((doc) => (
              <li key={doc.file}>
                <a
                  href={doc.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-ink/10 bg-cream px-5 py-4 transition-colors hover:border-terracotta-400 hover:bg-white"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-terracotta-700/10 text-terracotta-700">
                    <FileText className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-ink">{doc.label}</span>
                    <span className="mt-0.5 block text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft">PDF</span>
                  </span>
                  <Download className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-y-0.5 group-hover:text-terracotta-700" strokeWidth={1.8} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
