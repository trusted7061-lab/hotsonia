import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getLocation } from "@/lib/locations";

const BASE_URL = "https://www.hotsonia.com";

const companions = [
  { name: "Sonia",   img: "/images/soniya.webp",  tag: "⭐ Star Girl" },
  { name: "Priya",   img: "/images/priya.webp",   tag: "💎 Elite" },
  { name: "Anaya",   img: "/images/anaya.webp",   tag: "✨ VIP" },
  { name: "Natasha", img: "/images/natasha.webp", tag: "🔥 Hot Pick" },
  { name: "Diya",    img: "/images/diya.webp",    tag: "💫 Premium" },
  { name: "Neelima", img: "/images/neelima.webp", tag: "👑 Exclusive" },
  { name: "Aafrin",  img: "/images/aafrin.webp",  tag: "🌙 Mystique" },
  { name: "Jamila",  img: "/images/jamila.webp",  tag: "🌹 Charming" },
  { name: "Janu",    img: "/images/janu.webp",    tag: "💋 Sensual" },
  { name: "Neethu",  img: "/images/neethu.webp",  tag: "✨ Fresh" },
  { name: "Poonam",  img: "/images/poonam.webp",  tag: "🔥 Bold" },
  { name: "Sufia",   img: "/images/sufia.webp",   tag: "💎 Divine" },
];

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};

  const title = `Escorts in ${loc.name} | Call Girls ${loc.name} Patna | Hot Sonia`;
  const description = `Hot Sonia — #1 Escorts in ${loc.name}, Patna. Verified Call Girls near ${loc.area} available 24/7. In-call, out-call & overnight Patna Escorts Service. Real photos. Book now.`;
  const canonical = `${BASE_URL}/${loc.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    keywords: [
      `Escorts in ${loc.name}`,
      `Call Girls in ${loc.name}`,
      `${loc.name} Escorts`,
      `${loc.name} Call Girls`,
      `Escorts near ${loc.name} Patna`,
      `${loc.name} Escort Service`,
      "Escorts In Patna",
      "Patna Escorts Service",
      "Call Girls In Patna",
      "Patna Escorts",
      "Hot Sonia",
    ],
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url: `${BASE_URL}/images/banner.webp`,
          width: 1200,
          height: 630,
          alt: `Escorts in ${loc.name} Patna — Hot Sonia Patna Escorts Service`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/images/banner.webp`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  /* ─── JSON-LD Schemas ─── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: `Escorts in ${loc.name}`, item: `${BASE_URL}/${loc.slug}` },
    ],
  };

  const localSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EntertainmentBusiness"],
    name: `Hot Sonia — Escorts in ${loc.name} Patna`,
    description: `Premium Escort & Call Girl service in ${loc.name}, Patna. Available 24/7 for in-call, out-call & overnight.`,
    url: `${BASE_URL}/${loc.slug}`,
    telephone: "+91-9229604907",
    image: `${BASE_URL}/images/banner.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.area,
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800001",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Place", name: loc.area },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
      bestRating: "5",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${loc.name} Escorts Service`,
    description: `Hot Sonia provides premium escorts and call girls in ${loc.name}, Patna for in-call, out-call, overnight, and travel companion services.`,
    provider: { "@type": "LocalBusiness", name: "Hot Sonia", "@id": `${BASE_URL}/#business` },
    areaServed: { "@type": "Place", name: loc.area },
    serviceType: "Escort Service",
    offers: [
      { "@type": "Offer", name: `In-Call Escort ${loc.name}`, price: "3000", priceCurrency: "INR" },
      { "@type": "Offer", name: `Out-Call Escort ${loc.name}`, price: "4000", priceCurrency: "INR" },
      { "@type": "Offer", name: `Overnight Escort ${loc.name}`, price: "12000", priceCurrency: "INR" },
    ],
  };

  const faqs = [
    { q: `Are escorts available in ${loc.name}, Patna?`, a: `Yes. Hot Sonia provides verified escorts in ${loc.name}, Patna available 24/7. Our companions offer in-call, out-call, and overnight escort service near ${loc.area}.` },
    { q: `How do I book call girls in ${loc.name}?`, a: `Call or WhatsApp Hot Sonia. Browse our gallery, pick your preferred companion, mention your service type and time, and we confirm instantly.` },
    { q: `What are the escort rates near ${loc.name}?`, a: `In-call starts from Rs.3,000, out-call from Rs.4,000, and overnight from Rs.12,000 near ${loc.area}. Contact us for current package details.` },
    { q: `Do ${loc.name} escorts provide out-call service to hotels?`, a: `Yes. Our escorts visit all hotels, guest houses, and private residences in and around ${loc.area}, Patna. Fully discreet, on-time, 24/7.` },
    { q: `Are the photos of call girls near ${loc.name} real?`, a: `100% real and verified. Hot Sonia never uses fake or stock photos. Every companion in our gallery is exactly who you will meet.` },
    { q: `Is booking escorts in ${loc.name} safe and discreet?`, a: `Absolutely. All booking details are encrypted and deleted after 24 hours. Our escorts in ${loc.name} are trained in professional confidentiality — your privacy is guaranteed.` },
    { q: `Are same-day bookings available in ${loc.name}?`, a: `Yes! Same-day and same-hour bookings are available for most escorts near ${loc.area}. WhatsApp us and your companion can be ready within the hour.` },
    { q: `What types of call girls are available near ${loc.name}?`, a: `We offer college girls, models, housewives, and VIP companions near ${loc.name}. All are verified, professional, and available for in-call and out-call.` },
    { q: `Can I see real photos before booking in ${loc.name}?`, a: `Yes. Visit our gallery for 100% real photos of all 12+ companions available near ${loc.area}. No bait-and-switch — ever.` },
    { q: `Does Hot Sonia serve clients near ${loc.name} on weekends?`, a: `Yes. Our ${loc.name} escort service operates 7 days a week including weekends and public holidays — always available, always discreet.` },
    { q: `What is the difference between in-call and out-call in ${loc.name}?`, a: `In-call means you visit our private venue near ${loc.area}. Out-call means your escort comes to your location. Both are fully discreet and available 24/7.` },
    { q: `How quickly can an escort reach me in ${loc.name}?`, a: `For out-call in ${loc.area}, our escort typically arrives within 30–60 minutes of booking confirmation, depending on traffic. We always confirm a time before dispatch.` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label={`Escorts in ${loc.name} — Hot Sonia`}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/banner.webp"
            alt={`Escorts in ${loc.name} Patna — Hot Sonia Premium Call Girls ${loc.area} | Patna Escorts Service`}
            fill
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg,rgba(10,2,8,0.55) 0%,rgba(10,2,8,0.45) 30%,rgba(10,2,8,0.88) 75%,#0a0208 100%)" }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(ellipse at 50% 80%,rgba(240,24,125,0.4) 0%,transparent 65%)" }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 pb-20">
          <Image
            src="/images/logo.png"
            alt="Hot Sonia — Best Escorts in Patna | Call Girls Patna | Patna Escorts Service"
            width={280}
            height={112}
            className="h-28 sm:h-36 w-auto object-contain mx-auto mb-6 drop-shadow-2xl"
            priority
          />

          {/* Breadcrumb */}
          <nav className="flex justify-center gap-2 text-xs text-gray-500 mb-5">
            <Link href="/" className="hover:text-pink-400 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: "#f0187d" }}>Escorts in {loc.name}</span>
          </nav>

          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] mb-5 font-semibold" style={{ color: "#f5c842" }}>
            ✦ {loc.area} — Patna&apos;s Most Exclusive Escort Service ✦
          </p>

          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="gradient-text">Escorts in {loc.name}</span>
            <br />
            <span className="text-white" style={{ fontSize: "0.75em" }}>Luxury · Desire · Discretion</span>
          </h1>

          <p className="text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Premium <strong style={{ color: "#f0187d" }}>Call Girls in {loc.name}</strong>, Patna —
            verified companions available 24/7 for in-call &amp; out-call{" "}
            <strong style={{ color: "#f0187d" }}>Patna Escorts Service</strong> near {loc.area}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a href="tel:+919229604907" className="btn-gradient glow-pink text-white font-bold px-10 py-4 rounded-full text-base">
              📞 Call Now ✨
            </a>
            <Link
              href="/gallery"
              className="font-semibold px-10 py-4 rounded-full text-base border-2 transition-all duration-300"
              style={{ borderColor: "rgba(240,24,125,0.5)", color: "#fff" }}
            >
              View Gallery 💎
            </Link>
          </div>

          <div
            className="inline-flex flex-wrap justify-center gap-8 sm:gap-12 px-8 py-5 rounded-2xl"
            style={{ background: "rgba(20,3,15,0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(240,24,125,0.2)" }}
          >
            {[
              { v: "500+", l: "Happy Clients" },
              { v: "12+", l: "Companions" },
              { v: "24/7", l: "Available" },
              { v: "100%", l: "Discreet" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.v}</div>
                <div className="text-xs mt-1 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPANIONS GRID ─── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg,#0a0208 0%,#100009 100%)" }}
        aria-label={`Call Girls in ${loc.name} Patna`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>
              ✦ Real Photos · Verified Companions ✦
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="gradient-text">Call Girls in {loc.name}</span>
              <span className="text-white"> — Our Companions</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Handpicked · Verified · Stunning Escorts near {loc.area}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {companions.map((c) => (
              <Link
                href="/gallery"
                key={c.name}
                className="companion-card group relative rounded-2xl overflow-hidden block"
                style={{ border: "1px solid rgba(240,24,125,0.18)" }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={c.img}
                    alt={`${c.name} — Escort in ${loc.name} Patna | Call Girl ${loc.area} | Hot Sonia`}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 45%,rgba(10,2,8,0.95) 100%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white font-bold text-base" style={{ fontFamily: "var(--font-playfair)" }}>{c.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#f5c842" }}>{c.tag}</div>
                    <div className="companion-info mt-2 text-xs font-semibold text-center py-1.5 rounded-full btn-gradient" style={{ color: "#fff" }}>
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

      {/* ─── SERVICES ─── */}
      <section className="py-20" style={{ background: "#100009" }} aria-label={`${loc.name} Escorts Service Packages`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>✦ What We Offer ✦</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="gradient-text">{loc.name} Escorts Service</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              In-Call · Out-Call · Overnight · Travel — Serving {loc.area}, Patna
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌹", title: `In-Call near ${loc.name}`, desc: `Private luxury in-call venues near ${loc.area}. Clean, air-conditioned, fully discreet and available 24/7.` },
              { icon: "🚗", title: `Out-Call to ${loc.name}`, desc: `Our call girls travel to your hotel or home in ${loc.name}. On time, fully discreet, every time.` },
              { icon: "🌙", title: `Overnight ${loc.name}`, desc: `Spend a full night with a beautiful ${loc.name} escort. Extended companionship, guaranteed satisfaction.` },
              { icon: "✈️", title: `Travel Companion`, desc: `Take a verified ${loc.area} escort anywhere in India — business or leisure travel.` },
            ].map((s) => (
              <div
                key={s.title}
                className="card-glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>{s.desc}</p>
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

      {/* ─── WHY HOT SONIA ─── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg,#0a0208 0%,#180310 100%)" }}
        aria-label={`Why Choose Escorts in ${loc.name} from Hot Sonia`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>✦ Why Choose Us ✦</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="gradient-text">Why Choose Our Escorts in {loc.name}</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              The #1 {loc.name} Escort Service — Trusted by 500+ Clients
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "✅", title: `Verified Escorts in ${loc.name}`, desc: `Every escort near ${loc.area} is personally verified. Real photos, professional training, zero fake profiles.` },
              { icon: "🔒", title: "100% Discreet Service", desc: "Your identity and booking details are completely private. We have never compromised client privacy in 5+ years." },
              { icon: "⚡", title: "Instant Booking 24/7", desc: `Book call girls in ${loc.name} in minutes — fast, simple, and hassle-free. Available every hour of every day.` },
              { icon: "💯", title: "Satisfaction Guaranteed", desc: "Every client leaves happy. That is our promise as Patna's #1 escort agency serving all areas including " + loc.name + "." },
              { icon: "🛡️", title: "Safe & Secure", desc: "Safety for both clients and companions is non-negotiable. All encounters are consensual, professional, and secure." },
              { icon: "👑", title: `Premium ${loc.name} Call Girls`, desc: `Only the finest companions near ${loc.area}. Models, college girls, housewives, and VIP escorts — always the best.` },
            ].map((item) => (
              <div
                key={item.title}
                className="card-glass rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition-transform duration-300"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO CONTENT 1000+ words ─── */}
      <section className="py-20" style={{ background: "#0a0208" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Block 1 */}
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="gradient-text">Escorts in {loc.name}</span>
              <span className="text-white"> — Hot Sonia, Patna&apos;s #1 Escort Agency</span>
            </h2>
            <div className="space-y-4 text-sm leading-loose" style={{ color: "rgba(255,255,255,0.7)" }}>
              <p>
                Welcome to <strong className="text-white">Hot Sonia</strong> — the most trusted and premium{" "}
                <strong style={{ color: "#f0187d" }}>escort service in {loc.name}</strong>, Patna. If you are
                searching for verified, beautiful, and discreet{" "}
                <strong style={{ color: "#f0187d" }}>call girls in {loc.name}</strong>, you have found exactly
                the right place. Hot Sonia has served thousands of elite clients across all areas of Patna for
                over 5 years, and {loc.area} is one of our most active service zones.
              </p>
              <p>
                Our <strong style={{ color: "#f0187d" }}>{loc.name} escorts service</strong> is built on three
                pillars — beauty, discretion, and reliability. Every companion has been personally interviewed,
                photographed with real photos, and professionally trained. We have zero tolerance for fake
                profiles or hidden charges. What you see in our gallery is exactly what you get —
                guaranteed every time.
              </p>
              <p>
                Whether you are a business traveller staying at a hotel near {loc.area}, a local resident
                seeking companionship, or a tourist visiting Patna, our{" "}
                <strong style={{ color: "#f0187d" }}>call girls near {loc.name}</strong> are available
                around the clock to make your time unforgettable. In-call, out-call, overnight, and
                travel companion packages are all available.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl p-6"
            style={{ background: "linear-gradient(135deg,rgba(240,24,125,0.12),rgba(245,112,61,0.08))", border: "1px solid rgba(240,24,125,0.2)" }}
          >
            {[
              { v: "500+", l: "Satisfied Clients" },
              { v: "12+", l: "Verified Companions" },
              { v: "5+", l: "Years of Service" },
              { v: "24/7", l: `Available in ${loc.name}` },
            ].map((s) => (
              <div key={s.l} className="text-center py-2">
                <div className="text-3xl font-bold gradient-text" style={{ fontFamily: "var(--font-playfair)" }}>{s.v}</div>
                <div className="text-xs mt-1 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Block 2 — types */}
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="gradient-text">Types of Call Girls in {loc.name}</span>
              <span className="text-white"> We Offer</span>
            </h2>
            <p className="text-sm leading-loose mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              Every client has a different preference. That is why our roster of{" "}
              <strong style={{ color: "#f0187d" }}>call girls near {loc.area}</strong> is deliberately
              diverse — covering a wide range of looks, personalities, and backgrounds.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm leading-loose" style={{ color: "rgba(255,255,255,0.7)" }}>
              <div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>🎓 College Call Girls {loc.name}</h3>
                <p>
                  Young, fresh, and full of energy — our college{" "}
                  <strong style={{ color: "#f0187d" }}>call girls near {loc.name}</strong> are among our most
                  requested companions. Youthful charm, genuine warmth, and a playful personality. All 18+ and verified.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>💼 Housewife Escorts {loc.name}</h3>
                <p>
                  For clients who prefer maturity and sensual experience, our housewife{" "}
                  <strong style={{ color: "#f0187d" }}>escorts near {loc.area}</strong> are ideal. Sophisticated,
                  discreet, and deeply attentive — they know exactly how to make a man feel at ease.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>👑 VIP Model Escorts {loc.name}</h3>
                <p>
                  Tall, stunning, magazine-worthy — our model-class{" "}
                  <strong style={{ color: "#f0187d" }}>escorts in {loc.name}</strong> are perfect for high-profile
                  events, corporate dinners, and clients who want arm candy that turns heads.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>🌟 Independent Escorts {loc.name}</h3>
                <p>
                  Our independent companions work exclusively through Hot Sonia for quality control and genuine
                  photos. They offer a personal, connection-focused experience near {loc.area} — ideal for
                  meaningful companionship alongside physical intimacy.
                </p>
              </div>
            </div>
          </div>

          {/* Block 3 — why hot sonia + trust */}
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="gradient-text">Why Hot Sonia is the Best</span>
              <span className="text-white"> Escort Agency near {loc.name}</span>
            </h2>
            <div className="space-y-4 text-sm leading-loose" style={{ color: "rgba(255,255,255,0.7)" }}>
              <p>
                In a city full of fake listings and misleading advertisements, Hot Sonia stands apart
                because <strong className="text-white">we keep our promises</strong>. When you book an{" "}
                <strong style={{ color: "#f0187d" }}>escort in {loc.name}</strong> with us, you get exactly
                what you see in our gallery. No bait-and-switch. No substitutions. No hidden charges.
              </p>
              <p>
                Over <strong className="text-white">70% of our bookings</strong> come from repeat clients and
                referrals — a testament to how seriously we take satisfaction. Our{" "}
                <strong style={{ color: "#f0187d" }}>{loc.name} escort service</strong> has earned the trust of
                executives, NRIs, politicians, and tourists alike.
              </p>
              <p>
                We use encrypted communication for all bookings. Client names, numbers, and session details are
                never stored beyond 24 hours. Our{" "}
                <strong style={{ color: "#f0187d" }}>call girls near {loc.area}</strong> are trained in
                professional confidentiality — your privacy is 100% guaranteed.
              </p>
            </div>
            {/* keyword tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                `Escorts in ${loc.name}`,
                `Call Girls ${loc.name}`,
                `${loc.name} Escort Service`,
                "Escorts In Patna",
                "Call Girls In Patna",
                "Patna Escorts Service",
                "VIP Escorts Patna",
                "Overnight Escorts Patna",
              ].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ background: "rgba(240,24,125,0.1)", border: "1px solid rgba(240,24,125,0.22)", color: "rgba(255,255,255,0.7)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#0a0208 0%,#100009 100%)" }}
        aria-label={`FAQ — Escorts in ${loc.name}`}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(240,24,125,0.07) 0%,transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(245,112,61,0.06) 0%,transparent 70%)", filter: "blur(40px)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-4"
              style={{ background: "rgba(240,24,125,0.12)", color: "#f0187d", border: "1px solid rgba(240,24,125,0.25)" }}>
              ✦ People Also Ask ✦
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="gradient-text">Frequently Asked</span>
              <br />
              <span className="text-white">Questions</span>
            </h2>
            <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
              Everything you need to know about Escorts in {loc.name} &amp; Patna Escorts Service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg,rgba(20,3,15,0.9),rgba(30,5,20,0.9))", border: "1px solid rgba(240,24,125,0.15)", backdropFilter: "blur(12px)" }}
              >
                <summary className="flex items-start gap-4 p-5 cursor-pointer list-none select-none" style={{ outline: "none" }}>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ background: "linear-gradient(135deg,#f5703d,#f0187d)", color: "#fff", minWidth: "2rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-semibold text-white text-sm sm:text-base leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light transition-transform duration-300 group-open:rotate-45"
                    style={{ background: "rgba(240,24,125,0.15)", color: "#f0187d" }}>
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 pl-[4.25rem]">
                  <div className="w-10 h-px mb-3" style={{ background: "linear-gradient(90deg,#f0187d,transparent)" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>Still have questions? We&apos;re here 24/7.</p>
            <Link href="/contact" className="btn-gradient glow-pink text-white font-bold px-10 py-3.5 rounded-full text-sm inline-block">
              Ask Us Anything ✦
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#7a0035 0%,#3a0018 50%,#5e0028 100%)" }}
      >
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%,#f0187d 0%,transparent 55%),radial-gradient(circle at 80% 50%,#f5703d 0%,transparent 55%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-3" style={{ color: "#f5c842" }}>✦ Available Right Now ✦</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Book <span className="gradient-text">Escorts in {loc.name}</span> Tonight
          </h2>
          <p className="text-gray-300 mb-8 text-sm sm:text-base">
            100% discreet · Verified companions · Instant booking · {loc.area}, Patna
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919229604907" className="btn-gradient glow-pink text-white font-bold px-10 py-4 rounded-full text-base">
              📞 Call Now
            </a>
            <a href="https://wa.me/919229604907" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 rounded-full font-bold border-2 text-base transition-colors hover:bg-white/10"
              style={{ borderColor: "#f5c842", color: "#f5c842" }}>
              💬 WhatsApp
            </a>
            <Link href="/contact"
              className="px-10 py-4 rounded-full font-bold border-2 text-white text-base transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}>
              Book via Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
