'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900 backdrop-blur-lg shadow-xl' 
            : 'bg-gradient-to-r from-slate-900/80 via-purple-900/30 to-slate-900/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="w-12 h-12 relative rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">H</span>
                </div>
              </div>
              <span className="ml-3 hidden sm:block text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 whitespace-nowrap">
                Hotsonia
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-1">
              {[
                { href: '/', label: 'Home' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/prices', label: 'Pricing' },
                { href: '/contact', label: 'Contact' },
                { href: '/links', label: 'Links' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-gray-200 hover:text-white font-medium transition-all duration-300 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition transform hover:scale-105 shadow-lg hover:shadow-pink-500/50"
            >
              📞 Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              aria-label="Toggle navigation"
            >
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${
                  isMobileNavOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-opacity duration-300 ${
                  isMobileNavOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${
                  isMobileNavOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileNavOpen && (
            <div className="lg:hidden pb-6 border-t border-pink-500/20 mt-4 slide-down">
              <ul className="flex flex-col gap-3 pt-6">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/gallery', label: 'Gallery' },
                  { href: '/prices', label: 'Pricing' },
                  { href: '/contact', label: 'Contact' },
                  { href: '/links', label: 'Links' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-200 hover:text-pink-500 block font-medium transition-colors py-2 px-4 rounded-lg hover:bg-pink-600/10"
                      onClick={() => setIsMobileNavOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold transition text-center"
              >
                Book Now
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
