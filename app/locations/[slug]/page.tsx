import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { locations, getLocationBySlug } from '@/lib/locations';
import { generateLocationMetadata } from '@/lib/metadata';

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const location = getLocationBySlug(params.slug);
  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }
  return generateLocationMetadata(params.slug, location.name);
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

const models = [
  { name: 'Aafrin', age: 24, type: 'Premium Model', image: '/images/aafrin.webp', badge: 'VERIFIED' },
  { name: 'Anaya', age: 22, type: 'High Class Escort', image: '/images/anaya.webp', badge: 'VIP' },
  { name: 'Diya', age: 21, type: 'College Girl', image: '/images/diya.webp', badge: 'VERIFIED' },
  { name: 'Jamila', age: 26, type: 'Independent Escort', image: '/images/jamila.webp', badge: 'VIP' },
  { name: 'Janu', age: 23, type: 'Model Escort', image: '/images/janu.webp', badge: 'VERIFIED' },
  { name: 'Natasha', age: 25, type: 'Russian Model', image: '/images/natasha.webp', badge: 'VIP' },
];

export default async function LocationPage(props: { params: Params }) {
  const params = await props.params;
  const location = getLocationBySlug(params.slug);

  if (!location) {
    return (
      <div className="py-40 text-center">
        <h1 className="font-playfair text-4xl text-white mb-4">Location Not Found</h1>
        <p className="text-gray-400 mb-8">The location you're looking for doesn't exist.</p>
        <Link href="/links" className="text-pink-500 hover:text-pink-400">
          ← Back to All Locations
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border-b border-pink-600/20">
        <div className="max-w-6xl mx-auto">
          <Link href="/links" className="text-pink-500 hover:text-pink-400 mb-6 inline-block font-bold">
            ← Back to Locations
          </Link>
          <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/50 rounded-full px-4 py-2 mb-6">
            <span className="text-pink-400 font-medium text-sm">📍 {location.name}</span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Escorts In
            <br />
            <span className="gradient-text">{location.name}, Patna</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Verified premium escorts available 24/7. Incall & outcall services. Starting from ₹9,000/hour.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 sm:p-10 rounded-2xl border border-pink-600/30">
            <h2 className="font-playfair text-2xl sm:text-3xl text-white mb-4">
              Premium Escorts In <span className="gradient-text">{location.name}</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Looking for verified escorts in <strong>{location.name}, Patna</strong>?
              We provide premium call girl services with 100% genuine models
              available <strong>24/7</strong>. Our escorts offer both{' '}
              <strong>incall and outcall services</strong> starting from <strong>₹9,000/hour</strong>.
              Whether you're looking for companionship for a dinner date, party, or private meeting,
              our {location.name} escorts deliver premium, discreet service with 100% satisfaction
              guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Models in this location */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600/5 to-purple-600/5 border-y border-pink-600/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl text-white mb-2">
              Available Escorts In {location.name}
            </h2>
            <p className="text-gray-400">Recently updated - All models verified and available 24/7</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {models.map((model) => (
              <div key={model.name} className="group">
                <div className="relative h-96 rounded-2xl overflow-hidden mb-4 card-hover">
                  <Image
                    src={model.image}
                    alt={`${model.name} in ${location.name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-400"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-between p-4">
                    <div className="text-right">
                      <span className="bg-pink-600/90 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-bold">✓ Verified</span>
                    </div>
                    <div className="w-full">
                      <a
                        href={`https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20${model.name}%20in%20${location.name}%2C%20Patna`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-xl font-bold text-center transition-all block"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-pink-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
                      {model.badge}
                    </span>
                  </div>
                </div>

                {/* Info Card */}
                <div className="glass p-5 rounded-xl">
                  <h3 className="text-white font-bold text-lg">{model.name}</h3>
                  <p className="text-gray-400 text-sm font-medium mb-3">{model.age} • {model.type}</p>
                  <div className="flex gap-2 pt-3 border-t border-pink-600/20">
                    <span className="text-xs bg-pink-600/20 text-pink-400 px-2 py-1 rounded">Incall</span>
                    <span className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded">Outcall</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-2xl border border-pink-600/30">
            <h3 className="font-playfair text-2xl text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">🏨</span>
              Incall Service
            </h3>
            <p className="text-gray-300 mb-6">
              Visit our girls at our safe and comfortable locations in {location.name}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-pink-500">✓</span>
                Private rooms available
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-pink-500">✓</span>
                AC and comfortable ambiance
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-pink-500">✓</span>
                Discretion guaranteed
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-pink-500">✓</span>
                Refreshments available
              </li>
            </ul>
          </div>
          <div className="glass p-8 rounded-2xl border border-purple-600/30">
            <h3 className="font-playfair text-2xl text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">🚗</span>
              Outcall Service
            </h3>
            <p className="text-gray-300 mb-6">
              Our escorts deliver to your hotel or residence in {location.name}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-purple-500">✓</span>
                Delivered within 30-45 minutes
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-purple-500">✓</span>
                All hotels covered
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-purple-500">✓</span>
                Discreet delivery
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-purple-500">✓</span>
                Safe and professional
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600/5 to-purple-600/5 border-y border-pink-600/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-white mb-12 text-center">
            Why Choose Us In {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-8 rounded-2xl border border-pink-600/30 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-white font-bold text-xl mb-3">100% Verified</h3>
              <p className="text-gray-400">All girls are genuinely verified. What you see is what you get!</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-purple-600/30 text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-white font-bold text-xl mb-3">100% Confidential</h3>
              <p className="text-gray-400">Your privacy is our priority. Complete discretion guaranteed.</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-pink-600/30 text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-white font-bold text-xl mb-3">24/7 Available</h3>
              <p className="text-gray-400">Book anytime - our services are available round the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Book in {location.name}?
          </h2>
          <p className="text-gray-300 mb-8">Contact us now to reserve your preferred escort 24/7</p>
          <a
            href={`https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20${location.name}%2C%20Patna`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-gradient text-white px-8 py-4 rounded-full font-bold"
          >
            💬 Book on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
