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
  ScoreLegend,
  SectionIntro,
  SplitRoles,
  WeekPlan,
} from "@/app/components/LeadGenBlocks";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/app/lib/contact";
import { photos } from "@/app/lib/images";

const WA = `${WHATSAPP_LINK}?text=${encodeURIComponent("Hi, I run a hair transplant clinic and want patient leads.")}`;

const ease = [0.22, 1, 0.36, 1] as const;

const trust = [
  "Meta Ads",
  "Google Ads",
  "Intent scoring",
  "IST weekly review",
];

const highlights = [
  "Meta and Google campaigns for men comparing clinics",
  "City and radius targeting around your operating theatre",
  "Budget and procedure-readiness filters on the form",
  "Weekly CPL and consult-booked reporting",
];

const audience = [
  {
    title: "Established theatres",
    body: "You have consult slots and a counsellor who can talk graft estimates without dumping every chat on the surgeon.",
  },
  {
    title: "Clinics entering a new city",
    body: "Radius campaigns and local creative so spend stays on patients who can visit, not nationwide curiosity.",
  },
  {
    title: "Teams tired of quiz leads",
    body: "If cheap ‘am I bald’ traffic is filling WhatsApp, we filter for budget and procedure readiness first.",
  },
];

const deliverables = [
  {
    title: "Intent funnel",
    desc: "Curiosity, research, and booking stages split so ads match where the patient is.",
  },
  {
    title: "Creative system",
    desc: "Trust-led angles and clear consult CTAs. No unsafe before-after claims in ads.",
  },
  {
    title: "Lead scoring",
    desc: "Hot, warm, and exploratory inquiries labelled so counsellors know who to call first.",
  },
  {
    title: "Conversion reporting",
    desc: "Source-level view of cost, consults, and which cities deserve more budget.",
  },
];

const channels = [
  {
    title: "Meta",
    body: "Reach men researching restoration in your cities. Creative stays inside health and before-after rules.",
  },
  {
    title: "Google",
    body: "Search for hair transplant, FUE consult, and clinic names in your catchment - not pan-India bargain hunting.",
  },
  {
    title: "Landing page",
    body: "Consult-first page: theatre location, what happens on the visit, and a form that asks budget and timing.",
  },
  {
    title: "Handoff",
    body: "Hot leads to WhatsApp first. Exploratory inquiries can wait in CRM so the counsellor is not flooded.",
  },
];

const steps = [
  "Map audience by age, city, and treatment intent.",
  "Launch Meta and Google with consult-focused landing pages.",
  "Route qualified inquiries to WhatsApp and your CRM.",
  "Scale spend on the creatives and clusters that book.",
];

const needs = [
  {
    title: "Theatre locations",
    body: "Where procedures happen, and the travel radius that is realistic for a consult.",
  },
  {
    title: "Counsellor capacity",
    body: "How many first conversations your team can take in a day without dropping quality.",
  },
  {
    title: "Starting price band",
    body: "A honest range so we can filter inquiries that cannot proceed - without putting a fake discount in ads.",
  },
  {
    title: "Junk vs useful examples",
    body: "Recent chats that wasted time versus chats that booked. That becomes the form and scoring rules.",
  },
];

const cadence = [
  { day: "Mon", title: "Score sample", body: "Your counsellor tags hot, warm, and junk. We cut the junk sources." },
  { day: "Wed", title: "Creative tests", body: "New angles and cities. No unsafe before-after claims in ads." },
  { day: "Fri", title: "Written recap", body: "CPL, consults booked, city mix, and next week’s tests." },
];

const reportFields = [
  { label: "Source", value: "Meta or Google, city and campaign" },
  { label: "Cost", value: "Spend and cost per qualified inquiry" },
  { label: "Score", value: "Hot / warm / exploratory mix" },
  { label: "Next", value: "What scaled, what paused, what we test" },
];

const comparisonRows = [
  {
    topic: "Traffic",
    left: "Free quizzes and nationwide curiosity",
    right: "Men comparing clinics inside your travel radius",
  },
  {
    topic: "Creative",
    left: "Aggressive before-after that gets ads rejected",
    right: "Trust-led consult CTAs inside platform health rules",
  },
  {
    topic: "Handoff",
    left: "Every form fill dumped on WhatsApp",
    right: "Scored inquiries so counsellors call the hot list first",
  },
  {
    topic: "Success",
    left: "Cheap cost per lead",
    right: "Consults booked and cities that deserve more spend",
  },
];

const faqs = [
  {
    q: "Can you run city-specific campaigns?",
    a: "Yes. We structure city and radius campaigns so spend stays on patients who can actually visit the clinic.",
  },
  {
    q: "Do you improve quality, not only volume?",
    a: "Yes. Form filters, exclusions, and creative tests are judged on consults booked - not on cheap form fills.",
  },
  {
    q: "How do you measure success?",
    a: "CPL, consult booked rate, and source-level return. We review this with you every week in a written recap.",
  },
  {
    q: "Will ads include surgery before-and-after photos?",
    a: "Only if your clinic can substantiate them and the platform allows the format. Default is consult-led creative so accounts stay eligible.",
  },
  {
    q: "Is Techify Labs a clinic?",
    a: "No. We are a Pune growth studio. We generate inquiries. Surgery and counselling stay with your medical team.",
  },
  {
    q: "Can you run this alongside an IVF program?",
    a: "Yes, as a separate funnel. Hair spend is never mixed with fertility campaigns or landing pages.",
  },
];

const heroStats = [
  { value: "7–10 days", label: "Typical first inquiries" },
  { value: "Scored", label: "Hot / warm / exploratory" },
  { value: "City-level", label: "Radius campaigns" },
] as const;

const inquirySteps = [
  { title: "Patient compares clinics", body: "Search or social, inside a travel radius that can actually visit." },
  { title: "Consult page with filters", body: "Budget and timing questions before the chat hits WhatsApp." },
  { title: "Scored handoff", body: "Hot leads first. Exploratory inquiries wait in CRM." },
  { title: "Your counsellor books", body: "Graft planning and surgery stay with your theatre." },
] as const;

const firstMonth = [
  { title: "Map intent", body: "Age, city, price band, and what a junk chat looks like for your desk." },
  { title: "Launch consult ads", body: "Meta and Google with a consult-first landing page." },
  { title: "Score the sample", body: "Your counsellor tags hot, warm, and junk. We cut junk sources." },
  { title: "Scale booked visits", body: "Spend follows cities and creatives that convert to consults." },
] as const;

const guardrails = [
  "No unsafe before-after claims that get the ad account rejected.",
  "No presenting Techify Labs as a clinic or surgical provider.",
  "No nationwide curiosity traffic dumped on one theatre.",
  "No scaling when the counsellor cannot take the first call.",
] as const;

const practice = [
  { src: photos.agencyWork, alt: "Planning hair clinic campaigns", caption: "Brief: theatre locations, price band, and junk chats" },
  { src: photos.analytics, alt: "Scoring hair clinic inquiries", caption: "Weekly score: hot, warm, and sources we paused" },
  { src: photos.workshop, alt: "Creative review for hair clinic ads", caption: "Consult-led creative inside platform health rules" },
] as const;

const qualifyFields = [
  { label: "City / radius", hint: "Patients who can actually visit the theatre." },
  { label: "Budget band", hint: "An honest range so curiosity chats are filtered early." },
  { label: "Timing", hint: "This month versus still researching." },
  { label: "Contact window", hint: "When a hot lead should be called first." },
] as const;

const scores = [
  { label: "Hot", body: "Budget and timing match. Counsellor calls first, usually on WhatsApp." },
  { label: "Warm", body: "Serious but not ready this week. Follow-up stays in CRM." },
  { label: "Exploratory", body: "Early research. These do not flood the surgeon or the front desk." },
] as const;

const briefing = [
  "Theatre locations and a realistic travel radius",
  "How many first conversations the counsellor can take in a day",
  "Starting price band that can sit on the page without fake discounts",
  "What a junk chat looks like versus a chat that booked",
  "Whether before-after creative is substantiated and allowed",
] as const;

const notAFit = [
  "Clinics that want quiz traffic and cheap CPL only",
  "Teams that cannot take the first consult call",
  "Accounts that require unsafe before-after as the default ad",
  "Nationwide curiosity dumped on one operating theatre",
] as const;

const included = [
  "Meta and Google account structure",
  "Consult-first landing page",
  "Hot / warm / exploratory scoring",
  "WhatsApp and CRM routing",
  "Weekly written recap",
  "Policy-aware creative tests",
] as const;

export default function LeadGenerationHairTransplantClinicPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden rounded-b-[1.75rem] bg-[#050816] text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgba(234,88,12,0.28),transparent_55%)]"
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
            <span className="text-white">Hair transplant</span>
          </nav>
          <ProgramNav current="hair" />

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease }}
              >
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[12px] text-orange-100">
                  Hair transplant · Clinic acquisition
                </p>
                <h1 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  Qualified consults for hair transplant clinics
                </h1>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/65">
                  Performance campaigns for men who are comparing clinics and
                  ready to book a consult. We handle ads, pages, and routing.
                  Your surgeons handle the procedure.
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
                  src={photos.agencyWork}
                  alt="Performance marketing planning for clinic campaigns"
                  width={1200}
                  height={800}
                  className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[340px]"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050816]/80 to-transparent p-4">
                  <p className="text-[12px] text-white/75">
                    Pune studio · Scored handoff · Not a clinic
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
              kicker="Built for hair clinics"
              title="Traffic that is looking for a consult, not a free quiz"
              body="We qualify budget and procedure readiness before the lead hits your counsellor - so theatre time is not spent on curiosity chats."
            />
          </FadeIn>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 text-[14px] text-slate-600 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.28)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ea580c]" />
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
              title="Clinics that can take the first consult"
            />
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audience.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <article className="lg-card h-full p-6">
                  <p className="text-[12px] font-semibold tracking-[0.14em] text-[#ea580c]/80">
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
                title="A booking-focused program"
                body="We design this as a weekly growth loop: creative, targeting, and counsellor follow-up stay in one review."
              />
            </FadeIn>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {deliverables.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.04}>
                  <article className="lg-card h-full p-5">
                    <p className="text-[12px] font-semibold text-[#ea580c]/80">
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
              body="Ads, landing, scoring, and WhatsApp sit in the same weekly recap. Surgery stays with your theatre."
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
              title="We generate the consult. You run the procedure."
            />
          </FadeIn>
          <SplitRoles
            we={[
              "Meta and Google campaigns, creative, and landing pages",
              "City targeting, budget filters, and intent scoring",
              "WhatsApp and CRM routing",
              "Weekly written recap and the next tests",
            ]}
            you={[
              "Counselling, graft planning, and surgery",
              "Fast reply to hot inquiries",
              "Honest price band and theatre availability",
              "Tags on which chats were actually useful",
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
              title="From brief to booked consults"
            />
          </FadeIn>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step} className="lg-card-tint p-5 text-[14px] leading-relaxed text-slate-600">
                <span className="text-[12px] font-semibold tracking-[0.14em] text-[#ea580c]/80">
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
              title="From ad to a scored WhatsApp"
              body="Curiosity stays in the funnel. Theatre time is reserved for people ready to talk procedure."
            />
          </FadeIn>
          <InquiryPath steps={inquirySteps} tone="orange" />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Scoring"
              title="How your counsellor sees each inquiry"
              body="Hot leads get the first call. Exploratory chats do not sit on the surgeon’s WhatsApp."
            />
          </FadeIn>
          <ScoreLegend items={scores} tone="orange" />
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="First month"
              title="Four weeks to a working score loop"
            />
          </FadeIn>
          <WeekPlan weeks={firstMonth} tone="orange" />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Qualification"
              title="Fields on every hair inquiry"
              body="Budget and timing sit on the form so the first WhatsApp is already useful."
            />
          </FadeIn>
          <QualifyFields items={qualifyFields} tone="orange" />
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <div className="grid gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <SectionIntro
                kicker="To start"
                title="What we need from the clinic"
                body="A short briefing is enough. We do not need theatre schedules or patient records."
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
                  <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ea580c] text-[12px] font-semibold text-white">
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
              body="A written note your centre lead can forward. Not a fake live dashboard."
            />
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reportFields.map((item) => (
              <article key={item.label} className="lg-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ea580c]/80">
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
              title="What the hair retainer covers"
            />
          </FadeIn>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 text-[14px] text-slate-600 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.3)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ea580c]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Compared"
              title="Typical hair ads versus this program"
            />
          </FadeIn>
          <ComparisonTable
            leftLabel="Typical ads"
            rightLabel="This program"
            rows={comparisonRows}
          />
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn className="mb-8">
            <SectionIntro
              kicker="Not a fit"
              title="When we will decline a hair brief"
              body="A mismatch wastes counsellor time and media budget. We say no early."
            />
          </FadeIn>
          <NotAFit items={notAFit} />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-slate-200/90 bg-[#f8f7ff] lg:grid-cols-2">
            <div className="relative h-52 min-h-[220px] lg:h-full">
              <Image
                src={photos.workshop}
                alt="Reviewing hair clinic campaign creative"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ea580c]/80">
                Compliance
              </p>
              <h2 className="section-title mt-2 text-2xl">
                Consult-led creative, not unsafe claims
              </h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
                Default ads ask for a consult. Before-after is used only when
                your clinic can substantiate it and the platform allows the
                format. Techify Labs is not a clinic and does not perform
                procedures.
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
              body="Brief, scoring, and consult-led creative - not a dummy before-after gallery."
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
              title="What we will not do for hair ads"
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
              title="What a 20-minute hair briefing covers"
              body="We do not need theatre schedules or patient records. These five points are enough."
            />
          </FadeIn>
          <BriefingAgenda items={briefing} />
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <RelatedProgram
            href="/services/lead-generation-ivf-center"
            kicker="Also available"
            title="IVF clinic program"
            body="If you also run a fertility centre, we keep that funnel separate so hair spend is not mixed with IVF intent."
          />
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <SectionIntro
              align="center"
              kicker="FAQ"
              title="Questions hair clinics ask"
            />
          </FadeIn>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBand title="Start a hair clinic briefing" wa={WA} />
    </>
  );
}
