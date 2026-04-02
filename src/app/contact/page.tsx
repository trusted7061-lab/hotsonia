"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-rose-500 text-sm uppercase tracking-widest font-semibold">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-6">Contact Us</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Ready to book? Have a question? We are available 24/7 — reach out and we will get back to you promptly and discreetly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Reach Us Directly</h2>
              <div className="space-y-5">
                {[
                  { icon: "📞", label: "Phone / WhatsApp", value: "+91 99999 99999", href: "tel:+919999999999" },
                  { icon: "📧", label: "Email", value: "contact@patnaescorts.com", href: "mailto:contact@patnaescorts.com" },
                  { icon: "📍", label: "Location", value: "Patna, Bihar, India", href: null },
                  { icon: "⏰", label: "Hours", value: "Available 24 hours, 7 days a week", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 bg-gray-800/50 border border-gray-700/40 rounded-2xl p-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-widest">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-white font-medium hover:text-rose-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-rose-900/20 border border-rose-800/30 rounded-2xl p-5">
                <div className="text-rose-400 font-semibold mb-2">Discretion Guaranteed</div>
                <p className="text-gray-400 text-sm">
                  All communications are 100% private and confidential. We never share or disclose any client information.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-gray-800/50 border border-rose-700/50 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Received!</h3>
                  <p className="text-gray-400">We will contact you within the next few minutes. Thank you!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-800/50 border border-gray-700/40 rounded-2xl p-7 space-y-5">
                  <h2 className="text-2xl font-bold text-white mb-2">Book Now</h2>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-rose-600 transition-colors text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-rose-600 transition-colors text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5">Service Required</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-600 transition-colors text-sm"
                    >
                      <option value="">Select a service...</option>
                      <option>Elite Companions</option>
                      <option>In-Call Services</option>
                      <option>Out-Call Services</option>
                      <option>Overnight Packages</option>
                      <option>Travel Companions</option>
                      <option>Event Escort</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-rose-600 transition-colors text-sm resize-none"
                      placeholder="Any specific requirements or questions..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-rose-600 hover:bg-rose-500 text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
                  >
                    Send Booking Request
                  </button>
                  <p className="text-gray-600 text-xs text-center">
                    By submitting, you confirm you are 18+ and agree to our terms.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
