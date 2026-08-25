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
    desc: "You're not just a client - you're a partner. Transparent communication at every step.",
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
    <section id="why-choose-us" className="home-section home-section-white">
      <div className="home-section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="section-kicker">
            <span className="section-kicker-dot" aria-hidden />
            Why Techify
          </p>
          <h2 className="section-title mt-4 text-3xl lg:text-5xl">
            The Techify{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
        </motion.div>

        <div className="why-grid">
          {reasons.map(({ icon, title, desc, stat, statLabel }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="why-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-violet-200 text-indigo-600 shadow-[0_8px_16px_-10px_rgba(79,70,229,0.7)]">
                    {icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {desc}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-3xl font-bold text-indigo-600">{stat}</p>
                  <p className="text-xs text-gray-500">{statLabel}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
