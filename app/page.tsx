import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotsonia.in'),
  title: 'Escorts In Patna | ₹9K Call Girls 24/7 Booking | 100% Verified Models',
  description: 'Premium Escorts In Patna ✓ Book verified call girls starting ₹9,000. Incall & outcall services 24/7 at hotels & residences. 50+ locations. 100% genuine, discreet & confidential.',
  keywords: 'Escorts in Patna, Patna Escorts, Call Girls in Patna, VIP Escorts, College Girls, Models, Verified Escorts',
  alternates: { canonical: 'https://hotsonia.in' },
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
    { name: 'Aafrin',  age: 24, type: 'Premium Model',  image: '/images/aafrin.webp',  price: '₹12K/hr' },
    { name: 'Anaya',   age: 22, type: 'High Class',      image: '/images/anaya.webp',   price: '₹10K/hr' },
    { name: 'Diya',    age: 21, type: 'College Girl',    image: '/images/diya.webp',    price: '₹9K/hr'  },
    { name: 'Jamila',  age: 26, type: 'Independent',     image: '/images/jamila.webp',  price: '₹11K/hr' },
    { name: 'Janu',    age: 23, type: 'Model Escort',    image: '/images/janu.webp',    price: '₹10.5K/hr' },
    { name: 'Natasha', age: 25, type: 'Russian Model',   image: '/images/natasha.webp', price: '₹15K/hr' },
  ];

  const features = [
    { icon: '💯', title: '100% Verified',  desc: 'All models verified & authenticated' },
    { icon: '🔒', title: 'Confidential',   desc: 'Complete privacy & discretion' },
    { icon: '⏰', title: '24/7 Service',   desc: 'Available round the clock' },
    { icon: '💰', title: 'Best Rates',     desc: 'Starting from ₹9,000/hour' },
    { icon: '🗺️', title: '50+ Areas',      desc: 'All Patna locations covered' },
    { icon: '⭐', title: 'Premium',        desc: 'High-class companions' },
  ];

  const steps = [
    { num: '1', icon: '💬', title: 'Contact Us',    desc: 'Message on WhatsApp with your preferences' },
    { num: '2', icon: '📋', title: 'Choose Model',  desc: 'Select from 100+ verified escorts' },
    { num: '3', icon: '✅', title: 'Confirm',       desc: 'Finalize date, time & location' },
    { num: '4', icon: '🎉', title: 'Enjoy',         desc: 'Premium service & unforgettable time' },
  ];

  const faqs = [
    { q: 'What is the minimum booking duration?',   a: 'The minimum booking is 1 hour. We also offer 2-hour, 4-hour, and 8-hour (overnight) packages at special rates.' },
    { q: 'Do you provide incall and outcall?',       a: 'Yes! For incall, visit our safe location. For outcall, our escort arrives at your hotel or residence within 30–45 minutes across all Patna areas.' },
    { q: 'How do I book an escort?',                 a: 'Message us on WhatsApp with your preferences — location, date, time, and duration. We confirm availability and complete the booking.' },
    { q: 'Are the models real and verified?',        a: 'Absolutely. 100% genuine models with verified documents. All photos are real and recent. Every model undergoes regular health checks.' },
  ];

  return (
    <div className="w-full">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: 'calc(100svh - 5rem)' }}
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.webp"
            alt="Premium Escorts in Patna"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/95 sm:from-slate-900/60 sm:via-purple-900/40 sm:to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center py-12 sm:py-20 lg:py-28">

          <div
            className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/40 rounded-full px-4 py-1.5 mb-5 sm:mb-7"
            style={{ animation: 'fade-in 0.6s ease-out 0.1s both' }}
          >
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse shrink-0" />
            <span className="text-pink-400 font-semibold text-xs sm:text-sm tracking-wide">Patna&apos;s #1 Escort Platform</span>
          </div>

          <h1
            className="font-playfair text-[2.2rem] leading-[1.15] sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6"
            style={{ animation: 'fade-in 0.7s ease-out 0.25s both' }}
          >
            Meet Premium
            <br />
            <span className="gradient-text">Escorts in Patna</span>
          </h1>

          <div style={{ animation: 'fade-in 0.7s ease-out 0.4s both' }} className="mb-8 sm:mb-10">
            <p className="hidden sm:block text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              100% Verified Call Girls &nbsp;&bull;&nbsp; Incall &amp; Outcall &nbsp;&bull;&nbsp; 50+ Locations &nbsp;&bull;&nbsp; From ₹9,000
            </p>
            <p className="sm:hidden text-gray-200 text-base leading-7">
              100% Verified &bull; Incall &amp; Outcall
              <br />
              50+ Locations &bull; From ₹9,000/hr
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-14 max-w-xs sm:max-w-none mx-auto"
            style={{ animation: 'fade-in 0.7s ease-out 0.55s both' }}
          >
            <a
              href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl flex items-center justify-center gap-2 min-h-[52px]"
            >
              📱 Book on WhatsApp
            </a>
            <Link
              href="/gallery"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg border-2 border-white/60 hover:border-white transition-all flex items-center justify-center gap-2 min-h-[52px]"
            >
              👀 View Gallery
            </Link>
          </div>

          <div
            className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xs sm:max-w-md mx-auto"
            style={{ animation: 'fade-in 0.7s ease-out 0.7s both' }}
          >
            {[['100+', 'Models'], ['50+', 'Locations'], ['24/7', 'Available']].map(([val, label]) => (
              <div key={label} className="glass p-3 sm:p-5 rounded-xl text-center">
                <div className="text-xl sm:text-3xl font-bold text-pink-500">{val}</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-500/60 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 bg-pink-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* ─── WHY US / FEATURES ───────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Why Choose <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
              We set the standard for premium escort services in Patna
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass glass-hover p-5 sm:p-7 rounded-2xl text-center group hover:scale-[1.03] transition-transform"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">{f.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED MODELS ─────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Featured <span className="gradient-text">Escorts</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">Choose from our premium collection of verified models</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {models.map((model) => (
              <div key={model.name} className="group flex flex-col">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden mb-4 card-hover" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={model.image}
                    alt={`${model.name} - Escort in Patna`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Permanent bottom gradient so name always reads on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  {/* Verified badge */}
                  <span className="absolute top-3 right-3 bg-pink-600/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ✓ Verified
                  </span>
                  {/* Name always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-lg leading-tight">{model.name}</p>
                    <p className="text-gray-300 text-sm">{model.age} yrs &bull; {model.type}</p>
                  </div>
                </div>

                {/* Info card */}
                <div className="glass p-4 rounded-xl flex items-center justify-between gap-3 mt-auto">
                  <p className="text-pink-500 font-bold text-lg">{model.price}</p>
                  <a
                    href={`https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(model.name)}%20in%20Patna`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient text-white px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap min-h-[42px] flex items-center"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-14">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 btn-gradient text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg"
            >
              View All Models →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-900 border-y border-pink-600/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 sm:mb-14">
            How to <span className="gradient-text">Book</span>
          </h2>

          {/* Steps — 2-col on mobile, 4-col on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="glass p-5 sm:p-7 rounded-2xl text-center flex flex-col items-center">
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-2xl mb-3 shrink-0">
                  {step.num}
                </div>
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{step.icon}</div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-1">{step.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gradient text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg min-h-[52px]"
            >
              📱 Start Booking
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400">Get answers to common booking questions</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group glass rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center gap-4 cursor-pointer select-none px-5 sm:px-6 py-4 sm:py-5 font-semibold text-white hover:text-pink-400 transition-colors text-sm sm:text-base">
                  <span>{faq.q}</span>
                  <span className="text-pink-500 shrink-0 text-lg leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-pink-600/10 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600/15 via-purple-600/15 to-pink-600/15 border-y border-pink-600/20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Book?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            Chat with us anytime. Premium escorts waiting for you 24/7.
          </p>
          <a
            href="https://wa.me/919229604907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 btn-gradient text-white px-10 py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl min-h-[52px]"
          >
            💬 Start Booking Now
          </a>
        </div>
      </section>

      {/* ─── FLOATING WHATSAPP BUTTON ────────────────────────── */}
      <a
        href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl font-bold text-sm transition-all hover:scale-105 active:scale-95"
        style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.45)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.844L0 24l6.334-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.37l-.36-.214-3.724.888.918-3.619-.236-.372A9.818 9.818 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/>
        </svg>
        Book Now
      </a>

    </div>
  );
}

