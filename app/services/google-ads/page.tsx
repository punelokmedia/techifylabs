"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import ServiceAdsInsights from "../../components/ServiceAdsInsights";
import ServiceIndustriesSection, { type IndustryCard } from "../../components/ServiceIndustriesSection";

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

const whyUs = [
  { title: "Certified Google Experts", desc: "Hands-on experience with Search, Shopping, PMax, Display, and YouTube — across all campaign types." },
  { title: "Proven Track Record", desc: "Higher ROI delivered consistently across industries with transparent reporting and real numbers." },
  { title: "Campaigns Built for Your Industry", desc: "Customised strategy for your audience, not a copy-paste template from another account." },
  { title: "Full Tracking Setup", desc: "GA4, GTM, and enhanced conversions done right so bidding algorithms optimise on real data." },
  { title: "Support for All Sizes", desc: "From startups to enterprises — we scale strategy and spend to match where you are." },
  { title: "Fast Response Time", desc: "Average response time under 30 minutes. Concerns are addressed swiftly, not stuck in a queue." },
];

const processSteps = [
  { step: "01", title: "Goal & Budget Analysis", desc: "We understand your targets, margins, and what a profitable conversion looks like for your business." },
  { step: "02", title: "Keyword & Competitor Research", desc: "High-intent keyword mapping, match types, and negative lists built to attract buyers, not just traffic." },
  { step: "03", title: "Campaign Structure", desc: "Clean account architecture — search, shopping, PMax, and display separated with purpose." },
  { step: "04", title: "Tracking & Launch", desc: "GA4, GTM, and conversion tracking verified before we spend a single rupee on ads." },
  { step: "05", title: "Optimisation & Testing", desc: "Bid strategy, ad copy testing, and Quality Score improvements — weekly, not monthly." },
  { step: "06", title: "Reporting & Next Steps", desc: "Impression share, ROAS, CPA, and CPC — reported simply with clear actions for the next period." },
];

const adServices = [
  {
    title: "Search Campaigns",
    desc: "Keyword research, match types, and negative lists built to capture high-intent buyers — not just traffic.",
    tags: ["Exact Match", "Phrase Match", "Negative Keywords"],
  },
  {
    title: "Performance Max",
    desc: "PMax campaigns structured with strong asset groups and audience signals so Google's automation works for your goals.",
    tags: ["Asset Groups", "Audience Signals", "Smart Bidding"],
  },
  {
    title: "Shopping & Product Ads",
    desc: "Product feed optimisation, Merchant Centre setup, and shopping campaigns that drive profitable e-commerce revenue.",
    tags: ["Feed Optimisation", "Merchant Centre", "Product Listings"],
  },
  {
    title: "Display & Retargeting",
    desc: "Retargeting and awareness campaigns across Google's network — reaching warm audiences where they spend time.",
    tags: ["Website Visitors", "Custom Intent", "Remarketing Lists"],
  },
  {
    title: "YouTube Advertising",
    desc: "In-stream and discovery ads that put your brand in front of buyers actively researching your category.",
    tags: ["In-Stream Ads", "Discovery Ads", "Video Action"],
  },
  {
    title: "Conversion Tracking Setup",
    desc: "GA4, Google Tag Manager, and enhanced conversions set up properly — no more flying blind on bidding.",
    tags: ["GA4 Setup", "GTM", "Enhanced Conversions"],
  },
];

const industries: IndustryCard[] = [
  { title: "Fashion & apparel", tagline: "Shopping, PMax, and search coverage for high-margin SKUs and seasons.", icon: "fashion" },
  { title: "E-commerce & retail", tagline: "Merchant Centre health, feed rules, and intent keywords that convert.", icon: "cart" },
  { title: "Real estate & projects", tagline: "Local campaigns, extensions, and landing paths tuned for qualified calls.", icon: "building" },
  { title: "Healthcare & clinics", tagline: "Compliant copy variants with clear services and appointment intent.", icon: "health" },
  { title: "Education & admissions", tagline: "Search queries that signal enrolment intent — not tyre-kicker traffic.", icon: "education" },
  { title: "B2B technology", tagline: "High-intent funnels with measured SQLs and pipeline-friendly bidding.", icon: "tech" },
  { title: "Food, QSR & hospitality", tagline: "Near-me demand, promotions, and store-visit aligned creatives.", icon: "food" },
  { title: "Professional services", tagline: "Lead forms and call ads optimised for cost-per-qualified lead.", icon: "briefcase" },
  { title: "SaaS & subscriptions", tagline: "Trials, demos, and brand + performance balance across the funnel.", icon: "cloud" },
];

const caseStudies = [
  {
    brand: "B2B SaaS Platform",
    tag: "Search + RLSA",
    desc: "Rebuilt keyword structure, cut wasted spend by 38%, and launched RLSA campaigns targeting previous visitors — achieving ₹210 CPL.",
  },
  {
    brand: "Home Décor Brand",
    tag: "Shopping + PMax",
    desc: "Feed optimisation and PMax with strong asset groups scaled profitably from ₹80k to ₹3L/month ad spend at 4.6× ROAS.",
  },
  {
    brand: "Local Services Business",
    tag: "Local Search",
    desc: "Local search campaigns with call extensions and location targeting cut cost-per-lead by 62% within 45 days.",
  },
];

const stats = [
  { num: "150+", label: "Campaigns launched" },
  { num: "₹3Cr+", label: "Ad spend managed" },
  { num: "4.1×", label: "Average ROAS" },
];

const first30Days = [
  "Full account + tracking audit with wasted-spend findings",
  "Campaign rebuild plan with keyword and audience priorities",
  "Landing page and offer feedback to improve conversion rate",
  "Weekly optimisation cadence with clear action log",
];

const whyClientsStay = [
  { title: "No black-box reporting", desc: "You see exactly what changed, why it changed, and what we test next." },
  { title: "Business-first optimisation", desc: "We optimise around margin and lead quality, not just low CPC vanity wins." },
  { title: "Fast communication", desc: "Quick response on blockers, budget shifts, and urgent performance drops." },
];

const quickNav = [
  { label: "Reporting", href: "#insights" },
  { label: "Industries", href: "#industries" },
  { label: "Why us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Case studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

const faqs = [
  {
    q: "How is Google Ads different from Meta Ads?",
    a: "Google captures intent — people actively searching for what you sell. Meta creates demand by interrupting people in their feed. Both work best together, but Google often delivers faster results for high-intent buyers.",
  },
  {
    q: "How much should I spend on Google Ads?",
    a: "We recommend starting with at least ₹40,000–60,000 per month for meaningful Search data. Shopping and PMax may need more depending on your catalogue size.",
  },
  {
    q: "Do you handle Google Shopping and Merchant Centre?",
    a: "Yes — feed optimisation, Merchant Centre setup, and Shopping campaign management are all included in our e-commerce packages.",
  },
  {
    q: "How soon will I see results from Google Ads?",
    a: "Search campaigns typically show traction within 1–2 weeks. PMax and Shopping take 3–4 weeks to exit the learning phase and stabilise.",
  },
  {
    q: "Do you set up GA4 and conversion tracking?",
    a: "Always. We set up GA4, Google Tag Manager, and enhanced conversions before spending a single rupee — clean data is non-negotiable.",
  },
];

export default function GoogleAdsPage() {
  const reduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-full">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050816] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_30%_-30%,rgba(59,130,246,0.35),transparent_55%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(16,185,129,0.12),transparent_45%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1440px] px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pt-20">
          <nav className="mb-8 flex flex-wrap items-center gap-2.5 text-[12px] text-white/45 sm:mb-12" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="text-white/25" aria-hidden>/</span>
            <span className="text-white/25">Our Solutions</span>
            <span className="text-white/25" aria-hidden>/</span>
            <span className="font-medium text-white">Google Ads</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[12px] font-medium tracking-wide text-blue-200/90 backdrop-blur-md">
                <span className="relative flex h-2 w-2 shrink-0">
                  {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </span>
                Performance Marketing · Google & YouTube
              </div>
              <h1 className="mt-6 text-balance text-[1.85rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
                When They Search,{" "}
                <span className="bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent">
                  You Show Up First.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/65 sm:text-[17px]">
                Search, Shopping, PMax, Display, and YouTube — managed end to end. Every rupee of ad spend working harder for your business.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 sm:w-auto"
                >
                  Book Free Strategy Call
                </Link>
                <Link
                  href="#services"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  See what's included
                </Link>
              </div>
              <div className="mt-10 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
                {[
                  { t: "GA4, GTM & conversions validated pre-spend", c: "text-emerald-300/90" },
                  { t: "Search intent maps + clean account structure", c: "text-blue-300/90" },
                  { t: "Optimisation log you can share with leadership", c: "text-teal-300/90" },
                ].map((x) => (
                  <div key={x.t} className="flex items-start gap-2 text-[12px] leading-snug text-white/55">
                    <svg className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${x.c}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>{x.t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar contact card */}
            <motion.div
              className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md ring-1 ring-white/10 sm:p-8"
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={reduce ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <div className="relative -mx-1 mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/9]">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85"
                  alt="Search and analytics dashboard context"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-[#050816]/10 to-transparent" aria-hidden />
                <span className="absolute bottom-3 left-3 right-3 text-[11px] font-medium text-white/90">
                  Search, PMax, and Shopping tracked against real conversion value.
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300/90">Paid Advertising Services</p>
              <div className="mt-4 space-y-2">
                {[
                  { label: "Meta Ads", href: "/services/meta-ads", active: false },
                  { label: "Google Ads", href: "/services/google-ads", active: true },
                  { label: "Amazon Ads", href: "/services/amazon-ads", active: false },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${s.active ? "bg-blue-600/30 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${s.active ? "bg-blue-400" : "bg-white/30"}`} />
                    {s.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Contact information</p>
                <div className="mt-3 space-y-2">
                  <a href="tel:+918956776951" className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                    +91 8956776951
                  </a>
                  <a href="mailto:info@techifylabs.in" className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    info@techifylabs.in
                  </a>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a href="tel:+918956776951" className="rounded-lg bg-white/10 px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-white/15">
                    Call now
                  </a>
                  <a href="/contact" className="rounded-lg bg-blue-600/80 px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-blue-500">
                    Get proposal
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     <div className="relative z-10 px-4 sm:px-8 lg:px-10 py-8 bg-white">
  <div className="mx-auto max-w-[1440px]">
    
    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm">
      
      <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-left">
        Search & Growth Footprint
      </p>

      <div className="grid grid-cols-3 gap-4 divide-x divide-slate-200">
        {stats.map((s) => (
          <div key={s.label} className="px-4 text-center">
            <p className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {s.num}
            </p>
            <p className="mt-1 text-[12px] font-medium text-slate-500">
              {s.label}
            </p>
          </div>
        ))}
      </div>

    </div>

  </div>
</div>
      <div className="h-6 bg-white sm:h-8" aria-hidden />

      <section id="insights" className="border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="mb-10 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600/90">Search & intent data</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Reporting built for buyers who already know what they want
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Query themes, impression share, and conversion value trend together in our reviews. Preview below is illustrative; your MCC gets account-accurate data.
            </p>
          </FadeIn>
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <FadeIn delay={0.05}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-lg ring-1 ring-slate-200/60">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85"
                  alt="Business analytics and growth charts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" aria-hidden />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white sm:bottom-6 sm:left-6 sm:right-6">
                  Clarity on what keywords, assets, and bids moved the needle each week.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ServiceAdsInsights
                theme="google"
                title="Performance snapshots we actually use"
                subtitle="Conversion trend with spend context and ROAS guardrails — mirrored in live Looker Studio / Sheets dashboards for your team."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="sticky top-[9rem] z-30 border-y border-slate-200/70 bg-white/90 py-2.5 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-4 sm:px-8 lg:px-10">
          {quickNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* First 30 days */}
      <section className="border-t border-slate-200/60 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <FadeIn className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600/90">First 30 days</p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                What you can expect in month one
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                We focus on clean foundations first, then scale. This keeps spend efficient and results predictable.
              </p>
            </FadeIn>
            <div className="space-y-3 lg:col-span-7">
              {first30Days.map((item, i) => (
                <FadeIn key={item} delay={0.05 * i}>
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why clients stay */}
      <section className="border-t border-slate-200/60 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600/90">Partnership quality</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Why clients stay long-term</h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyClientsStay.map((item, i) => (
              <FadeIn key={item.title} delay={0.06 * i}>
                <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="border-t border-slate-200/60 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600/90">Why choose us</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Why Choose Techify for Google Ads?</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Certified experts, transparent reporting, and campaigns built around your goals — not generic templates.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={0.05 * i}>
                <div className="flex h-full gap-4 rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-blue-200/80 hover:shadow-md">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-blue-50/30 py-12 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600/90">Our process</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Our Google Ads Process</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">Simple and repeatable — so you always know what is happening and why.</p>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="relative h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                  <span className="text-4xl font-bold text-blue-100 sm:text-5xl">{s.step}</span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Services */}
      <section id="services" className="border-t border-slate-200/60 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600/90">What's included</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Google Ads Services We Offer</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">The full Google Ads stack — from setup to ongoing optimisation.</p>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adServices.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-blue-200/80 hover:shadow-md">
                  <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700">
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
        theme="google"
        items={industries}
        headline="Industries we win on Google"
        subhead="Intent changes by category — we map queries, assets, and bidding to how your customers actually buy."
      />

      {/* Case Studies */}
      <section id="case-studies" className="border-t border-slate-200/60 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600/90">Case studies</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Real Results from Real Brands</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <FadeIn key={c.brand} delay={0.06 * i}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-blue-500 before:via-emerald-500 before:to-blue-400/40 sm:rounded-3xl sm:p-8">
                  <span className="inline-flex self-start rounded-full bg-blue-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                    {c.tag}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{c.brand}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                  <Link href="/contact" className="mt-6 text-xs font-semibold text-blue-600 hover:text-blue-800">
                    Get similar results →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-slate-200/60 bg-slate-50 py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600/90">FAQ</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-[14px] text-slate-600">Everything you need to know about working with us.</p>
          </FadeIn>
          <div className="mt-8 space-y-3 sm:mt-10">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <FadeIn key={item.q} delay={0.04 * i}>
                  <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm sm:rounded-2xl">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition hover:bg-slate-50/80 sm:px-6 sm:py-5"
                    >
                      <span className="text-[14px] font-semibold text-slate-900 sm:text-[15px]">{item.q}</span>
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${open ? "rotate-180 border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-slate-50 text-slate-500"}`}>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* CTA */}
      <section className="border-t border-slate-200/80 bg-[#0a0f1c] py-16 text-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Ready to Capture More Intent?</h2>
            <p className="mt-4 text-[15px] text-white/55">
              Book a free strategy call — we'll come back with a clear plan, realistic scope, and how we'd measure success.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-10 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">
                Book Free Strategy Call
              </Link>
              <Link href="/services/meta-ads" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 text-sm font-semibold text-white">
                See Meta Ads →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}