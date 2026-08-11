import { PROJECTS } from "@/constants/projects";
import type { MetadataRoute } from "next";

const SITE_URL = "https://portfolio.tw08iwckpyvz48pfu0sx-262.workers.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/about`, lastModified: new Date() },
    { url: `${SITE_URL}/skills`, lastModified: new Date() },
    { url: `${SITE_URL}/works`, lastModified: new Date() },
  ];

  const workPages = PROJECTS.map((item) => ({
    url: `${SITE_URL}/news/${item.id}`,
    lastModified: new Date(item.updatedAt),
  }));

  return [...staticPages, ...workPages];
}
