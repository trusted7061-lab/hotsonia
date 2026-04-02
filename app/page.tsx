import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const models = [
    { name: 'Aafrin', age: 24, type: 'Premium Model', image: '/images/aafrin.webp', badge: 'VERIFIED' },
    { name: 'Anaya', age: 22, type: 'High Class Escort', image: '/images/anaya.webp', badge: 'VIP' },
    { name: 'Diya', age: 21, type: 'College Girl', image: '/images/diya.webp', badge: 'VERIFIED' },
    { name: 'Jamila', age: 26, type: 'Independent Escort', image: '/images/jamila.webp', badge: 'VIP' },
    { name: 'Janu', age: 23, type: 'Model Escort', image: '/images/janu.webp', badge: 'VERIFIED' },
    { name: 'Natasha', age: 25, type: 'Russian Model', image: '/images/natasha.webp', badge: 'VIP' },
  ];

  const faqs = [
    {
      q: 'What is the cost of escorts in Patna?',
      a: 'The cost of escorts in Patna starts from ₹9,000 for a 1-hour session and goes up to ₹50,000 for premium VIP models. Prices depend on the type of escort, duration, and service type.',
    },
    {
      q: 'Do you have verified call girls in Patna?',
      a: 'Yes, we verify every escort who provides our services. All profiles are authentic with 100% genuine photos. Every model undergoes identity verification and regular health checkups.',
    },
    {
      q: 'What is the minimum booking duration?',
      a: 'The minimum booking duration is 1 hour. However, there is no maximum limit. We also offer half-day (4 hours) and full-night packages for extended experiences.',
    },
    {
      q: 'When can I book a call girl in Patna?',
      a: 'You can book escorts in Patna any time – our services are available 24 hours a day, 7 days a week, 365 days a year.',
    },
    {
      q: 'Do you provide both incall and outcall services?',
      a: 'Yes, we offer both incall and outcall escort services in Patna. For incall, you visit the model at a designated location. For outcall, the model comes to your hotel room or residence within 30-45 minutes.',
    },
    {
      q: 'Is my privacy protected when booking?',
      a: 'Absolutely. We maintain 100% confidentiality and discretion. Your personal information is never shared. All bookings are handled privately with complete privacy.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/banner.webp"
          alt="Escorts In Patna - Premium Call Girls Service"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-block bg-pink-600/20 border border-pink-600/50 rounded-full px-4 py-2 mb-6">
            <span className="text-pink-500 font-semibold">✦ WELCOME TO PATNA'S #1 ESCORT SERVICE</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Escorts In Patna | <span className="text-pink-500">Call Girls In Patna</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book verified <strong>escorts in Patna</strong> for incall & outcall services at hotels &
            residences. High profile models available 24/7 starting <strong>₹9,000</strong>.
          </p>
          <div className="space-y-4 mb-8">
            <div className="text-gray-300">
              <span className="text-pink-500 font-bold mr-2">✔</span>Patna Escorts 100% Satisfaction
            </div>
            <div className="text-gray-300">
              <span className="text-pink-500 font-bold mr-2">✔</span>Awesome Escort Services
            </div>
            <div className="text-gray-300">
              <span className="text-pink-500 font-bold mr-2">✔</span>Incalls & Outcalls Services
            </div>
            <div className="text-gray-300">
              <span className="text-pink-500 font-bold mr-2">✔</span>100% Discreet High Profile Companionship
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919229604907"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition transform hover:scale-105"
            >
              BOOKING OPEN
            </a>
            <Link
              href="/gallery"
              className="border-2 border-white hover:bg-white hover:text-gray-950 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              View Gallery
            </Link>
          </div>
          <p className="text-gray-400 mt-8 text-sm">
            Luxurious High Class Escorts Models Online | Patna, Bihar
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-pink-600/25 border-l-4 border-l-pink-600 rounded-xl p-8 md:p-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
              What Are <span className="text-pink-500">Escorts In Patna</span>?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong>Escorts in Patna</strong> are verified, high-profile female companions available
              for incall and outcall services across the city. Our Patna escort agency provides{' '}
              <strong>100% genuine models</strong> including college girls, air hostesses, Russian
              models, housewives, and VIP celebrities — all available for booking{' '}
              <strong>24 hours a day, 7 days a week</strong>. Prices start from{' '}
              <strong>₹9,000 per hour</strong> with services covering <strong>50+ locations</strong> in
              Patna. Whether you need a companion for a dinner date, party, or private meeting, our{' '}
              <strong>Patna call girls</strong> deliver premium, discreet service with 100% satisfaction
              guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-600/20 border border-pink-600/50 rounded-full px-4 py-2 mb-6">
              <span className="text-pink-500 font-semibold text-sm">✦ OUR COLLECTION</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4">
              100% Genuine <span className="text-pink-500">Escorts In Patna</span> – Model Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {models.map((model) => (
              <div
                key={model.name}
                className="group rounded-xl overflow-hidden bg-gray-900 border border-pink-600/20 hover:border-pink-600/50 transition transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={model.image}
                    alt={`${model.name} - ${model.type} Escort in Patna`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                  <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {model.badge}
                  </span>
                  <div className="absolute top-4 right-4 mr-20 text-3xl">👑</div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-white mb-1">
                    {model.name} <span className="text-gray-400 text-sm">Age: {model.age}</span>
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{model.type}</p>
                  <a
                    href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-pink-600 text-pink-500 hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              View All Models
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">Everything you need to know about booking escorts in Patna</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-900 border border-pink-600/20 rounded-lg p-6 hover:border-pink-600/50 transition cursor-pointer"
              >
                <summary className="font-semibold text-white text-lg flex items-center justify-between">
                  {faq.q}
                  <span className="text-pink-500 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl text-white mb-4">Ready to Book?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Contact us 24/7 via WhatsApp to book your preferred escort in Patna
          </p>
          <a
            href="https://wa.me/919229604907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition transform hover:scale-105"
          >
            Start Booking Now
          </a>
        </div>
      </section>
    </div>
  );
}
