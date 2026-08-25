"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const specialities = [
  "Cardiology",
  "Neurology",
  "Orthopaedics",
  "Paediatrics",
  "Obstetrics & Gynecology",
  "Ophthalmology",
  "General Medicine",
  "Oncology",
  "Diagnostics & Lab",
  "Other",
];

export default function IBFLeadForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    speciality: "",
    message: "",
    preferredDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate API call - replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  return (
    <section id="contact" className="py-28 bg-[#050f1e] relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,180,150,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - copy */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6"
            >
              <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">
                Book Consultation
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Your Health Journey{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00b496, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Starts Here
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              Fill in the form and our patient care team will get back to you
              within 2 hours. No wait times, no confusion - just care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { icon: "📞", label: "Call us", value: "+91 (0253) 123 4567" },
                { icon: "📧", label: "Email", value: "care@ibfhealthcare.com" },
                { icon: "📍", label: "Address", value: "IBF Medical Centre, Nashik, MH" },
                { icon: "🕐", label: "OPD Hours", value: "Mon–Sat, 8 AM – 8 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {formState === "success" ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-2xl p-10 border border-emerald-500/30 bg-emerald-500/10 text-center"
              >
                <div className="text-6xl mb-5">✅</div>
                <h3
                  className="text-white text-2xl font-black mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Request Received!
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Thank you, <strong className="text-white">{form.name}</strong>. Our patient
                  care team will contact you at <strong className="text-white">{form.phone}</strong>{" "}
                  within 2 hours to confirm your appointment.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setForm({ name: "", email: "", phone: "", speciality: "", message: "", preferredDate: "" });
                  }}
                  className="mt-6 px-6 py-3 rounded-xl border border-emerald-500/40 text-emerald-400 text-sm font-medium hover:bg-emerald-500/10 transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm space-y-5"
              >
                <h3
                  className="text-white font-black text-xl mb-6"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Book an Appointment
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Full Name *"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Phone Number *"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Speciality *</label>
                    <select
                      name="speciality"
                      value={form.speciality}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-[#030d1a]">Select speciality</option>
                      {specialities.map((s) => (
                        <option key={s} value={s} className="bg-[#030d1a]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <InputField
                    label="Preferred Date"
                    name="preferredDate"
                    type="date"
                    placeholder=""
                    value={form.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Message / Symptoms</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your concern or symptoms..."
                    className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors resize-none placeholder:text-slate-600"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl text-white font-bold text-base transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, #00b496, #00d4ff)" }}
                >
                  {formState === "loading" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book My Appointment
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </motion.button>

                <p className="text-slate-600 text-xs text-center">
                  By submitting, you agree to our Privacy Policy. We'll never share your
                  information with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-slate-400 text-sm mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors placeholder:text-slate-600"
      />
    </div>
  );
}