"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import {
  BriefingAgenda,
  ComparisonTable,
  CtaBand,
  FadeIn,
  FaqAccordion,
  GuardrailList,
  HeroStatRow,
  InquiryPath,
  NotAFit,
  PracticeStrip,
  ProgramNav,
  QualifyFields,
  RelatedProgram,
  SectionIntro,
  SplitRoles,
  WeekPlan,
} from "@/app/components/LeadGenBlocks";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/app/lib/contact";
import { photos } from "@/app/lib/images";

const WA = `${WHATSAPP_LINK}?text=${encodeURIComponent("Hi, I run an IVF clinic and want patient leads.")}`;

const ease = [0.22, 1, 0.36, 1] as const;

const trust = [
  "Meta Ads",
  "Google Ads",
  "WhatsApp routing",
  "IST weekly review",
];

const highlights = [
  "Meta and Google campaigns for fertility search intent",
  "City and radius targeting around your clinic",
  "Form and WhatsApp filters before counsellor handoff",
  "Weekly review of CPL, consults, and source quality",
];

const audience = [
  {
    title: "Single-centre IVF clinics",
    body: "One catchment, one counsellor team. Spend stays inside the radius your patients can actually travel.",
  },
  {
    title: "Multi-city fertility groups",
    body: "City-wise budgets and creatives so a strong centre is not starved by a weaker one.",
  },
  {
    title: "Centres with defined qualification",
    body: "Age band, city, treatment stage, and prior IVF history - we turn that into form fields and exclusions.",
  },
];

const deliverables = [
  {
    title: "Funnel and offer",
    desc: "Awareness to booking mapped to how couples actually choose an IVF centre.",
  },
  {
    title: "Creative and landing",
    desc: "Policy-aware ads and pages with a clear consultation CTA - not generic medical stock copy.",
  },
  {
    title: "Lead qualification",
    desc: "Intent fields and exclusions so your team spends time on serious inquiries.",
  },
  {
    title: "Reporting",
    desc: "Source-wise performance, consult booked rate, and next tests - in writing every week.",
  },
];

const channels = [
  {
    title: "Meta",
    body: "Reach couples in your cities, retarget site visitors, and keep health-policy copy inside platform rules.",
  },
  {
    title: "Google",
    body: "Capture search for IVF, fertility consult, and clinic names in your catchment - not nationwide noise.",
  },
  {
    title: "Landing page",
    body: "One consult-focused page: offer, locations, form fields, and a WhatsApp path that matches the ad.",
  },
  {
    title: "Handoff",
    body: "Leads land where your counsellor already works - WhatsApp or CRM - with the fields they need to call.",
  },
];

const steps = [
  "Brief: locations, capacity, and what a qualified inquiry looks like.",
  "Build: campaigns, landing page, and WhatsApp routing.",
  "Launch: city budgets with daily quality checks.",
  "Optimize: scale the creatives and geos that book consults.",
];

const needs = [
  {
    title: "Locations and radius",
    body: "Centres you want inquiries for, and how far patients typically travel.",
  },
  {
    title: "Counsellor hours",
    body: "When the team can reply. We do not scale spend into a closed front desk.",
  },
  {
    title: "Consult offer",
    body: "Fee, complimentary first visit, or EMI - whatever is true and can sit on the page.",
  },
  {
    title: "Quality examples",
    body: "A few recent good and junk inquiries. That is the filter, not a generic healthcare form.",
  },
];

const cadence = [
  { day: "Mon", title: "Inquiry sample", body: "Your team marks useful vs junk. We pause waste the same week." },
  { day: "Wed", title: "Creative and audience tests", body: "New hooks, cities, or landing copy - one change at a time." },
  { day: "Fri", title: "Written recap", body: "CPL, consults booked, source mix, and the tests for next week." },
];

const reportFields = [
  { label: "Source", value: "Meta or Google, campaign and city" },
  { label: "Cost", value: "Spend and cost per inquiry" },
  { label: "Quality", value: "Consult booked vs inquiry volume" },
  { label: "Next", value: "What we will test, and what we paused" },
];

const comparisonRows = [
  {
    topic: "Audience",
    left: "Broad health or ‘baby’ interest traffic",
    right: "Fertility intent, city radius, and exclusions you define",
  },
  {
    topic: "Claims",
    left: "Guaranteed results language in ads",
    right: "Policy-aware copy. No outcome promises from the agency",
  },
  {
    topic: "Handoff",
    left: "Email dump of form fills",
    right: "WhatsApp or CRM with city, intent, and contact window",
  },
  {
    topic: "Review",
    left: "A monthly ads screenshot",
    right: "Weekly note tied to consults, not vanity reach",
  },
];

const faqs = [
  {
    q: "How soon do inquiries typically start?",
    a: "Most clinics see the first inquiries within 7–10 days of launch. Stable quality usually takes three to four weeks of creative and audience testing.",
  },
  {
    q: "Do you set up WhatsApp and CRM routing?",
    a: "Yes. We define handoff, response templates, and fields so your counsellor team can reply quickly from the same number they already use.",
  },
  {
    q: "How do you keep lead quality high?",
    a: "We target fertility intent, filter junk form fills, and review sample inquiries with your team. Spend follows consults, not raw volume.",
  },
  {
    q: "What advertising rules do you follow?",
    a: "Health ads on Meta and Google have strict claim limits. We do not run guaranteed pregnancy copy, and we do not present Techify Labs as a clinic.",
  },
  {
    q: "Do you provide medical treatment?",
    a: "No. Techify Labs is a performance marketing studio. We generate inquiries for your clinic. Treatment stays entirely with your doctors.",
  },
  {
    q: "Can you run this alongside a hair transplant program?",
    a: "Yes, as a separate funnel. Fertility intent and hair intent do not share campaigns, landing pages, or weekly recaps.",
  },
];

const heroStats = [
  { value: "7–10 days", label: "Typical first inquiries" },
  { value: "Weekly", label: "Written recap" },
  { value: "City-level", label: "Budgets and creatives" },
] as const;

const inquirySteps = [
  { title: "Couple searches or sees an ad", body: "Fertility intent inside the cities your centre can serve." },
  { title: "Consult page, not a brochure", body: "Offer, locations, and fields for stage of treatment." },
  { title: "Counsellor gets the inquiry", body: "WhatsApp or CRM with city, intent, and a contact window." },
  { title: "You run the medical consult", body: "Diagnostics and treatment stay with your doctors." },
] as const;

const firstMonth = [
  { title: "Brief the filter", body: "Radius, counsellor hours, offer, and examples of junk inquiries." },
  { title: "Launch in-catchment", body: "Meta and Google go live. First inquiries typically in 7–10 days." },
  { title: "Mark the sample", body: "Your team tags useful vs waste. We pause the waste the same week." },
  { title: "Scale consults", body: "Budget follows the cities and creatives that book visits." },
] as const;

const guardrails = [
  "No guaranteed pregnancy or outcome language in ads.",
  "No presenting Techify Labs as a fertility clinic.",
  "No nationwide dump if you operate one catchment.",
  "No spend increase when the counsellor desk cannot reply.",
] as const;

const practice = [
  { src: photos.meeting, alt: "Planning an IVF clinic acquisition program", caption: "Brief: cities, offer, and what a good inquiry looks like" },
  { src: photos.analytics, alt: "Reviewing IVF campaign quality", caption: "Weekly recap: CPL, consults, and what we pause" },
  { src: photos.workshop, alt: "Creative review for fertility ads", caption: "Creative stays inside health-policy limits" },
] as const;

const qualifyFields = [
  { label: "City / catchment", hint: "Where the couple can actually travel for a consult." },
  { label: "Age band", hint: "Matches how your counsellors qualify, not a vanity field." },
  { label: "Treatment stage", hint: "First consult, failed cycle, or second opinion." },
  { label: "Contact window", hint: "When the counsellor should call, in IST." },
] as const;

const briefing = [
  "Centres and the travel radius patients typically accept",
  "Counsellor hours and daily consult capacity",
  "The consult offer that can sit honestly on the page",
  "Age, city, and stage fields you want on the form",
  "Recent junk inquiries versus inquiries that booked",
] as const;

const notAFit = [
  "Centres that cannot reply the same day",
  "Operators who want guaranteed pregnancy language in ads",
  "Nationwide spend for a single-city catchment",
  "Teams that only measure cheap form fills",
] as const;

const included = [
  "Meta and Google account structure",
  "Consult-focused landing page",
  "WhatsApp or CRM routing",
  "City and radius controls",
  "Weekly written recap",
  "Policy-aware creative tests",
] as const;

export default function LeadGenerationIvfCenterPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden rounded-b-[1.75rem] bg-[#050816] text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgba(99,102,241,0.4),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1440px] px-6 pb-14 pt-10 sm:px-8 lg:px-10">
          <nav className="mb-6 flex items-center gap-3 text-[13px] text-white/45" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/services/lead-generation" className="transition hover:text-white">
              Lead generation
            </Link>
            <span>/</span>
            <span className="text-white">IVF clinics</span>
          </nav>
          <ProgramNav current="ivf" />

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease }}
              >
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[12px] text-violet-200">
                  IVF · Clinic acquisition
                </p>
                <h1 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  Consultation-ready IVF inquiries for your centre
                </h1>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/65">
                  Paid media, landing pages, and WhatsApp routing built for
                  fertility clinics in India. Your doctors treat patients. We
                  fill the consult calendar.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center rounded-full bg-white px-6 text-[14px] font-semibold text-slate-900"
                  >
                    Talk on WhatsApp
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex h-11 items-center gap-1.5 rounded-full border border-white/20 px-6 text-[14px] font-semibold text-white"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {trust.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] tracking-wide text-white/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <HeroStatRow items={heroStats} />
              </motion.div>
            </div>
            <div className="lg:col-span-6">
              <div className="lg-hero-media">
                <Image
                  src={photos.meeting}
                  alt="Clinic growth planning session"
                  width={1200}
                  height={800}
                  className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[340px]"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050816]/80 to-transparent p-4">
                  <p className="text-[12px] text-white/75">
                    Pune studio · Weekly written recap · Not a clinic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn>
            <SectionIntro
              kicker="Built for IVF centres"
              title="Acquisition that respects how couples choose a clinic"
              body="The program is judged on consults your counsellors can take - not on cheap form fills from outside your cities."
            />
          </FadeIn>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 text-[14px] text-slate-600 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.28)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b31a1]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn>
            <SectionIntro
              kicker="Who this is for"
              title="Clinics that can counsel the inquiry"
            />
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audience.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <article className="lg-card h-full p-6">
                  <p className="text-[12px] font-semibold tracking-[0.14em] text-[#3b31a1]/70">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 text-[16px] font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                    {item.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <div className="grid gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <SectionIntro
                kicker="What you get"
                title="A weekly growth program"
                body="Not a one-time ads setup. Creative, targeting, and follow-up stay aligned with your counsellor capacity."
              />
            </FadeIn>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {deliverables.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.04}>
                  <article className="lg-card h-full p-5">
                    <p className="text-[12px] font-semibold text-[#3b31a1]/70">
                      0{i + 1}
                    </p>
                    <h3 className="mt-2 text-[16px] font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn>
            <SectionIntro
              kicker="Stack"
              title="Channels in one operating loop"
              body="Media, page, and routing are reviewed together. Your doctors do not need a separate vendor for each layer."
            />
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((item) => (
              <article key={item.title} className="lg-card-tint p-5">
                <h3 className="text-[15px] font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Operating split"
              title="We send the inquiry. You run the consult."
            />
          </FadeIn>
          <SplitRoles
            we={[
              "Meta and Google campaigns, creative, and landing pages",
              "City targeting, form filters, and junk exclusions",
              "WhatsApp or CRM routing",
              "Weekly written recap and the next tests",
            ]}
            you={[
              "Medical counselling, diagnostics, and treatment",
              "Same-day reply from your fertility counsellors",
              "Honest offer, slots, and clinic availability",
              "Marks on which inquiries were actually useful",
            ]}
          />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn className="text-center">
            <SectionIntro
              align="center"
              kicker="How we work"
              title="Four steps to first inquiries"
            />
          </FadeIn>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step} className="lg-card-tint p-5 text-[14px] leading-relaxed text-slate-600">
                <span className="text-[12px] font-semibold tracking-[0.14em] text-[#3b31a1]/70">
                  0{i + 1}
                </span>
                <p className="mt-2">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Inquiry path"
              title="From ad to counsellor desk"
              body="Couples should never wonder what happens after they tap. Neither should your front desk."
            />
          </FadeIn>
          <InquiryPath steps={inquirySteps} />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="First month"
              title="Four weeks to a working quality loop"
            />
          </FadeIn>
          <WeekPlan weeks={firstMonth} />
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Qualification"
              title="Fields on every IVF inquiry"
              body="Your counsellor should not open a chat that only says a name and a number."
            />
          </FadeIn>
          <QualifyFields items={qualifyFields} />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <div className="grid gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <SectionIntro
                kicker="To start"
                title="What we need from the clinic"
                body="A 30-minute briefing is enough if these four points are clear. We do not need EMR access."
              />
            </FadeIn>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {needs.map((item) => (
                <article key={item.title} className="lg-card p-5">
                  <h3 className="text-[15px] font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <div className="grid gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <SectionIntro
                kicker="Cadence"
                title="The same three checkpoints every week"
              />
            </FadeIn>
            <div className="grid gap-3 lg:col-span-8">
              {cadence.map((item) => (
                <article key={item.day} className="lg-card flex gap-4 p-5">
                  <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg bg-[#3b31a1] text-[12px] font-semibold text-white">
                    {item.day}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-slate-500">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Reporting"
              title="What the weekly recap contains"
              body="A written note, not a live fake dashboard. These are the fields your centre lead sees every Friday."
            />
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reportFields.map((item) => (
              <article key={item.label} className="lg-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3b31a1]/70">
                  {item.label}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  {item.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn>
            <SectionIntro
              kicker="Included"
              title="What the IVF retainer covers"
            />
          </FadeIn>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 text-[14px] text-slate-600 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.3)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b31a1]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Compared"
              title="Typical fertility ads versus this program"
            />
          </FadeIn>
          <ComparisonTable
            leftLabel="Typical ads"
            rightLabel="This program"
            rows={comparisonRows}
          />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Not a fit"
              title="When we will decline an IVF brief"
              body="A mismatch wastes counsellor time and media budget. We say no early."
            />
          </FadeIn>
          <NotAFit items={notAFit} />
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-slate-200/90 bg-[#f8f7ff] lg:grid-cols-2">
            <div className="relative h-52 lg:h-full min-h-[220px]">
              <Image
                src={photos.workshop}
                alt="Reviewing clinic campaign creative"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3b31a1]/70">
                Compliance
              </p>
              <h2 className="section-title mt-2 text-2xl">
                Policy-aware fertility advertising
              </h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
                We do not run guaranteed outcome claims, and we do not present
                Techify Labs as a medical provider. Ads and landing copy stay
                inside Meta and Google health rules. Treatment outcomes belong
                to your doctors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="How we work"
              title="The operating loop in practice"
              body="Brief, recap, and creative review - not a collage of dummy clinic stock."
            />
          </FadeIn>
          <PracticeStrip items={practice} />
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Guardrails"
              title="What we will not do for IVF ads"
            />
          </FadeIn>
          <GuardrailList items={guardrails} />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="First call"
              title="What a 20-minute IVF briefing covers"
              body="We do not need EMR access. These five points are enough to see if we can help."
            />
          </FadeIn>
          <BriefingAgenda items={briefing} />
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <RelatedProgram
            href="/services/lead-generation-hair-transplant-clinic"
            kicker="Also available"
            title="Hair transplant clinic program"
            body="If your group also runs a restoration theatre, we run a separate intent funnel so IVF and hair spend stay distinct."
          />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <SectionIntro
              align="center"
              kicker="FAQ"
              title="Questions IVF centres ask"
            />
          </FadeIn>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBand title="Start an IVF lead briefing" wa={WA} />
    </>
  );
}
