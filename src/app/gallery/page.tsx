import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | PatnaEscorts",
  description: "View our gallery of premium companions in Patna.",
};

const placeholders = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Companion ${i + 1}`,
  tag: ["Elite", "VIP", "Premium", "Exclusive"][ i % 4],
}));

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-rose-500 text-sm uppercase tracking-widest font-semibold">Our Companions</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-6">Gallery</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Browse our selection of verified, premium companions available in Patna.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {placeholders.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700/50 hover:border-rose-700/50 transition-all duration-300 cursor-pointer">
                {/* Placeholder image */}
                <div className="aspect-[3/4] bg-gradient-to-br from-rose-900/30 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">👤</div>
                    <div className="text-gray-600 text-xs">Photo Coming Soon</div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium">{item.name}</span>
                    <span className="text-xs bg-rose-900/50 text-rose-400 px-2 py-0.5 rounded-full">{item.tag}</span>
                  </div>
                  <Link href="/contact" className="mt-2 block text-center text-xs text-rose-400 hover:text-rose-300 transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-4">More companions available. Contact us for the full selection.</p>
            <Link href="/contact" className="inline-block bg-rose-600 hover:bg-rose-500 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Contact Us for More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
