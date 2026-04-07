"use client";

import { easeInOut, motion ,Variants } from "framer-motion";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────
// FILE: app/services/shopify-development/page.tsx
// ─────────────────────────────────────────────────────────────

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: easeInOut, } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── DATA ─────────────────────────────────────────────────────

const services = [
  {
    icon: "🏪",
    title: "Store Setup & Configuration",
    description: "Full Shopify store setup — domain, payment gateway, taxes, shipping zones, and collections.",
  },
  {
    icon: "🎨",
    title: "Custom Theme Design",
    description: "Unique, brand-aligned Shopify themes built from scratch or customised from premium templates.",
  },
  {
    icon: "💰",
    title: "Conversion Optimisation",
    description: "CRO-focused UX decisions that maximise your add-to-cart and checkout rates.",
  },
  {
    icon: "🔗",
    title: "App Integration",
    description: "Reviews, loyalty programs, upsells, email marketing — we integrate the right Shopify apps.",
  },
  {
    icon: "📦",
    title: "Product & Inventory Setup",
    description: "Bulk product imports, variant setup, smart collections, and inventory management.",
  },
  {
    icon: "📊",
    title: "Analytics & Tracking",
    description: "Google Analytics 4, Meta Pixel, and custom dashboards to track every sale and session.",
  },
];

const whyShopify = [
  "Hosted & maintained by Shopify — zero server headache",
  "Built-in payment processing with Shopify Payments",
  "100+ payment gateways supported globally",
  "Abandoned cart recovery to win back lost sales",
  "Mobile app to manage your store on the go",
  "SEO-friendly URLs, sitemaps, and meta tags built-in",
  "8,000+ apps in the Shopify App Store",
  "Scales from startup to enterprise (Shopify Plus)",
];

const plans = [
  {
    name: "Starter Store",
    price: "₹25,000",
    features: ["Theme setup", "Up to 50 products", "Payment gateway", "Basic apps setup"],
    highlight: false,
  },
  {
    name: "Custom Store",
    price: "₹60,000",
    features: ["Custom theme design", "Unlimited products", "Full app integrations", "CRO setup", "Analytics"],
    highlight: true,
  },
  {
    name: "Shopify Plus",
    price: "Custom",
    features: ["Enterprise setup", "Headless Shopify", "B2B / wholesale", "Dedicated support"],
    highlight: false,
  },
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

export default function ShopifyDevelopmentPage() {
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
              <SectionBadge>Shopify Development</SectionBadge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
            //   custom={0.06}
              className="mt-3 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Shopify Stores Built{" "}
              <span className="bg-gradient-to-r from-white via-violet-100 to-violet-300
                               bg-clip-text text-transparent">
                To Sell, Not Just Look Good
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.14}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              As official Shopify Partners, we build custom B2B and B2C stores that drive sales,
              delight shoppers, and scale effortlessly with your business — from setup to Shopify Plus.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.22} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3
                           text-sm font-bold text-[#3b31a1] shadow-md ring-1 ring-white/40
                           transition hover:bg-violet-50 hover:shadow-lg sm:px-8 sm:text-[15px]"
              >
                Launch Your Store
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20
                           bg-white/10 px-6 py-3 text-sm font-semibold text-white
                           backdrop-blur-sm transition hover:bg-white/15 sm:px-8 sm:text-[15px]"
              >
                See What We Offer
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="mt-14 flex flex-wrap gap-8 border-t border-white/[0.1] pt-10"
            >
              {[
                { num: "5+ yrs", label: "Shopify Experience" },
                { num: "80+", label: "Stores Launched" },
                { num: "Official", label: "Shopify Partner" },
                { num: "B2B + B2C", label: "Store Types Built" },
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

      {/* ══ OFFICIAL PARTNER BADGE ══ */}
      <section className="border-b border-white/[0.08] bg-white/[0.02] py-8">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-violet-400/25
                          bg-violet-500/10 px-6 py-3 ring-1 ring-violet-400/10">
            <span className="text-xl">🏆</span>
            <span className="text-[14px] font-semibold text-white/90">
              Official Shopify Partner & Certified Developers
            </span>
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID ══ */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-12 text-center">
          <SectionBadge>Shopify Services</SectionBadge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything for Your Store
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
            From initial setup to ongoing growth — we cover every aspect of your Shopify journey.
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

      {/* ══ WHY SHOPIFY ══ */}
      <section className="border-y border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionBadge>Why Shopify?</SectionBadge>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The World's Best{" "}
                <span className="bg-gradient-to-r from-white via-violet-100 to-violet-300
                                 bg-clip-text text-transparent">
                  eCommerce Platform
                </span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/65">
                Shopify powers over 4 million businesses worldwide. It's secure, fast, and comes
                with everything you need to sell — online, in-person, and everywhere in between.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white
                           px-7 py-3.5 text-sm font-bold text-[#3b31a1] transition hover:bg-violet-50"
              >
                Migrate to Shopify
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-3"
            >
              {whyShopify.map((point) => (
                <motion.li
                  key={point}
                  variants={cardVariant}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.07]
                             bg-white/[0.03] px-4 py-3.5"
                >
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#ea580c]/90" aria-hidden />
                  <span className="text-[14px] leading-snug text-white/75">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-12 text-center">
          <SectionBadge>Pricing</SectionBadge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Store Packages
          </h2>
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
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 380, damping: 24 } }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-violet-400/40 bg-gradient-to-b from-violet-500/[0.12] to-violet-500/[0.04]"
                  : "border-white/[0.1] bg-white/[0.03]"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#3b31a1]
                                 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em]
                                 text-violet-200 ring-1 ring-violet-400/30">
                  Most Popular
                </span>
              )}
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/45">
                {plan.name}
              </p>
              <p className="mt-3 text-4xl font-bold text-white">{plan.price}</p>
              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[14px] text-white/75">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ea580c]/90" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${
                  plan.highlight
                    ? "bg-white text-[#3b31a1] hover:bg-violet-50"
                    : "border border-white/20 bg-white/[0.06] text-white hover:bg-white/10"
                }`}
              >
                Get Started
              </Link>
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
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionBadge>Ready to Launch?</SectionBadge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Build Your Shopify Store
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
              Book a free consultation and let's design a store that turns visitors into customers.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white
                         px-8 py-4 text-sm font-bold text-[#3b31a1] shadow-lg
                         transition hover:bg-violet-50 sm:text-[15px]"
            >
              Launch Your Store Today
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}