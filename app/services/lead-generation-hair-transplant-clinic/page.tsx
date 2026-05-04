"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "@/app/components/ConsultationModel";

function FadeIn({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const highlights = [
  "Consultation-ready hair transplant leads from Meta and Google",
  "Male-focused demographics with hyperlocal clinic targeting",
  "Trust-first creative strategy with safe before-and-after messaging",
  "Lead scoring for budget and procedure readiness",
];

const deliverables = [
  {
    title: "Lead Funnel Architecture",
    desc: "Hair transplant buyer journey mapped from curiosity to consultation booking.",
  },
  {
    title: "Performance Creative Suite",
    desc: "Ad angles for confidence, outcomes and credibility with clear CTA structure.",
  },
  {
    title: "Lead Intent Segmentation",
    desc: "Separate hot, warm and exploratory leads to improve counsellor efficiency.",
  },
  {
    title: "Conversion Reporting",
    desc: "Weekly dashboard for CPL, booked consult rate and source-level ROI visibility.",
  },
];

const steps = [
  "Market and audience mapping by age, city and treatment intent",
  "Launch and optimize campaigns across Meta, Google and high-intent keywords",
  "Capture and qualify inquiries with fast WhatsApp routing",
  "Scale spend on best-performing creatives and city clusters",
];

const testimonials = [
  {
    name: "Clinic Owner, Pune",
    quote:
      "The campaign quality is better than earlier agencies. Leads are more relevant and consultation conversion improved.",
  },
  {
    name: "Hair Clinic Operations Lead",
    quote:
      "Follow-up speed improved because lead intent is clearer. The reporting and optimization process feels very professional.",
  },
];

const faqs = [
  {
    q: "Do you run city-specific campaigns?",
    a: "Yes. We structure city-wise and radius-based campaigns to focus on relevant local patient demand.",
  },
  {
    q: "Can you improve lead quality, not just quantity?",
    a: "Yes. We use form filters, audience exclusions and creative testing to prioritize consultation-ready leads.",
  },
  {
    q: "How do you ensure lead quality?",
    a: "We implement strict qualification criteria and use data-driven insights to identify high-intent prospects.",
  },
  {
    q: "What kind of reporting do you provide?",
    a: "We provide comprehensive weekly dashboards showing CPL, booked consult rate, and source-level ROI.",
  },
];
const img = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "/gallery/img5.jpg",
  "/gallery/img6.jpg",
];

// const trustBadges = [
//   "Google Reviews 4.7/5",
//   "Doctor-Led Consultation Scripts",
//   "Hairline Intent Audience Filters",
//   "Weekly CPL + Booking Reporting",
// ];

function IconCheck() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 7L9 18l-5-5" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 3l2.2 4.8L19 10l-4.8 2.2L12 17l-2.2-4.8L5 10l4.8-2.2L12 3z" />
    </svg>
  );
}

export default function LeadGenerationHairTransplantClinicPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_10%,rgba(249,115,22,0.25),transparent_35%),linear-gradient(120deg,#1b0f06_0%,#4a2109_45%,#7c2d12_100%)] text-white">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-orange-200/40 bg-orange-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-orange-100">
              <IconSpark />
              Hair Transplant Lead Generation
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Premium Lead Generation for
              <span className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                {" "}
                Hair Transplant Clinics
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              We build high-performance acquisition systems that deliver
              qualified, consultation-ready hair transplant leads with better
              quality control and predictable growth.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-400"
              >
                Book Hair Clinic Growth Plan
              </Link>
              <Link
                href="/services/lead-generation"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Back to Lead Generation
              </Link>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90"
                >
                  <span className="mt-0.5 text-orange-200">
                    <IconCheck />
                  </span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="overflow-hidden rounded-3xl bg-white/10 p-3 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.8)] backdrop-blur"
          >
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80"
              alt="Hair transplant consultation with specialist"
              className="h-[300px] w-full rounded-2xl object-cover sm:h-[360px] lg:h-[430px]"
            />
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-white/10 px-2 py-3">
                <p className="text-xl font-black">260+</p>
                <p className="text-[11px] text-white/80">Leads / Month</p>
              </div>
              <div className="rounded-xl bg-white/10 px-2 py-3">
                <p className="text-xl font-black">34%</p>
                <p className="text-[11px] text-white/80">Consult Booked</p>
              </div>
              <div className="rounded-xl bg-white/10 px-2 py-3">
                <p className="text-xl font-black">3.9x</p>
                <p className="text-[11px] text-white/80">Avg ROAS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
      <section className="relative overflow-hidden bg-[#050816] text-white">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_25%_-20%,rgba(249,115,22,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(251,191,36,0.15),transparent_50%)]" />

        {/* divider */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative mx-auto max-w-[1440px] px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT CONTENT */}
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
                Hair Transplant Lead Generation
              </div>

              {/* heading */}
              <h1 className="mt-6 text-[1.9rem] font-semibold leading-[1.1] sm:text-5xl lg:text-[3.2rem]">
                Premium Lead Generation for{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
                  Hair Transplant Clinics
                </span>
              </h1>

              {/* description */}
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/65 sm:text-[17px]">
                We build high-performance acquisition systems that deliver
                qualified, consultation-ready hair transplant leads with better
                quality control and predictable growth.
              </p>

              {/* buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:opacity-90 transition"
                >
                  Book Hair Clinic Growth Plan
                </Link>

                <Link
                  href="/services/lead-generation"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Back to Lead Generation
                </Link>
              </div>

              {/* highlights (converted to Google Ads style small bullets) */}
              <div className="mt-10 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-[12px] text-white/55"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE (clean card like Google Ads) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/25 to-fuchsia-500/25 blur-2xl rounded-2xl"></div>

              <div className="relative rounded-2xl bg-white/5 shadow-xl p-3">
                <div className="relative overflow-hidden rounded-xl aspect-[16/10]">
                  <img
                    src="/images/hair-transplant.jpg"
                    alt="Hair transplant consultation"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* stats (kept same, just styled better) */}
                {/* <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-white/10 px-2 py-3">
                    <p className="text-lg font-bold">260+</p>
                    <p className="text-[10px] text-white/70">Leads / Month</p>
                  </div>
                  <div className="rounded-lg bg-white/10 px-2 py-3">
                    <p className="text-lg font-bold">34%</p>
                    <p className="text-[10px] text-white/70">Consult Booked</p>
                  </div>
                  <div className="rounded-lg bg-white/10 px-2 py-3">
                    <p className="text-lg font-bold">3.9x</p>
                    <p className="text-[10px] text-white/70">Avg ROAS</p>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              What is Hair Transplant & How It Works?
            </h2>

            <p className="mt-4 leading-7 text-slate-600 text-md">
              Hair transplant is a minimally invasive procedure where healthy
              hair follicles are extracted from a donor area (usually the back
              of the scalp) and implanted into thinning or bald areas. The
              result is natural, permanent hair growth.
            </p>

            <p className="mt-3 text-md leading-7 text-slate-600">
              Modern techniques like{" "}
              <span className="font-semibold text-xl text-slate-900">
                FUE (Follicular Unit Extraction)
              </span>
              ensure minimal scarring, faster recovery, and highly natural
              results.
            </p>

            <ul className="mt-5 space-y-2 text-md text-slate-700">
              <li>✔ Permanent and natural-looking results</li>
              <li>✔ Safe and minimally invasive procedure</li>
              <li>✔ Quick recovery time</li>
              <li>✔ Boosts confidence and appearance</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/transplant.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-violet-400 bg-violet-100 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white px-4 py-3 text-center text-xs font-bold text-slate-700"
            >
              {badge}
            </motion.div>
          ))}
        </div>
      </section> */}

      <section className="mx-auto w-full max-w-7xl px-5 pb-4 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-700">
                Positioning Statement
              </p>
              <h2 className="mt-2 text-xl font-black tracking-tight text-slate-900 font-semibold sm:text-3xl">
                Performance Marketing Built For Hair Consultation Intent
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We focus on serious consultation-seeking audiences with creative
                clarity and fast response workflows that improve booking
                quality.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-slate-100 px-3 py-4 text-center">
                <p className="text-xl font-black font-bold text-slate-900">
                  6d
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                  Avg Setup
                </p>
              </div>
              <div className="rounded-xl bg-slate-100 px-3 py-4 text-center">
                <p className="text-xl font-black text-slate-900">18+</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                  Creative Tests
                </p>
              </div>
              <div className="rounded-xl bg-slate-100 px-3 py-4 text-center">
                <p className="text-xl font-black text-slate-900">24/7</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                  Lead Capture
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-700">
              What You Get
            </p>
            <h2 className="mt-2 text-xl font-black font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Detailed Hair Clinic Growth Deliverables
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We design this as a growth framework with measurable checkpoints,
              not a static campaign handoff.
            </p>
          </div>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {deliverables.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
                className="flex gap-4 px-5 py-5"
              >
                <span className="mt-0.5 text-sm font-black text-violet-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 pb-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="rounded-3xl bg-[#2b1307] p-6 text-white shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-200">
            How We Work
          </p>
          <h3 className="mt-2 text-2xl font-black">
            Our 4-Step Hair Lead Engine
          </h3>
          <div className="mt-5 space-y-3 border-l border-white/15 pl-4">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative flex gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
              >
                <span className="absolute -left-[1.45rem] top-4 h-2.5 w-2.5 rounded-full bg-violet-300" />
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500 text-xs font-black text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-medium text-white/90">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-700">
            Ready To Scale
          </p>
          <h3 className="mt-2 text-2xl font-black text-slate-900">
            Build A Predictable Hair Consultation Pipeline
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Get a professionally structured lead generation system designed to
            improve consultation quality, response speed and cost efficiency.
          </p>
          <div className="mt-6 space-y-2">
            <Link
              href="/contact"
              className="block rounded-xl bg-violet-500 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-violet-400"
            >
              Get Free Hair Strategy Call
            </Link>
            <Link
              href="/services/lead-generation"
              className="block rounded-xl border border-violet-300 bg-white px-5 py-3 text-center text-sm font-semibold text-violet-700 transition hover:bg-violet-100"
            >
              Explore Lead Generation Overview
            </Link>
          </div>
        </div>
      </section> */}

      <section className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-200 bg-gradient-to-r from-white to-violet-50 p-6 shadow-sm lg:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-700">
            Mini Case Study
          </p>
          <h3 className="mt-2 text-xl font-semibold font-black text-slate-900">
            Hair Clinic Multi-City Campaign
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            Rebuilt ad strategy with treatment-stage intent groups, improved
            landing copy clarity and optimized call-to-consult flow for higher
            booking quality.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-violet-100 bg-white px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                CPL Improvement
              </p>
              <p className="mt-1 text-xl font-black font-semibold bold text-violet-700">
                -24%
              </p>
            </div>
            <div className="rounded-xl border border-violet-100 bg-white px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                Consult Bookings
              </p>
              <p className="mt-1 text-xl font-black font-semibold text-violet-700">
                +38%
              </p>
            </div>
            <div className="rounded-xl border border-violet-100 bg-white px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                Follow-up Time
              </p>
              <p className="mt-1 text-xl font-black font-semibold text-violet-700">
                &lt; 6 min
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* gallery section  */}
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <h4 className="text-2xl font-bold text-violet-700 items-center flex gap-2 mb-6 justify-center ">
          Gallery
        </h4>
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 sm:text-3xl">
            Real Results From Hair Transplant Patients
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            See real transformation results achieved through advanced hair
            transplant procedures.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {img.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">
              <img
                src={item}
                alt="Hair transplant result"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                <p className="text-xs text-white font-medium">
                  Before & After Result
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="mx-auto w-full max-w-7xl  px-5 py-14 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Real Results From Hair Transplant Patients
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            See real transformation results achieved through advanced hair
            transplant procedures.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "hair transplant before after male india",
            "hair transplant results front hairline",
            "fue hair transplant before after",
            "hair transplant crown area results",
            "hair transplant density result male",
            "hair transplant transformation results",
          ].map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">
              <img
                src={`${img}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* overlay */}
      {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                <p className="text-xs text-white font-medium">
                  Before & After Result
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-7 text-slate-700">"{item.quote}"</p>
              <p className="mt-3 text-sm font-semibold text-violet-700">
                {item.name}
              </p>
            </motion.article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-xl font-black font-bold  text-slate-900">
            Frequently Asked Questions
          </h4>
          <div className="mt-4 space-y-3">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-100  bg-slate-50 px-4 py-3 font-normal"
              >
                <p className="text-sm font-bold text-slate-900 font-bold">
                  {item.q}
                </p>
                <p className="mt-1 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* <section
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
                          transition={{ duration: 0.28, ease: "easeInOut" }}
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
      </section> */}
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
                              transition={{ duration: 0.28, ease: "easeInOut" }}
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
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-violet-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <Link
            href="/contact"
            className="flex-1 rounded-lg bg-violet-500 px-3 py-2.5 text-center text-xs font-bold text-white"
          >
            Book Strategy Call
          </Link>
          <Link
            href="/services/lead-generation"
            className="flex-1 rounded-lg border border-violet-300 bg-white px-3 py-2.5 text-center text-xs font-bold text-violet-700"
          >
            View Overview
          </Link>
        </div>
      </div>
      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </main>
  );
}
