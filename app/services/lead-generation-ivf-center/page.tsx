"use client";

import Link from "next/link";

const features = [
  "High-intent IVF inquiries from Meta + Google campaigns",
  "Geographic targeting by city and clinic catchment area",
  "Budget and intent pre-qualification before lead handoff",
  "WhatsApp funnel setup with pre-filled response scripts",
];

export default function LeadGenerationIvfCenterPage() {
  return (
    <main className="min-h-screen bg-[#f4f6f9] text-slate-900">
      <section className="bg-gradient-to-r from-[#060f3c] via-[#13256c] to-[#101a34] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
          <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-violet-100">
            IVF Lead Generation
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Lead Generation for
            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent"> IVF Centers</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Appointment-focused campaigns designed for fertility clinics that need consultation-ready patient leads.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-500">
              Start IVF Campaign
            </Link>
            <Link href="/services/lead-generation" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
              Back to Lead Generation
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
