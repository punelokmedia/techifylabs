"use client";

import Link from "next/link";

const features = [
  "High-intent hair transplant leads from paid media",
  "Male-focused demographic and local clinic targeting",
  "Creative strategy for before/after trust-building ads",
  "Lead scoring for consultation and procedure readiness",
];

export default function LeadGenerationHairTransplantClinicPage() {
  return (
    <main className="min-h-screen bg-[#f4f6f9] text-slate-900">
      <section className="bg-gradient-to-r from-[#060f3c] via-[#13256c] to-[#101a34] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
          <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-orange-100">
            Hair Transplant Lead Generation
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Lead Generation for
            <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent"> Hair Transplant Clinics</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Qualified lead pipeline for clinics that want more booked consultations and lower cost per patient acquisition.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-400">
              Start Hair Campaign
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
