import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Hot Sonia — Escorts in Patna",
  description: "Premium escort services in Patna — in-call, out-call, overnight, travel companion, and more.",
};

const services = [
  {
    icon: "🌹",
    title: "In-Call Services",
    price: "Starting ₹3,000",
    desc: "Visit our private, luxurious in-call venues available 24/7 across Patna. Clean, hygienic, and exceptionally comfortable.",
    features: ["Private venue", "Fully hygienic", "Discreet location", "Comfortable setup"],
  },
  {
    icon: "🚗",
    title: "Out-Call Services",
    price: "Starting ₹4,000",
    desc: "We come to your hotel or home at your convenience. Punctual, well-dressed, and completely discreet.",
    features: ["Hotel visits", "Home visits", "Punctual arrival", "Discreet exit"],
  },
  {
    icon: "🌙",
    title: "Overnight Package",
    price: "Starting ₹12,000",
    desc: "An extended night of warmth and companionship. Perfect for those who want more time to connect.",
    features: ["Full night stay", "Extended companionship", "Morning available", "Flexible timing"],
  },
  {
    icon: "✈️",
    title: "Travel Companion",
    price: "Starting ₹20,000 / day",
    desc: "Take a gorgeous, cultured companion on your next trip — domestic or international.",
    features: ["Domestic trips", "International trips", "Fully discreet", "Weekends available"],
  },
  {
    icon: "💎",
    title: "Elite Companion",
    price: "Starting ₹6,000",
    desc: "Our top-tier companions for corporate dinners, VIP events, and exclusive occasions.",
    features: ["Event escort", "VIP experience", "Well educated", "Elegantly dressed"],
  },
  {
    icon: "🎉",
    title: "Party Companion",
    price: "Starting ₹5,000",
    desc: "A lively, fun companion for parties, social gatherings, and private celebrations.",
    features: ["Private parties", "Social events", "Fun personality", "Available 24/7"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-14 text-center"
        style={{ background: "linear-gradient(180deg, #0a0208 0%, #100009 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.28em] font-bold mb-2" style={{ color: "#f5c842" }}>
            ✦ Premium Offerings ✦
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>
            From casual dates to overnight stays — we have the perfect service for every desire.
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
                  <h3
                    className="text-white font-bold text-xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.title}
                  </h3>
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
                <Link
                  href="/contact"
                  className="block text-center btn-gradient text-white font-semibold py-3 rounded-xl text-sm"
                >
                  Book This Service
                </Link>
              </div>
            ))}
          </div>

          {/* Custom */}
          <div
            className="mt-14 rounded-3xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(240,24,125,0.1) 0%, rgba(245,112,61,0.07) 100%)",
              border: "1px solid rgba(240,24,125,0.2)",
            }}
          >
            <div className="text-5xl mb-4">✨</div>
            <h3
              className="text-white text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Custom Packages Available
            </h3>
            <p className="text-sm mb-7 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.52)" }}>
              Have something specific in mind? We create fully tailored experiences designed just for you.
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
