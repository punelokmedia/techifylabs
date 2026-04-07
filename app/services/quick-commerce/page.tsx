"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function SectionHeading({
  tag,
  title,
  sub,
  accent = "#00E5A0",
}: {
  tag: string;
  title: string;
  sub: string;
  accent?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <motion.span
        variants={fadeUp}
        style={{ color: accent, background: `${accent}18` }}
        className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
      >
        {tag}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="text-gray-400 max-w-2xl mx-auto text-base"
      >
        {sub}
      </motion.p>
    </motion.div>
  );
}

const ACCENT = "#00E5A0";

const qcPlatforms = [
  { name: "Blinkit", icon: "⚡", color: "#FFD400" },
  { name: "Zepto", icon: "🚀", color: "#8B5CF6" },
  { name: "Swiggy Instamart", icon: "🛒", color: "#FC8019" },
  { name: "BigBasket BB Now", icon: "🌿", color: "#84CC16" },
  { name: "Dunzo Daily", icon: "📦", color: "#06B6D4" },
  { name: "Flipkart Minutes", icon: "🔵", color: "#2874F0" },
];

const services = [
  {
    icon: "📍",
    title: "Dark Store & Listing Setup",
    desc: "We set up your brand across all quick commerce dark stores — product catalogues, images, pricing tiers, and availability zones configured for maximum reach.",
  },
  {
    icon: "🎯",
    title: "Quick Commerce Ads",
    desc: "Sponsored listings and banner placements on Blinkit, Zepto, and Instamart managed for peak ROAS. We bid by time-of-day, pincode, and category intent.",
  },
  {
    icon: "📈",
    title: "Share of Search Optimisation",
    desc: "Keyword strategy tailored to 10-minute shopper behaviour. We get your products to the top of category searches when intent is highest.",
  },
  {
    icon: "🗺️",
    title: "Hyperlocal Targeting",
    desc: "Zone-level campaign management to dominate high-density neighbourhoods, launch in new pincodes, and suppress competitor visibility.",
  },
  {
    icon: "🔄",
    title: "Inventory & Availability",
    desc: "Real-time monitoring of stock availability per dark store. We alert before out-of-stocks happen and align replenishment with campaign bursts.",
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    desc: "Weekly dashboards covering share of search, ROAS by platform, and growth metrics. Transparent data, honest insights, clear next steps.",
  },
];

const stats = [
  { value: "10 Min", label: "Delivery Window We Optimise For" },
  { value: "6+", label: "Q-Commerce Platforms" },
  { value: "2.8X", label: "Average ROAS on QC Ads" },
  { value: "30 Days", label: "Avg. Time to First Results" },
];

const differentiators = [
  {
    title: "Speed is the product",
    desc: "In quick commerce, being available beats being perfect. We ensure your brand is in stock, visible, and converting during peak demand windows.",
  },
  {
    title: "Hyperlocal expertise",
    desc: "We run campaigns at the pincode and dark-store level — not just nationally. That's where quick commerce is actually won.",
  },
  {
    title: "Cross-platform consistency",
    desc: "Same pricing, same availability, same brand experience across Blinkit, Zepto, and Instamart — managed from one place.",
  },
  {
    title: "Data-first decisions",
    desc: "Every bid, every keyword, every pincode is chosen based on conversion data — not gut feel.",
  },
];

const process = [
  {
    step: "01",
    title: "Platform Audit",
    desc: "We assess your current QC presence, availability gaps, and ad account structure across all platforms.",
  },
  {
    step: "02",
    title: "Listing & Catalogue",
    desc: "Optimised titles, images, and pricing to win the add-to-cart in under 3 seconds.",
  },
  {
    step: "03",
    title: "Ad Campaign Launch",
    desc: "Sponsored listings go live with tightly managed bids, budgets, and time-of-day rules.",
  },
  {
    step: "04",
    title: "Scale & Expand",
    desc: "Weekly optimisation and geographic expansion as revenue and data compound.",
  },
];

const faqs = [
  {
    q: "Which quick commerce platforms do you manage?",
    a: "We manage Blinkit, Zepto, Swiggy Instamart, BigBasket BB Now, Flipkart Minutes, and Dunzo Daily. Platform selection is guided by your category and city mix.",
  },
  {
    q: "Is quick commerce suitable for my brand?",
    a: "If you sell FMCG, grocery, beauty, personal care, or household essentials, quick commerce is likely your highest-intent channel. We run a free fit assessment before onboarding.",
  },
  {
    q: "How do you manage inventory across multiple dark stores?",
    a: "We build dashboards that track availability per store and coordinate with your supply chain to align replenishment with campaign schedules.",
  },
  {
    q: "What does a typical engagement cost?",
    a: "Retainers are scoped after a discovery call. We offer both fixed and performance-linked pricing based on your current baseline and growth goals.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/8 transition-colors"
    >
      <p className="font-semibold text-white mb-2">{q}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
    </motion.div>
  );
}

export default function QuickCommerce() {
  return (
    <div className="bg-[#080C0A] min-h-screen text-white font-sans">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-[#00E5A0]/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#00E5A0]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ color: ACCENT, background: `${ACCENT}15` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: ACCENT }}
              />
              Quick Commerce Ads Agency
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6"
            >
              Win the{" "}
              <span style={{ color: ACCENT }}>10-Minute</span>
              <br />
              Commerce Race
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              Blinkit. Zepto. Instamart. Your buyers decide in seconds and
              checkout in minutes. We make sure your brand is visible, in stock,
              and converting — every time they open the app.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-wide text-black"
                style={{ background: ACCENT }}
              >
                Get Free Consultation →
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full transition-all text-sm uppercase tracking-wide"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="text-3xl md:text-4xl font-black mb-1"
                style={{ color: ACCENT }}
              >
                {s.value}
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tag="Platforms We Manage"
            title="All the Apps Your Buyers Use"
            sub="We manage your presence across every major quick commerce platform in India — one partner, full coverage."
            accent={ACCENT}
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {qcPlatforms.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#00E5A0]/30 hover:bg-[#00E5A0]/5 transition-all cursor-default"
              >
                <span className="text-2xl">{p.icon}</span>
                <span className="text-white font-semibold text-xs text-center">
                  {p.name}
                </span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: p.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tag="What We Do"
            title="End-to-End Quick Commerce Management"
            sub="From listing to ads to inventory — we handle everything so your brand wins on speed, visibility, and conversion."
            accent={ACCENT}
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00E5A0]/30 hover:bg-[#00E5A0]/5 transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-white text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tag="Why TechEasify"
            title="We Think in Minutes, Not Days"
            sub="Quick commerce demands a different marketing playbook. Here's how we approach it differently."
            accent={ACCENT}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00E5A0]/30 transition-all"
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                  style={{ background: `${ACCENT}20`, color: ACCENT }}
                >
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">{d.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tag="Our Process"
            title="Launch in 2 Weeks or Less"
            sub="A tight, proven process that gets your brand live on quick commerce platforms fast — and optimised even faster."
            accent={ACCENT}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00E5A0]/30 transition-all"
              >
                <span className="text-5xl font-black text-white/10 block mb-3">
                  {p.step}
                </span>
                <h4 className="font-bold text-white mb-2">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
                {i < process.length - 1 && (
                  <span
                    className="hidden lg:block absolute top-1/2 -right-3 text-lg z-10"
                    style={{ color: ACCENT }}
                  >
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-12 text-center border border-[#00E5A0]/20"
            style={{ background: `${ACCENT}12` }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[80px]"
                style={{ background: `${ACCENT}20` }}
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Your Buyers Are Ordering Right Now.
                <br />
                <span style={{ color: ACCENT }}>Are You There?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Book a free strategy call and we will show you exactly how your
                brand can dominate quick commerce in your top cities and
                categories.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-wide text-black"
                style={{ background: ACCENT }}
              >
                Book Free Consultation →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            tag="FAQs"
            title="Common Questions"
            sub="Quick answers to help you decide if we're the right fit."
            accent={ACCENT}
          />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}