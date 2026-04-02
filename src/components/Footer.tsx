import Link from "next/link";
import Image from "next/image";
import { locations } from "@/lib/locations";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a0208 0%, #12000a 100%)",
        borderTop: "1px solid rgba(240, 24, 125, 0.18)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/images/logo.png"
              alt="Hot Sonia"
              width={160}
              height={64}
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
              Patna&apos;s most exclusive, trusted, and discreet companion service. Available 24/7 for your pleasure.
            </p>
            <a href="tel:+919229604907" className="text-sm font-bold" style={{ color: "#f0187d" }}>
              📞 +91 92296 04907
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#f5c842" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Gallery", href: "/gallery" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-hot-pink"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#f5c842" }}>
              Contact
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              <li>📍 Patna, Bihar, India</li>
              <li>📧 contact@hotsonia.com</li>
              <li>⏰ Available 24 / 7</li>
              <li>🔒 100% Discreet &amp; Safe</li>
            </ul>
          </div>
        </div>

        {/* ── All Service Areas ── */}
        <div
          className="mt-10 pt-8"
          style={{ borderTop: "1px solid rgba(240,24,125,0.12)" }}
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#f5c842" }}>
            Escort Service Areas in Patna
          </h3>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(240,24,125,0.12)", color: "rgba(255,255,255,0.3)" }}
        >
          <p>© {new Date().getFullYear()} Hot Sonia. All rights reserved.</p>
          <p>18+ Only — Adults Only</p>
        </div>
      </div>
    </footer>
  );
}
