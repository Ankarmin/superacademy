import type { MetadataRoute } from "next";
import { cyclePrograms } from "./(public)/ciclos/cycles";
import { getSiteUrl } from "@/lib/site";

const staticRoutes = [
  "",
  "/nosotros",
  "/ciclos",
  "/docentes",
  "/videoteca",
  "/recursos",
  "/politica-de-privacidad",
  "/terminos-y-condiciones",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route || "/", siteUrl).toString(),
      lastModified,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...cyclePrograms.map((program) => ({
      url: new URL(`/ciclos/${program.slug}`, siteUrl).toString(),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
