"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Variants } from "framer-motion";
// ─────────────────────────────────────────────────────────────
// FILE: app/services/app-development/page.tsx
// ─────────────────────────────────────────────────────────────

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: "easeInOut", 
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: "easeInOut", 
    },
  },
};

// ── DATA ─────────────────────────────────────────────────────

const services = [
  {
    icon: "🍎",
    title: "iOS App Development",
    description: "Native Swift/SwiftUI apps for iPhone and iPad — fast, polished, and App Store ready.",
  },
  {
    icon: "🤖",
    title: "Android App Development",
    description: "Kotlin-based Android apps designed for all screen sizes and Android versions from 8+.",
  },
  {
    icon: "⚛️",
    title: "React Native Apps",
    description: "One codebase, two platforms. Cost-effective cross-platform apps without compromising quality.",
  },
  {
    icon: "🌐",
    title: "Progressive Web Apps",
    description: "App-like experiences in the browser — installable, offline-capable, and blazing fast.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    description: "Engage users with timely, personalised push notifications that drive retention and repeat visits.",
  },
  {
    icon: "🔄",
    title: "App Maintenance & Updates",
    description: "OS compatibility updates, bug fixes, and new feature releases — we keep your app running smoothly.",
  },
];

const appTypes = [
  { icon: "🛒", name: "eCommerce Apps" },
  { icon: "🍽️", name: "Food Delivery" },
  { icon: "💊", name: "Healthcare" },
  { icon: "📚", name: "EdTech Platforms" },
  { icon: "🏋️", name: "Fitness & Wellness" },
  { icon: "🏠", name: "Real Estate" },
  { icon: "💼", name: "Business Tools" },
  { icon: "📍", name: "Location-Based Apps" },
];

const processSteps = [
  { step: "01", icon: "💡", title: "Ideation", desc: "Requirements gathering, feature scoping, and technical planning." },
  { step: "02", icon: "🖼️", title: "UI/UX Design", desc: "Wireframes, user flows, and pixel-perfect interactive prototypes." },
  { step: "03", icon: "⚙️", title: "Development", desc: "Agile sprints with weekly demo updates and transparent progress." },
  { step: "04", icon: "🧪", title: "Testing & QA", desc: "Rigorous testing across real devices, OS versions, and edge cases." },
  { step: "05", icon: "🚀", title: "Launch", desc: "App Store & Play Store submission, ASO, and go-live support." },
];

const techStack = [
  { name: "React Native", color: "bg-sky-500/15 text-sky-200 ring-sky-400/20" },
  { name: "Swift / SwiftUI", color: "bg-orange-500/15 text-orange-200 ring-orange-400/20" },
  { name: "Kotlin", color: "bg-purple-500/15 text-purple-200 ring-purple-400/20" },
  { name: "Expo", color: "bg-white/10 text-white/80 ring-white/15" },
  { name: "Firebase", color: "bg-yellow-500/15 text-yellow-200 ring-yellow-400/20" },
  { name: "Node.js", color: "bg-green-500/15 text-green-200 ring-green-400/20" },
  { name: "GraphQL", color: "bg-pink-500/15 text-pink-200 ring-pink-400/20" },
  { name: "AWS / GCP", color: "bg-blue-500/15 text-blue-200 ring-blue-400/20" },
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

export default function AppDevelopmentPage() {
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
            <motion.div variants={cardVariant}>
              <SectionBadge>App Development</SectionBadge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
            //   custom={0.06}
              className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Mobile Apps That{" "}
              <span className="bg-gradient-to-r from-white via-violet-100 to-violet-300
                               bg-clip-text text-transparent">
                Users Love to Open
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.14}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              We build iOS, Android, and cross-platform mobile applications that are intuitive,
              performant, and designed to keep users coming back every single day.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.22} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3
                           text-sm font-bold text-[#3b31a1] shadow-md ring-1 ring-white/40
                           transition hover:bg-violet-50 hover:shadow-lg sm:px-8 sm:text-[15px]"
              >
                Build Your App
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center gap-2 rounded-full border border-white/20
                           bg-white/10 px-6 py-3 text-sm font-semibold text-white
                           backdrop-blur-sm transition hover:bg-white/15 sm:px-8 sm:text-[15px]"
              >
                Our Process
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-14 flex flex-wrap gap-8 border-t border-white/[0.1] pt-10"
            >
              {[
                { num: "80+", label: "Apps Launched" },
                { num: "5M+", label: "Total Downloads" },
                { num: "4.8★", label: "Avg. App Rating" },
                { num: "iOS + Android", label: "Both Platforms" },
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

      {/* ══ APP TYPES STRIP ══ */}
      <section className="border-b border-white/[0.08] bg-white/[0.02] py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="mb-5 text-center text-[11px] font-bold uppercase
                        tracking-[0.2em] text-white/35">
            Apps We Build
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {appTypes.map(({ icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-full border border-white/[0.1]
                           bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-white/75"
              >
                <span>{icon}</span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECH STACK ══ */}
      <section className="border-b border-white/[0.08] py-6">
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
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-12 text-center">
          <SectionBadge>What We Offer</SectionBadge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            App Development Services
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
            Native, cross-platform, or web — we build the right app for your audience and budget.
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

      {/* ══ PROCESS ══ */}
      <section id="process" className="border-y border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-12 text-center">
            <SectionBadge>Our Process</SectionBadge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From Idea to App Store
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/60">
              A battle-tested 5-step process that delivers quality apps on time, every time.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={cardVariant}
                className="relative rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 text-center"
              >
                {/* Connector arrow between steps (desktop only) */}
                {i < processSteps.length - 1 && (
                  <div
                    className="absolute -right-2 top-1/2 hidden -translate-y-1/2
                               text-white/20 lg:block"
                    aria-hidden
                  >
                    →
                  </div>
                )}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center
                                rounded-xl bg-violet-500/15 text-2xl ring-1 ring-violet-400/20">
                  {step.icon}
                </div>
                <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ea580c]/80">
                  Step {step.step}
                </div>
                <h3 className="mb-2 text-[16px] font-semibold text-white">{step.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/55">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {[
            { num: "80+", label: "Apps Launched" },
            { num: "5M+", label: "Total App Downloads" },
            { num: "4.8★", label: "Average App Rating" },
            { num: "48hrs", label: "First Prototype Delivery" },
          ].map(({ num, label }) => (
            <motion.div
              key={label}
              variants={cardVariant}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center"
            >
              <p className="text-3xl font-bold text-white sm:text-4xl">{num}</p>
              <p className="mt-2 text-[13px] text-white/50">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="border-t border-white/[0.08] bg-gradient-to-b from-transparent to-[#0a0f2c]">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52, ease: "easeInOut" }}
          >
            <SectionBadge>Start Building</SectionBadge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Got an App Idea?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
              Let's turn it into a product your users will love. Book a free strategy call — no obligation.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white
                         px-8 py-4 text-sm font-bold text-[#3b31a1] shadow-lg
                         transition hover:bg-violet-50 sm:text-[15px]"
            >
              Build My App
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}