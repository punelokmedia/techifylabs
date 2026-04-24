"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import ServiceAdsInsights from "../../components/ServiceAdsInsights";
import ServiceIndustriesSection, {
  type IndustryCard,
} from "../../components/ServiceIndustriesSection";

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

const whyUs = [
  {
    title: "Data-Driven Results",
    desc: "Obsessed with numbers, not vanity likes. Every campaign is optimised for maximum ROI.",
  },
  {
    title: "Multi-Industry Expertise",
    desc: "We've worked with brands across fashion, e-commerce, real estate, education, and more.",
  },
  {
    title: "Personal Support",
    desc: "One point of contact who actually picks up the phone when you need them.",
  },
  {
    title: "Transparent Reporting",
    desc: "Reports simple enough to read without a marketing degree — no jargon, just results.",
  },
  {
    title: "ROI Focused",
    desc: "Every rupee counts. We keep testing and adjusting until your campaign moves.",
  },
  {
    title: "Continuous Optimisation",
    desc: "We deliver consistent improvements, not one-time setups and promises.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Business & Goal Analysis",
    desc: "We understand what you sell, who buys, and what a good lead or sale means for your business.",
  },
  {
    step: "02",
    title: "Audience Research",
    desc: "We identify high-intent audiences and build structure for cold and retargeting campaigns.",
  },
  {
    step: "03",
    title: "Ad Creative & Copywriting",
    desc: "Scroll-stopping creatives and clear messaging focused on benefits and simple CTAs.",
  },
  {
    step: "04",
    title: "Campaign Launch",
    desc: "We launch with correct tracking, clean structure, and controlled testing budgets.",
  },
  {
    step: "05",
    title: "Performance Optimisation",
    desc: "We test, improve, and remove waste — consistent improvements, not sudden guesses.",
  },
  {
    step: "06",
    title: "Reporting & ROI Tracking",
    desc: "Clear updates on leads, cost per result, what we tested, and what we plan next.",
  },
];

const adServices = [
  {
    title: "Facebook Lead Generation",
    desc: "Lead forms, messenger campaigns, and click-to-call ads that bring in people already interested in what you sell.",
    tags: ["Lead Forms", "Messenger Campaigns", "Click-to-Call Ads"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "eCommerce Facebook Ads",
    desc: "Catalog ads and retargeting that make abandoned carts disappear and products pop in front of ready-to-buy shoppers.",
    tags: ["Catalog Ads", "Dynamic Retargeting", "Shopping Campaigns"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Facebook Retargeting",
    desc: "Smart creatives that bring back people who clicked, looked around, then left — at exactly the right moment.",
    tags: ["Website Visitors", "Lookalike Audiences", "Custom Audiences"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Instagram Advertising",
    desc: "Ads that blend into feeds and stories but still nudge people to click — all managed from one Meta account.",
    tags: ["Story Ads", "Feed Posts", "Reels Advertising"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    title: "Brand Awareness Campaigns",
    desc: "Keep your brand in the conversation so when the time comes to buy, you're the first they remember.",
    tags: ["Reach Campaigns", "Video Views", "Brand Recognition"],
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "Meta Pixel Setup & Optimisation",
    desc: "Without the Pixel, you're flying blind. We handle setup so you can track who clicked, who converted, and where to improve.",
    tags: ["Pixel Installation", "Event Tracking", "Conversion Optimisation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];

const industries: IndustryCard[] = [
  {
    title: "Fashion & apparel",
    tagline:
      "Seasonal pushes, UGC tests, and lookalikes tuned for repeat purchase.",
    icon: "fashion",
  },
  {
    title: "E-commerce & D2C",
    tagline:
      "Catalog ads, DPAs, and retargeting structured for margin-safe scale.",
    icon: "cart",
  },
  {
    title: "Real estate",
    tagline:
      "Lead-quality filters, location stacks, and creative that books calls.",
    icon: "building",
  },
  {
    title: "Healthcare & wellness",
    tagline:
      "Trust-first messaging, compliant angles, and measure-ready funnels.",
    icon: "health",
  },
  {
    title: "Education & coaching",
    tagline: "Lead forms, webinar funnels, and nurture creative that enrols.",
    icon: "education",
  },
  {
    title: "Technology & hardware",
    tagline: "Demand gen with demo, trial, and retailer signals in one view.",
    icon: "tech",
  },
  {
    title: "Food & beverage",
    tagline:
      "Local reach, offers, and creative that drives footfall and orders.",
    icon: "food",
  },
  {
    title: "Professional services",
    tagline: "High-intent locals, appointment CTAs, and clear proof in ads.",
    icon: "briefcase",
  },
  {
    title: "SaaS & B2B",
    tagline: "Pipeline narratives, trial cohorts, and expansion retargeting.",
    icon: "cloud",
  },
];

const caseStudies = [
  {
    brand: "Ganga Fashion",
    tag: "Meta Ads + Google Ads",
    desc: "Scaled a leading fashion brand with full-funnel ads, driving consistent revenue growth month on month.",
  },
  {
    brand: "Doeraa",
    tag: "Meta Ads + Retention",
    desc: "Transformed an evolving designer brand's online store into a high-converting sales machine.",
  },
  {
    brand: "ARFL",
    tag: "Meta Ads + Google Ads",
    desc: "Planned effective strategies to deliver optimum leads for a home services brand at scale.",
  },
];

const stats = [
  { num: "200+", label: "Campaigns launched" },
  { num: "₹5Cr+", label: "Ad spend managed" },
  { num: "3.5×", label: "Average ROAS" },
];

const first30Days = [
  "Audience and creative audit to identify immediate wins",
  "Campaign restructure for cold, warm, and retargeting funnels",
  "Pixel + event health checks for reliable optimisation data",
  "Weekly testing roadmap for creatives, hooks, and offers",
];

const whyClientsStay = [
  {
    title: "Creative testing discipline",
    desc: "We test angles and formats consistently, so performance does not plateau.",
  },
  {
    title: "Retention + acquisition view",
    desc: "We balance new-customer growth with repeat purchase and LTV signals.",
  },
  {
    title: "Simple decision reporting",
    desc: "No vanity dashboards — just what is working, what is not, and what ships next.",
  },
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
    q: "Why hire a Meta ads agency instead of doing it myself?",
    a: "Ads are easy to run but hard to profit from. An agency saves you time, money, and frustration with expertise, tools, and proven strategies most businesses don't have in-house.",
  },
  {
    q: "How much should I spend on Meta ads?",
    a: "Depends on your goals and industry. Generally we recommend starting with at least ₹30,000–50,000 per month for meaningful results. We'll suggest a budget once we understand your goals.",
  },
  {
    q: "Do you manage Instagram ads too?",
    a: "Yes. One Meta account covers both Facebook and Instagram. We create campaigns that work seamlessly across both platforms to maximise reach.",
  },
  {
    q: "How soon will I see results?",
    a: "You'll usually notice traction within 2–3 weeks. Serious scaling takes a few months as we optimise based on real data.",
  },
  {
    q: "Do you provide regular reports?",
    a: "Always. Weekly performance updates and detailed monthly reports with clear next actions — simple enough to read without a marketing background.",
  },
];

export default function MetaAdsPage() {
  const reduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-full">
      {/* Hero */}
      {/* <section className="relative overflow-hidden bg-[#050816] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_30%_-30%,rgba(99,102,241,0.4),transparent_55%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(217,70,239,0.14),transparent_45%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1440px] px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pt-20">
          <nav className="mb-8 flex flex-wrap items-center gap-2.5 text-[12px] text-white/45 sm:mb-12" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="text-white/25" aria-hidden>/</span>
            <span className="text-white/25" aria-hidden>Our Solutions</span>
            <span className="text-white/25" aria-hidden>/</span>
            <span className="font-medium text-white">Meta Ads</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[12px] font-medium tracking-wide text-violet-200/90 backdrop-blur-md">
                <span className="relative flex h-2 w-2 shrink-0">
                  {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                </span>
                Performance Marketing · Meta & Instagram
              </div>
              <h1 className="mt-6 text-balance text-[1.85rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
                367 Million Indians Are On Facebook.{" "}
                <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Are They Seeing Your Brand?
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/65 sm:text-[17px]">
                We plan, run, and improve Meta ads for brands across India — Facebook, Instagram, Messenger, and Meta's full ad network. Results, not vanity metrics.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:from-violet-500 hover:to-fuchsia-500 sm:w-auto"
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
                  { t: "Event & Pixel QA on every launch", c: "text-emerald-300/90" },
                  { t: "Creative testing roadmap, weekly", c: "text-violet-300/90" },
                  { t: "Reporting tied to revenue & leads", c: "text-fuchsia-300/85" },
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
      {/* <motion.div
              className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md ring-1 ring-white/10 sm:p-8"
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={reduce ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <div className="relative -mx-1 mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/9]">
                <Image
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&q=85"
                  alt="Social media marketing workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-[#050816]/10 to-transparent" aria-hidden />
                <span className="absolute bottom-3 left-3 right-3 text-[11px] font-medium text-white/90">
                  Campaign dashboards, creative testing, clear next actions.
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-300/90">Paid Advertising Services</p>
              <div className="mt-4 space-y-2">
                {[
                  { label: "Meta Ads", href: "/services/meta-ads", active: true },
                  { label: "Google Ads", href: "/services/google-ads", active: false },
                  { label: "Amazon Ads", href: "/services/amazon-ads", active: false },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${s.active ? "bg-violet-600/30 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${s.active ? "bg-violet-400" : "bg-white/30"}`} />
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
                  <a href="/contact" className="rounded-lg bg-violet-600/80 px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-violet-500">
                    Get proposal
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      <section className="relative overflow-hidden rounded-b-[1.75rem] border-b border-gray-200 ">
        {/* 🌈 BACKGROUND LAYERS */}
        <div className="absolute inset-0 bg-[#050816]" aria-hidden />

        {/* soft blobs */}
        {/* <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-violet-300 opacity-20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-fuchsia-300 opacity-20 rounded-full blur-3xl"></div> */}

        {/* subtle grid pattern */}
        {/* <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

        <div className="relative w-full pl-15 pr-2 py-24 grid gap-12 lg:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb + Badge */}
            <div className="flex flex-col items-start ">
              {/* Breadcrumb */}
              <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-6 flex items-center gap-2 text-xs text-white/50 "
              >
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <span>Our Solutions</span>
                <span>/</span>
                <span className="text-white font-medium">Meta Ads</span>
              </motion.nav>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] text-violet-200 backdrop-blur-md mt-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                </span>
                Performance Marketing · Meta & Instagram
              </motion.div>
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-3xl sm:text-5xl font-bold text-white leading-tight"
            >
              Turn Scrolls Into{" "}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Real Sales
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-5 text-white text-[16px] leading-relaxed max-w-md"
            >
              We run high-performing Facebook & Instagram ads that actually
              bring leads, conversions, and revenue — not just impressions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex gap-4"
            >
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-medium shadow-md hover:opacity-80 transition"
              >
                Get Free Strategy
              </Link>

              <Link
                href="#services"
                className="px-6 py-3 rounded-full bg-white border border-gray-400 text-sm font-medium hover:bg-gray-300 transition"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>{" "}
          {/* RIGHT IMAGE CARD */}
          <div className="relative">
            {/* glow behind card */}
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-transparent blur-2xl lg:-inset-8"
              aria-hidden
            ></div>

            <div className="relative shadow-lg p-3 ">
              <img
                src="https://media.istockphoto.com/id/2216173060/photo/seo-and-digital-marketing-trend-concept-depicting-user-researching-search-engine-strategies.webp?a=1&b=1&s=612x612&w=0&k=20&c=iF6oiQWroxUoURarMY_7NbcIMHNONbbAeuh5X8je6qU="
                alt="marketing"
                className="rounded-xl w-[600px] h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats — floating panel */}
      <div className="relative px-4 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-lg border border-gray-200 bg-white px-4 py-6 sm:px-8 sm:py-8">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wide text-violet-500 sm:text-left">
              Performance marketing footprint
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-200">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:px-4">
                  <p className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    {s.num}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-6 sm:h-8" aria-hidden />
      {/* <div className="relative z-20 -mt-10 px-4 sm:-mt-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="
          rounded-2xl border border-white/12  px-4 py-7 shadow-[0_28px_64px_-28px_rgba(0,0,0,0.65)] backdrop-blur-xl 
          sm:rounded-3xl sm:px-10 sm:py-9">
            <p className="mb-5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-violet-300 sm:text-left">Performance marketing footprint</p>
            <div className="grid grid-cols-3 gap-2 divide-x divide-white/40 sm:gap-4">
              {stats.map((s) => (
                <div key={s.label} className="px-2 text-center first:pl-0 last:pr-0 sm:px-4">
                  <p className="text-xl font-semibold tabular-nums tracking-tight text-white sm:text-3xl">{s.num}</p>
                  <p className="mt-1 text-[11px] font-medium leading-snug text-white/50 sm:text-[12px]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-6 sm:h-8" aria-hidden /> */}

      <section
        id="insights"
        className="border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="mb-10 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
              Data-led delivery
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Reporting you can act on — not vanity screenshots
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Weekly readouts connect creative tests, audience shifts, and spend
              to conversions and ROAS. Below is a stylised preview; your account
              gets live Meta data.
            </p>
          </FadeIn>
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <FadeIn delay={0.05}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-lg ring-1 ring-slate-200/60">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=85"
                  alt="Team reviewing performance marketing analytics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent"
                  aria-hidden
                />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white sm:bottom-6 sm:left-6 sm:right-6">
                  Structured reviews: what moved, what did not, and what we ship
                  next week.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ServiceAdsInsights theme="meta" />
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
              className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
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
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
                First 30 days
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                What happens in month one
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                We fix tracking, sharpen messaging, and build predictable
                campaign structure before scaling spend.
              </p>
            </FadeIn>
            <div className="space-y-3 lg:col-span-7">
              {first30Days.map((item, i) => (
                <FadeIn key={item} delay={0.05 * i}>
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item}
                    </p>
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
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
              Partnership quality
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Why brands continue with us
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyClientsStay.map((item, i) => (
              <FadeIn key={item.title} delay={0.06 * i}>
                <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Techify as Your Meta Ads Agency?
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Facebook advertising is powerful but can waste money fast if
              tracking or targeting is wrong. We focus on clean setup, smart
              testing, and regular optimisation.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={0.05 * i}>
                <div className="flex h-full gap-4 rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-violet-200/80 hover:shadow-md">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              Our Meta Ads Process
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Simple and repeatable — so you always know what is happening and
              why.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="relative h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                  <span className="text-4xl font-bold text-violet-100 sm:text-5xl">
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

      {/* Ad Services */}
      <section
        id="services"
        className="border-t border-slate-200/60 bg-white py-12 sm:py-20"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
              What's included
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Facebook Advertising Services We Offer
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              As a full-service Meta ads agency, we handle the full system —
              from strategy to scaling.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adServices.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                {/* <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-violet-200/80 hover:shadow-md">
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
                        className="rounded-full bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div> */}
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-4 shadow-sm transition hover:border-violet-200/80 hover:shadow-md">
                  {/* ✅ IMAGE TOP */}
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* ✅ TITLE */}
                  <h3 className="text-base font-semibold text-slate-900">
                    {s.title}
                  </h3>

                  {/* ✅ DESCRIPTION */}
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">
                    {s.desc}
                  </p>

                  {/* ✅ TAGS */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-100 px-3 py-1 text-[11px] font-medium text-violet-700"
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
        theme="meta"
        items={industries}
        headline="Industries we scale on Meta"
        subhead="Vertical-specific audiences, offer language, and measurement — engineered for your P&L, not a generic playbook."
      />

      {/* Case Studies */}
      <section
        id="case-studies"
        className="border-t border-slate-200/60 bg-white py-12 sm:py-20"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
              Case studies
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Real Results from Real Brands
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <FadeIn key={c.brand} delay={0.06 * i}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-violet-500 before:via-fuchsia-500 before:to-violet-400/40 sm:rounded-3xl sm:p-8">
                  <span className="inline-flex self-start rounded-full bg-violet-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-violet-700">
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
                    className="mt-6 text-xs font-semibold text-violet-600 hover:text-violet-800"
                  >
                    Get similar results →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-t border-slate-200/60 bg-slate-50 py-12 sm:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="text-center">
            <p className="text-[17px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
              FAQ
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-[14px] text-slate-600">
              Everything you need to know about working with us.
            </p>
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
                      <span className="text-[14px] font-semibold text-slate-900 sm:text-[15px]">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${open ? "rotate-180 border-violet-200 bg-violet-50 text-violet-700" : "border-slate-200 bg-slate-50 text-slate-500"}`}
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

      {/* CTA */}
      <section className="border-t border-slate-300/80 bg-gray-200 py-16 text-black">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Turn Scrolls Into Sales
            </h2>
            <p className="mt-4 text-[15px] text-black">
              Book a free strategy call — we'll come back with a clear plan,
              realistic scope, and how we'd measure success.
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
