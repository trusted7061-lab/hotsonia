'use client';

import { Metadata } from 'next';
import { useState } from 'react';

// Note: Metadata export works in layout/page components, not client components
// This will be used as a regular component with manual head management

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', location: '', message: '' });
    }, 3000);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="py-12 px-4 bg-gray-900/50 border-b border-pink-600/20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
          <p className="text-gray-400">Get in touch with us to book your favorite escort in Patna</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-900 border border-pink-600/20 rounded-xl p-6">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/919229604907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-400 font-medium"
                >
                  +91 92296 04907
                </a>
                <p className="text-gray-400 text-sm mt-2">24/7 Available</p>
              </div>

              <div className="bg-gray-900 border border-pink-600/20 rounded-xl p-6">
                <div className="text-3xl mb-3">⏰</div>
                <h3 className="text-white font-semibold mb-2">Hours</h3>
                <p className="text-gray-400">24 Hours a Day</p>
                <p className="text-gray-400">7 Days a Week</p>
                <p className="text-gray-400">365 Days a Year</p>
              </div>

              <div className="bg-gray-900 border border-pink-600/20 rounded-xl p-6">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-white font-semibold mb-2">Service Areas</h3>
                <p className="text-gray-400 text-sm">
                  All major locations in Patna including Boring Road, Bailey Road, Kankarbagh, and all
                  5-star hotels
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 border border-pink-600/20 rounded-xl p-8">
                <h2 className="font-playfair text-3xl text-white mb-6">Send us a Message</h2>

                {submitted ? (
                  <div className="bg-green-600/20 border border-green-600/50 rounded-lg p-6 text-center">
                    <p className="text-green-500 font-semibold mb-2">✓ Submitted Successfully</p>
                    <p className="text-gray-300">
                      Thank you! We will get back to you soon via WhatsApp.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-pink-600"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-pink-600"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-pink-600"
                        placeholder="Your email"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Preferred Location</label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-pink-600"
                      >
                        <option value="">Select a location</option>
                        <option value="batting-road">Boring Road</option>
                        <option value="bailey-road">Bailey Road</option>
                        <option value="kankarbagh">Kankarbagh</option>
                        <option value="raj-nagar">Rajendra Nagar</option>
                        <option value="fraser-road">Fraser Road</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-pink-600"
                        placeholder="Tell us about your preferences..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-white mb-6">Quick Booking</h2>
          <p className="text-gray-400 mb-8">
            For immediate booking, reach out to us on WhatsApp and get connected in seconds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919229604907"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center gap-2"
            >
              💬 WhatsApp Chat
            </a>
            <a
              href="tel:919229604907"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center gap-2"
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
