import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patna Escorts Service | Packages & Rates — Hot Sonia",
  description:
    "Hot Sonia Patna Escorts Service — in-call from ₹3,000, out-call ₹4,000, overnight ₹12,000. Premium Call Girls in Patna, available 24/7.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://hotsonia.in/services",
    languages: { "en-IN": "https://hotsonia.in/services", "x-default": "https://hotsonia.in/services" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Hot Sonia — Escorts in Patna",
    url: "https://hotsonia.in/services",
    title: "Patna Escorts Service | Rates & Packages | Hot Sonia",
    description:
      "Premium Patna Escorts Service packages. In-call from ₹3,000, out-call, overnight & travel companion. Book call girls in Patna today.",
    images: [{ url: "https://hotsonia.in/images/banner.webp", width: 1200, height: 630, alt: "Patna Escorts Service — Hot Sonia" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hotsonia_in",
    creator: "@hotsonia_in",
    title: "Patna Escorts Service | Packages & Rates — Hot Sonia",
    description: "In-call from ₹3,000 | Out-call ₹4,000 | Overnight ₹12,000. Premium call girls in Patna, 24/7.",
    images: ["https://hotsonia.in/images/banner.webp"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home — Escorts in Patna", item: "https://hotsonia.in" },
    { "@type": "ListItem", position: 2, name: "Patna Escorts Service", item: "https://hotsonia.in/services" },
  ],
};

const services = [
  {
    icon: "\ud83c\udf39",
    title: "In-Call Escort Service Patna",
    price: "Starting Rs.3,000",
    desc: "Visit our private, luxurious in-call venues available 24/7 across Patna. Clean, hygienic, and exceptionally comfortable. Our in-call escorts in Patna are always ready.",
    features: ["Private venue", "Fully hygienic", "Discreet location", "Comfortable setup"],
  },
  {
    icon: "\ud83d\ude97",
    title: "Out-Call Escorts in Patna",
    price: "Starting Rs.4,000",
    desc: "Our call girls in Patna come to your hotel or home at your convenience. Punctual, well-dressed, and completely discreet. Best out-call Patna Escorts Service.",
    features: ["Hotel visits", "Home visits", "Punctual arrival", "Discreet exit"],
  },
  {
    icon: "\ud83c\udf19",
    title: "Overnight Patna Escorts",
    price: "Starting Rs.12,000",
    desc: "An extended night of warmth and companionship with your chosen escort in Patna. Perfect for those who want more time to connect.",
    features: ["Full night stay", "Extended companionship", "Morning available", "Flexible timing"],
  },
  {
    icon: "\u2708\ufe0f",
    title: "Travel Companion Patna",
    price: "Starting Rs.20,000 / day",
    desc: "Take a gorgeous, cultured Patna escort on your next trip — domestic or international. Our call girls in Patna travel anywhere.",
    features: ["Domestic trips", "International trips", "Fully discreet", "Weekends available"],
  },
  {
    icon: "\ud83d\udc8e",
    title: "Elite VIP Escort Patna",
    price: "Starting Rs.6,000",
    desc: "Our top-tier call girls in Patna for corporate dinners, VIP events, and exclusive occasions.",
    features: ["Event escort", "VIP experience", "Well educated", "Elegantly dressed"],
  },
  {
    icon: "\ud83c\udf89",
    title: "Party Companion Patna",
    price: "Starting Rs.5,000",
    desc: "A lively, fun Patna escort for parties, social gatherings, and private celebrations.",
    features: ["Private parties", "Social events", "Fun personality", "Available 24/7"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section
        className="pt-32 pb-14 text-center"
        style={{ background: "linear-gradient(180deg, #0a0208 0%, #100009 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.28em] font-bold mb-2" style={{ color: "#f5c842" }}>
            \u2726 Premium Patna Escorts Packages \u2726
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="gradient-text">Patna Escorts Service</span>
          </h1>
          <nav aria-label="Breadcrumb" className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)" }}>Home</Link>
            <span className="mx-2">&#x203A;</span>
            <span style={{ color: "#f0187d" }}>Patna Escorts Service</span>
          </nav>
          <p className="text-sm mt-4" style={{ color: "rgba(255,255,255,0.52)" }}>
            From casual dates to overnight stays — the best Patna Escorts Service for every desire.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-10 pb-24" style={{ background: "#0a0208" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {services.map((s) => (
              <div
                key={s.title}
                className="card-glass rounded-2xl p-7 flex flex-col hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="text-5xl mb-5">{s.icon}</div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>
                    {s.title}
                  </h2>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{ background: "rgba(240,24,125,0.18)", color: "#f0187d" }}
                  >
                    {s.price}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {s.desc}
                </p>
                <ul className="space-y-2 mt-auto mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#f0187d" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center btn-gradient text-white font-semibold py-3 rounded-xl text-sm">
                  Book This Service
                </Link>
              </div>
            ))}
          </div>

          <div
            className="mt-14 rounded-3xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(240,24,125,0.1) 0%, rgba(245,112,61,0.07) 100%)",
              border: "1px solid rgba(240,24,125,0.2)",
            }}
          >
            <div className="text-5xl mb-4">\u2728</div>
            <h2 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              Custom Patna Escorts Packages Available
            </h2>
            <p className="text-sm mb-7 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.52)" }}>
              Have something specific in mind? We create fully tailored Patna Escorts Service experiences designed just for you.
            </p>
            <Link href="/contact" className="btn-gradient glow-pink text-white font-bold px-10 py-4 rounded-full text-sm">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
