import type { MetadataRoute } from "next";

// Allow everything except the internal search results and API routes.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/search", "/api/"],
    },
    sitemap: "https://www.habitat-one.com/sitemap.xml",
    host: "https://www.habitat-one.com",
  };
}
