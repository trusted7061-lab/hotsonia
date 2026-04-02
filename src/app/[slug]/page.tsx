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

  const title = `Escorts in ${loc.name} | Call Girls ${loc.name} Patna — Hot Sonia`;
  const description = `Hot Sonia — Best Escorts in ${loc.name}, Patna. Premium Call Girls near ${loc.area} available 24/7. In-call, out-call & overnight Patna Escorts Service. Book now.`;
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
      "Escorts In Patna",
      "Patna Escorts Service",
      "Call Girls In Patna",
      "Patna Escorts",
    ],
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url: `${BASE_URL}/images/banner.webp`,
          alt: `Escorts in ${loc.name} Patna — Hot Sonia`,
        },
      ],
    },
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `Escorts in ${loc.name}`,
        item: `${BASE_URL}/${loc.slug}`,
      },
    ],
  };

  const localSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EntertainmentBusiness"],
    name: `Hot Sonia — Escorts in ${loc.name} Patna`,
    description: `Premium Escort & Call Girl service in ${loc.name}, Patna. Available 24/7.`,
    url: `${BASE_URL}/${loc.slug}`,
    telephone: "+91-9999999999",
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
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Are escorts available in ${loc.name} Patna?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Hot Sonia provides verified escorts in ${loc.name}, Patna. Our companions are available 24/7 for in-call and out-call service in ${loc.area}.`,
        },
      },
      {
        "@type": "Question",
        name: `How to book call girls in ${loc.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Call or WhatsApp Hot Sonia to book call girls near ${loc.name}. Choose a companion from our gallery, select your preferred service and time, and we confirm instantly.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the rate for escorts near ${loc.name} Patna?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Our escort rates near ${loc.name} start from a budget-friendly price. Contact us directly for current packages — in-call, out-call, and overnight options are available.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section
          className="relative py-28 px-4 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg,#0a0208 0%,#1a060f 50%,#0a0208 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%,#f0187d 0%,transparent 50%), radial-gradient(circle at 70% 50%,#f5703d 0%,transparent 50%)",
            }}
          />
          {/* Breadcrumb */}
          <nav className="relative z-10 mb-6 flex justify-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-pink-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-pink-400">Escorts in {loc.name}</span>
          </nav>

          <div className="relative z-10 max-w-4xl mx-auto">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1 rounded-full border"
              style={{ color: "#f5c842", borderColor: "#f5c842" + "44" }}
            >
              Hot Sonia — {loc.area}
            </span>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Escorts in {loc.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
              Premium <strong className="text-pink-400">Call Girls in {loc.name}</strong>, Patna — verified, beautiful
              companions available 24/7 for in-call &amp; out-call service near {loc.area}.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="tel:+919999999999"
                className="btn-gradient px-8 py-3 rounded-full font-semibold text-white text-lg"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full font-semibold border-2 text-white text-lg transition-colors hover:bg-white/10"
                style={{ borderColor: "#f5c842", color: "#f5c842" }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Companions Grid */}
        <section className="py-20 px-4" style={{ background: "#0d0310" }}>
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Call Girls near {loc.name}</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
              Choose your ideal companion from our exclusive roster of escorts available in {loc.area}, Patna.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {companions.map((c) => (
                <div key={c.name} className="companion-card card-glass rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={c.img}
                      alt={`${c.name} — Escort in ${loc.name} Patna | Call Girl ${loc.area} | Hot Sonia`}
                      fill
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                        {c.name}
                      </p>
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{ background: "rgba(240,24,125,0.3)", color: "#f0187d", border: "1px solid #f0187d44" }}
                      >
                        {c.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/gallery"
                className="btn-gradient px-8 py-3 rounded-full font-semibold text-white inline-block"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4" style={{ background: "#0a0208" }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">{loc.name} Escorts Service</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🌹", title: `In-Call near ${loc.name}`, desc: `Private in-call venues near ${loc.area}. Clean, discreet, available round the clock.` },
                { icon: "🚗", title: `Out-Call to ${loc.name}`, desc: `Our call girls travel to your hotel or residence in ${loc.name}. On time, every time.` },
                { icon: "🌙", title: "Overnight Package", desc: `Spend a full night with our exclusive ${loc.name} escort. Extended intimacy, guaranteed satisfaction.` },
              ].map((s) => (
                <div
                  key={s.title}
                  className="card-glass rounded-2xl p-6 text-center"
                  style={{ border: "1px solid rgba(240,24,125,0.2)" }}
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4" style={{ background: "#0d0310" }}>
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6 text-center"
              style={{ fontFamily: "var(--font-playfair)", color: "#f5c842" }}
            >
              Why Choose Hot Sonia for Escorts in {loc.name}?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
              <div>
                <p className="mb-4">
                  Hot Sonia is Patna&apos;s #1 escort agency serving <strong className="text-pink-400">escorts in {loc.name}</strong> and
                  surrounding areas. Our{" "}
                  <strong className="text-pink-400">call girls near {loc.area}</strong> are verified, professional,
                  and available 24/7 — whether you need an in-call, out-call, or overnight companion.
                </p>
                <p>
                  With 500+ satisfied clients and 12+ beautiful companions, we are the most trusted name for{" "}
                  <strong className="text-pink-400">{loc.name} escort service</strong> in Patna. Discretion and
                  quality are our top priorities.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Our <strong className="text-pink-400">call girls in {loc.name}</strong> include college girls,
                  models, housewives, and VIP companions — all with real photos and verified profiles. Browse our
                  gallery and pick your ideal partner.
                </p>
                <p>
                  Booking escorts near <strong className="text-pink-400">{loc.area}</strong> is fast and
                  confidential. Simply call or WhatsApp us, select a companion, and confirm your appointment in
                  minutes. Outcall service covers all hotels and residences in {loc.name} and nearby Patna localities.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-8 justify-center">
              {[
                `Escorts in ${loc.name}`,
                `Call Girls ${loc.name}`,
                `${loc.name} Escort Service`,
                "Escort Service Patna",
                "Call Girls In Patna",
                "Patna Escorts Service",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: "rgba(240,24,125,0.15)", color: "#f0187d", border: "1px solid rgba(240,24,125,0.3)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4" style={{ background: "#0a0208" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-10"
              style={{ fontFamily: "var(--font-playfair)", color: "#f5c842" }}
            >
              FAQs — Escorts in {loc.name} Patna
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: `Are escorts available in ${loc.name} Patna?`,
                  a: `Yes. Hot Sonia provides verified escort service in ${loc.name}, Patna — available 24/7 for in-call and out-call bookings near ${loc.area}.`,
                },
                {
                  q: `How do I book call girls near ${loc.name}?`,
                  a: `Call or WhatsApp Hot Sonia. Browse our gallery, pick a companion, mention your preferred time and service type, and we confirm your booking instantly.`,
                },
                {
                  q: `What are the escort rates near ${loc.name}?`,
                  a: `Rates start from affordable packages. Contact us directly for current pricing on in-call, out-call, and overnight escort service near ${loc.area}.`,
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="card-glass rounded-xl p-5 cursor-pointer"
                  style={{ border: "1px solid rgba(240,24,125,0.2)" }}
                >
                  <summary className="text-white font-semibold list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-pink-400 ml-4">+</span>
                  </summary>
                  <p className="mt-3 text-gray-400 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 px-4 text-center"
          style={{ background: "linear-gradient(135deg,#1a060f 0%,#0a0208 100%)" }}
        >
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Book{" "}
              <span className="gradient-text">Escorts in {loc.name}</span>{" "}
              Tonight
            </h2>
            <p className="text-gray-300 mb-8">
              100% discreet · Verified companions · Instant booking · {loc.area}, Patna
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919999999999"
                className="btn-gradient px-8 py-3 rounded-full font-semibold text-white text-lg"
              >
                📞 Call Now
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full font-semibold border-2 text-white text-lg transition-colors hover:bg-white/10"
                style={{ borderColor: "#f5c842", color: "#f5c842" }}
              >
                Book via Form
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
