import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PatnaEscorts",
  description: "Learn about PatnaEscorts — the most trusted escort service in Patna, Bihar.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-rose-500 text-sm uppercase tracking-widest font-semibold">Who We Are</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-6">About PatnaEscorts</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We are Patna&apos;s most trusted premium escort and companion service. Our mission is to provide safe, discreet, and memorable experiences to discerning clients across Patna and Bihar.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rose-500 text-sm uppercase tracking-widest font-semibold">Our Story</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">Built on Trust and Discretion</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  PatnaEscorts was founded with a simple vision: to offer a premium, professional, and safe companion experience to clients in Patna. We understood that the existing market lacked the quality, discretion, and safety standards that clients deserved.
                </p>
                <p>
                  Over the years, we have grown to become the go-to service for clients who value quality and professionalism. Our carefully curated companions are selected for their charm, intelligence, and commitment to providing a world-class experience.
                </p>
                <p>
                  We operate with full transparency and adhere to the highest ethical standards, ensuring that both our clients and companions feel respected, safe, and valued at all times.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "5+", label: "Years of Experience" },
                { number: "500+", label: "Happy Clients" },
                { number: "50+", label: "Elite Companions" },
                { number: "24/7", label: "Support Available" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-800/50 border border-gray-700/40 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-rose-400 mb-2">{item.number}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-rose-500 text-sm uppercase tracking-widest font-semibold">What We Stand For</span>
            <h2 className="text-3xl font-bold text-white mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔒", title: "Privacy", desc: "Your identity and activities are 100% confidential with us." },
              { icon: "✅", title: "Safety", desc: "We ensure all companions and clients meet in safe, vetted settings." },
              { icon: "💼", title: "Professionalism", desc: "Every interaction is handled with the utmost professionalism." },
              { icon: "💡", title: "Quality", desc: "We never compromise on the quality of companions or experience." },
            ].map((v) => (
              <div key={v.title} className="bg-gray-800/50 border border-gray-700/40 rounded-2xl p-6 text-center hover:border-rose-700/40 transition-colors">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-950 to-rose-900/60">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Best?</h2>
          <p className="text-rose-200 mb-8">Browse our services or get in touch to arrange your perfect companion.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-white text-rose-700 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors">
              View Services
            </Link>
            <Link href="/contact" className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
