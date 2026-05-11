import { ImageResponse } from "next/og";

export const alt = "Habitat One — build, renovate & live beautifully in Xàbia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0f2e36",
          backgroundImage:
            "radial-gradient(900px 600px at 85% 0%, rgba(194,112,63,0.55), transparent 60%), radial-gradient(700px 500px at 0% 100%, rgba(35,94,108,0.6), transparent 60%)",
          color: "#faf4e8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 40 40">
            <rect width="40" height="40" rx="9" fill="rgba(250,244,232,0.12)" />
            <path d="M8 31 V18 a12 12 0 0 1 24 0 V31" stroke="#faf4e8" strokeWidth="3" fill="none" />
            <circle cx="20" cy="11" r="3" fill="#e0a380" />
          </svg>
          <div style={{ fontSize: 26, letterSpacing: 8, textTransform: "uppercase", opacity: 0.8 }}>Xàbia · Costa Blanca</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1 }}>Habitat One</div>
          <div style={{ fontSize: 36, lineHeight: 1.3, maxWidth: 900, opacity: 0.85 }}>
            Build, renovate &amp; live beautifully in Xàbia — premium materials, design, law &amp; property under one Mediterranean roof.
          </div>
        </div>
        <div style={{ display: "flex", gap: 36, fontSize: 22, letterSpacing: 4, textTransform: "uppercase", opacity: 0.7 }}>
          <span>Materials</span>
          <span>·</span>
          <span>Architecture</span>
          <span>·</span>
          <span>Renovation</span>
          <span>·</span>
          <span>Property</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
