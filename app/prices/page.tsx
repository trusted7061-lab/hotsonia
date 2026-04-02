import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotsonia.in'),
  title: 'Escort Prices in Patna | Call Girl Rates | VIP Packages | Premium Services',
  description: 'Check latest escort pricing in Patna. Affordable rates from ₹9,000/hour for college girls to ₹20,000+ for VIP models. Transparent pricing, no hidden charges.',
  keywords: 'Escort prices Patna, Call girl rates, VIP escort cost, Affordable escorts, Premium packages',
  alternates: {
    canonical: 'https://hotsonia.in/prices',
  },
  openGraph: {
    type: 'website',
    url: 'https://hotsonia.in/prices',
    title: 'Escort Prices in Patna | Affordable & VIP Packages',
    description: 'Transparent pricing from ₹9,000/hr. Premium, Standard & Budget packages available.',
  },
};

export default function Prices() {
  const packages = [
    {
      title: 'Budget Friendly',
      description: 'Perfect for first-timers',
      price: '₹9,000',
      period: '/hour',
      icon: '💰',
      features: [
        '2-hour minimum',
        'College Girls & Young Escorts',
        'Incall Services',
        'In Patna City',
        'Standard Accommodation',
        '24/7 Availability'
      ],
      cta: 'Book Budget',
      highlighted: false,
    },
    {
      title: 'Premium Plus',
      description: 'Most Popular Choice',
      price: '₹12,000',
      period: '/hour',
      icon: '👑',
      features: [
        '1-hour minimum',
        'Premium VIP Models',
        'Incall & Outcall',
        'All Patna Locations',
        ' Private Accommodations',
        '24/7 Availability',
        'FREE Meet & Greet'
      ],
      cta: 'Book Premium',
      highlighted: true,
    },
    {
      title: 'VIP Luxury',
      description: 'Elite & Exclusive',
      price: '₹18,000',
      period: '/hour',
      icon: '💎',
      features: [
        'No minimum duration',
        'Celebrity & Model Escorts',
        'Incall, Outcall & Travel',
        'Luxury Hotels & Penthouses',
        'Personal Driver & Setup',
        '24/7 Priority Support',
        'CUSTOM PACKAGES'
      ],
      cta: 'Book VIP',
      highlighted: false,
    },
  ];

  const services = [
    { name: '💋 Kissing Service', rate: '₹500 extra' },
    { name: '🎬 Video Call', rate: '₹300/min' },
    { name: '📸 Photo Session', rate: '₹2,000' },
    { name: '🌙 Overnight (8hrs)', rate: '50% discount' },
    { name: '✈️ Travel Escorts', rate: 'Custom Rate' },
    { name: '👥 Couple Friendly', rate: '₹15,000' },
    { name: '🍽️ Dinner & Date', rate: 'Special Rate' },
    { name: '🎉 Party Girl', rate: '₹16,000' },
  ];

  const faq = [
    {
      q: 'What payment methods do you accept?',
      a: 'We accept UPI, Bank Transfer, Paytm, PhonePe, and Cash payment methods for maximum convenience.'
    },
    {
      q: 'Are advance bookings available?',
      a: 'Yes, we accept advance bookings. 50% payment required at booking, remaining at service time.'
    },
    {
      q: 'Is there a cancellation policy?',
      a: 'Within 24 hours: Full refund. 6-24 hours: 50% refund. Less than 6 hours: No refund.'
    },
    {
      q: 'Do you provide outcall service?',
      a: 'Yes, outcall services available within Patna city and nearby areas. Travel charges may apply.'
    },
    {
      q: 'Are all prices final or negotiable?',
      a: 'Prices are fixed. However, special discounts available for bookings above 4 hours or overnight packages.'
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border-b border-pink-600/20">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/50 rounded-full px-4 py-2 mb-6">
            <span className="text-pink-400 font-medium text-sm">💰 Transparent Pricing</span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Affordable & Transparent
            <br />
            <span className="gradient-text">Pricing Plans</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Choose from our flexible packages or customize your own. No hidden charges, no surprises.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  pkg.highlighted
                    ? 'ring-2 ring-pink-500 scale-105 md:scale-110 transform'
                    : ''
                }`}
              >
                <div className={`p-8 h-full flex flex-col ${
                  pkg.highlighted
                    ? 'bg-gradient-to-br from-pink-600/30 to-purple-600/30 border border-pink-600/50'
                    : 'glass'
                }`}>
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        BEST VALUE
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="text-5xl mb-4">{pkg.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                        {pkg.price}
                      </span>
                      <span className="text-gray-400">{pkg.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-pink-500 font-bold mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20the%20escort%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                      pkg.highlighted
                        ? 'btn-gradient text-white'
                        : 'border-2 border-pink-600/50 text-pink-500 hover:bg-pink-600/20'
                    }`}
                  >
                    {pkg.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600/5 to-purple-600/5 border-y border-pink-600/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-4xl font-bold text-white mb-4">Addons & Services</h2>
            <p className="text-gray-300">Customize your booking with these popular add-ons</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="glass p-6 rounded-xl text-center group hover:border-pink-600/50 transition-colors">
                <div className="text-3xl mb-3">{service.name.charAt(0)}</div>
                <p className="text-white font-bold mb-2">{service.name.slice(2)}</p>
                <p className="text-pink-500 font-bold">{service.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-600/50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-white mb-6">🎉 Special Discounts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⏰</span>
                <div>
                  <p className="text-white font-bold">Extended Bookings</p>
                  <p className="text-gray-400">4+ hours: 10% OFF | 8+ hours: 20% OFF</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🌙</span>
                <div>
                  <p className="text-white font-bold">Overnight Stay</p>
                  <p className="text-gray-400">8-12 hours: 50% discount on hourly rate</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">👥</span>
                <div>
                  <p className="text-white font-bold">Couple Bookings</p>
                  <p className="text-gray-400">Book for 2 escorts: Special couple rate</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="text-white font-bold">Referral Bonus</p>
                  <p className="text-gray-400">Refer a friend & get ₹1,000 credit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-white mb-12 text-center">FAQ</h2>
          
          <div className="space-y-6">
            {faq.map((item, idx) => (
              <details key={idx} className="group glass p-6 rounded-xl cursor-pointer">
                <summary className="flex items-center gap-4 font-bold text-white text-lg">
                  <span className="text-pink-500 group-open:rotate-90 transition-transform">→</span>
                  {item.q}
                </summary>
                <p className="text-gray-300 mt-4 ml-8">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-pink-600/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Book?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us now via WhatsApp. Our team will help you choose the perfect companion.
          </p>
          <a
            href="https://wa.me/919229604907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-gradient text-white px-8 py-4 rounded-full font-bold"
          >
            📱 Whatsapp Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
