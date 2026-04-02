import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hot Sonia | #1 Escort Agency in Patna",
  description:
    "Learn about Hot Sonia — Patna's most trusted escort agency. 5+ years of premium escorts in Patna, 500+ happy clients, 12+ verified call girls in Patna. Discreet, safe, reliable.",
  alternates: { canonical: "https://hotsonia.com/about" },
  openGraph: {
    title: "About Hot Sonia | #1 Escort Agency in Patna",
    description: "5+ years of premium Patna Escorts Service. 500+ happy clients. Verified call girls in Patna.",
    images: [{ url: "https://hotsonia.com/images/logo.png", alt: "Hot Sonia — #1 Escort Agency in Patna" }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-14 text-center"
        style={{ background: "linear-gradient(180deg, #0a0208 0%, #100009 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.28em] font-bold mb-2" style={{ color: "#f5c842" }}>
            ✦ Our Story ✦
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="gradient-text">About Hot Sonia</span>
          </h1>
          <p
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.52)" }}
          >
            Patna&apos;s most exclusive and trusted companion service — built on discretion, beauty, and completely unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="py-16" style={{ background: "#0a0208" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-bold mb-3" style={{ color: "#f5c842" }}>
                Who We Are
              </p>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span className="gradient-text">Born from a Vision of Luxury</span>
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>
                <p>
                  Hot Sonia was founded with one goal: to redefine the companion experience in Patna. We saw a gap in the market for a service that truly combined beauty, safety, and discretion — and we filled it.
                </p>
                <p>
                  Every companion on our platform is personally interviewed, verified, and committed to delivering a world-class experience. We never compromise on quality.
                </p>
                <p>
                  Over the years, we have proudly served hundreds of satisfied clients — from local businessmen to out-of-town visitors — all seeking the same thing: a memorable, discreet, and luxurious companionship experience.
                </p>
              </div>
              <Link href="/contact" className="btn-gradient glow-pink text-white font-bold px-8 py-3.5 rounded-full text-sm inline-block mt-8">
                Book an Experience
              </Link>
            </div>

            {/* Logo + stats */}
            <div>
              <div
                className="rounded-3xl p-8 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(240,24,125,0.1) 0%, rgba(245,112,61,0.07) 100%)",
                  border: "1px solid rgba(240,24,125,0.2)",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Hot Sonia"
                  width={200}
                  height={80}
                  className="h-20 w-auto object-contain mx-auto mb-8"
                />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: "5+",   l: "Years Active" },
                    { v: "500+", l: "Happy Clients" },
                    { v: "12+",  l: "Companions" },
                    { v: "24/7", l: "Available" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-2xl p-4 text-center"
                      style={{ background: "rgba(10,2,8,0.8)", border: "1px solid rgba(240,24,125,0.14)" }}
                    >
                      <div className="text-2xl font-bold gradient-text">{s.v}</div>
                      <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: "#100009" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>
              ✦ What We Stand For ✦
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Our Core Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔒", title: "Privacy First",    desc: "Every booking is 100% confidential. We never share client information." },
              { icon: "✅", title: "Verified Girls",   desc: "All companions are personally vetted and verified before onboarding." },
              { icon: "💎", title: "Premium Quality",  desc: "From companions to venues — only the highest standards are accepted." },
              { icon: "❤️", title: "Client Care",      desc: "Your satisfaction and comfort are our absolute top priorities." },
            ].map((v) => (
              <div
                key={v.title}
                className="card-glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
