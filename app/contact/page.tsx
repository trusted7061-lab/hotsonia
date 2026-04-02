import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotsonia.in'),
  title: 'Contact Escorts in Patna | Book Call Girls | 24/7 Support',
  description: 'Contact us to book premium escorts in Patna. WhatsApp, Phone, or contact form available 24/7. Fast response time, verified models.',
  keywords: 'Contact escorts Patna, Book call girls, Inquiry form, Whatsapp support, Escort contact',
  alternates: {
    canonical: 'https://hotsonia.in/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://hotsonia.in/contact',
    title: 'Contact Escorts in Patna | 24/7 Support',
    description: 'Get in touch with us. Available on WhatsApp, Phone & Email. Quick response time guaranteed.',
  },
};

export default function Contact() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border-b border-pink-600/20">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/50 rounded-full px-4 py-2 mb-6">
            <span className="text-pink-400 font-medium text-sm">📞 Get In Touch</span>
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
            <br />
            <span className="gradient-text">Available 24/7</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Have questions or ready to book? Our team is here to assist you anytime. Quick response guaranteed.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919229604907?text=Hi%2C%20I%20want%20to%20book%20an%20escort%20in%20Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hover glass p-8 rounded-2xl text-center hover:border-pink-600/50"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💬</div>
              <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400 mb-4">Fastest response time</p>
              <p className="text-pink-500 font-bold text-lg">+91-9229604907</p>
              <div className="mt-4 inline-block bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm">
                Available 24/7 ✓
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919229604907"
              className="group card-hover glass p-8 rounded-2xl text-center hover:border-pink-600/50"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">☎️</div>
              <h3 className="text-2xl font-bold text-white mb-2">Phone Call</h3>
              <p className="text-gray-400 mb-4">Direct call to support</p>
              <p className="text-purple-500 font-bold text-lg">+91-9229604907</p>
              <div className="mt-4 inline-block bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm">
                Available 24/7 ✓
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:support@hotsonia.in"
              className="group card-hover glass p-8 rounded-2xl text-center hover:border-pink-600/50"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
              <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400 mb-4">For detailed inquiries</p>
              <p className="text-pink-500 font-bold text-lg">support@hotsonia.in</p>
              <div className="mt-4 inline-block bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm">
                Reply within 1hr ✓
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600/5 to-purple-600/5 border-y border-pink-600/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Send us a Message
          </h2>

          <form className="space-y-6" action="mailto:support@hotsonia.in" method="POST">
            {/* Name */}
            <div>
              <label className="block text-white font-bold mb-3">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-6 py-4 bg-slate-900/50 border border-pink-600/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-600 transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-bold mb-3">Email Address</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-6 py-4 bg-slate-900/50 border border-pink-600/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-600 transition-colors"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-bold mb-3">Phone Number</label>
              <input
                type="tel"
                placeholder="+91-XXXXXXXXXX"
                className="w-full px-6 py-4 bg-slate-900/50 border border-pink-600/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-600 transition-colors"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-white font-bold mb-3">Subject</label>
              <select className="w-full px-6 py-4 bg-slate-900/50 border border-pink-600/30 rounded-xl text-white focus:outline-none focus:border-pink-600 transition-colors">
                <option value="">Select a subject</option>
                <option value="booking">Booking Inquiry</option>
                <option value="pricing">Pricing Questions</option>
                <option value="custom">Custom Request</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-white font-bold mb-3">Message</label>
              <textarea
                placeholder="Tell us what you're looking for..."
                rows={6}
                className="w-full px-6 py-4 bg-slate-900/50 border border-pink-600/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-600 transition-colors resize-none"
                required
              ></textarea>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-2"
                required
              />
              <label htmlFor="terms" className="text-gray-300 text-sm">
                I agree to receive responses and updates from Hotsonia
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-gradient text-white py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-8">
            Or use WhatsApp for faster response ©
          </p>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-3xl">⏰</span>
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="glass p-6 rounded-xl">
                  <p className="text-gray-400">Monday - Sunday</p>
                  <p className="text-white font-bold text-lg">24 Hours Available</p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <p className="text-gray-400">WhatsApp Support</p>
                  <p className="text-white font-bold text-lg">Instant Response</p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <p className="text-gray-400">Email Response Time</p>
                  <p className="text-white font-bold text-lg">Within 1 Hour</p>
                </div>
              </div>
            </div>

            {/* Visit Us */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-3xl">📍</span>
                Service Locations
              </h3>
              <div className="space-y-4">
                <div className="glass p-6 rounded-xl">
                  <p className="text-white font-bold mb-2">Patna City</p>
                  <p className="text-gray-400">Incall services at premium hotels</p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <p className="text-white font-bold mb-2">Outcall Services</p>
                  <p className="text-gray-400">Available throughout Patna & nearby areas</p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <p className="text-white font-bold mb-2">Travel Services</p>
                  <p className="text-gray-400">Delhi, Mumbai, Bangalore & more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-900 border-t border-pink-600/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <details className="group glass p-6 rounded-xl cursor-pointer">
              <summary className="flex items-center gap-4 font-bold text-white">
                <span className="text-pink-500 group-open:rotate-90 transition-transform">→</span>
                How do I book an escort?
              </summary>
              <p className="text-gray-300 mt-4 ml-8">Contact us via WhatsApp with your preferences. Our team will help you choose and confirm the booking.</p>
            </details>

            <details className="group glass p-6 rounded-xl cursor-pointer">
              <summary className="flex items-center gap-4 font-bold text-white">
                <span className="text-pink-500 group-open:rotate-90 transition-transform">→</span>
                What payment methods are accepted?
              </summary>
              <p className="text-gray-300 mt-4 ml-8">We accept UPI, Bank Transfer, Paytm, PhonePe, and Cash on delivery for your convenience.</p>
            </details>

            <details className="group glass p-6 rounded-xl cursor-pointer">
              <summary className="flex items-center gap-4 font-bold text-white">
                <span className="text-pink-500 group-open:rotate-90 transition-transform">→</span>
                Are all models verified?
              </summary>
              <p className="text-gray-300 mt-4 ml-8">Yes, all our models are 100% verified with genuine photos. Your safety and satisfaction is our priority.</p>
            </details>

            <details className="group glass p-6 rounded-xl cursor-pointer">
              <summary className="flex items-center gap-4 font-bold text-white">
                <span className="text-pink-500 group-open:rotate-90 transition-transform">→</span>
                Is my information kept confidential?
              </summary>
              <p className="text-gray-300 mt-4 ml-8">Absolutely. Your privacy is our top priority. All personal information is kept strictly confidential.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't Wait Any Longer
          </h2>
          <p className="text-gray-300 mb-8">
            Book your perfect companion today. Quick, easy, and discreet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919229604907"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-4 rounded-full font-bold"
            >
              💬 WhatsApp Now
            </a>
            <a
              href="tel:+919229604907"
              className="border-2 border-pink-600 text-pink-500 px-8 py-4 rounded-full font-bold hover:bg-pink-600/20 transition-all"
            >
              ☎️ Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
