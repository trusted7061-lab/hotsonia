import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Escorts in Patna | Contact Hot Sonia",
  description:
    "Book escorts in Patna now. Hot Sonia Patna Escorts Service — fast, 100% discreet booking via call or WhatsApp. Available 24/7.",
  alternates: {
    canonical: "https://hotsonia.in/contact",
    languages: { "en-IN": "https://hotsonia.in/contact", "x-default": "https://hotsonia.in/contact" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Hot Sonia — Escorts in Patna",
    url: "https://hotsonia.in/contact",
    title: "Book Escorts in Patna | Contact Hot Sonia Patna Escorts Service",
    description:
      "Book your favourite call girl in Patna now. Hot Sonia Patna Escorts Service — fast, 100% discreet, available 24/7.",
    images: [
      {
        url: "https://hotsonia.in/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "Book Escorts in Patna — Hot Sonia Patna Escorts Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hotsonia_in",
    creator: "@hotsonia_in",
    title: "Book Escorts in Patna | Contact Hot Sonia",
    description: "Book call girls in Patna now — WhatsApp or call. 100% discreet. Available 24/7.",
    images: ["https://hotsonia.in/images/banner.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
