import Link from 'next/link';
import { Metadata } from 'next';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotsonia.in'),
  title: 'Escorts In All Patna Locations | 50+ Areas | Premium Call Girls',
  description: 'Browse escorts available in all areas of Patna. 50+ locations including Boring Road, Bailey Road, Kankarbagh, and more. Verified models 24/7.',
  keywords: 'Escorts in Patna locations, Call girls in Boring Road, Bailey Road, Kankarbagh, Premium escorts all areas',
  alternates: {
    canonical: 'https://hotsonia.in/links',
  },
  openGraph: {
    type: 'website',
    url: 'https://hotsonia.in/links',
    title: 'Escorts in All Patna Locations',
    description: '50+ locations with verified premium escorts available 24/7.',
  },
};

export default function Links() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border-b border-pink-600/20">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/50 rounded-full px-4 py-2 mb-6">
            <span className="text-pink-400 font-medium text-sm">📍 Service Locations</span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Escorts in All
            <br />
            <span className="gradient-text">Patna Locations</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Browse premium escort services available in {locations.length}+ areas of Patna. Book instantly from your location.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group glass p-6 rounded-xl border border-pink-600/30 hover:border-pink-600/70 transition-all card-hover"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg group-hover:text-pink-500 transition">
                      {location.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      Premium escorts available 24/7
                    </p>
                  </div>
                  <span className="text-pink-500 group-hover:translate-x-1 transition text-xl ml-2">→</span>
                </div>
                <div className="mt-4 pt-4 border-t border-pink-600/20 flex items-center gap-2">
                  <span className="text-xs bg-pink-600/20 text-pink-400 px-2 py-1 rounded">Incall</span>
                  <span className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded">Outcall</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600/5 to-purple-600/5 border-y border-pink-600/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-8">
                We Cover All Patna
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl mt-1">✓</span>
                  <div>
                    <p className="text-white font-bold">All Major Roads & Areas</p>
                    <p className="text-gray-400 text-sm">Boring Road, Bailey Road, Fraser Road, etc.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl mt-1">✓</span>
                  <div>
                    <p className="text-white font-bold">Premium Hotels & Resorts</p>
                    <p className="text-gray-400 text-sm">All 5-star & 3-star hotel locations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl mt-1">✓</span>
                  <div>
                    <p className="text-white font-bold">Business Districts</p>
                    <p className="text-gray-400 text-sm">Downtown & commercial areas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-xl mt-1">✓</span>
                  <div>
                    <p className="text-white font-bold">Residential Areas</p>
                    <p className="text-gray-400 text-sm">Gated communities & residential zones</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl border border-pink-600/30">
                <p className="text-2xl mb-2">📍</p>
                <p className="text-gray-400 mb-2">Service Locations</p>
                <p className="text-white font-bold text-2xl">{locations.length}+</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-pink-600/30">
                <p className="text-2xl mb-2">🚗</p>
                <p className="text-gray-400 mb-2">Travel & Outcall</p>
                <p className="text-white font-bold">All Areas Covered</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-pink-600/30">
                <p className="text-2xl mb-2">⏰</p>
                <p className="text-gray-400 mb-2">Always Available</p>
                <p className="text-white font-bold">24/7 Booking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            How to Book
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-5xl mb-4">1️⃣</div>
              <p className="text-white font-bold mb-2">Select Location</p>
              <p className="text-gray-400 text-sm">Choose your preferred area</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <p className="text-white font-bold mb-2">Browse Models</p>
              <p className="text-gray-400 text-sm">View available escorts</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <p className="text-white font-bold mb-2">Contact Us</p>
              <p className="text-gray-400 text-sm">WhatsApp your selection</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-5xl mb-4">4️⃣</div>
              <p className="text-white font-bold mb-2">Booking Confirmed</p>
              <p className="text-gray-400 text-sm">Get ready to have fun</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-pink-600/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Choose Your Location
          </h2>
          <p className="text-gray-300 mb-8">
            Select from 50+ locations above or contact us directly for custom arrangements.
          </p>
          <a
            href="https://wa.me/919229604907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-gradient text-white px-8 py-4 rounded-full font-bold"
          >
            💬 Book Now on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
