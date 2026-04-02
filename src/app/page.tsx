import Link from "next/link";

const services = [
  { icon: "💎", title: "Elite Companions", desc: "Hand-picked, sophisticated companions for dinners, events, and social occasions." },
  { icon: "🌹", title: "In-Call Services", desc: "Private, comfortable, and safe in-call facilities available across Patna." },
  { icon: "🚗", title: "Out-Call Services", desc: "We come to your hotel or residence at your convenience, discreetly." },
  { icon: "🌙", title: "Overnight Packages", desc: "Extended companionship packages for the full night experience." },
  { icon: "✈️", title: "Travel Companions", desc: "Beautiful companions to accompany you on business or leisure trips." },
  { icon: "🎉", title: "Event Escort", desc: "Make any event memorable with a charming and well-dressed companion." },
];

const testimonials = [
  { name: "Rahul S.", text: "Absolutely professional service. The companion was charming, punctual, and made my evening unforgettable.", rating: 5 },
  { name: "Amit K.", text: "Discreet, safe, and trustworthy. Best escort service in Patna by a mile.", rating: 5 },
  { name: "Vikram M.", text: "Top-class experience. Easy to book, responsive support, and a wonderful companion.", rating: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/40 via-gray-950 to-gray-900" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-rose-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-rose-900/10 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-rose-900/40 text-rose-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-rose-800/40">
            #1 Escort Service in Patna
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">
              Escorts
            </span>{" "}
            in Patna
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the finest companion services in Patna. Discreet, professional, and available 24/7 for your pleasure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-rose-600 hover:bg-rose-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-base shadow-lg shadow-rose-900/40">
              Book Now
            </Link>
            <Link href="/services" className="border border-rose-700/50 hover:border-rose-500 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-base">
              View Services
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "50+", label: "Companions" },
              { value: "24/7", label: "Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-rose-400">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-500 text-sm uppercase tracking-widest font-semibold">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Our Services</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              We offer a wide range of premium companion services tailored to your needs and preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-rose-700/50 hover:bg-gray-800 transition-all duration-300 group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-rose-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-block border border-rose-700/50 hover:border-rose-500 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 text-sm">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rose-500 text-sm uppercase tracking-widest font-semibold">Why Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">The Most Trusted Escort Service in Patna</h2>
              <div className="space-y-5">
                {[
                  { title: "100% Verified Companions", desc: "All our companions are thoroughly verified, professional, and trained." },
                  { title: "Complete Discretion", desc: "Your privacy is our top priority. All bookings are fully confidential." },
                  { title: "24/7 Availability", desc: "Available around the clock to serve you at your convenience." },
                  { title: "Safe and Secure", desc: "We prioritize safety for both clients and companions at all times." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-block mt-8 bg-rose-600 hover:bg-rose-500 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200">
                Learn More About Us
              </Link>
            </div>
            <div className="bg-gradient-to-br from-rose-900/30 to-gray-800/50 border border-rose-800/30 rounded-3xl p-8 text-center">
              <div className="text-6xl mb-4">🌹</div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium Experience</h3>
              <p className="text-gray-400 mb-6">We guarantee an unforgettable experience with our elite companions.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "5 Star", l: "Rating" },
                  { v: "100%", l: "Discreet" },
                  { v: "24/7", l: "Support" },
                  { v: "Safe", l: "Verified" },
                ].map((item) => (
                  <div key={item.l} className="bg-gray-900/60 rounded-xl p-3 border border-gray-700/30">
                    <div className="text-rose-400 font-bold text-xl">{item.v}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-500 text-sm uppercase tracking-widest font-semibold">Client Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-rose-400 text-lg">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic mb-4">{t.text}</p>
                <div className="text-rose-500 font-semibold text-sm">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-950 to-rose-900/60">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Book?</h2>
          <p className="text-rose-200 mb-8 text-lg">Contact us now and let us arrange the perfect companion experience for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-rose-700 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-base">
              Book Now
            </Link>
            <a href="tel:+919999999999" className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base">
              Call Us: +91 99999 99999
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
