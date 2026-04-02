import Image from "next/image";
import Link from "next/link";

const featured = [
  { name: "Sonia",   img: "/images/soniya.webp",  tag: "⭐ Star Girl" },
  { name: "Priya",   img: "/images/priya.webp",   tag: "💎 Elite" },
  { name: "Anaya",   img: "/images/anaya.webp",   tag: "✨ VIP" },
  { name: "Natasha", img: "/images/natasha.webp", tag: "🔥 Hot Pick" },
  { name: "Diya",    img: "/images/diya.webp",    tag: "💫 Premium" },
  { name: "Neelima", img: "/images/neelima.webp", tag: "👑 Exclusive" },
];

const services = [
  { icon: "🌹", title: "In-Call Services",   desc: "Private, luxurious in-call venues across Patna — clean, discreet, and available 24/7." },
  { icon: "🚗", title: "Out-Call Services",  desc: "We come to your hotel or home, on time, every time — completely discreet." },
  { icon: "🌙", title: "Overnight Package",  desc: "A full night of warm companionship. Extended time, extended pleasure." },
  { icon: "✈️", title: "Travel Companion",   desc: "Take a beautiful companion on any trip — business or leisure." },
];

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner.webp"
            alt="Hot Sonia escorts Patna"
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
          {/* Radial pink glow */}
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
            alt="Hot Sonia"
            width={280}
            height={112}
            className="h-28 sm:h-36 w-auto object-contain mx-auto mb-6 drop-shadow-2xl"
            priority
          />

          <p
            className="text-xs sm:text-sm uppercase tracking-[0.35em] mb-5 font-semibold"
            style={{ color: "#f5c842" }}
          >
            ✦ Premium Escort Service in Patna ✦
          </p>

          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="gradient-text">Luxury. Desire.</span>
            <br />
            <span className="text-white">Pure Discretion.</span>
          </h1>

          <p
            className="text-sm sm:text-base max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Experience Patna&apos;s most exclusive companion service. Real photos, verified companions, and absolute discretion — available 24/7, just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/contact" className="btn-gradient glow-pink text-white font-bold px-10 py-4 rounded-full text-base">
              Book Now ✨
            </Link>
            <Link
              href="/gallery"
              className="font-semibold px-10 py-4 rounded-full text-base border-2 transition-all duration-300 hover:border-hot-pink"
              style={{ borderColor: "rgba(240,24,125,0.5)", color: "#fff" }}
            >
              View Gallery 💎
            </Link>
          </div>

          {/* Stats pill */}
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
              { v: "12+",  l: "Companions" },
              { v: "24/7", l: "Available" },
              { v: "100%", l: "Discreet" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.v}</div>
                <div className="text-xs mt-1 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FEATURED COMPANIONS ─────────── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, #0a0208 0%, #100009 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>
              ✦ Meet Our Girls ✦
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Featured Companions</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Handpicked · Verified · Stunning
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featured.map((c) => (
              <Link
                href="/gallery"
                key={c.name}
                className="companion-card group relative rounded-2xl overflow-hidden block"
                style={{ border: "1px solid rgba(240,24,125,0.15)" }}
              >
                <div className="relative aspect-[3/4]">
                  <Image src={c.img} alt={c.name} fill className="object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, transparent 45%, rgba(10,2,8,0.96) 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
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
              View All 12 Companions →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="py-20" style={{ background: "#100009" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>
              ✦ What We Offer ✦
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">Our Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="card-glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 group"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
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
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── WHY HOT SONIA ─────────── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0a0208 0%, #180310 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "#f5c842" }}>
              ✦ Why Choose Us ✦
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="gradient-text">The Best in Patna</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "✅", title: "Verified Companions",       desc: "Every companion is personally verified & professionally trained." },
              { icon: "🔒", title: "100% Discreet",             desc: "Your identity and booking details remain completely private." },
              { icon: "⚡", title: "Instant Booking",           desc: "Book in minutes — fast, simple, and hassle-free." },
              { icon: "💯", title: "Satisfaction Guaranteed",   desc: "Every client leaves with a smile. That is our promise." },
              { icon: "🛡️", title: "Safe & Secure",             desc: "Safety for both clients and companions is non-negotiable." },
              { icon: "👑", title: "Premium Quality Only",      desc: "Only the finest companions and venues. Always the best." },
            ].map((item) => (
              <div
                key={item.title}
                className="card-glass rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition-transform duration-300"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4
                    className="text-white font-bold mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA BANNER ─────────── */}
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
            alt="Hot Sonia"
            width={200}
            height={80}
            className="h-24 w-auto object-contain mx-auto mb-6 drop-shadow-2xl"
          />
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready for an Unforgettable Night?
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,200,200,0.85)" }}>
            Our companions are waiting. Book now and experience Patna&apos;s finest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white font-bold px-10 py-4 rounded-full text-base hover:bg-gray-100 transition-colors"
              style={{ color: "#f0187d" }}
            >
              Book Now ✨
            </Link>
            <a
              href="tel:+919999999999"
              className="border-2 border-white/55 hover:border-white text-white font-semibold px-10 py-4 rounded-full transition-colors text-base"
            >
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
