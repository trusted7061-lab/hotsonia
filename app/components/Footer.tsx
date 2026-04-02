'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center text-xl ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-pink-500/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Escorts In Patna</h3>
              <p className="text-gray-400 text-sm">
                Premium verified escort service agency in Patna offering high profile models,
                incall and outcall services 24/7 across 50+ locations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-pink-500 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-pink-500 transition">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/prices" className="text-gray-400 hover:text-pink-500 transition">
                    Prices
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-pink-500 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-white font-semibold mb-4">Popular Locations</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/locations/boring-road"
                    className="text-gray-400 hover:text-pink-500 transition"
                  >
                    Boring Road
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations/bailey-road"
                    className="text-gray-400 hover:text-pink-500 transition"
                  >
                    Bailey Road
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations/kankarbagh"
                    className="text-gray-400 hover:text-pink-500 transition"
                  >
                    Kankarbagh
                  </Link>
                </li>
                <li>
                  <Link href="/links" className="text-gray-400 hover:text-pink-500 transition">
                    All Locations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <p className="text-gray-400">
                  📞 24/7 Available
                </p>
                <a
                  href="https://wa.me/919229604907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-pink-500/10 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div>
              © 2026 Escorts In Patna. All rights reserved. | 18+ Only
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-pink-500 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-pink-500 transition">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-pink-500 transition">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Age Warning */}
          <div className="mt-6 p-4 bg-gray-900/50 border border-pink-500/20 rounded-lg text-center text-xs text-gray-400">
            By accessing this site, you declare that you are 18 or older. This website is for adult
            entertainment only. We take your privacy seriously.
          </div>
        </div>
      </footer>
    </>
  );
}
