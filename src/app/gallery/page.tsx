import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Hot Sonia — Premium Escorts Patna",
  description: "Browse our gallery of Beautiful verified companions available in Patna.",
};

const companions = [
  { name: "Sonia",   img: "/images/soniya.webp",  tag: "⭐ Star Girl",    age: "22", desc: "The most sought-after companion in Patna. Bold, charming, and impossible to forget." },
  { name: "Priya",   img: "/images/priya.webp",   tag: "💎 Elite",         age: "21", desc: "Elegant and sophisticated. Perfect for high-class dates and exclusive events." },
  { name: "Anaya",   img: "/images/anaya.webp",   tag: "✨ VIP",            age: "23", desc: "Sweet, playful, and stunning. Always full of energy and laughter." },
  { name: "Natasha", img: "/images/natasha.webp", tag: "🔥 Hot Pick",      age: "22", desc: "Bold and daring — she knows exactly how to make you feel special." },
  { name: "Diya",    img: "/images/diya.webp",    tag: "💫 Premium",       age: "20", desc: "Young and vivacious with a magnetic personality that lights up any room." },
  { name: "Neelima", img: "/images/neelima.webp", tag: "👑 Exclusive",     age: "24", desc: "Mature, experienced, and incredibly charming. Pure class." },
  { name: "Aafrin",  img: "/images/aafrin.webp",  tag: "🌸 Fresh Face",    age: "21", desc: "A gorgeous smile and irresistible charm. A fresh favourite." },
  { name: "Jamila",  img: "/images/jamila.webp",  tag: "🌙 Night Queen",   age: "23", desc: "Mysterious and alluring. A night with Jamila is one you will never forget." },
  { name: "Janu",    img: "/images/janu.webp",    tag: "💕 Sweetheart",    age: "20", desc: "Warm, caring, and endlessly beautiful. The ultimate girlfriend experience." },
  { name: "Neethu",  img: "/images/neethu.webp",  tag: "🎀 Cute",          age: "22", desc: "Adorable and bubbly with a gorgeous figure and radiant smile." },
  { name: "Poonam",  img: "/images/poonam.webp",  tag: "🌺 Exotic",        age: "23", desc: "Exotic beauty with a taste for luxury, adventure, and intimacy." },
  { name: "Sufia",   img: "/images/sufia.webp",   tag: "✦ Classy",         age: "24", desc: "Classy, stylish, and absolutely breathtaking in every way." },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-14 text-center"
        style={{ background: "linear-gradient(180deg, #0a0208 0%, #100009 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.28em] font-bold mb-2" style={{ color: "#f5c842" }}>
            ✦ Real Photos · Verified Girls ✦
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="gradient-text">Companion Gallery</span>
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            12 stunning, verified companions available in Patna — 100% real photos
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
                  <Image src={c.img} alt={c.name} fill className="object-cover" />
                  {/* Base gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, transparent 38%, rgba(10,2,8,0.97) 100%)",
                    }}
                  />
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-white font-bold text-base"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
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
                    <p
                      className="companion-info text-xs leading-relaxed mb-3"
                      style={{ color: "rgba(255,255,255,0.68)" }}
                    >
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

          {/* Bottom CTA */}
          <div
            className="mt-16 rounded-3xl py-12 px-6 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(240,24,125,0.12) 0%, rgba(245,112,61,0.08) 100%)",
              border: "1px solid rgba(240,24,125,0.2)",
            }}
          >
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              See Someone You Like?
            </h3>
            <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>
              Contact us now to book or request a custom selection.
            </p>
            <Link href="/contact" className="btn-gradient glow-pink text-white font-bold px-10 py-4 rounded-full text-sm">
              Book Now ✨
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
