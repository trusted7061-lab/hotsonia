import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Escorts in Patna | Call Girls in Patna | #1 Patna Escorts Service — Hot Sonia",
  description:
    "Hot Sonia — Best Escorts in Patna & premium Call Girls in Patna. Patna Escorts Service available 24/7. Verified beautiful companions for in-call, out-call & overnight. Book now.",
  alternates: { canonical: "https://www.hotsonia.com" },
  openGraph: {
    title:
      "Escorts in Patna | Call Girls in Patna | #1 Patna Escorts Service",
    description:
      "Hot Sonia — Best Escorts in Patna. Premium Call Girls in Patna available 24/7. Book your Patna Escorts Service now.",
    url: "https://www.hotsonia.com",
    images: [
      {
        url: "https://www.hotsonia.com/images/banner.webp",
        alt: "Escorts in Patna — Hot Sonia Patna Escorts Service",
      },
    ],
  },
};

const featured = [
  { name: "Sonia",   img: "/images/soniya.webp",  tag: "⭐ Star Girl",  alt: "Sonia — Call Girl in Patna | Star Escort Patna | Patna Escorts Service" },
  { name: "Priya",   img: "/images/priya.webp",   tag: "💎 Elite",      alt: "Priya — Elite Call Girl Patna | Escorts in Patna | Hot Sonia" },
  { name: "Anaya",   img: "/images/anaya.webp",   tag: "✨ VIP",        alt: "Anaya — VIP Escort in Patna | Premium Call Girl Patna | Hot Sonia" },
  { name: "Natasha", img: "/images/natasha.webp", tag: "🔥 Hot Pick",   alt: "Natasha — Hot Escort in Patna | Call Girls Patna | Patna Escorts Service" },
  { name: "Diya",    img: "/images/diya.webp",    tag: "💫 Premium",    alt: "Diya — Premium Call Girl in Patna | Young Escort Patna | Hot Sonia" },
  { name: "Neelima", img: "/images/neelima.webp", tag: "👑 Exclusive",  alt: "Neelima — Exclusive Escort Patna | Top Call Girls in Patna | Hot Sonia" },
  { name: "Aafrin",  img: "/images/aafrin.webp",  tag: "🌙 Mystique",  alt: "Aafrin — Mystique Escort Patna | Call Girl Patna | Hot Sonia" },
  { name: "Jamila",  img: "/images/jamila.webp",  tag: "🌹 Charming",  alt: "Jamila — Charming Call Girl Patna | Escorts in Patna | Hot Sonia" },
  { name: "Janu",    img: "/images/janu.webp",    tag: "💋 Sensual",   alt: "Janu — Sensual Escort Patna | Call Girls in Patna | Hot Sonia" },
  { name: "Neethu",  img: "/images/neethu.webp",  tag: "✨ Fresh",     alt: "Neethu — Fresh Escort Patna | Young Call Girl Patna | Hot Sonia" },
  { name: "Poonam",  img: "/images/poonam.webp",  tag: "🔥 Bold",      alt: "Poonam — Bold Call Girl Patna | Escorts in Patna | Hot Sonia" },
  { name: "Sufia",   img: "/images/sufia.webp",   tag: "💎 Divine",    alt: "Sufia — Divine Escort Patna | Premium Call Girl Patna | Hot Sonia" },
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
    "@id": "https://www.hotsonia.com/#business",
  },
  areaServed: { "@type": "City", name: "Patna" },
  serviceType: "Escort Service",
  offers: [
    { "@type": "Offer", name: "In-Call Escort Patna", price: "3000", priceCurrency: "INR" },
    { "@type": "Offer", name: "Out-Call Escort Patna", price: "4000", priceCurrency: "INR" },
    { "@type": "Offer", name: "Overnight Escort Patna", price: "12000", priceCurrency: "INR" },
  ],
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

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Escorts in Patna — Hot Sonia Hero"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/banner.webp"
            alt="Escorts in Patna — Hot Sonia Premium Call Girls Patna | Patna Escorts Service"
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
            alt="Hot Sonia — Best Escorts in Patna | Call Girls Patna | Patna Escorts Service"
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
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
                    sizes="(max-width:640px) 50vw, 25vw"
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

      {/* SEO CONTENT SECTION */}
      <section className="py-16" style={{ background: "#0a0208" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-glass rounded-3xl p-8 sm:p-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Premium Escorts in Patna</span>
              <span className="text-white"> — About Our Patna Escorts Service</span>
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm leading-loose"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              <div>
                <p>
                  <strong style={{ color: "#fff" }}>Hot Sonia</strong> is Bihar&apos;s #1
                  destination for <strong style={{ color: "#f0187d" }}>escorts in Patna</strong>.
                  For over 5 years, we have been offering the most luxurious and discreet{" "}
                  <strong style={{ color: "#f0187d" }}>Patna Escorts Service</strong> to elite
                  clients who demand nothing but the best. Every companion is personally
                  verified, professionally trained, and selected for both beauty and intelligence.
                  Our <strong style={{ color: "#f0187d" }}>Patna Escorts</strong> are available
                  for hotel visits, home calls, events, and overnight stays across all areas of Patna.
                </p>
              </div>
              <div>
                <p>
                  Our <strong style={{ color: "#f0187d" }}>call girls in Patna</strong> are
                  available for in-call, out-call, overnight stays, and travel companionship.
                  As the most trusted <strong style={{ color: "#f0187d" }}>Patna Escorts</strong>{" "}
                  agency, we guarantee absolute confidentiality, on-time service, and 100% real
                  photos — no fake profiles, no hidden charges. Whether you&apos;re searching for{" "}
                  <strong style={{ color: "#f0187d" }}>escorts in Patna</strong> for a short date
                  or an extended stay, Hot Sonia delivers pure, unforgettable pleasure every time.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Escorts in Patna",
                "Call Girls in Patna",
                "Patna Escorts Service",
                "Patna Escorts",
                "Escort Agency Patna",
                "VIP Call Girls Patna",
                "24/7 Patna Escorts",
                "Outcall Escorts Patna",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-4 py-2 rounded-full font-medium"
                  style={{
                    background: "rgba(240,24,125,0.12)",
                    border: "1px solid rgba(240,24,125,0.25)",
                    color: "rgba(255,255,255,0.75)",
                  }}
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
        className="py-16"
        style={{ background: "linear-gradient(180deg, #0a0208 0%, #100009 100%)" }}
        aria-label="FAQ — Escorts in Patna"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>
              \u2726 Common Questions \u2726
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">FAQs</span>
              <span className="text-white"> — Patna Escorts Service</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Everything you need to know about Escorts in Patna
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="card-glass rounded-2xl"
                style={{ cursor: "pointer" }}
              >
                <summary
                  className="flex justify-between items-center p-5 font-semibold text-white list-none select-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <span>{faq.q}</span>
                  <span className="text-xl gradient-text ml-4 flex-shrink-0" aria-hidden="true">+</span>
                </summary>
                <p
                  className="px-5 pb-5 text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
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
              href="tel:+919999999999"
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
