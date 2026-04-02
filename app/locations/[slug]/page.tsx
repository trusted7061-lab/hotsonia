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
    <div>
      {/* Page Header */}
      <section className="py-12 px-4 bg-gray-900/50 border-b border-pink-600/20">
        <div className="max-w-7xl mx-auto">
          <Link href="/links" className="text-pink-500 hover:text-pink-400 mb-4 inline-block">
            ← Back to All Locations
          </Link>
          <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4">
            Escorts In <span className="text-pink-500">{location.name}</span> Patna
          </h1>
          <p className="text-gray-400">
            Book verified call girls in {location.name} from ₹9,000. Incall & outcall 24/7 at hotels.
            Verified models, doorstep delivery.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 px-4 bg-gray-900/30 border-b border-pink-600/10">
        <div className="max-w-7xl mx-auto text-sm text-gray-400">
          <Link href="/" className="text-pink-500 hover:text-pink-400">
            Home
          </Link>
          {' > '}
          <Link href="/links" className="text-pink-500 hover:text-pink-400">
            Locations
          </Link>
          {' > '}
          <span>{location.name}</span>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-pink-600/25 border-l-4 border-l-pink-600 rounded-xl p-8">
            <h2 className="font-playfair text-2xl text-white mb-4">
              Escorts In <span className="text-pink-500">{location.name}</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Looking for high-profile, verified escorts in <strong>{location.name}, Patna</strong>?
              We provide premium call girl services in {location.name} with 100% genuine models
              available <strong>24 hours a day, 7 days a week</strong>. Our escorts offer both{' '}
              <strong>incall and outcall services</strong> starting from <strong>₹9,000 per hour</strong>
              . Whether you're looking for companionship for a dinner date, party, or private meeting,
              our {location.name} escorts deliver premium, discreet service with 100% satisfaction
              guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Models in this location */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl text-white mb-2">
              Available Escorts In {location.name}
            </h2>
            <p className="text-gray-400">Recently updated - All models verified and available now</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {models.map((model) => (
              <div
                key={model.name}
                className="group rounded-lg overflow-hidden bg-gray-900 border border-pink-600/20 hover:border-pink-600/50 transition"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={model.image}
                    alt={`${model.name} in ${location.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {model.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-white mb-1">{model.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{model.type}</p>
                  <a
                    href={`https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20${model.name}%20in%20${location.name}%2C%20Patna`}
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

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-pink-600/20 rounded-lg p-6">
            <h3 className="font-playfair text-xl text-white mb-4">Incall Service</h3>
            <p className="text-gray-300 mb-4">
              Visit our girls at our safe and comfortable locations in {location.name}
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ Private rooms available</li>
              <li>✓ AC and comfortable ambiance</li>
              <li>✓ Discretion guaranteed</li>
              <li>✓ Refreshments available</li>
            </ul>
          </div>
          <div className="bg-gray-900 border border-pink-600/20 rounded-lg p-6">
            <h3 className="font-playfair text-xl text-white mb-4">Outcall Service</h3>
            <p className="text-gray-300 mb-4">
              Our escorts deliver to your hotel or residence in {location.name}
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ Delivered within 30-45 minutes</li>
              <li>✓ All hotels covered</li>
              <li>✓ Discreet delivery</li>
              <li>✓ Safe and professional</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-white mb-8">Why Choose Our Escorts In {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-pink-600/20 rounded-lg p-6">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="text-white font-semibold mb-2">100% Verified</h3>
              <p className="text-gray-400 text-sm">All girls are genuinely verified. What you see is what you get!</p>
            </div>
            <div className="bg-gray-900 border border-pink-600/20 rounded-lg p-6">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-white font-semibold mb-2">100% Confidential</h3>
              <p className="text-gray-400 text-sm">Your privacy is our priority. Complete discretion guaranteed.</p>
            </div>
            <div className="bg-gray-900 border border-pink-600/20 rounded-lg p-6">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="text-white font-semibold mb-2">24/7 Available</h3>
              <p className="text-gray-400 text-sm">Book anytime - our services are available round the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-white mb-4">Ready to Book in {location.name}?</h2>
          <p className="text-gray-400 mb-6">Contact us now to reserve your preferred escort</p>
          <a
            href={`https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20${location.name}%2C%20Patna`}
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
