import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Hot Sonia | Premium Escorts in Patna",
  description:
    "Hot Sonia — Patna's most exclusive escort and companion service. Verified, beautiful, and discreet companions available 24/7.",
  keywords: "hot sonia, escorts patna, companion services patna, patna escorts, hotsonia",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: "#0a0208", color: "#fff", fontFamily: "var(--font-inter)" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
