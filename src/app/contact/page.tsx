"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: "rgba(10,2,8,0.85)",
    border: "1px solid rgba(240,24,125,0.2)",
    color: "#fff",
  };

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-14 text-center"
        style={{ background: "linear-gradient(180deg, #0a0208 0%, #100009 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.28em] font-bold mb-2" style={{ color: "#f5c842" }}>
            ✦ Reach Out ✦
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="gradient-text">Book Your Experience</span>
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>
            Available 24/7 — Fast, discreet response. All messages are strictly private.
          </p>
        </div>
      </section>

      <section className="py-10 pb-24" style={{ background: "#0a0208" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Panel */}
            <div>
              <Image
                src="/images/logo.png"
                alt="Hot Sonia"
                width={160}
                height={64}
                className="h-16 w-auto object-contain mb-8"
              />
              <h2
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Get In Touch Directly
              </h2>
              <div className="space-y-4">
                {[
                  { icon: "📞", label: "Phone / WhatsApp", value: "+91 92296 04907", href: "tel:+919229604907" },
                  { icon: "📧", label: "Email",            value: "contact@hotsonia.com", href: "mailto:contact@hotsonia.com" },
                  { icon: "📍", label: "Location",         value: "Patna, Bihar, India", href: null },
                  { icon: "⏰", label: "Availability",     value: "24 Hours, 7 Days a Week", href: null },
                ].map((item) => (
                  <div key={item.label} className="card-glass flex gap-4 rounded-2xl p-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: "rgba(255,255,255,0.32)" }}
                      >
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-sm" style={{ color: "#f0187d" }}>
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 rounded-2xl p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(240,24,125,0.1) 0%, rgba(245,112,61,0.07) 100%)",
                  border: "1px solid rgba(240,24,125,0.2)",
                }}
              >
                <div className="font-bold mb-1" style={{ color: "#f0187d" }}>
                  🔒 100% Discretion Guaranteed
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>
                  All communications and bookings are strictly private and confidential. Your identity is never shared.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div
                  className="card-glass rounded-3xl p-12 text-center"
                  style={{ border: "1px solid rgba(240,24,125,0.3)" }}
                >
                  <div className="text-6xl mb-5">✅</div>
                  <h3
                    className="text-white text-2xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Booking Received!
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.55)" }}>
                    We will contact you within minutes. Get ready for an unforgettable experience. 😘
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="card-glass rounded-3xl p-8 space-y-5"
                  style={{ border: "1px solid rgba(240,24,125,0.2)" }}
                >
                  <h2
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Quick Booking Form
                  </h2>

                  {[
                    { label: "Your Name *",         key: "name",  type: "text", placeholder: "Your name" },
                    { label: "Phone / WhatsApp *",  key: "phone", type: "tel",  placeholder: "+91 XXXXX XXXXX" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label
                        className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "rgba(255,255,255,0.38)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#f0187d")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(240,24,125,0.2)")}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      Service
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                      style={inputStyle}
                    >
                      <option value="">Select a service...</option>
                      <option>In-Call Services</option>
                      <option>Out-Call Services</option>
                      <option>Overnight Package</option>
                      <option>Travel Companion</option>
                      <option>Elite Companion</option>
                      <option>Party Companion</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Any specific requests or questions..."
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none resize-none"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#f0187d")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(240,24,125,0.2)")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gradient glow-pink text-white font-bold py-4 rounded-xl text-base"
                  >
                    Send Booking Request ✨
                  </button>
                  <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.28)" }}>
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
