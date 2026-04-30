"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
  "High-intent IVF leads from Meta, Google and local search campaigns",
  "Clinic-level geo targeting with city and radius strategy",
  "Lead quality filters before handoff to your counsellor team",
  "Conversion-focused WhatsApp plus landing page journey",
];

const deliverables = [
  {
    title: "Funnel Strategy",
    desc: "Custom lead journey for IVF audiences: awareness, trust, intent and booking.",
  },
  {
    title: "Creative and Ad Execution",
    desc: "Medical-safe ad creatives with authority messaging and consultation CTA.",
  },
  {
    title: "Lead Qualification",
    desc: "Intent filters and form logic to reduce low-quality or irrelevant inquiries.",
  },
  {
    title: "Weekly Growth Reviews",
    desc: "Transparent reporting on CPL, consult booked rate and source-wise performance.",
  },
];

const steps = [
  "Audience and competitor research by city and treatment segment",
  "Campaign launch across Meta and Google with intent-focused ad sets",
  "WhatsApp and CRM-ready lead routing for faster follow-up",
  "Daily optimization for lead quality, not just lead volume",
];

const testimonials = [
  {
    name: "Dr. Mehta, IVF Director",
    quote:
      "Lead quality improved significantly. Our counsellor team now spends time on serious consultation-ready inquiries.",
  },
  {
    name: "Clinic Growth Manager",
    quote:
      "Within 8 weeks, appointment bookings increased while CPL stabilized. Reporting and follow-up flow are very clear.",
  },
];

const faqs = [
  {
    q: "How soon can we start seeing leads?",
    a: "Most clinics start seeing initial lead flow within 7-10 days after launch, and stable optimization by week 3-4.",
  },
  {
    q: "Do you support CRM and WhatsApp follow-up setup?",
    a: "Yes. We structure lead routing, response templates and handoff process so your team can reply faster.",
  },
];

const trustBadges = [
  "Google Reviews 4.8/5",
  "Healthcare Ads Policy Safe Creatives",
  "Fast WhatsApp Lead Routing",
  "Weekly ROI Review Calls",
];

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 7L9 18l-5-5" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l2.2 4.8L19 10l-4.8 2.2L12 17l-2.2-4.8L5 10l4.8-2.2L12 3z" />
    </svg>
  );
}

export default function LeadGenerationIvfCenterPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_10%,rgba(139,92,246,0.35),transparent_35%),linear-gradient(120deg,#050a2a_0%,#0b1a52_45%,#1b1762_100%)] text-white">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-violet-200/40 bg-violet-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-violet-100">
              <IconSpark />
              IVF Lead Generation
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Premium Lead Generation for
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-200 bg-clip-text text-transparent"> IVF Centers</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              We build full-funnel performance systems that bring verified, consultation-ready IVF patient leads for your clinic. Built for scale, compliance and predictable growth.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-xl bg-violet-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-400">
                Book IVF Growth Plan
              </Link>
              <Link href="/services/lead-generation" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Back to Lead Generation
              </Link>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {highlights.map((item) => (
                <motion.div key={item} whileHover={{ y: -2 }} className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90">
                  <span className="mt-0.5 text-violet-200">
                    <IconCheck />
                  </span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="overflow-hidden rounded-3xl bg-white/10 p-3 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.8)] backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
              alt="Doctor consulting patient in IVF clinic"
              className="h-[300px] w-full rounded-2xl object-cover sm:h-[360px] lg:h-[430px]"
            />
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-white/10 px-2 py-3">
                <p className="text-xl font-black">220+</p>
                <p className="text-[11px] text-white/80">Leads / Month</p>
              </div>
              <div className="rounded-xl bg-white/10 px-2 py-3">
                <p className="text-xl font-black">31%</p>
                <p className="text-[11px] text-white/80">Consult Booked</p>
              </div>
              <div className="rounded-xl bg-white/10 px-2 py-3">
                <p className="text-xl font-black">4.3x</p>
                <p className="text-[11px] text-white/80">Avg ROAS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-violet-100 bg-violet-100 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <motion.div key={badge} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white px-4 py-3 text-center text-xs font-bold text-slate-700">
              {badge}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-4 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-700">Positioning Statement</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">A Growth Partner Model, Not Just Ad Management</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We align creative, targeting and follow-up workflows with your clinic operations so consultations grow consistently without compromising lead quality.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-slate-100 px-3 py-4 text-center">
                <p className="text-xl font-black text-slate-900">7d</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Avg Setup</p>
              </div>
              <div className="rounded-xl bg-slate-100 px-3 py-4 text-center">
                <p className="text-xl font-black text-slate-900">15+</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">A/B Tests</p>
              </div>
              <div className="rounded-xl bg-slate-100 px-3 py-4 text-center">
                <p className="text-xl font-black text-slate-900">24/7</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Lead Capture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-700">What You Get</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Detailed IVF Growth Deliverables</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We structure your acquisition system like a growth program, not just ad setup. Every block below maps to one performance outcome.
            </p>
          </div>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {deliverables.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }} className="flex gap-4 px-5 py-5">
                <span className="mt-0.5 text-sm font-black text-violet-600">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 pb-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="rounded-3xl bg-[#0d1332] p-6 text-white shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-200">How We Work</p>
          <h3 className="mt-2 text-2xl font-black">Our 4-Step IVF Lead Engine</h3>
          <div className="mt-5 space-y-3 border-l border-white/15 pl-4">
            {steps.map((step, index) => (
              <motion.div key={step} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="relative flex gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3">
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
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-700">Ready To Scale</p>
          <h3 className="mt-2 text-2xl font-black text-slate-900">Build A Strong IVF Appointment Pipeline</h3>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Get a high-performing, conversion-ready patient acquisition funnel with clear messaging, verified leads and fast-follow systems.
          </p>
          <div className="mt-6 space-y-2">
            <Link href="/contact" className="block rounded-xl bg-violet-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-violet-500">
              Get Free IVF Strategy Call
            </Link>
            <Link href="/services/lead-generation" className="block rounded-xl border border-violet-300 bg-white px-5 py-3 text-center text-sm font-semibold text-violet-700 transition hover:bg-violet-100">
              Explore Lead Generation Overview
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-slate-200 bg-gradient-to-r from-white to-violet-50 p-6 shadow-sm lg:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-700">Mini Case Study</p>
          <h3 className="mt-2 text-2xl font-black text-slate-900">IVF Clinic In Tier-1 City</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            Repositioned campaign messaging from generic fertility awareness to consultation-focused intent buckets. Added WhatsApp speed-to-lead workflow and city-wise budget split.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-violet-100 bg-white px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">CPL Improvement</p>
              <p className="mt-1 text-xl font-black text-violet-700">-27%</p>
            </div>
            <div className="rounded-xl border border-violet-100 bg-white px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Consult Bookings</p>
              <p className="mt-1 text-xl font-black text-violet-700">+42%</p>
            </div>
            <div className="rounded-xl border border-violet-100 bg-white px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Follow-up Time</p>
              <p className="mt-1 text-xl font-black text-violet-700">&lt; 5 min</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map((item) => (
            <motion.article key={item.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-slate-700">"{item.quote}"</p>
              <p className="mt-3 text-sm font-extrabold text-violet-700">{item.name}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-xl font-black text-slate-900">Frequently Asked Questions</h4>
          <div className="mt-4 space-y-3">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <p className="text-sm font-bold text-slate-900">{item.q}</p>
                <p className="mt-1 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-violet-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <Link href="/contact" className="flex-1 rounded-lg bg-violet-600 px-3 py-2.5 text-center text-xs font-bold text-white">
            Book Strategy Call
          </Link>
          <Link href="/services/lead-generation" className="flex-1 rounded-lg border border-violet-300 bg-white px-3 py-2.5 text-center text-xs font-bold text-violet-700">
            View Overview
          </Link>
        </div>
      </div>
    </main>
  );
}
