import Link from "next/link";
import { Montserrat, Cormorant_Garamond } from "next/font/google";

// Global fallback (rendered outside any [locale] layout) — self-contained, but
// dressed in the brand fonts (Cormorant display + Montserrat) and palette.
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"] });

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f2e36",
          color: "#faf4e8",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: 460 }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.32em",
              color: "#e0a380",
              margin: 0,
            }}
          >
            Habitat One
          </p>
          <p
            style={{
              fontFamily: cormorant.style.fontFamily,
              fontSize: "clamp(4.5rem, 16vw, 7.5rem)",
              fontWeight: 600,
              lineHeight: 1,
              color: "#faf4e8",
              margin: "0.75rem 0 0",
            }}
          >
            404
          </p>
          <span
            style={{
              display: "block",
              width: 40,
              height: 1,
              background: "rgba(224,163,128,0.6)",
              margin: "1.25rem auto",
            }}
          />
          <h1
            style={{
              fontFamily: cormorant.style.fontFamily,
              fontSize: "1.9rem",
              fontWeight: 500,
              margin: "0 0 0.6rem",
            }}
          >
            This page doesn’t exist
          </h1>
          <p style={{ opacity: 0.7, fontSize: "0.95rem", lineHeight: 1.6, margin: "0 auto 1.75rem" }}>
            The page you’re looking for has moved or never existed. Let’s get you
            back to natural stone.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "#c2703f",
              color: "#fff",
              padding: "0.85rem 1.7rem",
              fontSize: "0.74rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              textDecoration: "none",
            }}
          >
            Back to Habitat One
          </Link>
        </div>
      </body>
    </html>
  );
}
