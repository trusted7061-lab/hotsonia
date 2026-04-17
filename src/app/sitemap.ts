import { MetadataRoute } from "next";
import { locations } from "@/lib/locations";

const BASE_URL = "https://hotsonia.in";

// Companions for image sitemap
const companionImages = [
  { loc: `${BASE_URL}/images/soniya.webp`,  title: "Sonia — Premium Escort in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/priya.webp`,   title: "Priya — Elite Call Girl in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/anaya.webp`,   title: "Anaya — VIP Escort in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/natasha.webp`, title: "Natasha — Hot Escort in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/diya.webp`,    title: "Diya — Premium Call Girl in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/neelima.webp`, title: "Neelima — Exclusive Escort in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/aafrin.webp`,  title: "Aafrin — Escort Companion in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/jamila.webp`,  title: "Jamila — Charming Call Girl in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/janu.webp`,    title: "Janu — Escort Companion in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/neethu.webp`,  title: "Neethu — Fresh Escort in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/poonam.webp`,  title: "Poonam — Bold Call Girl in Patna | Hot Sonia" },
  { loc: `${BASE_URL}/images/sufia.webp`,   title: "Sufia — Divine Escort in Patna | Hot Sonia" },
];

const bannerImage = { loc: `${BASE_URL}/images/banner.webp`, title: "Escorts in Patna — Hot Sonia Patna Escorts Service" };
const logoImage   = { loc: `${BASE_URL}/images/logo.png`,    title: "Hot Sonia Logo — #1 Escorts in Patna" };

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
