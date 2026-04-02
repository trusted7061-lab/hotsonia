import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotsonia.in'),
  title: 'Escorts In Patna | ₹9K Call Girls 24/7 Booking | 100% Verified Models',
  description: 'Premium Escorts In Patna ✓ Book verified call girls starting ₹9,000. Incall & outcall services 24/7 at hotels & residences. 50+ locations. 100% genuine, discreet & confidential.',
  keywords: 'Escorts in Patna, Patna Escorts, Call Girls in Patna, VIP Escorts, College Girls, Models, Verified Escorts',
  alternates: {
    canonical: 'https://hotsonia.in',
  },
  openGraph: {
    type: 'website',
    url: 'https://hotsonia.in',
    title: 'Escorts In Patna | ₹9K Call Girls 24/7 – Verified & Discreet',
    description: 'Book premium verified escorts in Patna starting ₹9,000. Incall & outcall 24/7. 100% genuine models.',
    siteName: 'Escorts In Patna',
  },
};

export default function Home() {
  const models = [
    { name: 'Aafrin', age: 24, type: 'Premium Model', image: '/images/aafrin.webp', price: '₹12K/hr' },
    { name: 'Anaya', age: 22, type: 'High Class', image: '/images/anaya.webp', price: '₹10K/hr' },
    { name: 'Diya', age: 21, type: 'College Girl', image: '/images/diya.webp', price: '₹9K/hr' },
    { name: 'Jamila', age: 26, type: 'Independent', image: '/images/jamila.webp', price: '₹11K/hr' },
    { name: 'Janu', age: 23, type: 'Model Escort', image: '/images/janu.webp', price: '₹10.5K/hr' },
    { name: 'Natasha', age: 25, type: 'Russian Model', image: '/images/natasha.webp', price: '₹15K/hr' },
  ];

  const features = [
    { icon: '💯', title: '100% Verified', desc: 'All models verified & authenticated' },
    { icon: '🔒', title: 'Confidential', desc: 'Complete privacy & discretion' },
    { icon: '⏰', title: '24/7 Service', desc: 'Available round the clock' },
    { icon: '💰', title: 'Best Rates', desc: 'Starting from ₹9,000/hour' },
    { icon: '🗺️', title: '50+ Areas', desc: 'All Patna locations covered' },
    { icon: '⭐', title: 'Premium', desc: 'High-class companions' },
  ];

  const faqs = [
    {
      q: 'What is the minimum booking duration?',
      a: 'The minimum booking duration is 1 hour. We also offer 2-hour, 4-hour (half day), and 8-hour (full night) packages at special rates.',
    },
    {
      q: 'Do you provide both incall and outcall?',
      a: 'Yes! For incall, visit our safe location. For outcall, our escort will come to your hotel or residence within 30-45 minutes across all Patna areas.',
    },
    {
      q: 'How to book an escort?',
      a: 'Simply message us on WhatsApp with your preferences. Share location, date, time, and duration. We will confirm availability and complete your booking.',
    },
    {
      q: 'Are models real and verified?',
      a: 'Absolutely! 100% genuine models with verified documents. All photos are real and recent. Every model undergoes health checkups.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section — fills viewport below sticky navbar (h-20 = 5rem) */}
      <section className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: 'calc(100svh - 5rem)' }}
      >
        {/* Background image — object-top keeps focus on faces on mobile portrait */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.webp"
            alt="Premium Escorts in Patna"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
          {/* Dark overlay for readability — stronger on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/50 to-slate-900/90 sm:from-slate-900/60 sm:via-purple-900/40 sm:to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60" />
        </div>

        {/* Content — tighter padding on mobile, generous on desktop */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center py-12 sm:py-20 lg:py-28">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/40 rounded-full px-4 py-1.5 mb-5 sm:mb-7"
            style={{ animation: 'fade-in 0.6s ease-out 0.1s both' }}
          >
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse shrink-0" />
            <span className="text-pink-400 font-semibold text-xs sm:text-sm tracking-wide">Patna&apos;s #1 Escort Platform</span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-playfair text-[2.4rem] leading-[1.1] sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6"
            style={{ animation: 'fade-in 0.7s ease-out 0.25s both' }}
          >
            Meet Premium
            <br />
            <span className="gradient-text">Escorts in Patna</span>
          </h1>

          {/* Subtitle — stacked on mobile to avoid ugly wrapping */}
          <div
            className="mb-8 sm:mb-10"
            style={{ animation: 'fade-in 0.7s ease-out 0.4s both' }}
          >
            {/* Desktop: single line with separators */}
            <p className="hidden sm:block text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              100% Verified Call Girls &nbsp;&bull;&nbsp; Incall &amp; Outcall &nbsp;&bull;&nbsp; 50+ Locations &nbsp;&bull;&nbsp; From ₹9,000
            </p>
            {/* Mobile: two clean lines */}
            <p className="sm:hidden text-gray-200 text-base leading-relaxed">
              100% Verified &bull; Incall &amp; Outcall
              <br />
              50+ Locations &bull; From ₹9,000/hr
            </p>
          </div>

          {/* CTA Buttons — full-width on mobile (min 52px touch target), side-by-side on sm+ */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-14 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
            style={{ animation: 'fade-in 0.7s ease-out 0.55s both' }}
          >
            <a
              href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl inline-flex items-center justify-center gap-2 min-h-[52px]"
            >
              📱 Book on WhatsApp
            </a>
            <Link
              href="/gallery"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg border-2 border-white/60 hover:border-white transition-all inline-flex items-center justify-center gap-2 min-h-[52px]"
            >
              👀 View Gallery
            </Link>
          </div>

          {/* Stats — wider on desktop, compact on mobile */}
          <div
            className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xs sm:max-w-lg mx-auto"
            style={{ animation: 'fade-in 0.7s ease-out 0.7s both' }}
          >
            <div className="glass p-3 sm:p-5 rounded-xl text-center">
              <div className="text-xl sm:text-3xl font-bold text-pink-500">100+</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">Models</div>
            </div>
            <div className="glass p-3 sm:p-5 rounded-xl text-center">
              <div className="text-xl sm:text-3xl font-bold text-pink-500">50+</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">Locations</div>
            </div>
            <div className="glass p-3 sm:p-5 rounded-xl text-center">
              <div className="text-xl sm:text-3xl font-bold text-pink-500">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">Available</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — hidden on very small screens */}
        <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-500/70 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 bg-pink-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="glass glass-hover p-6 rounded-2xl text-center group hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{feature.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured
              <br />
              <span className="gradient-text">Escorts</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">Choose from our premium collection of verified models</p>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {models.map((model) => (
              <div key={model.name} className="group">
                <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden mb-4 card-hover">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="w-full p-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="text-white font-bold text-xl">{model.name}</h3>
                          <p className="text-gray-200 text-sm">{model.age} years • {model.type}</p>
                        </div>
                        <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">✓ Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Card */}
                <div className="glass p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-white font-bold text-lg">{model.name}</p>
                      <p className="text-gray-400 text-sm">{model.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-pink-500 font-bold text-lg">{model.price}</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-2 rounded-lg font-bold text-center transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block btn-gradient text-white px-8 py-4 rounded-full font-bold"
            >
              View All Models →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
            How to <span className="gradient-text">Book</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', icon: '💬', title: 'Contact Us', desc: 'Message on WhatsApp with preferences' },
              { num: '2', icon: '📋', title: 'Choose Model', desc: 'Select from 100+ verified escorts' },
              { num: '3', icon: '✅', title: 'Confirm', desc: 'Finalize date, time & location' },
              { num: '4', icon: '🎉', title: 'Enjoy', desc: 'Premium service & unforgettable time' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="glass p-6 rounded-xl text-center h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
                    {step.num}
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
                {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-pink-600 to-purple-600" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-300 text-center mb-12">Get answers to common booking questions</p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group glass p-6 rounded-xl cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-white hover:text-pink-500 transition-colors">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform text-pink-500">▼</span>
                </summary>
                <p className="text-gray-300 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-600/20 border-y border-pink-600/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Book?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Chat with us anytime. Premium escorts waiting for you 24/7
          </p>
          <a
            href="https://wa.me/919229604907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-gradient text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl"
          >
            💬 Start Booking Now
          </a>
        </div>
      </section>
    </div>
  );
}
