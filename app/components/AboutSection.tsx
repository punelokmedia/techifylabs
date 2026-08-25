"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sectionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: sectionEase },
  }),
};

const stats = [
  {
    metric: "3.5X ROAS",
    caption: "Through well-structured funnel ads",
    Icon: IconChart,
  },
  {
    metric: "47+",
    caption: "Profoundly active clients",
    Icon: IconUsersRing,
  },
  {
    metric: "10%",
    caption: "Conversion rate through Advantage+ campaigns",
    Icon: IconTarget,
  },
];

const highlights = [
  "Conversion-focused design",
  "Data-backed marketing strategy",
  "Scalable growth systems",
];

function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M8 38V10M8 38h32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 30l8-10 6 6 10-14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUsersRing({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="18" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 38c0-6 5.4-10 12-10s12 4 12 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="home-section"
      aria-labelledby="about-heading"
    >
      <div className="home-section-inner">
        <div className="about-split">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {},
            }}
          >
            <motion.span variants={fadeUp} custom={0} className="section-kicker">
              <span className="section-kicker-dot" aria-hidden />
              About Techify
            </motion.span>
            <motion.h2
              id="about-heading"
              variants={fadeUp}
              custom={1}
              className="section-title mt-4 text-3xl sm:text-4xl lg:text-[2.35rem]"
            >
              Result-driven digital marketing &amp; web development agency in
              India
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              We combine strategy, creative, and performance media to help
              brands scale with clarity. Our team blends technical depth with
              marketing instincts - so every launch, funnel, and campaign is
              built to convert, not just look good.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="about-panel">
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Performance-first approach
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                Every campaign, funnel, and landing experience is designed to
                drive measurable results - not just impressions.
              </p>
              <ul className="mt-5 space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-base text-slate-700"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="mt-7">
              <Link href="/about" className="home-cta">
                More about us
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: sectionEase }}
            className="about-visual"
          >
            <Image
              src="/images/marketing.png"
              alt="Team building digital products and marketing systems"
              fill
              className="object-contain p-6 sm:p-8"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.08 },
            },
            hidden: {},
          }}
          className="home-stat-grid"
        >
          {stats.map((s) => (
            <motion.div
              key={s.metric}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: sectionEase },
                },
              }}
              className="home-stat-card group/stat"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3b31a1] to-[#1d4ed8] opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100"
                aria-hidden
              />
              <div className="relative z-10">
                <s.Icon className="h-10 w-10 text-[#1e4976] transition-colors duration-300 group-hover/stat:text-white" />
                <p className="mt-5 text-3xl font-bold tracking-tight text-[#0c2d52] transition-colors duration-300 group-hover/stat:text-white sm:text-4xl">
                  {s.metric}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover/stat:text-white/90">
                  {s.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
