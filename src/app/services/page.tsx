import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | PatnaEscorts",
  description: "Explore our full range of premium escort and companion services in Patna.",
};

const services = [
  {
    icon: "💎",
    title: "Elite Companions",
    price: "Starting ₹5,000",
    desc: "Hand-picked, sophisticated companions for dinners, events, and social occasions. Our elite companions are well-educated, charming, and know how to make any moment special.",
    features: ["Dinner dates", "Social events", "Corporate outings", "Award ceremonies"],
  },
  {
    icon: "🌹",
    title: "In-Call Services",
    price: "Starting ₹3,000",
    desc: "Private, comfortable, and safe in-call facilities available 24/7 across Patna. Our venues are discreet, clean, and designed for your maximum comfort.",
    features: ["Private venue", "Clean & hygienic", "Fully discreet", "Safe environment"],
  },
  {
    icon: "🚗",
    title: "Out-Call Services",
    price: "Starting ₹4,000",
    desc: "We come to your hotel or residence at your convenience. All our out-call companions are punctual, well-dressed, and discreet.",
    features: ["Hotel visits", "Home visits", "Punctual arrival", "Discreet exit"],
  },
  {
    icon: "🌙",
    title: "Overnight Packages",
    price: "Starting ₹12,000",
    desc: "Extended companionship packages for a full night of unforgettable experience. Perfect for those who desire a longer, more intimate connection.",
    features: ["Full night stay", "Extended companionship", "Breakfast included", "Flexible timing"],
  },
  {
    icon: "✈️",
    title: "Travel Companions",
    price: "Starting ₹20,000 / day",
    desc: "Beautiful, cultured companions to accompany you on business or leisure trips. Available for both domestic and international travel.",
    features: ["Domestic travel", "International travel", "Business trips", "Leisure tours"],
  },
  {
    icon: "🎉",
    title: "Event Escort",
    price: "Starting ₹6,000",
    desc: "Make any event memorable with a charming, well-dressed companion by your side. Ideal for corporate functions, weddings, and high-profile events.",
    features: ["Corporate events", "Weddings", "Gala dinners", "Private parties"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-rose-500 text-sm uppercase tracking-widest font-semibold">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-6">Our Premium Services</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            From casual companionship to exclusive overnight packages — we have the perfect service for every occasion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-7 hover:border-rose-700/50 transition-all duration-300 flex flex-col">
                <div className="text-5xl mb-4">{service.icon}</div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-xl">{service.title}</h3>
                  <span className="text-rose-400 text-sm font-semibold bg-rose-900/30 px-3 py-1 rounded-full">{service.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-rose-500 rounded-full flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 block text-center bg-rose-600 hover:bg-rose-500 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm">
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gray-800/50 border border-gray-700/30 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-3">Custom Packages Available</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Need something specific? We offer fully customized packages to meet your unique desires. Contact us and we will arrange a tailor-made experience just for you.
            </p>
            <Link href="/contact" className="inline-block bg-rose-600 hover:bg-rose-500 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
