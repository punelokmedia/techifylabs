"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Variants } from "framer-motion";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: "easeInOut" },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: "easeInOut" },
  },
};

// ── DATA ─────────────────────────────────────────────────────

const services = [
  {
    icon: "🍎",
    title: "iOS App Development",
    description:
      "Native Swift/SwiftUI apps for iPhone and iPad — fast, polished, and App Store ready.",
  },
  {
    icon: "🤖",
    title: "Android App Development",
    description:
      "Kotlin-based Android apps designed for all screen sizes and Android versions from 8+.",
  },
  {
    icon: "⚛️",
    title: "React Native Apps",
    description:
      "One codebase, two platforms. Cost-effective cross-platform apps without compromising quality.",
  },
  {
    icon: "🌐",
    title: "Progressive Web Apps",
    description:
      "App-like experiences in the browser — installable, offline-capable, and blazing fast.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    description:
      "Engage users with timely, personalised push notifications that drive retention and repeat visits.",
  },
  {
    icon: "🔄",
    title: "App Maintenance & Updates",
    description:
      "OS compatibility updates, bug fixes, and new feature releases — we keep your app running smoothly.",
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
  {
    step: "01",
    icon: "💡",
    title: "Ideation",
    desc: "Requirements gathering, feature scoping, and technical planning.",
  },
  {
    step: "02",
    icon: "🖼️",
    title: "UI/UX Design",
    desc: "Wireframes, user flows, and pixel-perfect interactive prototypes.",
  },
  {
    step: "03",
    icon: "⚙️",
    title: "Development",
    desc: "Agile sprints with weekly demo updates and transparent progress.",
  },
  {
    step: "04",
    icon: "🧪",
    title: "Testing & QA",
    desc: "Rigorous testing across real devices, OS versions, and edge cases.",
  },
  {
    step: "05",
    icon: "🚀",
    title: "Launch",
    desc: "App Store & Play Store submission, ASO, and go-live support.",
  },
];

const techStack = [
  { name: "React Native", color: "bg-sky-50 text-sky-700 ring-sky-200" },
  {
    name: "Swift / SwiftUI",
    color: "bg-orange-50 text-orange-700 ring-orange-200",
  },
  { name: "Kotlin", color: "bg-purple-50 text-purple-700 ring-purple-200" },
  { name: "Expo", color: "bg-gray-100 text-gray-700 ring-gray-200" },
  { name: "Firebase", color: "bg-yellow-50 text-yellow-700 ring-yellow-200" },
  { name: "Node.js", color: "bg-green-50 text-green-700 ring-green-200" },
  { name: "GraphQL", color: "bg-pink-50 text-pink-700 ring-pink-200" },
  { name: "AWS / GCP", color: "bg-blue-50 text-blue-700 ring-blue-200" },
];

// ── SMALL REUSABLE COMPONENTS ────────────────────────────────

// Hero badge — keeps dark styling (used only in hero)
function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2">
      <span className="h-2 w-2 rounded-[2px] bg-[#ea580c] shadow-[0_0_10px_rgba(234,88,12,0.5)]" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
        {children}
      </span>
    </div>
  );
}

// Section badge — light styling for below-hero sections
function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2">
      <span className="h-2 w-2 rounded-[2px] bg-[#ea580c]" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">
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
      className="group rounded-2xl border border-gray-200 bg-white p-6
                 transition-all hover:border-violet-200 hover:shadow-md"
    >
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl
                      bg-violet-50 text-2xl ring-1 ring-violet-200
                      transition-colors group-hover:bg-violet-100"
      >
        {icon}
      </div>
      <h3 className="mb-2 text-[17px] font-semibold text-gray-900">{title}</h3>
      <p className="text-[14px] leading-relaxed text-gray-500">{description}</p>
    </motion.div>
  );
}

// ── PAGE COMPONENT ───────────────────────────────────────────

export default function AppDevelopmentPage() {
  return (
    <main className="min-h-screen text-white">
      {/* ══ HERO — UNCHANGED ══ */}
      <section
        className="relative overflow-hidden border-b border-white/[0.08] rounded-b-[1.75rem]
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
            <motion.div variants={cardVariant}>
              <HeroBadge>App Development</HeroBadge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Mobile Apps That{" "}
              <span
                className="bg-gradient-to-r from-white via-violet-100 to-violet-300
                               bg-clip-text text-transparent"
              >
                Users Love to Open
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.14}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              We build iOS, Android, and cross-platform mobile applications that
              are intuitive, performant, and designed to keep users coming back
              every single day.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.22}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-6 py-3
                           text-sm font-bold text-white shadow-md ring-1 ring-white/40
                           transition hover:bg-violet-400 hover:shadow-lg sm:px-8 sm:text-[15px]"
              >
                Build Your App
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
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

      {/* ══ APP TYPES STRIP ══ */}
      <section className="border-b border-gray-200 bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Apps We Build
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {appTypes.map(({ icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-full border border-gray-200
                           bg-white px-4 py-2 text-[13px] font-medium text-gray-700"
              >
                <span>{icon}</span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECH STACK ══ */}
      <section className="border-b border-gray-200 bg-white py-6">
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

      {/* ══ SERVICES GRID ══ */}
      <section className="bg-white mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-12 text-center">
          <SectionBadge>What We Offer</SectionBadge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            App Development Services
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-gray-500">
            Native, cross-platform, or web — we build the right app for your
            audience and budget.
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
      <section id="process" className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-12 text-center">
            <SectionBadge>Our Process</SectionBadge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From Idea to App Store
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-gray-500">
              A battle-tested 5-step process that delivers quality apps on time,
              every time.
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
                className="relative rounded-2xl border border-gray-200 bg-white p-6 text-center"
              >
                {i < processSteps.length - 1 && (
                  <div
                    className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-gray-300 lg:block"
                    aria-hidden
                  >
                    →
                  </div>
                )}
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center
                                rounded-xl bg-violet-50 text-2xl ring-1 ring-violet-200"
                >
                  {step.icon}
                </div>
                <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ea580c]">
                  Step {step.step}
                </div>
                <h3 className="mb-2 text-[16px] font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-500">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="bg-white mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
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
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center"
            >
              <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {num}
              </p>
              <p className="mt-2 text-[13px] text-gray-500">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52, ease: "easeInOut" }}
          >
            <SectionBadge>Start Building</SectionBadge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Got an App Idea?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-gray-500">
              Let's turn it into a product your users will love. Book a free
              strategy call — no obligation.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900
                         px-8 py-4 text-sm font-bold text-white shadow-lg
                         transition hover:bg-gray-800 sm:text-[15px]"
            >
              Build My App
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
