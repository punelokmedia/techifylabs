"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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
  { label: "Why us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Case studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

const stats = [
  { num: "120+", label: "Amazon campaigns launched" },
  { num: "₹2Cr+", label: "Marketplace ad spend managed" },
  { num: "3.9×", label: "Average attributed ROAS" },
];

const whyUs = [
  { title: "Marketplace-first strategy", desc: "We optimise for rank, share of voice, and profitable growth on Amazon." },
  { title: "Catalog-aware execution", desc: "Ad structure is built around your ASINs, variations, and margin mix." },
  { title: "Retail-ready reporting", desc: "Track ad performance with TACoS, ACOS, and organic lift context." },
  { title: "Fast optimisation cycles", desc: "Search term mining and bid updates done on a tight weekly cadence." },
  { title: "Creative + listing alignment", desc: "We align ad creatives with listing content to improve conversion rate." },
  { title: "Scale with control", desc: "Spend increases are tied to profitability guardrails, not guesswork." },
];

const processSteps = [
  { step: "01", title: "Account & catalog audit", desc: "We review structure, search terms, placements, and budget leak points." },
  { step: "02", title: "ASIN and keyword mapping", desc: "Top opportunities are mapped by category, seasonality, and margin targets." },
  { step: "03", title: "Campaign architecture", desc: "Sponsored Products, Sponsored Brands, and Sponsored Display set up cleanly." },
  { step: "04", title: "Launch with controls", desc: "Bids, negatives, and budgets are launched with clear risk boundaries." },
  { step: "05", title: "Weekly optimisation", desc: "Search term harvesting, bid tuning, and placement adjustments every week." },
  { step: "06", title: "Scale profitable winners", desc: "We double down on profitable clusters and cut non-performing segments." },
];

const adServices = [
  { title: "Sponsored Products", desc: "Core ASIN-level growth campaigns built for intent and conversion.", tags: ["Manual + Auto", "Keyword Mining", "ASIN Targeting"] },
  { title: "Sponsored Brands", desc: "Brand-led campaigns to improve visibility and capture high-value traffic.", tags: ["Store Spotlight", "Video Ads", "Category Defense"] },
  { title: "Sponsored Display", desc: "Retargeting and competitor conquesting to recover lost demand.", tags: ["Views Remarketing", "Audience Segments", "Creative Testing"] },
  { title: "Search Term Optimisation", desc: "Weekly term analysis to improve relevance, CTR, and ACOS control.", tags: ["Negatives", "Bid Rules", "Harvesting"] },
  { title: "Listing Conversion Support", desc: "Actionable recommendations for titles, images, bullets, and A+ flow.", tags: ["CVR Uplift", "Content Gaps", "Offer Clarity"] },
  { title: "Growth Dashboard", desc: "One dashboard for spend, sales, ACOS, TACoS, and organic movement.", tags: ["TACoS", "Profit Lens", "Weekly Review"] },
];

const caseStudies = [
  { brand: "D2C Wellness Brand", tag: "Sponsored Products", desc: "Reduced ACOS by 24% in 6 weeks while increasing daily orders by 41%." },
  { brand: "Home Essentials Seller", tag: "Brands + Display", desc: "Improved category share and scaled monthly revenue from ₹9L to ₹16L." },
  { brand: "Beauty Marketplace Brand", tag: "Catalog Expansion", desc: "Launched 18 ASINs with structured campaigns and reached 3.6× blended ROAS." },
];

const faqs = [
  { q: "How much budget is needed for Amazon Ads?", a: "Most brands see meaningful signal from ₹40,000+ monthly. Exact budget depends on category competition and SKU count." },
  { q: "Do you manage ACOS and TACoS both?", a: "Yes. We manage campaign ACOS while tracking TACoS to ensure ads are helping sustainable overall growth." },
  { q: "Can you handle many products/ASINs?", a: "Yes. We use a structured approach to group ASINs by priority, margin, and lifecycle stage." },
  { q: "How quickly can we expect improvement?", a: "Initial efficiency improvements are often visible in 2-4 weeks, with stronger scale in subsequent cycles." },
  { q: "Do you provide weekly reporting?", a: "Yes. You get concise weekly updates plus monthly strategic planning with clear next actions." },
];

export default function AmazonAdsPage() {
  const reduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-full">
      <section className="relative overflow-hidden bg-[#1a1208] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_25%_-25%,rgba(245,158,11,0.35),transparent_55%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_100%_40%,rgba(251,191,36,0.15),transparent_45%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pt-20">
          <nav className="mb-8 flex flex-wrap items-center gap-2.5 text-[12px] text-white/45 sm:mb-12" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="text-white/25" aria-hidden>/</span>
            <span className="text-white/25">Our Solutions</span>
            <span className="text-white/25" aria-hidden>/</span>
            <span className="font-medium text-white">Amazon Ads</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div initial={reduce ? false : { opacity: 0, y: 22 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[12px] font-medium tracking-wide text-amber-200/90 backdrop-blur-md">
                <span className="relative flex h-2 w-2 shrink-0">
                  {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-40" />}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                Marketplace Growth · Amazon Ads
              </div>
              <h1 className="mt-6 text-balance text-[1.85rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.15rem]">
                Win More Visibility
                <span className="bg-gradient-to-r from-white via-amber-200 to-yellow-100 bg-clip-text text-transparent"> on Amazon Search.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/70 sm:text-[17px]">
                Sponsored Products, Brands, and Display managed as one system. Built to lower wasted spend and scale profitable ASINs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-8 text-sm font-semibold text-[#1f1307] shadow-lg shadow-amber-500/30 transition hover:opacity-90 sm:w-auto">
                  Book Free Strategy Call
                </Link>
                <Link href="#services" className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
                  See what's included
                </Link>
              </div>
            </motion.div>

            <motion.div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8" initial={reduce ? false : { opacity: 0, x: 20 }} animate={reduce ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-200/90">Paid Advertising Services</p>
              <div className="mt-4 space-y-2">
                {[
                  { label: "Meta Ads", href: "/services/meta-ads", active: false },
                  { label: "Google Ads", href: "/services/google-ads", active: false },
                  { label: "Amazon Ads", href: "/services/amazon-ads", active: true },
                ].map((s) => (
                  <Link key={s.label} href={s.href} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${s.active ? "bg-amber-500/25 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${s.active ? "bg-amber-300" : "bg-white/30"}`} />
                    {s.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Contact information</p>
                <div className="mt-3 space-y-2 text-sm text-white/75">
                  <a href="tel:+918956776958" className="block transition hover:text-white">+91 8956776958</a>
                  <a href="mailto:info@techifylabs.in" className="block transition hover:text-white">info@techifylabs.in</a>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a href="tel:+918956776958" className="rounded-lg bg-white/10 px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-white/15">Call now</a>
                  <a href="/contact" className="rounded-lg bg-amber-500/90 px-3 py-2 text-center text-xs font-semibold text-[#1f1307] transition hover:bg-amber-400">Get proposal</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#1a1208] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-3 gap-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0">
                <p className="text-2xl font-semibold text-white sm:text-3xl">{s.num}</p>
                <p className="mt-1 text-[12px] text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-[8rem] z-30 border-y border-slate-200/70 bg-white/90 py-2.5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 sm:px-8 lg:px-10">
          {quickNav.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-amber-300 hover:text-amber-700">
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <section id="why-us" className="border-t border-slate-200/60 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600/90">Why choose us</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Amazon Ads built for profitable marketplace growth</h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-amber-50/40 p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md">
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-amber-50/30 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600/90">Our process</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">A structured Amazon Ads workflow</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                  <span className="text-4xl font-bold text-amber-100 sm:text-5xl">{s.step}</span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-slate-200/60 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600/90">What's included</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Amazon Ads services we offer</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adServices.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md">
                  <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-700">{tag}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="border-t border-slate-200/60 bg-slate-50 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600/90">Case studies</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Results from marketplace brands</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <FadeIn key={c.brand} delay={0.06 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
                  <span className="inline-flex self-start rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-700">{c.tag}</span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{c.brand}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                  <Link href="/contact" className="mt-6 text-xs font-semibold text-amber-700 hover:text-amber-800">Get similar results →</Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-slate-200/60 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600/90">FAQ</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Frequently asked questions</h2>
          </FadeIn>
          <div className="mt-8 space-y-3 sm:mt-10">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <FadeIn key={item.q} delay={0.04 * i}>
                  <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/40 shadow-sm sm:rounded-2xl">
                    <button type="button" onClick={() => setOpenFaq(open ? null : i)} className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition hover:bg-slate-50/80 sm:px-6 sm:py-5">
                      <span className="text-[14px] font-semibold text-slate-900 sm:text-[15px]">{item.q}</span>
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${open ? "rotate-180 border-amber-200 bg-amber-50 text-amber-700" : "border-slate-200 bg-white text-slate-500"}`}>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease }} className="overflow-hidden">
                          <p className="border-t border-slate-100 px-4 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6">{item.a}</p>
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

      <section className="border-t border-slate-200/80 bg-[#1a1208] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Ready to scale on Amazon?</h2>
            <p className="mt-4 text-[15px] text-white/65">Book a strategy call and get a practical plan for spend, structure, and profitable growth.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 px-10 text-sm font-semibold text-[#1f1307] shadow-lg shadow-amber-500/30">
                Book Free Strategy Call
              </Link>
              <Link href="/services/google-ads" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 text-sm font-semibold text-white">
                See Google Ads →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
