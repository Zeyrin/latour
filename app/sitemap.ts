import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

/**
 * Seules les pages qui existent sont déclarées : annoncer à Google des URL
 * en 404 (suites, spa, événements…) lui ferait perdre confiance dans le
 * sitemap entier. Ajouter chaque page ici au moment où elle est créée.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
