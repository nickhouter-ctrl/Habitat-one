import type { ReactNode } from "react";

// The real <html>/<body> live in app/[locale]/layout.tsx (next-intl App Router pattern).
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
