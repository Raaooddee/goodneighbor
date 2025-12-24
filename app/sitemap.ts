import type { MetadataRoute } from "next";
import { charities } from "../data/charities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goodneighbor.charity";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/charities`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/verify`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
  ];

  const charityRoutes: MetadataRoute.Sitemap = charities.map((c) => ({
    url: `${baseUrl}/charity/${c.slug}`,
    lastModified: new Date(c.lastUpdated || new Date().toISOString()),
  }));

  return [...staticRoutes, ...charityRoutes];
}
