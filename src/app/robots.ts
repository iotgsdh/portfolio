import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://portfolio.tw08iwckpyvz48pfu0sx-262.workers.dev/sitemap.xml",
  };
}
