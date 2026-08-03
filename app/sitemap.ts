import type { MetadataRoute } from "next";
import { LANDING_CANONICAL, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: LANDING_CANONICAL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
