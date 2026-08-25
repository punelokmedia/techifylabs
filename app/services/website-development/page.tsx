"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── DATA ─────────────────────────────────────────────────────

const services = [
  {
    icon: "🌐",
    title: "Full-Stack Development",
    description:
      "End-to-end web apps built with React, Next.js, and Node.js - from database schema to polished UI.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Websites",
    description:
      "WooCommerce, Magento, or custom-built stores - designed to maximise your online revenue.",
  },
  {
    icon: "⚙️",
    title: "CMS Development",
    description:
      "WordPress, Strapi, or headless CMS so you can update content without touching any code.",
  },
  {
    icon: "🔌",
    title: "API Integration",
    description:
      "Connect to payment gateways, CRMs, analytics tools, and any third-party service you need.",
  },
  {
    icon: "🚀",
    title: "Performance Optimisation",
    description:
      "Lighthouse audits, lazy loading, image optimisation, and caching for blazing-fast load times.",
  },
  {
    icon: "🔐",
    title: "Security & Maintenance",
    description:
      "SSL, firewall setup, dependency updates, and uptime monitoring to keep your site safe 24/7.",
  },
];

const techStack = [
  { name: "React", color: "bg-sky-50 text-sky-700 ring-sky-200" },
  { name: "Next.js", color: "bg-gray-100 text-gray-700 ring-gray-200" },
  { name: "Node.js", color: "bg-green-50 text-green-700 ring-green-200" },
  { name: "TypeScript", color: "bg-blue-50 text-blue-700 ring-blue-200" },
  { name: "Laravel", color: "bg-red-50 text-red-700 ring-red-200" },
  { name: "WordPress", color: "bg-sky-50 text-sky-700 ring-sky-200" },
  { name: "MySQL", color: "bg-orange-50 text-orange-700 ring-orange-200" },
  { name: "MongoDB", color: "bg-green-50 text-green-700 ring-green-200" },
  { name: "AWS", color: "bg-yellow-50 text-yellow-700 ring-yellow-200" },
  { name: "Tailwind CSS", color: "bg-cyan-50 text-cyan-700 ring-cyan-200" },
];

const whyUs = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "Most projects shipped in 2–4 weeks without cutting corners.",
  },
  {
    icon: "🎯",
    title: "Result-Driven",
    desc: "Every decision is backed by business goals and real metrics.",
  },
  {
    icon: "🔒",
    title: "Transparent Process",
    desc: "Weekly updates, shared boards, and zero surprises.",
  },
  {
    icon: "🛠️",
    title: "Post-Launch Support",
    desc: "We stay with you even after your site goes live.",
  },
];

// ── SMALL REUSABLE COMPONENTS ────────────────────────────────

// Dark badge - hero only (unchanged)
function SectionBadgeDark({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2">
      <span className="h-2 w-2 rounded-[2px] bg-[#ea580c] shadow-[0_0_10px_rgba(234,88,12,0.5)]" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
        {children}
      </span>
    </div>
  );
}

// Light badge - below hero
function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2">
      <span className="h-2 w-2 rounded-[2px] bg-[#ea580c]" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#3b31a1]">
        {children}
      </span>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 380, damping: 24 },
      }}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
                 transition-all hover:border-violet-300 hover:shadow-md"
    >
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl
                      bg-violet-100 text-2xl ring-1 ring-violet-200
                      transition-colors group-hover:bg-violet-200"
      >
        {icon}
      </div>
      <h3 className="mb-2 text-[17px] font-semibold text-gray-900">{title}</h3>
      <p className="text-[14px] leading-relaxed text-gray-500">{description}</p>
    </motion.div>
  );
}

// ── PAGE COMPONENT ───────────────────────────────────────────

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-gray-100">
      {/* ══ HERO - UNCHANGED ══ */}
      <section
        className="relative overflow-hidden rounded-b-[1.7rem] border-b border-white/[0.08]
                          bg-gradient-to-br from-[#0a0f2c] via-[#1e1b4b] to-[#0d0b1f]"
      >
        <div
          className="pointer-events-none absolute inset-0
                     bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(139,92,246,0.18),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px
                     bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadgeDark>Website Development</SectionBadgeDark>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.06}
              className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Websites That Work{" "}
              <span
                className="bg-gradient-to-r from-white via-violet-100 to-violet-300
                               bg-clip-text text-transparent"
              >
                As Hard As You Do
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.14}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              We build fast, secure, and scalable websites and web applications
              using modern technologies - engineered for performance and built
              to grow with your business.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.22}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden
                           rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-bold text-white
                           shadow-md ring-1 ring-white/40 transition hover:bg-violet-500
                           hover:shadow-lg sm:px-8 sm:text-[15px]"
              >
                Start Your Project
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20
                           bg-white/10 px-6 py-3 text-sm font-semibold text-white
                           backdrop-blur-sm transition hover:bg-white/15 sm:px-8 sm:text-[15px]"
              >
                View Services
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-14 flex flex-wrap gap-8 border-t border-white/[0.1] pt-10"
            >
              {[
                { num: "150+", label: "Websites Built" },
                { num: "99.9%", label: "Uptime Guaranteed" },
                { num: "2–4 wks", label: "Avg. Delivery" },
                { num: "24/7", label: "Support Available" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    {num}
                  </p>
                  <p className="mt-0.5 text-[13px] text-white/50">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ TECH STACK STRIP - WHITE THEME ══ */}
      <section className="border-b border-gray-100 bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Technologies We Use
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techStack.map(({ name, color }) => (
              <span
                key={name}
                className={`rounded-full px-4 py-1.5 text-[13px] font-medium ring-1 ${color}`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID - WHITE THEME ══ */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mb-12 text-center">
          <SectionBadge>What We Build</SectionBadge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Development Services
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-gray-500">
            From simple landing pages to complex web applications - we handle
            every layer of the stack.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </motion.div>
      </section>

      {/* ══ WHY CHOOSE US - WHITE THEME ══ */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <SectionBadge>Why TechCraft</SectionBadge>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We Don&apos;t Just Build.{" "}
                <span
                  className="bg-gradient-to-r from-[#3b31a1] via-violet-500 to-violet-400
                                 bg-clip-text text-transparent"
                >
                  We Grow You.
                </span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-500">
                Most agencies deliver a website and disappear. We stay invested
                in your success - combining design thinking, engineering, and
                marketing to ensure your site works hard for your business.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full
                           bg-[#3b31a1] px-7 py-3.5 text-sm font-bold text-white
                           transition hover:bg-[#2f278f]"
              >
                Get Free Consultation
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-4"
            >
              {whyUs.map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardVariant}
                  className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center
                                   rounded-xl bg-violet-100 text-xl ring-1 ring-violet-200"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-[14px] text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER - WHITE THEME ══ */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionBadge>Let&apos;s Build</SectionBadge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Build Something Great?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-gray-500">
              Book a free consultation and let&apos;s figure out the best technical
              approach for your project.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#3b31a1]
                         px-8 py-4 text-sm font-bold text-white shadow-lg
                         transition hover:bg-[#2f278f] sm:text-[15px]"
            >
              Start Your Project Today
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
