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
    { name: 'Aafrin', age: 24, type: 'Premium Model', image: '/images/aafrin.webp', price: '₹12,000/hr', rating: 4.9 },
    { name: 'Anaya', age: 22, type: 'High Class Escort', image: '/images/anaya.webp', price: '₹10,000/hr', rating: 4.8 },
    { name: 'Diya', age: 21, type: 'College Girl', image: '/images/diya.webp', price: '₹9,000/hr', rating: 4.7 },
    { name: 'Jamila', age: 26, type: 'Independent Escort', image: '/images/jamila.webp', price: '₹11,000/hr', rating: 4.9 },
    { name: 'Janu', age: 23, type: 'Model Escort', image: '/images/janu.webp', price: '₹10,500/hr', rating: 4.8 },
    { name: 'Natasha', age: 25, type: 'Russian Model', image: '/images/natasha.webp', price: '₹15,000/hr', rating: 5.0 },
    { name: 'Neelima', age: 24, type: 'Air Hostess', image: '/images/neelima.webp', price: '₹13,000/hr', rating: 4.9 },
    { name: 'Neethu', age: 23, type: 'Celebrity', image: '/images/neethu.webp', price: '₹14,000/hr', rating: 4.8 },
    { name: 'Poonam', age: 28, type: 'Housewife', image: '/images/poonam.webp', price: '₹12,500/hr', rating: 4.7 },
    { name: 'Priya', age: 26, type: 'Premium VIP', image: '/images/priya.webp', price: '₹18,000/hr', rating: 5.0 },
    { name: 'Soniya', age: 22, type: 'Party Girl', image: '/images/soniya.webp', price: '₹11,000/hr', rating: 4.8 },
    { name: 'Sufia', age: 24, type: 'High Profile', image: '/images/sufia.webp', price: '₹12,000/hr', rating: 4.9 },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border-b border-pink-600/20">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/50 rounded-full px-4 py-2 mb-6">
            <span className="text-pink-400 font-medium text-sm">👑 Premium Collection</span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Explore Our  
            <br />
            <span className="gradient-text">Escort Gallery</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            100+ verified high-class escorts with genuine photos. Choose your favorite and book instantly.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {models.map((model) => (
              <div key={model.name} className="group">
                {/* Image Container */}
                <div className="relative h-96 rounded-2xl overflow-hidden mb-4 card-hover">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-between p-4">
                    <div className="text-right">
                      <span className="bg-pink-600/90 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-bold">✓ Verified</span>
                    </div>
                    <div className="w-full">
                      <a
                        href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-xl font-bold text-center transition-all block"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>

                  {/* Quick Info Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-pink-600/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ {model.rating}
                    </span>
                  </div>
                </div>

                {/* Info Card */}
                <div className="glass p-5 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-white font-bold text-lg">{model.name}</h3>
                      <p className="text-gray-400 text-sm font-medium">{model.age} • {model.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-pink-600/20">
                    <span className="text-pink-500 font-bold">{model.price}</span>
                    <div className="flex gap-2">
                      <span className="text-xs bg-pink-600/20 text-pink-400 px-2 py-1 rounded">Incall</span>
                      <span className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded">Outcall</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-pink-600/10 border-y border-pink-600/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Didn't Find Your Favorite?
          </h2>
          <p className="text-gray-300 mb-8">
            We have 100+ models available. Check back soon for new escorts or contact us directly.
          </p>
          <a
            href="https://wa.me/919229604907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-gradient text-white px-8 py-4 rounded-full font-bold"
          >
            📱 Request Custom Model
          </a>
        </div>
      </section>
    </div>
  );
}
