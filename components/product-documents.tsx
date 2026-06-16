import { Ruler, Wrench, Download } from "lucide-react";
import type { ProductDoc } from "@/lib/data/product-docs";

type Labels = {
  title: string;
  lead: string;
  drawing: string;
  installation: string;
};

function ext(file: string): string {
  const m = file.split(".").pop();
  return (m ?? "file").toUpperCase();
}

export function ProductDocuments({
  docs,
  labels,
}: {
  docs: ProductDoc[];
  labels: Labels;
}) {
  if (docs.length === 0) return null;

  return (
    <section className="border-t border-ink/10 bg-paper py-14 md:py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-ink-soft">
            {labels.title}
          </p>
          <p className="mt-3 text-ink-soft">{labels.lead}</p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc) => {
            const isDrawing = doc.type === "drawing";
            const Icon = isDrawing ? Ruler : Wrench;
            const label = isDrawing ? labels.drawing : labels.installation;
            return (
              <li key={doc.file}>
                <a
                  href={doc.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-ink/10 bg-cream px-5 py-4 transition-colors hover:border-terracotta-400 hover:bg-white"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-terracotta-700/10 text-terracotta-700">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-ink">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft">
                      {ext(doc.file)}
                    </span>
                  </span>
                  <Download
                    className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-y-0.5 group-hover:text-terracotta-700"
                    strokeWidth={1.8}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
