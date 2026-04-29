"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, HeartHandshake, Layers3, Clock4 } from "lucide-react";

const reasons = [
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Launch Faster",
    desc: "Our agile workflow and pre-built systems mean you go from idea to live product in record time.",
    stat: "2x",
    statLabel: "Faster Delivery",
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "We Build With You",
    desc: "You're not just a client — you're a partner. Transparent communication at every step.",
    stat: "98%",
    statLabel: "Client Retention",
  },
  {
    icon: <Layers3 className="w-7 h-7" />,
    title: "Full-Stack Expertise",
    desc: "From pixel-perfect UI to bulletproof backend, we handle the entire technology stack.",
    stat: "50+",
    statLabel: "Tech Stack Tools",
  },
  {
    icon: <Clock4 className="w-7 h-7" />,
    title: "Always On Support",
    desc: "Post-launch support and maintenance so your product stays fast, secure, and evolving.",
    stat: "24/7",
    statLabel: "Availability",
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-choose-us" className="bg-white py-24">
      <div className="container mx-auto px-3 lg:px-16">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Techify
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            The Techify{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map(({ icon, title, desc, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                {/* LEFT */}
                <div className="flex items-start gap-5">
                  <div className="w-23 h-14 rounded-xl bg-indigo-200 text-indigo-600 flex items-center justify-center">
                    {icon}
                  </div>

                  <div>
                    <h3 className="text-gray-900 font-semibold text-xl mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>

                {/* RIGHT STAT */}
                <div className="text-right shrink-0">
                  <p className="text-3xl font-bold text-indigo-600">{stat}</p>
                  <p className="text-gray-500 text-xs">{statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
