import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Escorts Prices In Patna | Starting ₹9,000',
  description: 'Check our escort pricing in Patna. Premium call girls starting from ₹9,000/hour with various packages available.',
};

export default function Prices() {
  const packages = [
    {
      name: 'College Girl Escorts',
      icon: '👧',
      prices: [
        { duration: '1 Hour', price: '₹9,000', incall: true, outcall: true },
        { duration: '2 Hours', price: '₹16,000', incall: true, outcall: true },
        { duration: '4 Hours (Half Day)', price: '₹30,000', incall: true, outcall: true },
        { duration: '8 Hours (Full Night)', price: '₹50,000', incall: true, outcall: true },
      ],
    },
    {
      name: 'Housewife Escorts',
      icon: '👩‍🍳',
      prices: [
        { duration: '1 Hour', price: '₹10,000', incall: true, outcall: true },
        { duration: '2 Hours', price: '₹18,000', incall: true, outcall: true },
        { duration: '4 Hours (Half Day)', price: '₹35,000', incall: true, outcall: true },
        { duration: '8 Hours (Full Night)', price: '₹60,000', incall: true, outcall: true },
      ],
    },
    {
      name: 'Model Escorts',
      icon: '👗',
      prices: [
        { duration: '1 Hour', price: '₹12,000', incall: true, outcall: true },
        { duration: '2 Hours', price: '₹22,000', incall: true, outcall: true },
        { duration: '4 Hours (Half Day)', price: '₹40,000', incall: true, outcall: true },
        { duration: '8 Hours (Full Night)', price: '₹75,000', incall: true, outcall: true },
      ],
    },
    {
      name: 'Russian Escorts',
      icon: '🌹',
      prices: [
        { duration: '1 Hour', price: '₹15,000', incall: true, outcall: true },
        { duration: '2 Hours', price: '₹27,000', incall: true, outcall: true },
        { duration: '4 Hours (Half Day)', price: '₹50,000', incall: true, outcall: true },
        { duration: '8 Hours (Full Night)', price: '₹90,000', incall: true, outcall: true },
      ],
    },
    {
      name: 'Air Hostess Escorts',
      icon: '✈️',
      prices: [
        { duration: '1 Hour', price: '₹13,000', incall: true, outcall: true },
        { duration: '2 Hours', price: '₹24,000', incall: true, outcall: true },
        { duration: '4 Hours (Half Day)', price: '₹45,000', incall: true, outcall: true },
        { duration: '8 Hours (Full Night)', price: '₹80,000', incall: true, outcall: true },
      ],
    },
    {
      name: 'VIP Premium Escorts',
      icon: '👑',
      prices: [
        { duration: '1 Hour', price: '₹20,000', incall: true, outcall: true },
        { duration: '2 Hours', price: '₹36,000', incall: true, outcall: true },
        { duration: '4 Hours (Half Day)', price: '₹65,000', incall: true, outcall: true },
        { duration: '8 Hours (Full Night)', price: '₹120,000', incall: true, outcall: true },
      ],
    },
  ];

  const features = [
    { icon: '✔', text: '100% Genuine & Verified Models' },
    { icon: '✔', text: '24/7 Available' },
    { icon: '✔', text: 'Incall & Outcall Services' },
    { icon: '✔', text: 'Cash Payment (No online transaction)' },
    { icon: '✔', text: '100% Confidential & Discreet' },
    { icon: '✔', text: 'Free Cancellation' },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="py-12 px-4 bg-gray-900/50 border-b border-pink-600/20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4">
            Escort Prices In Patna
          </h1>
          <p className="text-gray-400">
            Transparent pricing for all types of escorts - All prices are inclusive and final
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <p className="text-gray-300 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-pink-600/20 rounded-xl overflow-hidden hover:border-pink-600/50 transition"
              >
                <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 border-b border-pink-600/20 p-6 text-center">
                  <div className="text-5xl mb-3">{pkg.icon}</div>
                  <h3 className="font-playfair text-2xl text-white">{pkg.name}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {pkg.prices.map((price, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between pb-4 border-b border-gray-800 last:border-0"
                    >
                      <div>
                        <p className="text-white font-semibold">{price.duration}</p>
                        <p className="text-gray-400 text-sm">
                          {price.incall && price.outcall && 'Incall & Outcall'}
                        </p>
                      </div>
                      <p className="text-pink-500 font-bold text-lg">{price.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-pink-600/20 rounded-xl p-8">
              <h3 className="font-playfair text-2xl text-white mb-4">Incall Service</h3>
              <p className="text-gray-300 mb-4">
                Visit our girl at our designated safe and comfortable location
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✔ Privacy guaranteed</li>
                <li>✔ AC rooms available</li>
                <li>✔ Comfortable ambiance</li>
                <li>✔ Refreshments available</li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-pink-600/20 rounded-xl p-8">
              <h3 className="font-playfair text-2xl text-white mb-4">Outcall Service</h3>
              <p className="text-gray-300 mb-4">
                Our escort comes to your hotel room or residence in Patna
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✔ Delivered within 30-45 mins</li>
                <li>✔ Safe delivery confirmed</li>
                <li>✔ 50+ locations covered</li>
                <li>✔ Hotels & residences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-white mb-4">Book Your Preferred Escort</h2>
          <p className="text-gray-400 mb-6">
            Contact us now to reserve your favorite girl. Prices subject to hotel taxes (if applicable)
          </p>
          <a
            href="https://wa.me/919229604907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition hover:shadow-lg"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}
