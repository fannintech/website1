import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/services",
    "/services/co-managed-it",
    "/industries",
    "/pricing",
    "/resources",
    "/blog",
    "/contact",
    "/schedule-consultation",
    "/privacy-policy",
    "/terms-of-service",
    "/locations",
  ];

  const servicePaths = services.map((s) => s.href);
  const industryPaths = industries.map((i) => i.href);

  return [...staticPaths, ...servicePaths, ...industryPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
