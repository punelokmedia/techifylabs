"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import ServiceAdsInsights from "../../components/ServiceAdsInsights";
import ServiceIndustriesSection, {
  type IndustryCard,
} from "../../components/ServiceIndustriesSection";
import { photos } from "@/app/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const quickNav = [
  { label: "Reporting", href: "#insights" },
  { label: "Industries", href: "#industries" },
  { label: "Why us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Case studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

const industries: IndustryCard[] = [
  {
    title: "Beauty & personal care",
    tagline:
      "Sponsored Brands, defence keywords, and ACOS control for fast-moving SKUs.",
    icon: "sparkle",
  },
  {
    title: "Home & kitchen",
    tagline:
      "Placement reviews, category growth, and basket economics that protect margin.",
    icon: "home",
  },
  {
    title: "Fashion & accessories",
    tagline:
      "Variant-rich catalogues with clean SP structure and search-term harvesting.",
    icon: "fashion",
  },
  {
    title: "Health & wellness",
    tagline:
      "Listing–ad alignment, compliant claims, and profitable new-to-brand mix.",
    icon: "health",
  },
  {
    title: "Consumer electronics",
    tagline:
      "Conquesting and defence with bid rules that respect thin margins.",
    icon: "tech",
  },
  {
    title: "Baby & family",
    tagline:
      "Lifecycle-led keywords, safe budgets, and repeat purchase signals.",
    icon: "family",
  },
  {
    title: "Sports & outdoors",
    tagline: "Seasonal demand maps with fresh creative and keyword refreshes.",
    icon: "sport",
  },
  {
    title: "Grocery & consumables",
    tagline:
      "Subscribe-aware pacing, TACoS visibility, and replenishment cohorts.",
    icon: "food",
  },
  {
    title: "D2C & emerging brands",
    tagline:
      "Launch ladders for new ASINs - from discovery to disciplined scale.",
    icon: "rocket",
  },
];

const stats = [
  { num: "120+", label: "Amazon campaigns launched" },
  { num: "₹2Cr+", label: "Marketplace ad spend managed" },
  { num: "3.9×", label: "Average attributed ROAS" },
];

const whyUs = [
  {
    title: "Marketplace-first strategy",
    desc: "We optimise for rank, share of voice, and profitable growth on Amazon.",
  },
  {
    title: "Catalog-aware execution",
    desc: "Ad structure is built around your ASINs, variations, and margin mix.",
  },
  {
    title: "Retail-ready reporting",
    desc: "Track ad performance with TACoS, ACOS, and organic lift context.",
  },
  {
    title: "Fast optimisation cycles",
    desc: "Search term mining and bid updates done on a tight weekly cadence.",
  },
  {
    title: "Creative + listing alignment",
    desc: "We align ad creatives with listing content to improve conversion rate.",
  },
  {
    title: "Scale with control",
    desc: "Spend increases are tied to profitability guardrails, not guesswork.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Account & catalog audit",
    desc: "We review structure, search terms, placements, and budget leak points.",
  },
  {
    step: "02",
    title: "ASIN and keyword mapping",
    desc: "Top opportunities are mapped by category, seasonality, and margin targets.",
  },
  {
    step: "03",
    title: "Campaign architecture",
    desc: "Sponsored Products, Sponsored Brands, and Sponsored Display set up cleanly.",
  },
  {
    step: "04",
    title: "Launch with controls",
    desc: "Bids, negatives, and budgets are launched with clear risk boundaries.",
  },
  {
    step: "05",
    title: "Weekly optimisation",
    desc: "Search term harvesting, bid tuning, and placement adjustments every week.",
  },
  {
    step: "06",
    title: "Scale profitable winners",
    desc: "We double down on profitable clusters and cut non-performing segments.",
  },
];

const adServices = [
  {
    title: "Sponsored Products",
    desc: "Core ASIN-level growth campaigns built for intent and conversion.",
    tags: ["Manual + Auto", "Keyword Mining", "ASIN Targeting"],
  },
  {
    title: "Sponsored Brands",
    desc: "Brand-led campaigns to improve visibility and capture high-value traffic.",
    tags: ["Store Spotlight", "Video Ads", "Category Defense"],
  },
  {
    title: "Sponsored Display",
    desc: "Retargeting and competitor conquesting to recover lost demand.",
    tags: ["Views Remarketing", "Audience Segments", "Creative Testing"],
  },
  {
    title: "Search Term Optimisation",
    desc: "Weekly term analysis to improve relevance, CTR, and ACOS control.",
    tags: ["Negatives", "Bid Rules", "Harvesting"],
  },
  {
    title: "Listing Conversion Support",
    desc: "Actionable recommendations for titles, images, bullets, and A+ flow.",
    tags: ["CVR Uplift", "Content Gaps", "Offer Clarity"],
  },
  {
    title: "Growth Dashboard",
    desc: "One dashboard for spend, sales, ACOS, TACoS, and organic movement.",
    tags: ["TACoS", "Profit Lens", "Weekly Review"],
  },
];

const caseStudies = [
  {
    brand: "D2C Wellness Brand",
    tag: "Sponsored Products",
    desc: "Reduced ACOS by 24% in 6 weeks while increasing daily orders by 41%.",
  },
  {
    brand: "Home Essentials Seller",
    tag: "Brands + Display",
    desc: "Improved category share and scaled monthly revenue from ₹9L to ₹16L.",
  },
  {
    brand: "Beauty Marketplace Brand",
    tag: "Catalog Expansion",
    desc: "Launched 18 ASINs with structured campaigns and reached 3.6× blended ROAS.",
  },
];

const faqs = [
  {
    q: "How much budget is needed for Amazon Ads?",
    a: "Most brands see meaningful signal from ₹40,000+ monthly. Exact budget depends on category competition and SKU count.",
  },
  {
    q: "Do you manage ACOS and TACoS both?",
    a: "Yes. We manage campaign ACOS while tracking TACoS to ensure ads are helping sustainable overall growth.",
  },
  {
    q: "Can you handle many products/ASINs?",
    a: "Yes. We use a structured approach to group ASINs by priority, margin, and lifecycle stage.",
  },
  {
    q: "How quickly can we expect improvement?",
    a: "Initial efficiency improvements are often visible in 2-4 weeks, with stronger scale in subsequent cycles.",
  },
  {
    q: "Do you provide weekly reporting?",
    a: "Yes. You get concise weekly updates plus monthly strategic planning with clear next actions.",
  },
];

export default function AmazonAdsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-full">
      <section className="relative overflow-hidden bg-[#050816] text-white">
        {/* Softer gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_25%_-20%,rgba(139,92,246,0.28),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(236,72,153,0.12),transparent_50%)]" />

        {/* divider */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative mx-auto max-w-[1440px] px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pt-20">
          {/* breadcrumb (UNCHANGED) */}
          <nav className="mb-8 flex flex-wrap items-center gap-2.5 text-[12px] text-white/45 sm:mb-12">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="text-white/25">/</span>
            <span className="text-white/25">Our Solutions</span>
            <span className="text-white/25">/</span>
            <span className="font-medium text-white">Amazon Ads</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT (same content, smoother animation) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] text-violet-200 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                </span>
                Marketplace Growth · Amazon Ads
              </div>

              {/* heading (same content, better gradient) */}
              <h1 className="mt-6 text-[1.85rem] font-semibold leading-[1.1] sm:text-5xl lg:text-[3.25rem]">
                Win More Visibility,{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  On Amazon Search
                </span>
              </h1>

              {/* desc */}
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/65 sm:text-[17px]">
                Sponsored Products, Brands, and Display managed as one system.
                Built to lower wasted spend and scale profitable ASINs.
              </p>

              {/* buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:opacity-90 transition"
                >
                  Book Free Strategy Call
                </Link>

                <Link
                  href="#services"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  See what&apos;s included
                </Link>
              </div>

              {/* features */}
              <div className="mt-10 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
                {[
                  "GA4, GTM & conversions validated pre-spend",
                  "Search intent maps + clean account structure",
                  "Optimisation log you can share with leadership",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-2 text-[12px] text-white/55"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CARD (same content, upgraded look) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* ✨ Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/25 to-fuchsia-500/25 blur-2xl rounded-2xl"></div>

              {/* Card (no border) */}
              <div className="relative rounded-2xl bg-white/5 shadow-xl">
                <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
                  <Image
                    src={photos.amazonAds}
                    alt="Ecommerce packaging ready for shipping"
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 to-transparent" /> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10 px-4 sm:px-8 lg:px-10 py-8 bg-white">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-7 shadow-sm sm:rounded-3xl sm:px-10 sm:py-9">
            <p className="mb-5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-left">
              Marketplace advertising footprint
            </p>

            <div className="grid grid-cols-3 gap-2 divide-x divide-slate-200 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="px-2 text-center first:pl-0 last:pr-0 sm:px-4"
                >
                  <p className="text-xl font-semibold tabular-nums tracking-tight text-slate-900 sm:text-3xl">
                    {s.num}
                  </p>

                  <p className="mt-1 text-[11px] font-medium leading-snug text-slate-500 sm:text-[12px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-6 bg-white sm:h-8" aria-hidden />

      <section
        id="insights"
        className="border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="mb-10 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/80">
              Marketplace metrics
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Growth and efficiency on one timeline
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              We connect ad sales to spend and organic movement so you know when
              to scale ASINs or tighten bids. Preview is illustrative; real
              dashboards use your Seller Central / Ads data.
            </p>
          </FadeIn>
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <FadeIn delay={0.05}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-lg ring-1 ring-slate-200/60">
                <Image
                  src={photos.shopify}
                  alt="Retail and marketplace operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent"
                  aria-hidden
                />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white sm:bottom-6 sm:left-6 sm:right-6">
                  Weekly reviews on search terms, placements, and catalogue
                  priorities.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ServiceAdsInsights
                theme="amazon"
                eyebrow="Performance preview"
                title="What good Amazon reporting looks like"
                subtitle="Indexed orders trend with spend mix and a profitability lens (ROAS / ACOS). We tailor exports to how your finance team already thinks."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="sticky top-[var(--site-header-height)] z-30 border-y border-slate-200/70 bg-white/90 py-2.5 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-4 sm:px-8 lg:px-10">
          {quickNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <section
        id="why-us"
        className="border-t border-slate-200/60 bg-white py-12 sm:py-20"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
              Why choose us
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Amazon Ads built for profitable marketplace growth
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-violet-50/40 p-6 shadow-sm transition hover:border-violet-500 hover:shadow-md">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-violet-50/30 py-12 sm:py-20"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
              Our process
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              A structured Amazon Ads workflow
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                  <span className="text-4xl font-bold text-violet-300 sm:text-5xl">
                    {s.step}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-slate-200/60 bg-white py-12 sm:py-20"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
              What&apos;s included
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Amazon Ads services we offer
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adServices.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-violet-400 hover:shadow-md">
                  <h3 className="text-base font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ServiceIndustriesSection
        theme="amazon"
        items={industries}
        headline="Categories we grow on Amazon"
        subhead="Share of voice, catalog complexity, and margin profiles differ by aisle - we tune structure and bids for your reality."
      />

      <section
        id="case-studies"
        className="border-t border-slate-200/60 bg-slate-50 py-12 sm:py-20"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-500/80">
              Case studies
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Results from marketplace brands
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <FadeIn key={c.brand} delay={0.06 * i}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-violet-500 before:via-fuchsia-500 before:to-violet-400/40 sm:rounded-3xl sm:p-8">
                  <span className="inline-flex self-start rounded-full bg-violet-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-violet-700">
                    {c.tag}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {c.brand}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {c.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 text-xs font-semibold text-violet-500 hover:text-violet-800"
                  >
                    Get similar results →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-slate-200/60 bg-white py-12 sm:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
              FAQ
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Frequently asked questions
            </h2>
          </FadeIn>
          <div className="mt-8 space-y-3 sm:mt-10">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <FadeIn key={item.q} delay={0.04 * i}>
                  <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/40 shadow-sm sm:rounded-2xl">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition hover:bg-slate-50/80 sm:px-6 sm:py-5"
                    >
                      <span className="text-[14px] font-semibold text-slate-900 sm:text-[15px]">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${open ? "rotate-180 border-violet-400 bg-violet-50 text-violet-700" : "border-slate-200 bg-white text-slate-500"}`}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease }}
                          className="overflow-hidden"
                        >
                          <p className="border-t border-slate-100 px-4 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-300/80 bg-gray-200 py-16 text-black">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Ready to scale on Amazon?
            </h2>
            <p className="mt-4 text-[15px] text-black">
              Book a free strategy call - we&apos;ll come back with a clear plan,
              realistic scope, and how we&apos;d measure success.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:opacity-80"
              >
                Book Free Strategy Call
              </Link>
              <Link
                href="/services/google-ads"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-black px-10 text-sm font-semibold text-white hover:bg-gray-800"
              >
                See Google Ads →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
