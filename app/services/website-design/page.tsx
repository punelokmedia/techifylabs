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

const features = [
  {
    icon: "🖼️",
    title: "Custom UI/UX Design",
    description:
      "Every pixel crafted to reflect your brand. We design intuitive interfaces your users will love to navigate.",
  },
  {
    icon: "📱",
    title: "Mobile-First Responsive",
    description:
      "Your site looks flawless on phones, tablets, and desktops. We start with mobile and scale up.",
  },
  {
    icon: "🎨",
    title: "Brand Identity Integration",
    description:
      "Your logo, colors, typography, and tone woven seamlessly into every component of the design.",
  },
  {
    icon: "⚡",
    title: "Performance-Optimised",
    description:
      "Fast load times, optimised assets, and Lighthouse-ready code that reduces bounce rates.",
  },
  {
    icon: "♿",
    title: "Accessibility (WCAG)",
    description:
      "Inclusive designs that meet WCAG standards — ensuring every visitor can use your site.",
  },
  {
    icon: "🔄",
    title: "Unlimited Revisions",
    description:
      "We iterate until you're 100% satisfied. Your vision drives every design decision we make.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "30-min free session to understand your goals, audience, and brand.",
  },
  {
    step: "02",
    title: "Wireframing",
    desc: "Low-fidelity blueprints of every page layout and user flow.",
  },
  {
    step: "03",
    title: "Visual Design",
    desc: "Full-color, pixel-perfect mockups built in Figma for your approval.",
  },
  {
    step: "04",
    title: "Handoff / Build",
    desc: "Design files delivered — or we build it for you end-to-end.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    features: [
      "5-page design",
      "Mobile responsive",
      "2 revisions",
      "Figma file included",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "₹35,000",
    features: [
      "10-page design",
      "UI component library",
      "5 revisions",
      "Brand guidelines",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited pages",
      "Full design system",
      "Unlimited revisions",
      "Dedicated designer",
    ],
    highlight: false,
  },
];

// ── SMALL REUSABLE COMPONENTS ────────────────────────────────

// Dark badge — used in hero (unchanged)
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

// Light badge — used below hero
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

// FeatureCard — light theme
function FeatureCard({
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

export default function WebsiteDesignPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ══════════════════════════════════════════
          HERO SECTION — UNCHANGED
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden rounded-b-[1.75rem] border-b border-white/[0.08]
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
              <SectionBadgeDark>Website Design</SectionBadgeDark>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.06}
              className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-white"
            >
              Beautiful Designs That{" "}
              <span
                className="bg-gradient-to-r from-white via-violet-100 to-violet-300
                               bg-clip-text text-transparent"
              >
                Convert Visitors
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.14}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              We design stunning, user-friendly websites that make your brand
              unforgettable and turn visitors into loyal customers — from
              wireframe to pixel-perfect Figma.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.22}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden
                           rounded-full bg-violet-500 px-6 py-3 text-sm font-bold text-black
                           shadow-md ring-1 ring-white/40 transition hover:bg-violet-50
                           hover:shadow-lg sm:px-8 sm:text-[15px]"
              >
                Get a Design Quote
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
                See Our Process
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-14 flex flex-wrap gap-8 border-t border-white/[0.1] pt-10"
            >
              {[
                { num: "120+", label: "Designs Delivered" },
                { num: "98%", label: "Client Satisfaction" },
                { num: "5★", label: "Average Rating" },
                { num: "2 wks", label: "Avg. Turnaround" },
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

      {/* ══════════════════════════════════════════
          FEATURES GRID — WHITE THEME
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-12 text-center">
          <SectionBadge>What&apos;s Included</SectionBadge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Design Services
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-gray-500">
            Everything you need to launch a website that looks great and
            performs even better.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS SECTION — WHITE THEME
      ══════════════════════════════════════════ */}
      <section id="process" className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-12 text-center">
            <SectionBadge>Our Process</SectionBadge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                variants={cardVariant}
                className="relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                {/* Step number — large faded as bg decoration */}
                <span
                  className="pointer-events-none absolute right-5 top-4 select-none
                                 text-6xl font-black text-gray-100"
                >
                  {p.step}
                </span>
                {/* Orange dot connector line except on last */}
                {i < process.length - 1 && (
                  <div
                    className="absolute -right-2.5 top-1/2 hidden h-px w-5 -translate-y-1/2
                               bg-[#ea580c]/40 lg:block"
                    aria-hidden
                  />
                )}
                <div className="mb-4 flex items-center gap-2.5">
                  <span
                    className="h-2 w-2 rounded-[2px] bg-[#ea580c]"
                    aria-hidden
                  />
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400">
                    Step {p.step}
                  </span>
                </div>
                <h3 className="mb-2 text-[17px] font-semibold text-gray-900">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-500">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING SECTION — WHITE THEME
      ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-12 text-center">
          <SectionBadge>Pricing</SectionBadge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transparent, Flat Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] text-gray-500">
            No hidden fees. Pick the plan that fits your business.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariant}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 380, damping: 24 },
              }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-violet-300 bg-gradient-to-b from-violet-50 to-white shadow-md"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              {plan.highlight && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full
                                 bg-[#3b31a1] px-3 py-1 text-[11px] font-bold
                                 uppercase tracking-[0.12em] text-white
                                 ring-1 ring-violet-300"
                >
                  Most Popular
                </span>
              )}
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                {plan.name}
              </p>
              <p className="mt-3 text-4xl font-bold text-gray-900">
                {plan.price}
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-[14px] text-gray-600"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ea580c]/90"
                      aria-hidden
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-bold
                            transition ${
                              plan.highlight
                                ? "bg-[#3b31a1] text-white hover:bg-[#2f278f]"
                                : "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                            }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA BANNER — WHITE THEME
      ══════════════════════════════════════════ */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionBadge>Ready to Start?</SectionBadge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let&apos;s Build Something Memorable
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-gray-500">
              Book a free consultation and let&apos;s design a website that grows
              your business.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#3b31a1]
                         px-8 py-4 text-sm font-bold text-white shadow-lg
                         transition hover:bg-[#2f278f] hover:shadow-xl sm:text-[15px]"
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
