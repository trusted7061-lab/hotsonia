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
        className={`fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center text-2xl font-bold hover:scale-110 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-950 border-t border-pink-500/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">H</span>
                </div>
                <h3 className="text-white font-bold text-lg">Hotsonia</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium verified escort service in Patna. 100+ models, 24/7 availability, incall & outcall service across 50+ locations.
              </p>
              <div className="flex gap-3">
                <a href="https://wa.me/919229604907" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full bg-green-600/20 hover:bg-green-600/40 flex items-center justify-center text-green-500 transition">
                  📱
                </a>
                <a href="tel:919229604907" 
                   className="w-10 h-10 rounded-full bg-pink-600/20 hover:bg-pink-600/40 flex items-center justify-center text-pink-500 transition">
                  ☎️
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/gallery', label: 'Model Gallery' },
                  { href: '/prices', label: 'Pricing' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-pink-500 transition-colors font-medium">
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Locations */}
            <div>
              <h4 className="text-white font-bold mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                Top Locations
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  { href: '/locations/boring-road', label: 'Boring Road' },
                  { href: '/locations/bailey-road', label: 'Bailey Road' },
                  { href: '/locations/kankarbagh', label: 'Kankarbagh' },
                  { href: '/locations/fraser-road', label: 'Fraser Road' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-pink-500 transition-colors font-medium">
                      📍 {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                Get Updates
              </h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to get latest models & offers</p>
              <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full bg-slate-800/50 border border-pink-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-lg py-2 font-medium text-sm transition transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-12 pb-12 border-b border-pink-500/10">
            {[
              { icon: '✓', label: '100% Verified' },
              { icon: '🔒', label: 'Discreet' },
              { icon: '⏰', label: '24/7' },
              { icon: '🎁', label: 'Best Rates' },
              { icon: '🗺️', label: '50+ Areas' },
              { icon: '🌟', label: 'Premium' },
            ].map((item, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="text-2xl mb-2 group-hover:scale-125 transition-transform">{item.icon}</div>
                <p className="text-gray-400 text-xs font-medium group-hover:text-pink-500 transition-colors">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-pink-500/10">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2026 Hotsonia. All rights reserved. | Premium Escort Service in Patna
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">Terms</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
