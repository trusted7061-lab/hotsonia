"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10, 2, 8, 0.88)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        borderBottom: "1px solid rgba(240, 24, 125, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Hot Sonia — Escorts in Patna"
              width={150}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium tracking-wide hover:text-hot-pink transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gradient glow-pink text-white text-sm font-bold px-6 py-2.5 rounded-full">
              Book Now ✨
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "#f0187d" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            className="md:hidden pb-4 pt-3 flex flex-col gap-2"
            style={{ borderTop: "1px solid rgba(240,24,125,0.18)" }}
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-gradient text-white font-bold text-sm py-3 rounded-full text-center mt-2"
            >
              Book Now ✨
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
