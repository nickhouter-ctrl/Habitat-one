import Link from "next/link";

// Global fallback (rendered outside any [locale] layout). Kept minimal & self-contained.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          background: "#0f2e36",
          color: "#faf4e8",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <p style={{ fontSize: "5rem", fontWeight: 700, color: "#e0a380", margin: 0 }}>404</p>
          <h1 style={{ fontSize: "1.75rem", margin: "0.5rem 0 0.75rem" }}>This page doesn’t exist</h1>
          <p style={{ opacity: 0.7, maxWidth: 420, margin: "0 auto 1.5rem" }}>
            The page you’re looking for has moved or never existed.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "#c2703f",
              color: "#fff",
              padding: "0.8rem 1.6rem",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Back to Habitat One
          </Link>
        </div>
      </body>
    </html>
  );
}
