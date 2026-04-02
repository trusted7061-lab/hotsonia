import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotsonia.in'),
  title: 'Escorts Gallery In Patna | VIP Call Girls Photos | 100% Genuine Models',
  description: 'Browse gallery of 100% verified premium escorts in Patna. Genuine photos of call girls available for incall & outcall 24/7. Starting ₹9,000/hour.',
  keywords: 'Escorts gallery Patna, Call girls photos, VIP models, Verified escorts, Premium companions',
  alternates: {
    canonical: 'https://hotsonia.in/gallery',
  },
  openGraph: {
    type: 'website',
    url: 'https://hotsonia.in/gallery',
    title: 'Escorts Gallery In Patna | 100+ VIP Call Girls',
    description: '100% verified escorts in Patna. Browse gallery & book premium call girls 24/7.',
  },
};

export default function Gallery() {
  const models = [
    { name: 'Aafrin', age: 24, type: 'Premium Model', image: '/images/aafrin.webp', price: '₹12,000/hr' },
    { name: 'Anaya', age: 22, type: 'High Class Escort', image: '/images/anaya.webp', price: '₹10,000/hr' },
    { name: 'Diya', age: 21, type: 'College Girl', image: '/images/diya.webp', price: '₹9,000/hr' },
    { name: 'Jamila', age: 26, type: 'Independent Escort', image: '/images/jamila.webp', price: '₹11,000/hr' },
    { name: 'Janu', age: 23, type: 'Model Escort', image: '/images/janu.webp', price: '₹10,500/hr' },
    { name: 'Natasha', age: 25, type: 'Russian Model', image: '/images/natasha.webp', price: '₹15,000/hr' },
    { name: 'Neelima', age: 24, type: 'Air Hostess', image: '/images/neelima.webp', price: '₹13,000/hr' },
    { name: 'Neethu', age: 23, type: 'Celebrity', image: '/images/neethu.webp', price: '₹14,000/hr' },
    { name: 'Poonam', age: 28, type: 'Housewife', image: '/images/poonam.webp', price: '₹12,500/hr' },
    { name: 'Priya', age: 26, type: 'Premium VIP', image: '/images/priya.webp', price: '₹18,000/hr' },
    { name: 'Soniya', age: 22, type: 'Party Girl', image: '/images/soniya.webp', price: '₹11,000/hr' },
    { name: 'Sufia', age: 24, type: 'High Profile', image: '/images/sufia.webp', price: '₹12,000/hr' },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="py-12 px-4 bg-gray-900/50 border-b border-pink-600/20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4">
            Escorts Gallery In Patna
          </h1>
          <p className="text-gray-400">
            Browse our collection of 100% verified, high-profile escorts available in Patna
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <div
                key={model.name}
                className="group rounded-xl overflow-hidden bg-gray-900 border border-pink-600/20 hover:border-pink-600/50 transition transform hover:-translate-y-2"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={model.image}
                    alt={`${model.name} - ${model.type} Escort in Patna`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    VERIFIED
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 translate-y-full group-hover:translate-y-0 transition">
                    <p className="text-pink-500 font-bold">{model.price}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-white">
                    {model.name} <span className="text-gray-400 text-sm">{model.age}</span>
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{model.type}</p>
                  <a
                    href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg text-sm font-semibold transition"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-white mb-4">Ready to Book?</h2>
          <p className="text-gray-400 mb-6">
            Select your favorite escort and contact us via WhatsApp to confirm your booking
          </p>
          <a
            href="https://wa.me/919229604907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition hover:shadow-lg"
          >
            Book Your Escort
          </a>
        </div>
      </section>
    </div>
  );
}
