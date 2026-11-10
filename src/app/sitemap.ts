import type { MetadataRoute } from "next";
import { doctors } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.moderndentalminot.com";
  const routes = ["", "/team", "/services", "/new-patients", "/contact"];

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...doctors.map((doctor) => ({
      url: `${base}/team/${doctor.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
