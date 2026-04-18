"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const filters = ["All", "SEO", "Performance Marketing", "Web Development", "Branding", "E-Commerce"];

const caseStudies = [
  {
    id: 1,
    client: "Ganga Fashions Pvt. Ltd.",
    category: "E-Commerce",
    tag: "E-Commerce",
    headline: "320% revenue growth in 6 months through Shopify redesign & Meta Ads",
    description:
      "A legacy fashion brand struggling with outdated web presence and poor ad ROI. We rebuilt their entire digital ecosystem — from Shopify store to performance campaigns.",
    metrics: [
      { value: "320%", label: "Revenue Growth" },
      { value: "4.8x", label: "ROAS on Meta Ads" },
      { value: "58%", label: "Drop in Cart Abandonment" },
    ],
    industry: "Fashion & Retail",
    duration: "6 months",
    services: ["Shopify Dev", "Meta Ads", "CRO"],
    color: "from-orange-50 to-amber-50",
    accent: "bg-orange-500",
    textAccent: "text-orange-600",
    borderAccent: "border-orange-200",
  },
  {
    id: 2,
    client: "Doeraa",
    category: "Branding",
    tag: "Branding",
    headline: "Building a premium D2C identity that drove 2x repeat purchase rate",
    description:
      "Doeraa needed a brand identity that matched its premium positioning. We crafted the visual language, tone of voice, and loyalty systems to drive long-term retention.",
    metrics: [
      { value: "2x", label: "Repeat Purchase Rate" },
      { value: "67%", label: "Brand Recall Increase" },
      { value: "41%", label: "Email CTR Uplift" },
    ],
    industry: "Designer Brands",
    duration: "4 months",
    services: ["Branding", "Email Marketing", "Social Strategy"],
    color: "from-purple-50 to-violet-50",
    accent: "bg-purple-600",
    textAccent: "text-purple-600",
    borderAccent: "border-purple-200",
  },
  {
    id: 3,
    client: "UrbanKitchen Co.",
    category: "Performance Marketing",
    tag: "Performance Marketing",
    headline: "₹18L ad spend turned into ₹1.2Cr revenue via Google & Meta campaigns",
    description:
      "A D2C kitchenware startup burning budget on untargeted campaigns. We rebuilt their funnel from audience research to creative testing and scaled profitably.",
    metrics: [
      { value: "6.6x", label: "Overall ROAS" },
      { value: "₹1.2Cr", label: "Revenue Generated" },
      { value: "34%", label: "Reduction in CPL" },
    ],
    industry: "Home & Kitchen",
    duration: "5 months",
    services: ["Google Ads", "Meta Ads", "Funnel Design"],
    color: "from-emerald-50 to-teal-50",
    accent: "bg-emerald-600",
    textAccent: "text-emerald-600",
    borderAccent: "border-emerald-200",
  },
  {
    id: 4,
    client: "MedFirst Clinic",
    category: "SEO",
    tag: "SEO",
    headline: "From page 4 to position #1 — 5x organic leads in 8 months",
    description:
      "A multi-specialty clinic invisible on search engines. We executed a full technical SEO overhaul, local citation strategy, and content-driven authority building.",
    metrics: [
      { value: "5x", label: "Organic Lead Volume" },
      { value: "#1", label: "Google Position (Primary KW)" },
      { value: "182%", label: "Organic Traffic Growth" },
    ],
    industry: "Healthcare",
    duration: "8 months",
    services: ["Technical SEO", "Local SEO", "Content Strategy"],
    color: "from-sky-50 to-blue-50",
    accent: "bg-blue-600",
    textAccent: "text-blue-600",
    borderAccent: "border-blue-200",
  },
  {
    id: 5,
    client: "SwiftLogix",
    category: "Web Development",
    tag: "Web Development",
    headline: "B2B SaaS website rebuild cut bounce rate by 61% and doubled demo bookings",
    description:
      "SwiftLogix had a dated website confusing visitors about their product. We redesigned the entire information architecture, built in Next.js, and connected it to their CRM.",
    metrics: [
      { value: "61%", label: "Bounce Rate Reduction" },
      { value: "2x", label: "Demo Bookings" },
      { value: "0.9s", label: "Page Load Time" },
    ],
    industry: "SaaS / Logistics",
    duration: "3 months",
    services: ["Next.js Dev", "UX Design", "CRM Integration"],
    color: "from-slate-50 to-gray-100",
    accent: "bg-slate-700",
    textAccent: "text-slate-700",
    borderAccent: "border-slate-200",
  },
  {
    id: 6,
    client: "NestHome Realty",
    category: "Performance Marketing",
    tag: "Performance Marketing",
    headline: "Real estate developer closes 38 units in 90 days using hyper-local Meta funnels",
    description:
      "A Surat-based realty developer struggling to generate quality site visits. We built geo-targeted, offer-based funnels and optimised the lead nurturing journey.",
    metrics: [
      { value: "38", label: "Units Closed" },
      { value: "90", label: "Days Campaign Duration" },
      { value: "₹340", label: "Cost per Qualified Lead" },
    ],
    industry: "Real Estate",
    duration: "3 months",
    services: ["Meta Ads", "WhatsApp Automation", "Landing Pages"],
    color: "from-rose-50 to-pink-50",
    accent: "bg-rose-500",
    textAccent: "text-rose-600",
    borderAccent: "border-rose-200",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants:Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.tag === activeFilter);

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero */}
      {/* <section className="relative overflow-hidden  bg-gradient-to-br from-[#060914] via-[#1e1b4b] to-[#37173e] pt-28 pb-20 px-6">
      
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest text-violet-500 uppercase mb-4">
              Results that speak
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
              Real brands. Real numbers. Every case study below represents a growth story driven by
              strategy, data, and relentless execution.
            </p>
          </motion.div> */}

          {/* Stats row */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px border border-white/10 rounded-2xl overflow-hidden"
          >
            {[
              { value: "150+", label: "Brands Accelerated" },
              { value: "4.2x", label: "Avg ROAS Delivered" },
              { value: "38%", label: "Avg Repeat Customer Lift" },
              { value: "₹50Cr+", label: "Revenue Influenced" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/[0.04] px-6 py-6">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div> */}
        {/* </div>
      </section> */}
       <section className="relative overflow-hidden bg-[#050816] text-white">

  {/* Softer gradient background */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_25%_-20%,rgba(139,92,246,0.28),transparent_60%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(236,72,153,0.12),transparent_50%)]" />

  {/* divider */}
  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

  <div className="relative mx-auto max-w-[1440px] px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pt-20">

    {/* breadcrumb (UNCHANGED) */}
    <nav className="mb-8 flex flex-wrap items-center gap-2.5 text-[12px] text-white/45 sm:mb-12">
      <Link href="/" className="hover:text-white">Home</Link>
      <span className="text-white/25">/</span>
      <span className="text-white/25">Knowledge Hub</span>
      <span className="text-white/25">/</span>
      <span className="font-medium text-white">Case Studies</span>
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
              Case Studies

        </div>

        {/* heading (same content, better gradient) */}
        <h1 className="mt-6 text-[1.85rem] font-semibold leading-[1.1] sm:text-5xl lg:text-[3.25rem]">
         More Visibility,{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
           With our Case Study
          </span>
        </h1>

        {/* desc */}
        <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/65 sm:text-[17px]">
          Real brands. Real numbers. Every case study below represents a growth story driven by
              strategy, data, and relentless execution.
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
            See what's included
          </Link>
        </div>

        {/* features */}
       
      </motion.div>

      {/* RIGHT CARD (same content, upgraded look) */}
      {/* <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="relative"
> */}
  {/* ✨ Glow */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-violet-500/25 to-fuchsia-500/25 blur-2xl rounded-2xl"></div> */}

  {/* Card (no border) */}
  {/* <div className="relative rounded-2xl bg-white/5 shadow-xl"> */}

    {/* <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
      <Image
        src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900&q=85"
        alt="dashboard"
        fill
        className="object-cover"
      /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 to-transparent" /> */}
    {/* </div> */}

    {/* <p className="mt-4 text-xs text-white/70">
      Search, PMax, and Shopping tracked against real conversion value.
    </p> */}
  {/* </div> */}
{/* </motion.div> */}

    </div>
  </div>
</section>


      {/* Filter bar */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Cards grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filtered.map((cs) => (
            <motion.article
              key={cs.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl border ${cs.borderAccent} bg-gradient-to-br ${cs.color} p-8 overflow-hidden cursor-pointer`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-widest ${cs.textAccent}`}>
                    {cs.industry}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mt-1">{cs.client}</h2>
                </div>
                <span
                  className={`${cs.accent} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {cs.tag}
                </span>
              </div>

              {/* Headline */}
              <p className="text-gray-800 font-semibold text-lg leading-snug mb-4 group-hover:text-gray-900 transition-colors">
                {cs.headline}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{cs.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="bg-white/60 backdrop-blur-sm rounded-xl p-3">
                    <p className={`text-xl font-bold ${cs.textAccent}`}>{m.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {cs.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs text-gray-600 bg-white/50 border border-gray-200 px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-semibold ${cs.textAccent} opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  Read case study
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="text-xs text-gray-400">{cs.duration}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-400">No case studies found for this category.</div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#30379e] mx-6 mb-16 rounded-3xl px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want results like these?
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Book a free strategy call. We'll study your brand and show you exactly where your growth is hiding.
          </p>
          <button className="bg-white hover:bg-gray-300 text-black font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm">
            Get a Free Consultation →
          </button>
        </motion.div>
      </section>
    </main>
  );
}