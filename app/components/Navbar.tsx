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
      {/* Top Bar */}
      <div className="bg-gray-900 border-b border-pink-500/10 py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm text-gray-300">
          <span>📞 24/7 Available | Incalls & Outcalls Services</span>
          <a
            href="https://wa.me/919229604907"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded-md font-semibold transition"
          >
            BOOKING OPEN
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/logo.png"
                  alt="Escorts Patna"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-pink-500 font-medium transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-pink-500 font-medium transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/prices"
                  className="text-gray-300 hover:text-pink-500 font-medium transition"
                >
                  Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-pink-500 font-medium transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/links"
                  className="text-gray-300 hover:text-pink-500 font-medium transition"
                >
                  Links
                </Link>
              </li>
            </ul>

            {/* Desktop CTA Button */}
            <a
              href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transition transform hover:scale-105"
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden flex flex-col gap-1.5 w-8 transition ${
                isMobileNavOpen ? 'gap-0' : ''
              }`}
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              aria-label="Toggle navigation"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMobileNavOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-opacity ${
                  isMobileNavOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMobileNavOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileNavOpen && (
            <div className="md:hidden pb-4 border-t border-pink-500/10">
              <ul className="flex flex-col gap-4 pt-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-pink-500 block font-medium transition"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-gray-300 hover:text-pink-500 block font-medium transition"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/prices"
                    className="text-gray-300 hover:text-pink-500 block font-medium transition"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    Prices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-pink-500 block font-medium transition"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/links"
                    className="text-gray-300 hover:text-pink-500 block font-medium transition"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    Links
                  </Link>
                </li>
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
