import { MetadataRoute } from "next";
import { locations } from "@/lib/locations";

const BASE_URL = "https://hotsonia.in";

const companionImages = [
  `${BASE_URL}/images/soniya.webp`,
  `${BASE_URL}/images/priya.webp`,
  `${BASE_URL}/images/anaya.webp`,
  `${BASE_URL}/images/natasha.webp`,
  `${BASE_URL}/images/diya.webp`,
  `${BASE_URL}/images/neelima.webp`,
  `${BASE_URL}/images/aafrin.webp`,
  `${BASE_URL}/images/jamila.webp`,
  `${BASE_URL}/images/janu.webp`,
  `${BASE_URL}/images/neethu.webp`,
  `${BASE_URL}/images/poonam.webp`,
  `${BASE_URL}/images/sufia.webp`,
];

const bannerImage = `${BASE_URL}/images/banner.webp`;
const logoImage   = `${BASE_URL}/images/logo.png`;

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [bannerImage, logoImage, ...companionImages],
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "weekly",
      priority: 0.95,
      images: companionImages,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [bannerImage],
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.85,
      images: [bannerImage],
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [logoImage],
    },
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/${loc.slug}`,
    lastModified: new Date("2026-04-17"),
    changeFrequency: "weekly" as const,
    priority: 0.85,
    images: [bannerImage],
  }));

  return [...corePages, ...locationPages];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [bannerImage, logoImage, ...companionImages],
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "weekly",
      priority: 0.95,
      images: companionImages,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [bannerImage],
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.85,
      images: [bannerImage],
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [logoImage],
    },
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/${loc.slug}`,
    lastModified: new Date("2026-04-17"),
    changeFrequency: "weekly" as const,
    priority: 0.85,
    images: [bannerImage],
  }));

  return [...corePages, ...locationPages];
}
