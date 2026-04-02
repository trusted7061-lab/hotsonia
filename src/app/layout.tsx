import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://www.hotsonia.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Escorts in Patna | Call Girls in Patna | Patna Escorts Service — Hot Sonia",
    template: "%s | Hot Sonia — Patna Escorts",
  },
  description:
    "Hot Sonia — #1 Escorts in Patna. Premium Call Girls in Patna, verified & beautiful companions. Best Patna Escorts Service with in-call, out-call & overnight packages. Available 24/7. Book Now.",
  keywords: [
    "Escorts In Patna",
    "Patna Escorts Service",
    "Patna Escorts",
    "Call Girls In Patna",
    "Escort Service Patna",
    "Call Girls Patna",
    "Patna Call Girls",
    "Hot Sonia",
    "Hotsonia",
    "Escort Agency Patna",
    "Independent Escorts Patna",
    "Female Escorts Patna",
    "VIP Escorts Patna",
    "Premium Call Girls Patna",
    "Cheap Escorts Patna",
    "College Call Girls Patna",
    "Housewife Escorts Patna",
  ],
  authors: [{ name: "Hot Sonia — Escorts in Patna", url: BASE_URL }],
  creator: "Hot Sonia",
  publisher: "Hot Sonia",
  category: "Adult Entertainment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Hot Sonia — Escorts in Patna",
    title:
      "Escorts in Patna | Call Girls in Patna | Patna Escorts Service — Hot Sonia",
    description:
      "Premium Escorts in Patna & verified Call Girls in Patna. Hot Sonia — the best Patna Escorts Service. In-call, out-call, overnight packages. 100% discreet, available 24/7.",
    images: [
      {
        url: `${BASE_URL}/images/banner.webp`,
        width: 1200,
        height: 630,
        alt: "Hot Sonia — Escorts in Patna, Call Girls Patna, Patna Escorts Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escorts in Patna | Call Girls in Patna | Hot Sonia Patna",
    description:
      "Premium Escorts in Patna. Verified Call Girls in Patna. Best Patna Escorts Service. 24/7 booking.",
    images: [`${BASE_URL}/images/banner.webp`],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Hot Sonia — Escorts in Patna",
  url: BASE_URL,
  description:
    "Premium Escorts in Patna and Call Girls in Patna. Best Patna Escorts Service available 24/7.",
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/gallery?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EntertainmentBusiness"],
  "@id": `${BASE_URL}/#business`,
  name: "Hot Sonia — Escorts in Patna",
  alternateName: [
    "Patna Escorts Service",
    "Call Girls in Patna",
    "Hotsonia",
    "Hot Sonia Patna",
  ],
  description:
    "Hot Sonia is Patna's most trusted escort agency offering premium escorts in Patna and verified call girls in Patna.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/logo.png`,
    width: 400,
    height: 200,
    caption: "Hot Sonia — Escorts in Patna",
  },
  image: [
    {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/banner.webp`,
      caption: "Escorts in Patna — Hot Sonia",
    },
    {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/logo.png`,
      caption: "Hot Sonia Logo — Patna Escorts",
    },
  ],
  telephone: "+91-9999999999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Patna City",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
    postalCode: "800001",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.5941,
    longitude: 85.1376,
  },
  areaServed: [
    { "@type": "City", name: "Patna", sameAs: "https://en.wikipedia.org/wiki/Patna" },
    { "@type": "State", name: "Bihar" },
  ],
  priceRange: "\u20b9\u20b9\u20b9",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body
        className="min-h-screen flex flex-col"
        style={{
          backgroundColor: "#0a0208",
          color: "#fff",
          fontFamily: "var(--font-inter)",
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
