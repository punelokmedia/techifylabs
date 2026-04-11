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
}: {
  tag: string;
  title: string;
  sub: string;
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
        className="inline-block bg-[#F4A619]/10 text-[#F4A619] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
      >
        {tag}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="text-gray-500 max-w-2xl mx-auto text-base"
      >
        {sub}
      </motion.p>
    </motion.div>
  );
}

const services = [
  {
    icon: "🛍️",
    title: "Amazon Marketplace Management",
    desc: "End-to-end Amazon store setup, product listing optimisation, A+ content, and sponsored ads to dominate search rankings and maximise conversions.",
  },
  {
    icon: "🔶",
    title: "Flipkart Seller Growth",
    desc: "Complete Flipkart seller account management — from catalogue structuring to performance ads — driving consistent sales and brand visibility.",
  },
  {
    icon: "🏪",
    title: "Multi-Platform Catalogue",
    desc: "Unified catalogue management across Meesho, Myntra, Nykaa, Ajio, and more. Consistent product data that converts across every channel.",
  },
  {
    icon: "📊",
    title: "Marketplace Ads & Promotions",
    desc: "Sponsored product campaigns, deal coupons, and lightning deals engineered for maximum ROAS. We track every rupee and optimise aggressively.",
  },
  {
    icon: "⭐",
    title: "Reviews & Reputation",
    desc: "Systematic strategies to build authentic review velocity, handle negative feedback, and protect your brand's seller rating at scale.",
  },
  {
    icon: "📦",
    title: "Inventory & Logistics",
    desc: "FBA/FBF strategy, inventory forecasting, and fulfilment optimisation to prevent stockouts and reduce warehousing costs.",
  },
];

const stats = [
  { value: "3.5X", label: "Average ROAS Delivered" },
  { value: "47+", label: "Active Brand Partners" },
  { value: "12+", label: "Marketplaces Covered" },
  { value: "₹50Cr+", label: "Marketplace Revenue Managed" },
];

const platforms = [
  { name: "Amazon", color: "#FF9900" },
  { name: "Flipkart", color: "#2874F0" },
  { name: "Meesho", color: "#9B59B6" },
  { name: "Myntra", color: "#FF3F6C" },
  { name: "Nykaa", color: "#FC2779" },
  { name: "Ajio", color: "#E31837" },
  { name: "Snapdeal", color: "#E40046" },
  { name: "JioMart", color: "#0070C0" },
];

const process = [
  {
    step: "01",
    title: "Account Audit & Strategy",
    desc: "We audit your current marketplace presence, analyse competitors, and build a data-backed growth roadmap.",
  },
  {
    step: "02",
    title: "Catalogue & Content Build",
    desc: "Keyword-optimised titles, bullet points, A+ content, and HD imagery that drives discovery and conversion.",
  },
  {
    step: "03",
    title: "Ads Setup & Launch",
    desc: "Sponsored product, brand, and display campaigns structured for your ACOS targets from day one.",
  },
  {
    step: "04",
    title: "Optimise & Scale",
    desc: "Weekly bid adjustments, listing experiments, and expansion to new platforms as revenue grows.",
  },
];

const faqs = [
  {
    q: "Which marketplaces do you manage?",
    a: "We manage Amazon India, Flipkart, Meesho, Myntra, Nykaa, Ajio, Snapdeal, JioMart, and more. We build a platform mix based on your category and target audience.",
  },
  {
    q: "How long before I see results?",
    a: "Most brands see meaningful traction within 30–60 days. Listing optimisation and organic ranking improvements take 60–90 days to compound.",
  },
  {
    q: "Do you handle brand registry and account setup?",
    a: "Yes. We help with Amazon Brand Registry, seller account creation, GSTIN verification, and all onboarding requirements across platforms.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer fixed monthly retainers and performance-linked models. Scope is defined clearly after a free consultation call.",
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
      className="border border-gray-200 rounded-2xl p-6 bg-white hover:bg-gray-50 transition-colors"
    >
      <p className="font-semibold text-black mb-2">{q}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
    </motion.div>
  );
}

export default function EcommerceMarketplace() {
  return (
    <div className="bg-white min-h-screen text-white font-sans">

      {/* Hero — unchanged */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6 border-b border-white/[0.08]  bg-gradient-to-br from-[#0a0f2c] via-[#1e1b4b] to-[#0d0b1f]">
        {/* BG glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F4A619]/10 rounded-full blur-[120px]" />
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
              className="inline-flex items-center gap-2 bg-[#F4A619]/10 text-gray-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" />
              E-Commerce Marketplace Services
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-5xl font-black leading-[1.05] mb-6 "
            >
              Dominate Every{" "}
              <span className="text-fuchsia-600 ">Marketplace</span>{" "}
              <br />
              Your Buyers Shop On
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              From Amazon to Flipkart to Meesho — we manage your entire
              marketplace presence end-to-end. More visibility, better
              conversion, and a ROAS that justifies every rupee spent.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600  text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-wide"
              >
                Get Free Consultation
                <span>→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full transition-all text-sm uppercase tracking-wide"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-200 bg-gray-50">
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
              <p className="text-3xl md:text-4xl font-black text-black mb-1">
                {s.value}
              </p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
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
            title="Every Major Marketplace. One Partner."
            sub="We cover the platforms that matter for Indian and global ecommerce — so you never miss a buyer wherever they shop."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {platforms.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 hover:border-[#F4A619]/60 hover:bg-[#F4A619]/5 transition-all cursor-default"
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: p.color }}
                />
                <span className="text-black font-semibold text-sm">
                  {p.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tag="What We Do"
            title="Full-Stack Marketplace Management"
            sub="Not just ads. We handle everything from listing to logistics to reviews — so you can focus on building your brand."
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
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#F4A619]/60 hover:bg-[#F4A619]/5 transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-black text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            tag="Our Process"
            title="From Setup to Scaling — A Clear Roadmap"
            sub="We follow a proven four-step framework that removes guesswork and delivers compounding results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#F4A619]/40 transition-all"
              >
                <span className="text-5xl font-black text-black/10 block mb-3">
                  {p.step}
                </span>
                <h4 className="font-bold text-black mb-2">{p.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
                {i < process.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-3 text-[#F4A619] text-lg z-10">
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#F4A619] p-12 text-center"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLDAsMCwwLjA4KSIvPjwvc3ZnPg==')] opacity-60" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
                Ready to Scale Your Marketplace Revenue?
              </h2>
              <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
                Book a free 30-minute strategy call. We will audit your current
                presence and show you exactly where revenue is being left on the
                table.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-black/80 transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-wide"
              >
                Book Free Consultation →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            tag="FAQs"
            title="Frequently Asked Questions"
            sub="Everything you need to know before we get started."
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