import type { MetadataRoute } from "next";
import { navLinks, siteUrl } from "./data/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: `${siteUrl}${link.href === "/" ? "/" : link.href}`,
    lastModified: new Date(),
    changeFrequency: link.href === "/" || link.href === "/agenda" ? "weekly" : "monthly",
    priority:
      link.href === "/" ? 1 : link.href === "/agenda" ? 0.9 : 0.85,
  }));
}
