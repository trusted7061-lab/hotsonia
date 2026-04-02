import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Escorts in Patna | Contact Hot Sonia Patna Escorts Service",
  description:
    "Book escorts in Patna or call girls in Patna now. Contact Hot Sonia — Patna Escorts Service available 24/7. Fast, 100% discreet booking via call, WhatsApp, or online form.",
  alternates: { canonical: "https://www.hotsonia.com/contact" },
  openGraph: {
    title: "Book Escorts in Patna | Contact Hot Sonia Patna Escorts Service",
    description:
      "Book your favourite call girl in Patna now. Hot Sonia Patna Escorts Service — fast, 100% discreet, available 24/7.",
    images: [
      {
        url: "https://www.hotsonia.com/images/banner.webp",
        alt: "Book Escorts in Patna — Hot Sonia Patna Escorts Service",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
