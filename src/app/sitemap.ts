import type { MetadataRoute } from "next";
import { GALLERY, SERVICES } from "@/lib/data";
import { slugify } from "@/lib/slug";

const SITE = "https://bumpers2bumpers.detail";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`,               lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE}/services`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/gallery`,        lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE}/about`,          lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${SITE}/book`,           lastModified: now, changeFrequency: "yearly",  priority: 0.9 },
    { url: `${SITE}/legal/privacy`,  lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE}/legal/terms`,    lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const galleryPages: MetadataRoute.Sitemap = GALLERY.map((g) => ({
    url: `${SITE}/gallery/${slugify(g.tag)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...servicePages, ...galleryPages];
}
