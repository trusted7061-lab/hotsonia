import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-rose-900/20 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-rose-500 text-2xl font-bold tracking-tight">
              PatnaEscorts
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Premium companion services in Patna. Discreet, professional, and always available for you.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="tel:+919999999999"
                className="text-rose-400 hover:text-rose-300 transition-colors text-sm"
              >
                📞 +91 99999 99999
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-rose-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Patna, Bihar, India</li>
              <li>📧 contact@patnaescorts.com</li>
              <li>⏰ Available 24/7</li>
              <li>🔒 100% Discreet &amp; Safe</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} PatnaEscorts. All rights reserved.</p>
          <p>18+ Only. For adults only.</p>
        </div>
      </div>
    </footer>
  );
}
