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
    image: "/images/screen.png",
  },
  {
    title: "eCommerce Facebook Ads",
    desc: "Catalog ads and retargeting that make abandoned carts disappear and products pop in front of ready-to-buy shoppers.",
    tags: ["Catalog Ads", "Dynamic Retargeting", "Shopping Campaigns"],
    image: "/images/screen-mike.png",
  },
  {
    title: "Facebook Retargeting",
    desc: "Smart creatives that bring back people who clicked, looked around, then left — at exactly the right moment.",
    tags: ["Website Visitors", "Lookalike Audiences", "Custom Audiences"],
    image: "/images/seo-email.png",
  },
  {
    title: "Instagram Advertising",
    desc: "Ads that blend into feeds and stories but still nudge people to click — all managed from one Meta account.",
    tags: ["Story Ads", "Feed Posts", "Reels Advertising"],
    image: "/images/marketing.png",
  },
  {
    title: "Brand Awareness Campaigns",
    desc: "Keep your brand in the conversation so when the time comes to buy, you're the first they remember.",
    tags: ["Reach Campaigns", "Video Views", "Brand Recognition"],
    image: "/images/social-media.png",
  },
  {
    title: "Meta Pixel Setup & Optimisation",
    desc: "Without the Pixel, you're flying blind. We handle setup so you can track who clicked, who converted, and where to improve.",
    tags: ["Pixel Installation", "Event Tracking", "Conversion Optimisation"],
    image: "/images/phone-mirror.png",
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
];

export default function MetaAdsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function setOpenModal(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-full">
      {/* Hero */}

      <section className="relative overflow-hidden rounded-b-[1.75rem] border-b border-gray-200 ">
        {/* 🌈 BACKGROUND LAYERS */}
        <div className="absolute inset-0 bg-[#050816]" aria-hidden />

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
              <Image
                src="/images/screen-copy.png"
                alt="marketing"
                width={600}
                height={320}
                priority
                className="h-80 w-[600px] rounded-xl object-contain"
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
                  src="/images/seo-email.png"
                  alt="Team reviewing performance marketing analytics"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1000px) 100vw, 50vw"
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
              What&apos;s included
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
                      className="object-contain"
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
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 🔥 LEFT SIDE - CARD */}
            <div className="flex justify-center items-start">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 max-w-md w-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-violet-100 text-violet-600 mb-4 text-xl">
                  ❓
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  Have more questions?
                </h3>

                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Our team is here to help you understand how digital marketing
                  can grow your business. Get clarity before you invest.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>✔ Free consultation</li>
                  <li>✔ Clear strategy roadmap</li>
                  <li>✔ No hidden costs</li>
                </ul>

                <button
                  type="button"
                  onClick={() => setOpenModal(true)}
                  className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-lg font-medium transition"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>

            {/* 🔥 RIGHT SIDE - FAQ */}
            <div>
              <FadeIn className="text-center">
                <p className="text-[17px] font-bold uppercase tracking-[0.2em] text-violet-600/90">
                  FAQ
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
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
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                              open
                                ? "rotate-180 border-violet-200 bg-violet-50 text-violet-700"
                                : "border-slate-200 bg-slate-50 text-slate-500"
                            }`}
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
              Book a free strategy call — we&apos;ll come back with a clear
              plan, realistic scope, and how we&apos;d measure success.
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
