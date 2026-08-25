"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🫀",
    title: "Cardiology",
    description:
      "Comprehensive heart care including ECG, echocardiography, stress tests, and interventional cardiology by leading cardiologists.",
    tags: ["ECG", "Echocardiography", "Angioplasty"],
    color: "from-rose-500/20 to-rose-500/5",
    accent: "#f43f5e",
  },
  {
    icon: "🧠",
    title: "Neurology",
    description:
      "Expert diagnosis and treatment of neurological disorders including stroke, epilepsy, Parkinson's, and memory conditions.",
    tags: ["MRI Brain", "EEG", "Stroke Care"],
    color: "from-violet-500/20 to-violet-500/5",
    accent: "#8b5cf6",
  },
  {
    icon: "🦴",
    title: "Orthopaedics",
    description:
      "Advanced bone, joint, and spine care with minimally invasive surgeries, joint replacements, and physiotherapy.",
    tags: ["Joint Replacement", "Spine Surgery", "Physiotherapy"],
    color: "from-amber-500/20 to-amber-500/5",
    accent: "#f59e0b",
  },
  {
    icon: "👶",
    title: "Paediatrics",
    description:
      "Dedicated child healthcare from newborn screening to adolescent medicine with compassionate, child-friendly specialists.",
    tags: ["Newborn Care", "Vaccination", "Growth Monitoring"],
    color: "from-sky-500/20 to-sky-500/5",
    accent: "#0ea5e9",
  },
  {
    icon: "🔬",
    title: "Diagnostics & Lab",
    description:
      "State-of-the-art diagnostic imaging - MRI, CT Scan, X-Ray, Ultrasound - plus a full-service NABL-accredited laboratory.",
    tags: ["MRI", "CT Scan", "Pathology"],
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "#10b981",
  },
  {
    icon: "🤰",
    title: "Obstetrics & Gynecology",
    description:
      "Complete women's health services from prenatal care and high-risk pregnancies to gynaecological surgeries and menopause management.",
    tags: ["Prenatal Care", "Laparoscopy", "IVF Support"],
    color: "from-pink-500/20 to-pink-500/5",
    accent: "#ec4899",
  },
  {
    icon: "👁️",
    title: "Ophthalmology",
    description:
      "Full-spectrum eye care including LASIK, cataract surgery, glaucoma management, and retina treatments.",
    tags: ["LASIK", "Cataract", "Retina"],
    color: "from-cyan-500/20 to-cyan-500/5",
    accent: "#06b6d4",
  },
  {
    icon: "🩺",
    title: "General Medicine",
    description:
      "Preventive health check-ups, chronic disease management, and acute care delivered by experienced internal medicine physicians.",
    tags: ["Health Checkups", "Diabetes", "Hypertension"],
    color: "from-teal-500/20 to-teal-500/5",
    accent: "#14b8a6",
  },
  {
    icon: "🧬",
    title: "Oncology",
    description:
      "Comprehensive cancer care with early detection, chemotherapy, radiation therapy, and palliative care by an empathetic oncology team.",
    tags: ["Chemotherapy", "Radiation", "Palliative Care"],
    color: "from-orange-500/20 to-orange-500/5",
    accent: "#f97316",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`relative rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${service.color} backdrop-blur-sm group cursor-default`}
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${service.accent}55` }}
      />

      <div className="mb-4 flex items-start justify-between">
        <span className="text-4xl">{service.icon}</span>
        <motion.div
          className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: `${service.accent}22` }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke={service.accent}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
        {service.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={{
              background: `${service.accent}18`,
              color: service.accent,
              border: `1px solid ${service.accent}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function IBFServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 bg-[#030d1a] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,180,150,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-5"
          >
            <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">
              Our Specialities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-white mb-5 tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            World-Class Healthcare{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00b496, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            From routine check-ups to complex surgeries, IBF Healthcare offers
            a full spectrum of medical services under one roof.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}