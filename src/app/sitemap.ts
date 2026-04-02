import { MetadataRoute } from "next";
import { locations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://hotsonia.com";
  const now = new Date().toISOString();

  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                    lastModified: now, changeFrequency: "weekly",  priority: 1.0  },
    { url: `${BASE_URL}/gallery`,       lastModified: now, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE_URL}/services`,      lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE_URL}/contact`,       lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/about`,         lastModified: now, changeFrequency: "monthly", priority: 0.7  },
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/${loc.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...corePages, ...locationPages];
}
