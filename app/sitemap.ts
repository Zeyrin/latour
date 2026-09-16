import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { suites } from "@/lib/pages";

/**
 * Seules les pages qui existent sont déclarées : annoncer à Google des URL
 * en 404 lui ferait perdre confiance dans le sitemap entier. Les mentions
 * légales sont en noindex, donc absentes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  });
  return [
    page("", 1),
    page("/les-suites", 0.9),
    ...suites.map((s) => page(`/les-suites/${s.slug}`, 0.8)),
    page("/le-spa", 0.9),
    page("/week-ends-et-cures", 0.8),
    page("/evenements", 0.8),
    page("/le-domaine", 0.6),
    page("/informations-pratiques", 0.6),
    page("/contact", 0.8),
  ];
}
