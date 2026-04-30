"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: "🏆",
    title: "Accredited Excellence",
    desc: "NABH-accredited facility maintaining the highest standards of patient care and safety.",
  },
  {
    icon: "🤝",
    title: "Patient-First Approach",
    desc: "Every decision revolves around patient wellbeing, dignity, and the best possible outcomes.",
  },
  {
    icon: "⚡",
    title: "Cutting-Edge Technology",
    desc: "Equipped with the latest medical technology for precise diagnosis and treatment.",
  },
  {
    icon: "🌍",
    title: "Affordable for All",
    desc: "Cashless insurance, EMI options, and government scheme tie-ups to make healthcare accessible.",
  },
];

export default function IBFAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 bg-[#050f1e] relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6"
            >
              <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">
                About IBF Healthcare
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              A Legacy of Healing,{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00b496, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                A Promise of Care
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-slate-400 text-base leading-relaxed mb-8"
            >
              <p>
                Founded with a vision to make world-class healthcare accessible,
                IBF Healthcare has grown from a single clinic to a multi-specialty
                hospital network trusted by hundreds of thousands of patients across
                the region.
              </p>
              <p>
                We combine the warmth of community care with the rigor of
                evidence-based medicine. Our team of 120+ specialists, nurses, and
                support staff works tirelessly to ensure every patient receives not
                just treatment — but a healing experience.
              </p>
              <p>
                IBF stands for <strong className="text-white">Integrity, Beyond-expectations care,</strong>{" "}
                and <strong className="text-white">Family-centred healing</strong> — values
                embedded in everything we do, from your first consultation to
                full recovery.
              </p>
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #00b496, #00d4ff)" }}
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h4
                  className="text-white font-bold text-base mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {p.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 rounded-2xl overflow-hidden border border-white/10"
        >
          {[
            { year: "1999", label: "Founded" },
            { year: "2008", label: "Multi-speciality Expansion" },
            { year: "2015", label: "NABH Accreditation" },
            { year: "2024", label: "New Flagship Hospital" },
          ].map((item, i) => (
            <div
              key={item.year}
              className={`p-6 ${i % 2 === 0 ? "bg-white/5" : "bg-white/[0.03]"} border-r border-white/10 last:border-0`}
            >
              <p
                className="text-2xl font-black mb-1"
                style={{
                  background: "linear-gradient(90deg, #00b496, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.year}
              </p>
              <p className="text-slate-400 text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}