import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = "https://hotsonia.in";

export const metadata: Metadata = {
  title:
    "Escorts in Patna | Call Girls in Patna | Hot Sonia",
  description:
    "Hot Sonia — #1 Escorts in Patna. Premium verified Call Girls for in-call, out-call & overnight. 12+ real companions. 100% discreet, safe & available 24/7. Book now.",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-IN": BASE_URL,
      "x-default": BASE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Hot Sonia — Escorts in Patna",
    title:
      "Escorts in Patna | Call Girls in Patna | #1 Patna Escorts Service",
    description:
      "Hot Sonia — Best Escorts in Patna. Premium Call Girls in Patna available 24/7. Book your Patna Escorts Service now.",
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/images/banner.webp`,
        width: 1200,
        height: 630,
        alt: "Escorts in Patna — Hot Sonia Patna Escorts Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hotsonia_in",
    creator: "@hotsonia_in",
    title: "Escorts in Patna | Call Girls in Patna | Hot Sonia",
    description:
      "Hot Sonia — Premium Escorts in Patna. Verified Call Girls 24/7. Book now.",
    images: [`${BASE_URL}/images/banner.webp`],
  },
};

const featured = [
  { name: "Sonia",   img: "/images/soniya.webp",  tag: "⭐ Star Girl",  alt: "Sonia, premium companion and escort in Patna" },
  { name: "Priya",   img: "/images/priya.webp",   tag: "💎 Elite",      alt: "Priya, elite escort companion in Patna" },
  { name: "Anaya",   img: "/images/anaya.webp",   tag: "✨ VIP",        alt: "Anaya, VIP escort in Patna" },
  { name: "Natasha", img: "/images/natasha.webp", tag: "🔥 Hot Pick",   alt: "Natasha, escort companion in Patna" },
  { name: "Diya",    img: "/images/diya.webp",    tag: "💫 Premium",    alt: "Diya, premium call girl in Patna" },
  { name: "Neelima", img: "/images/neelima.webp", tag: "👑 Exclusive",  alt: "Neelima, exclusive escort in Patna" },
  { name: "Aafrin",  img: "/images/aafrin.webp",  tag: "🌙 Mystique",  alt: "Aafrin, escort companion in Patna" },
  { name: "Jamila",  img: "/images/jamila.webp",  tag: "🌹 Charming",  alt: "Jamila, charming call girl in Patna" },
  { name: "Janu",    img: "/images/janu.webp",    tag: "💋 Sensual",   alt: "Janu, escort companion in Patna" },
  { name: "Neethu",  img: "/images/neethu.webp",  tag: "✨ Fresh",     alt: "Neethu, escort companion in Patna" },
  { name: "Poonam",  img: "/images/poonam.webp",  tag: "🔥 Bold",      alt: "Poonam, call girl in Patna" },
  { name: "Sufia",   img: "/images/sufia.webp",   tag: "💎 Divine",    alt: "Sufia, premium escort in Patna" },
];

const services = [
  {
    icon: "\ud83c\udf39",
    title: "In-Call Escort Service",
    desc: "Private, luxurious in-call venues across Patna — clean, discreet, available 24/7 for escorts in Patna.",
  },
  {
    icon: "\ud83d\ude97",
    title: "Out-Call Service Patna",
    desc: "Our call girls in Patna come to your hotel or home, on time — completely discreet.",
  },
  {
    icon: "\ud83c\udf19",
    title: "Overnight Escort Package",
    desc: "A full night of warm companionship with our Patna Escorts. Extended time, extended pleasure.",
  },
  {
    icon: "\u2708\ufe0f",
    title: "Travel Companion Patna",
    desc: "Take a beautiful escort from Patna on any trip — business or leisure.",
  },
];

const faqs = [
  {
    q: "What is the best escort service in Patna?",
    a: "Hot Sonia is ranked #1 among escorts in Patna. With 500+ verified clients, 12+ beautiful companions, and 5+ years of experience, we offer Patna's most premium and discreet Patna Escorts Service with real photos and guaranteed satisfaction.",
  },
  {
    q: "How do I book call girls in Patna?",
    a: "Booking call girls in Patna with Hot Sonia is simple and discreet. Visit our Contact page or call/WhatsApp us directly. Choose your preferred companion from our Gallery, mention your preferred time and service, and our team confirms your booking within minutes.",
  },
  {
    q: "Are escorts in Patna available 24 hours?",
    a: "Yes. Hot Sonia's escorts in Patna are available 24 hours a day, 7 days a week — including weekends and holidays. Whether you need in-call or out-call Patna Escorts, we are always ready to serve you.",
  },
  {
    q: "What are the rates for Patna Escorts Service?",
    a: "Our Patna Escorts Service starts from Rs.3,000 for in-call sessions, Rs.4,000 for out-call visits, Rs.12,000 for overnight packages, and Rs.20,000 per day for travel companions. All packages include premium verified call girls in Patna with no hidden charges.",
  },
  {
    q: "Are call girls in Patna safe and discreet?",
    a: "Absolutely. Hot Sonia maintains 100% confidentiality for every client. Our call girls in Patna are professionally trained, and all personal information remains strictly private. We have never compromised on client privacy in 5+ years of Patna Escorts Service.",
  },
  {
    q: "Do Patna Escorts provide outcall services across all areas?",
    a: "Yes, our out-call Patna Escorts visit your hotel or residence across all major areas — Boring Road, Kankarbagh, Bailey Road, Rajendra Nagar, and all Patna hotels. We also cover nearby cities in Bihar.",
  },
  {
    q: "What types of companions are available at Hot Sonia?",
    a: "Hot Sonia offers a diverse roster — college girls, models, housewives, VIP companions, and independent escorts in Patna. All companions have verified real photos and professional profiles so you know exactly who you are booking.",
  },
  {
    q: "Can I see real photos before booking a call girl in Patna?",
    a: "Yes. Every companion on Hot Sonia's gallery has 100% real, unedited photos. We never use fake or stock images. Browse our full gallery and choose your ideal call girl in Patna with complete confidence.",
  },
  {
    q: "Is it safe to contact Hot Sonia for escort service in Patna?",
    a: "Completely safe. Your name, number, and booking details are never shared or stored after the session. Hot Sonia uses encrypted communication and has a strict no-third-party-disclosure policy for all escort service in Patna bookings.",
  },
  {
    q: "Do you offer same-day booking for Patna Escorts?",
    a: "Yes! Same-day and even same-hour bookings are available for most of our escorts in Patna. Simply WhatsApp or call us, confirm your choice from the gallery, and your companion will be ready within the hour.",
  },
  {
    q: "What is the difference between in-call and out-call escorts in Patna?",
    a: "In-call means you visit our discreet, fully-furnished private venue in Patna. Out-call means your companion visits your hotel room or residence anywhere in Patna. Both services are available 24/7 with the same level of privacy and luxury.",
  },
  {
    q: "Do Hot Sonia escorts serve tourists and hotel guests in Patna?",
    a: "Absolutely. We regularly serve guests staying at hotels across Patna — from budget properties to 5-star hotels near Gandhi Maidan, Patna Junction, Fraser Road, and Boring Road. Our discreet out-call service ensures no attention is drawn at your property.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Patna Escorts Service",
  description:
    "Hot Sonia provides premium escorts in Patna and call girls in Patna for in-call, out-call, overnight, and travel companion services.",
  provider: {
    "@type": "LocalBusiness",
    name: "Hot Sonia",
    "@id": "https://hotsonia.in/#business",
  },
  areaServed: { "@type": "City", name: "Patna" },
  serviceType: "Escort Service",
  offers: [
    { "@type": "Offer", name: "In-Call Escort Patna", price: "3000", priceCurrency: "INR" },
    { "@type": "Offer", name: "Out-Call Escort Patna", price: "4000", priceCurrency: "INR" },
    { "@type": "Offer", name: "Overnight Escort Patna", price: "12000", priceCurrency: "INR" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Escorts in Patna | Call Girls in Patna | Hot Sonia",
  description:
    "Hot Sonia — #1 Escorts in Patna. Premium verified Call Girls for in-call, out-call & overnight. 100% discreet, available 24/7.",
  inLanguage: "en-IN",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#business` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Escorts in Patna — Home",
        item: BASE_URL,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Escorts in Patna — Hot Sonia Hero"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/banner.webp"
            alt="Escorts in Patna — Hot Sonia luxury banner"
            fill
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,2,8,0.55) 0%, rgba(10,2,8,0.45) 30%, rgba(10,2,8,0.88) 75%, #0a0208 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 50% 80%, rgba(240,24,125,0.4) 0%, transparent 65%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 pb-20">
          <Image
            src="/images/logo.png"
            alt="Hot Sonia logo — Escorts in Patna"
            width={280}
            height={112}
            className="h-28 sm:h-36 w-auto object-contain mx-auto mb-6 drop-shadow-2xl"
            priority
          />

          <p
            className="text-xs sm:text-sm uppercase tracking-[0.35em] mb-5 font-semibold"
            style={{ color: "#f5c842" }}
          >
            \u2726 Patna&apos;s Most Exclusive Call Girls & Companion Service \u2726
          </p>

          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="gradient-text">Escorts in Patna</span>
            <br />
            <span className="text-white" style={{ fontSize: "0.75em" }}>
              Luxury &middot; Desire &middot; Discretion
            </span>
          </h1>

          <p
            className="text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Experience Patna&apos;s most exclusive{" "}
            <strong style={{ color: "#f0187d" }}>Patna Escorts Service</strong>. Real
            photos, verified{" "}
            <strong style={{ color: "#f0187d" }}>call girls in Patna</strong>, and
            absolute discretion — available 24/7, just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/contact"
              className="btn-gradient glow-pink text-white font-bold px-10 py-4 rounded-full text-base"
            >
              Book Now \u2728
            </Link>
            <Link
              href="/gallery"
              className="font-semibold px-10 py-4 rounded-full text-base border-2 transition-all duration-300 hover:border-hot-pink"
              style={{ borderColor: "rgba(240,24,125,0.5)", color: "#fff" }}
            >
              View Gallery \ud83d\udc8e
            </Link>
          </div>

          <div
            className="inline-flex flex-wrap justify-center gap-8 sm:gap-12 px-8 py-5 rounded-2xl"
            style={{
              background: "rgba(20, 3, 15, 0.75)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(240,24,125,0.2)",
            }}
          >
            {[
              { v: "500+", l: "Happy Clients" },
              { v: "12+", l: "Companions" },
              { v: "24/7", l: "Available" },
              { v: "100%", l: "Discreet" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.v}</div>
                <div
                  className="text-xs mt-1 uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COMPANIONS */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, #0a0208 0%, #100009 100%)" }}
        aria-label="Call Girls in Patna Featured"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>
              \u2726 Real Photos \u00b7 Verified Companions \u2726
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Call Girls in Patna</span>
              <span className="text-white"> — Our Companions</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Handpicked · Verified · Stunning Patna Escorts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((c) => (
              <Link
                href="/gallery"
                key={c.name}
                className="companion-card group relative rounded-2xl overflow-hidden block"
                style={{ border: "1px solid rgba(240,24,125,0.18)" }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 45%, rgba(10,2,8,0.95) 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white font-bold text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                      {c.name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#f5c842" }}>{c.tag}</div>
                    <div
                      className="companion-info mt-2 text-xs font-semibold text-center py-1.5 rounded-full btn-gradient"
                      style={{ color: "#fff" }}
                    >
                      Book Now
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-3 rounded-full border-2 transition-all duration-300"
              style={{ borderColor: "#f0187d", color: "#f0187d" }}
            >
              View All 12 Call Girls in Patna →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="py-20"
        style={{ background: "#100009" }}
        aria-label="Patna Escorts Service Packages"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>
              \u2726 What We Offer \u2726
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Patna Escorts Service</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              In-Call · Out-Call · Overnight · Travel — All Across Patna
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="card-glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 group"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-gradient glow-pink text-white font-bold px-10 py-3.5 rounded-full text-sm">
              Explore All Patna Escorts Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY HOT SONIA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0a0208 0%, #180310 100%)" }}
        aria-label="Why Choose Escorts in Patna from Hot Sonia"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>
              \u2726 Why Choose Us \u2726
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Why Choose Our Escorts in Patna</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              The #1 Patna Escorts Service — Trusted by 500+ Clients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "\u2705", title: "Verified Escorts in Patna", desc: "Every escort in Patna is personally verified & professionally trained. Real photos — no fake profiles." },
              { icon: "\ud83d\udd12", title: "100% Discreet Patna Escorts", desc: "Your identity and booking details remain completely private. We protect every client of our Patna Escorts Service." },
              { icon: "\u26a1", title: "Instant Booking 24/7", desc: "Book call girls in Patna in minutes — fast, simple, and hassle-free. Available 24 hours, every day." },
              { icon: "\ud83d\udcaf", title: "Satisfaction Guaranteed", desc: "Every client leaves happy. That is our promise as Patna's #1 Call Girls service." },
              { icon: "\ud83d\udee1\ufe0f", title: "Safe & Secure Service", desc: "Safety for both clients and companions is non-negotiable in our Patna Escorts Service." },
              { icon: "\ud83d\udc51", title: "Premium Call Girls Patna", desc: "Only the finest call girls in Patna and venues. Always the best — never anything less." },
            ].map((item) => (
              <div
                key={item.title}
                className="card-glass rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition-transform duration-300"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTION — 1000+ words */}
      <section className="py-20" style={{ background: "#0a0208" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Block 1 — intro */}
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Escorts in Patna</span>
              <span className="text-white"> — Hot Sonia, Bihar&apos;s #1 Escort Agency</span>
            </h2>
            <div className="space-y-4 text-sm leading-loose" style={{ color: "rgba(255,255,255,0.7)" }}>
              <p>
                Welcome to <strong className="text-white">Hot Sonia</strong> — the most trusted and premium{" "}
                <strong style={{ color: "#f0187d" }}>escort service in Patna</strong>, Bihar. For over 5 years, we have
                been the preferred choice of thousands of elite clients who demand verified companions, absolute
                discretion, and guaranteed satisfaction. Whether you are looking for{" "}
                <strong style={{ color: "#f0187d" }}>call girls in Patna</strong> for a relaxing evening,
                a corporate event companion, or an overnight stay, Hot Sonia delivers an unmatched experience
                every single time.
              </p>
              <p>
                Our <strong style={{ color: "#f0187d" }}>Patna Escorts Service</strong> is built on three
                pillars — beauty, discretion, and reliability. Every companion in our roster has been
                personally interviewed, photographed with real photos, and professionally trained to ensure
                your complete comfort and satisfaction. We have zero tolerance for fake profiles, bait-and-switch
                tactics, or hidden charges — what you see in our gallery is exactly what you get.
              </p>
              <p>
                Patna is Bihar&apos;s capital and a growing metropolitan city. As more business travellers,
                corporate executives, and tourists visit the city, the demand for high-quality{" "}
                <strong style={{ color: "#f0187d" }}>escorts in Patna</strong> has never been higher.
                Hot Sonia was created to meet exactly this demand — offering a five-star level experience
                that was previously only available in cities like Mumbai, Delhi, and Bangalore. Today, our
                <strong style={{ color: "#f0187d" }}> Patna Escorts</strong> are considered the gold standard
                in Bihar for companion services.
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl p-6"
            style={{ background: "linear-gradient(135deg,rgba(240,24,125,0.12),rgba(245,112,61,0.08))", border: "1px solid rgba(240,24,125,0.2)" }}
          >
            {[
              { v: "500+", l: "Satisfied Clients" },
              { v: "12+", l: "Verified Companions" },
              { v: "5+", l: "Years of Service" },
              { v: "24/7", l: "Available in Patna" },
            ].map((s) => (
              <div key={s.l} className="text-center py-2">
                <div className="text-3xl font-bold gradient-text" style={{ fontFamily: "var(--font-playfair)" }}>{s.v}</div>
                <div className="text-xs mt-1 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Block 2 — call girls types */}
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Types of Call Girls in Patna</span>
              <span className="text-white"> We Offer</span>
            </h2>
            <p className="text-sm leading-loose mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              At Hot Sonia, we understand that every client has a different taste and preference. That is why
              our roster of <strong style={{ color: "#f0187d" }}>call girls in Patna</strong> is deliberately
              diverse — covering a wide range of looks, personalities, and backgrounds. You are always
              guaranteed to find your ideal companion.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm leading-loose" style={{ color: "rgba(255,255,255,0.7)" }}>
              <div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  🎓 College Call Girls Patna
                </h3>
                <p>
                  Young, fresh, and full of energy — our college{" "}
                  <strong style={{ color: "#f0187d" }}>call girls in Patna</strong> are among our most
                  requested companions. They bring youthful charm, genuine warmth, and a playful personality
                  to every encounter. All are 18+ and verified.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  💼 Housewife Escorts Patna
                </h3>
                <p>
                  For clients who prefer maturity, grace, and sensual experience, our housewife{" "}
                  <strong style={{ color: "#f0187d" }}>escorts in Patna</strong> are ideal. Sophisticated,
                  discreet, and deeply attentive, they know exactly how to make a man feel special and
                  completely at ease.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  👑 VIP & Model Escorts Patna
                </h3>
                <p>
                  Tall, stunning, and magazine-worthy — our model-class{" "}
                  <strong style={{ color: "#f0187d" }}>Patna Escorts</strong> are perfect for high-profile
                  events, corporate dinners, and clients who want arm candy that turns heads. They are
                  equally comfortable at a five-star dinner table or behind closed doors.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  🌟 Independent Escorts Patna
                </h3>
                <p>
                  Our independent <strong style={{ color: "#f0187d" }}>escorts in Patna</strong> work
                  exclusively through Hot Sonia, ensuring quality control and genuine photos. They offer
                  a more personal, connection-focused experience — ideal for clients seeking meaningful
                  companionship alongside physical intimacy.
                </p>
              </div>
            </div>
          </div>

          {/* Block 3 — services explained */}
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Patna Escorts Service</span>
              <span className="text-white"> — Packages Explained</span>
            </h2>
            <div className="space-y-6 text-sm leading-loose" style={{ color: "rgba(255,255,255,0.7)" }}>
              <div>
                <h3 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  🌹 In-Call Escort Service Patna
                </h3>
                <p>
                  In-call is the most private option in our{" "}
                  <strong style={{ color: "#f0187d" }}>Patna Escorts Service</strong>. You visit one
                  of our discreetly located, fully-furnished, luxurious private venues across Patna.
                  The venue is clean, air-conditioned, professionally maintained, and completely
                  confidential. In-call bookings start from just Rs.3,000 and can be reserved for
                  one hour, multiple hours, or an entire night.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  🚗 Out-Call Escort Service Patna
                </h3>
                <p>
                  Our out-call <strong style={{ color: "#f0187d" }}>escorts in Patna</strong> come
                  directly to your hotel room, guest house, or private residence anywhere in Patna.
                  We serve all major hotels — from budget stays to five-star properties near Fraser Road,
                  Boring Road, Bailey Road, Gandhi Maidan, and Patna Junction. Out-call service is
                  available 24/7 and your companion arrives with complete discretion — no drama,
                  no attention, no compromise.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  🌙 Overnight Patna Escorts Package
                </h3>
                <p>
                  Our overnight package is our most popular premium offering. Spend an entire night with
                  a beautiful, verified <strong style={{ color: "#f0187d" }}>call girl in Patna</strong> —
                  dinner, conversation, intimacy, and morning companionship. The overnight experience is
                  the closest thing to having a genuine relationship for 12 hours. Available for
                  in-call and out-call, starting Rs.12,000.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  ✈️ Travel Companion Patna Escorts
                </h3>
                <p>
                  Need a beautiful companion for a business trip, out-of-city travel, or a leisure
                  holiday? Our travel companion{" "}
                  <strong style={{ color: "#f0187d" }}>Patna Escorts Service</strong> allows you to
                  take one of our verified companions anywhere in India. They are well-spoken,
                  presentable, and experienced at blending into high-society environments — perfect
                  for corporate retreats, weddings, or private vacations.
                </p>
              </div>
            </div>
          </div>

          {/* Block 4 — area coverage */}
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Escorts Available Across</span>
              <span className="text-white"> All Areas of Patna</span>
            </h2>
            <p className="text-sm leading-loose mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              Hot Sonia&apos;s <strong style={{ color: "#f0187d" }}>Patna Escorts Service</strong> covers
              every corner of Patna city and its surrounding localities. Whether you are in the heart of
              the city or a quieter suburb, our{" "}
              <strong style={{ color: "#f0187d" }}>call girls in Patna</strong> reach you promptly and
              discreetly. Below are the key areas we serve:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Boring Road","Kankarbagh","Bailey Road","Fraser Road","Rajendra Nagar",
                "Gandhi Maidan","Patna Junction","Exhibition Road","Dakbangla Chauraha",
                "Patliputra Colony","Jagdev Path","Raja Bazar","Gola Road","Mithapur",
                "Danapur","Bhuthnath","Jamal Road","Bariya Bus Stand","Patliputra Station",
              ].map((area) => (
                <Link
                  key={area}
                  href={`/${area.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xs px-3 py-1.5 rounded-full font-medium transition-colors hover:bg-pink-500/20"
                  style={{ background: "rgba(240,24,125,0.1)", border: "1px solid rgba(240,24,125,0.22)", color: "rgba(255,255,255,0.75)" }}
                >
                  {area}
                </Link>
              ))}
            </div>
            <p className="text-sm leading-loose" style={{ color: "rgba(255,255,255,0.7)" }}>
              Each area-specific page on our website provides local information, dedicated companions
              serving that locality, and easy one-click booking. If you don&apos;t see your area listed,
              contact us — we almost certainly serve it. Our{" "}
              <strong style={{ color: "#f0187d" }}>escorts in Patna</strong> have covered every
              mohalla, colony, and hotel zone in the city.
            </p>
          </div>

          {/* Block 5 — why hot sonia + trust */}
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Why Hot Sonia is the Best</span>
              <span className="text-white"> Escort Agency in Patna</span>
            </h2>
            <div className="space-y-4 text-sm leading-loose" style={{ color: "rgba(255,255,255,0.7)" }}>
              <p>
                In a city full of fake listings and misleading advertisements, Hot Sonia stands apart
                for one simple reason — <strong className="text-white">we keep our promises</strong>.
                When you book an <strong style={{ color: "#f0187d" }}>escort in Patna</strong> with us,
                you receive exactly what you see in our gallery. No bait-and-switch. No poor-quality
                substitutes. No hidden fees added after the fact.
              </p>
              <p>
                Our reputation has been built on five years of word-of-mouth referrals. Over{" "}
                <strong className="text-white">70% of our bookings</strong> come from repeat clients
                and personal recommendations — a testament to how seriously we take client satisfaction
                in our <strong style={{ color: "#f0187d" }}>Patna Escorts Service</strong>.
              </p>
              <p>
                We use encrypted communication channels for all bookings. Client names, contact numbers,
                and session details are never stored beyond 24 hours. Our{" "}
                <strong style={{ color: "#f0187d" }}>call girls in Patna</strong> are trained in
                professional confidentiality — they do not share client information under any
                circumstances. This is why senior executives, politicians, NRIs, and business owners
                trust Hot Sonia as their go-to <strong style={{ color: "#f0187d" }}>Patna Escorts</strong>{" "}
                agency.
              </p>
              <p>
                Our venue facilities are world-class — soft lighting, premium bedding, private bathrooms,
                24/7 room service coordination, and a fully discreet entry-exit system. When it comes to
                in-call <strong style={{ color: "#f0187d" }}>escort service in Patna</strong>, no agency
                comes close to the Hot Sonia experience.
              </p>
            </div>

            {/* Keyword tag cloud */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Escorts in Patna","Call Girls in Patna","Patna Escorts Service","Patna Escorts",
                "Call Girls Patna","Escort Service Patna","VIP Escorts Patna","Independent Escorts Patna",
                "College Call Girls Patna","Housewife Escorts Patna","Model Escorts Patna","Overnight Escorts Patna",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ background: "rgba(240,24,125,0.1)", border: "1px solid rgba(240,24,125,0.22)", color: "rgba(255,255,255,0.7)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ — AEO */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0a0208 0%, #100009 100%)" }}
        aria-label="FAQ — Escorts in Patna"
      >
        {/* Decorative glow blobs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(240,24,125,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,112,61,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-4"
              style={{ background: "rgba(240,24,125,0.12)", color: "#f0187d", border: "1px solid rgba(240,24,125,0.25)" }}
            >
              ✦ People Also Ask ✦
            </span>
            <h2
              className="text-3xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Frequently Asked</span>
              <br />
              <span className="text-white">Questions</span>
            </h2>
            <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
              Everything you need to know about Escorts in Patna & Patna Escorts Service
            </p>
          </div>

          {/* Two-column accordion grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(20,3,15,0.9) 0%, rgba(30,5,20,0.9) 100%)",
                  border: "1px solid rgba(240,24,125,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <summary
                  className="flex items-start gap-4 p-5 cursor-pointer list-none select-none"
                  style={{ outline: "none" }}
                >
                  {/* Number badge */}
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{
                      background: "linear-gradient(135deg,#f5703d,#f0187d)",
                      color: "#fff",
                      minWidth: "2rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 font-semibold text-white text-sm sm:text-base leading-snug"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {faq.q}
                  </span>
                  {/* Plus / minus icon */}
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light transition-transform duration-300 group-open:rotate-45"
                    style={{ background: "rgba(240,24,125,0.15)", color: "#f0187d" }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 pl-[4.25rem]">
                  <div
                    className="w-10 h-px mb-3"
                    style={{ background: "linear-gradient(90deg,#f0187d,transparent)" }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
              Still have questions? We&apos;re here 24/7.
            </p>
            <Link
              href="/contact"
              className="btn-gradient glow-pink text-white font-bold px-10 py-3.5 rounded-full text-sm inline-block"
            >
              Ask Us Anything ✦
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #7a0035 0%, #3a0018 50%, #5e0028 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #f0187d 0%, transparent 55%), radial-gradient(circle at 80% 50%, #f5703d 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/images/logo.png"
            alt="Hot Sonia — Book Escorts in Patna Now"
            width={200}
            height={80}
            className="h-24 w-auto object-contain mx-auto mb-6 drop-shadow-2xl"
          />
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Book Escorts in Patna?
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,200,200,0.85)" }}>
            Our call girls in Patna are waiting. Book your Patna Escorts Service now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white font-bold px-10 py-4 rounded-full text-base hover:bg-gray-100 transition-colors"
              style={{ color: "#f0187d" }}
            >
              Book Now \u2728
            </Link>
            <a
              href="tel:+919229604907"
              className="border-2 border-white/55 hover:border-white text-white font-semibold px-10 py-4 rounded-full transition-colors text-base"
            >
              \ud83d\udcde Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
