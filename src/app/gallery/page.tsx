import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Call Girls in Patna — Photo Gallery | Hot Sonia",
  description:
    "Browse real photos of 12 verified call girls in Patna. Beautiful Patna Escorts for in-call, out-call & overnight. 100% real, no fakes.",
  alternates: {
    canonical: "https://hotsonia.in/gallery",
    languages: { "en-IN": "https://hotsonia.in/gallery", "x-default": "https://hotsonia.in/gallery" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Hot Sonia — Escorts in Patna",
    url: "https://hotsonia.in/gallery",
    title: "Call Girls in Patna — Photo Gallery | Patna Escorts | Hot Sonia",
    description:
      "Browse real photos of verified call girls in Patna. 12 stunning Patna Escorts available 24/7. Book your favourite companion today.",
    images: [
      {
        url: "https://hotsonia.in/images/soniya.webp",
        width: 1200,
        height: 630,
        alt: "Sonia — Call Girl in Patna | Patna Escorts Gallery | Hot Sonia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hotsonia_in",
    creator: "@hotsonia_in",
    title: "Call Girls in Patna — Photo Gallery | Hot Sonia",
    description: "12 verified call girls in Patna. Real photos, no fakes. Book now — available 24/7.",
    images: ["https://hotsonia.in/images/soniya.webp"],
  },
};

const companions = [
  { name: "Sonia",   img: "/images/soniya.webp",  tag: "\u2b50 Star Girl",   age: "22", desc: "The most sought-after escort in Patna. Bold, charming, and impossible to forget.", alt: "Sonia — Star Call Girl in Patna | Patna Escorts Service | Hot Sonia" },
  { name: "Priya",   img: "/images/priya.webp",   tag: "\ud83d\udc8e Elite",  age: "21", desc: "Elegant and sophisticated. Perfect for high-class dates and exclusive events.", alt: "Priya — Elite Escort in Patna | Call Girls Patna | Hot Sonia" },
  { name: "Anaya",   img: "/images/anaya.webp",   tag: "\u2728 VIP",           age: "23", desc: "Sweet, playful, and stunning. Always full of energy and laughter.", alt: "Anaya — VIP Call Girl Patna | Escorts in Patna | Hot Sonia" },
  { name: "Natasha", img: "/images/natasha.webp", tag: "\ud83d\udd25 Hot Pick", age: "22", desc: "Bold and daring — she knows exactly how to make you feel special.", alt: "Natasha — Hot Escort Patna | Call Girls in Patna | Patna Escorts" },
  { name: "Diya",    img: "/images/diya.webp",    tag: "\ud83d\udcab Premium", age: "20", desc: "Young and vivacious with a magnetic personality that lights up any room.", alt: "Diya — Premium Call Girl in Patna | Young Escort Patna | Hot Sonia" },
  { name: "Neelima", img: "/images/neelima.webp", tag: "\ud83d\udc51 Exclusive", age: "24", desc: "Mature, experienced, and incredibly charming. Pure class.", alt: "Neelima — Exclusive Escort Patna | Top Call Girls in Patna" },
  { name: "Aafrin",  img: "/images/aafrin.webp",  tag: "\ud83c\udf38 Fresh Face", age: "21", desc: "A gorgeous smile and irresistible charm. A fresh favourite.", alt: "Aafrin — Fresh Escort in Patna | Call Girls Patna | Patna Escorts Service" },
  { name: "Jamila",  img: "/images/jamila.webp",  tag: "\ud83c\udf19 Night Queen", age: "23", desc: "Mysterious and alluring. A night with Jamila is one you will never forget.", alt: "Jamila — Night Call Girl Patna | Escorts in Patna | Hot Sonia" },
  { name: "Janu",    img: "/images/janu.webp",    tag: "\ud83d\udc95 Sweetheart", age: "20", desc: "Warm, caring, and endlessly beautiful. The ultimate girlfriend experience.", alt: "Janu — Sweetheart Escort in Patna | Call Girls Patna | Patna Escorts" },
  { name: "Neethu",  img: "/images/neethu.webp",  tag: "\ud83c\udfa0 Cute",      age: "22", desc: "Adorable and bubbly with a gorgeous figure and radiant smile.", alt: "Neethu — Cute Call Girl Patna | Beautiful Escorts Patna | Hot Sonia" },
  { name: "Poonam",  img: "/images/poonam.webp",  tag: "\ud83c\udf3a Exotic",    age: "23", desc: "Exotic beauty with a taste for luxury, adventure, and intimacy.", alt: "Poonam — Exotic Escort Patna | Premium Call Girls in Patna" },
  { name: "Sufia",   img: "/images/sufia.webp",   tag: "\u2726 Classy",         age: "24", desc: "Classy, stylish, and absolutely breathtaking in every way.", alt: "Sufia — Classy Escort in Patna | Patna Escorts Service | Hot Sonia" },
];

const imageListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Call Girls in Patna — Photo Gallery | Patna Escorts",
  description:
    "Browse real photos of 12 verified escorts in Patna and call girls in Patna, available at Hot Sonia Patna Escorts Service.",
  numberOfItems: 12,
  itemListElement: companions.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "ImageObject",
      name: `${c.name} — Call Girl in Patna | Patna Escorts`,
      description: c.desc,
      contentUrl: `https://hotsonia.in${c.img}`,
      thumbnailUrl: `https://hotsonia.in${c.img}`,
      representativeOfPage: i === 0,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home — Escorts in Patna", item: "https://hotsonia.in" },
    { "@type": "ListItem", position: 2, name: "Call Girls in Patna — Gallery", item: "https://hotsonia.in/gallery" },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section
        className="pt-32 pb-14 text-center"
        style={{ background: "linear-gradient(180deg, #0a0208 0%, #100009 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.28em] font-bold mb-2" style={{ color: "#f5c842" }}>
            \u2726 Real Photos \u00b7 Verified Call Girls in Patna \u2726
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="gradient-text">Call Girls in Patna</span>
            <span className="text-white"> — Photo Gallery</span>
          </h1>
          <nav aria-label="Breadcrumb" className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)" }}>Home</Link>
            <span className="mx-2">&#x203A;</span>
            <span style={{ color: "#f0187d" }}>Call Girls in Patna Gallery</span>
          </nav>
          <p className="text-sm mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            12 stunning, verified Patna Escorts — 100% real photos, no fakes
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 pt-8" style={{ background: "#0a0208" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {companions.map((c) => (
              <div
                key={c.name}
                className="companion-card group relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(240,24,125,0.15)" }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 38%, rgba(10,2,8,0.97) 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-bold text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                        {c.name}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: "rgba(240,24,125,0.22)", color: "#f0187d" }}
                      >
                        Age {c.age}
                      </span>
                    </div>
                    <div className="text-xs mb-2" style={{ color: "#f5c842" }}>{c.tag}</div>
                    <p className="companion-info text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.68)" }}>
                      {c.desc}
                    </p>
                    <Link
                      href="/contact"
                      className="companion-info block text-center text-xs font-bold py-2 rounded-full btn-gradient"
                      style={{ color: "#fff" }}
                    >
                      Book {c.name} Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-16 rounded-3xl py-12 px-6 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(240,24,125,0.12) 0%, rgba(245,112,61,0.08) 100%)",
              border: "1px solid rgba(240,24,125,0.2)",
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              Book Your Favourite Call Girl in Patna
            </h2>
            <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>
              Contact us now to book or request a custom selection from our Patna Escorts.
            </p>
            <Link href="/contact" className="btn-gradient glow-pink text-white font-bold px-10 py-4 rounded-full text-sm">
              Book Escorts in Patna \u2728
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
