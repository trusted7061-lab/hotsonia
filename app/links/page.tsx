import Link from 'next/link';
import { Metadata } from 'next';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Escorts In All Patna Locations | 50+ Areas',
  description: 'Browse escorts available in all areas of Patna. 50+ locations including Boring Road, Bailey Road, Kankarbagh, and more.',
};

export default function Links() {
  return (
    <div>
      {/* Page Header */}
      <section className="py-12 px-4 bg-gray-900/50 border-b border-pink-600/20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4">
            Escorts in All Patna Locations
          </h1>
          <p className="text-gray-400">
            Browse escort services available in all {locations.length}+ areas of Patna
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-gray-900 border border-pink-600/20 hover:border-pink-600/50 rounded-lg p-6 transition transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white group-hover:text-pink-500 transition">
                    {location.name}
                  </h3>
                  <span className="text-pink-500 group-hover:translate-x-1 transition">→</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Premium escorts & call girls available 24/7
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-pink-600/20 rounded-xl p-8">
            <h2 className="font-playfair text-3xl text-white mb-6">Service Coverage</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We provide premium escort services across <strong>50+ locations</strong> in Patna,
                including:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                <li>✓ All major roads and areas</li>
                <li>✓ All 5-star hotels</li>
                <li>✓ Business districts</li>
                <li>✓ Residential areas</li>
                <li>✓ Airport & railway stations</li>
                <li>✓ Entertainment zones</li>
              </ul>
              <p className="text-sm pt-4">
                Select your preferred location above to browse available escorts and book instantly
                via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-white mb-4">Ready to Book?</h2>
          <p className="text-gray-400 mb-6">
            Select your location and choose your favorite escort to start booking
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
