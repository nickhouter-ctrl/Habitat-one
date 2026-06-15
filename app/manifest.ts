import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Habitat One — Jávea/Xàbia",
    short_name: "Habitat One",
    description:
      "Transparant materialen- en bouwplatform met experience center in Jávea/Xàbia.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf4e8",
    theme_color: "#0f2e36",
    lang: "en",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
