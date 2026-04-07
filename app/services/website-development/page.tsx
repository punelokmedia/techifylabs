"use client";

import { motion, useReducedMotion ,Variants} from "framer-motion";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────
// FILE: app/services/website-development/page.tsx
// ─────────────────────────────────────────────────────────────

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
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
};

// ── DATA ─────────────────────────────────────────────────────

const services = [
  {
    icon: "🌐",
    title: "Full-Stack Development",
    description: "End-to-end web apps built with React, Next.js, and Node.js — from database schema to polished UI.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Websites",
    description: "WooCommerce, Magento, or custom-built stores — designed to maximise your online revenue.",
  },
  {
    icon: "⚙️",
    title: "CMS Development",
    description: "WordPress, Strapi, or headless CMS so you can update content without touching any code.",
  },
  {
    icon: "🔌",
    title: "API Integration",
    description: "Connect to payment gateways, CRMs, analytics tools, and any third-party service you need.",
  },
  {
    icon: "🚀",
    title: "Performance Optimisation",
    description: "Lighthouse audits, lazy loading, image optimisation, and caching for blazing-fast load times.",
  },
  {
    icon: "🔐",
    title: "Security & Maintenance",
    description: "SSL, firewall setup, dependency updates, and uptime monitoring to keep your site safe 24/7.",
  },
];

const techStack = [
  { name: "React", color: "bg-sky-500/15 text-sky-200 ring-sky-400/20" },
  { name: "Next.js", color: "bg-white/10 text-white/80 ring-white/15" },
  { name: "Node.js", color: "bg-green-500/15 text-green-200 ring-green-400/20" },
  { name: "TypeScript", color: "bg-blue-500/15 text-blue-200 ring-blue-400/20" },
  { name: "Laravel", color: "bg-red-500/15 text-red-200 ring-red-400/20" },
  { name: "WordPress", color: "bg-sky-600/15 text-sky-200 ring-sky-400/20" },
  { name: "MySQL", color: "bg-orange-500/15 text-orange-200 ring-orange-400/20" },
  { name: "MongoDB", color: "bg-green-600/15 text-green-200 ring-green-400/20" },
  { name: "AWS", color: "bg-yellow-500/15 text-yellow-200 ring-yellow-400/20" },
  { name: "Tailwind CSS", color: "bg-cyan-500/15 text-cyan-200 ring-cyan-400/20" },
];

const whyUs = [
  { icon: "⚡", title: "Fast Delivery", desc: "Most projects shipped in 2–4 weeks without cutting corners." },
  { icon: "🎯", title: "Result-Driven", desc: "Every decision is backed by business goals and real metrics." },
  { icon: "🔒", title: "Transparent Process", desc: "Weekly updates, shared boards, and zero surprises." },
  { icon: "🛠️", title: "Post-Launch Support", desc: "We stay with you even after your site goes live." },
];

// ── SMALL REUSABLE COMPONENTS ────────────────────────────────

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2">
      <span className="h-2 w-2 rounded-[2px] bg-[#ea580c] shadow-[0_0_10px_rgba(234,88,12,0.5)]" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
        {children}
      </span>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 380, damping: 24 } }}
      className="group rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 backdrop-blur-sm
                 transition-colors hover:border-violet-400/30 hover:bg-white/[0.07]"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl
                      bg-violet-500/15 text-2xl ring-1 ring-violet-400/20
                      transition-colors group-hover:bg-violet-500/25">
        {icon}
      </div>
      <h3 className="mb-2 text-[17px] font-semibold text-white">{title}</h3>
      <p className="text-[14px] leading-relaxed text-white/65">{description}</p>
    </motion.div>
  );
}

// ── PAGE COMPONENT ───────────────────────────────────────────

export default function WebDevelopmentPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#0d0b1f] text-white">

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden border-b border-white/[0.08]
                          bg-gradient-to-br from-[#0a0f2c] via-[#1e1b4b] to-[#0d0b1f]">
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
              <SectionBadge>Website Development</SectionBadge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.06}
              className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Websites That Work{" "}
              <span className="bg-gradient-to-r from-white via-violet-100 to-violet-300
                               bg-clip-text text-transparent">
                As Hard As You Do
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.14}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              We build fast, secure, and scalable websites and web applications using modern
              technologies — engineered for performance and built to grow with your business.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.22} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden
                           rounded-full bg-white px-6 py-3 text-sm font-bold text-[#3b31a1]
                           shadow-md ring-1 ring-white/40 transition hover:bg-violet-50
                           hover:shadow-lg sm:px-8 sm:text-[15px]"
              >
                Start Your Project
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
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
                  <p className="text-2xl font-bold text-white sm:text-3xl">{num}</p>
                  <p className="mt-0.5 text-[13px] text-white/50">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ TECH STACK STRIP ══ */}
      <section className="border-b border-white/[0.08] bg-white/[0.02] py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="mb-5 text-center text-[11px] font-bold uppercase
                        tracking-[0.2em] text-white/35">
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

      {/* ══ SERVICES GRID ══ */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-12 text-center">
          <SectionBadge>What We Build</SectionBadge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Development Services
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
            From simple landing pages to complex web applications — we handle every layer of the stack.
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

      {/* ══ WHY CHOOSE US ══ */}
      <section className="border-y border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <SectionBadge>Why TechCraft</SectionBadge>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                We Don't Just Build.{" "}
                <span className="bg-gradient-to-r from-white via-violet-100 to-violet-300
                                 bg-clip-text text-transparent">
                  We Grow You.
                </span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/65">
                Most agencies deliver a website and disappear. We stay invested in your success —
                combining design thinking, engineering, and marketing to ensure your site works
                hard for your business.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full
                           bg-white px-7 py-3.5 text-sm font-bold text-[#3b31a1]
                           transition hover:bg-violet-50"
              >
                Get Free Consultation
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
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
                  className="flex gap-4 rounded-2xl border border-white/[0.08]
                             bg-white/[0.04] p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center
                                   rounded-xl bg-violet-500/15 text-xl ring-1 ring-violet-400/20">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-[14px] text-white/60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="border-t border-white/[0.08] bg-gradient-to-b from-transparent to-[#0a0f2c]">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionBadge>Let's Build</SectionBadge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Build Something Great?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
              Book a free consultation and let's figure out the best technical approach for your project.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white
                         px-8 py-4 text-sm font-bold text-[#3b31a1] shadow-lg
                         transition hover:bg-violet-50 sm:text-[15px]"
            >
              Start Your Project Today
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}