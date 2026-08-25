"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  Phone,
  Scissors,
} from "lucide-react";
import {
  CtaBand,
  ComparisonTable,
  FadeIn,
  FaqAccordion,
  GuardrailList,
  HeroStatRow,
  InquiryPath,
  BriefingAgenda,
  NotAFit,
  PracticeStrip,
  ProgramNav,
  SectionIntro,
  SplitRoles,
  WeekPlan,
} from "@/app/components/LeadGenBlocks";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/app/lib/contact";
import { photos } from "@/app/lib/images";

const IVF_WA = `${WHATSAPP_LINK}?text=${encodeURIComponent("Hi, I run an IVF clinic and want patient leads.")}`;
const HAIR_WA = `${WHATSAPP_LINK}?text=${encodeURIComponent("Hi, I run a hair transplant clinic and want patient leads.")}`;
const GENERIC_WA = `${WHATSAPP_LINK}?text=${encodeURIComponent("Hi, I run a clinic and want patient leads.")}`;

const ease = [0.22, 1, 0.36, 1] as const;

const programs = [
  {
    href: "/services/lead-generation-ivf-center",
    wa: IVF_WA,
    icon: HeartPulse,
    image: photos.meeting,
    imageAlt: "Planning session for an IVF clinic growth program",
    kicker: "Fertility clinics",
    title: "IVF patient leads",
    body: "Meta and Google campaigns for couples already searching for fertility care. Leads route to your counsellor with city and intent filters.",
    points: ["Consultation-ready inquiries", "City and radius targeting", "WhatsApp handoff"],
  },
  {
    href: "/services/lead-generation-hair-transplant-clinic",
    wa: HAIR_WA,
    icon: Scissors,
    image: photos.agencyWork,
    imageAlt: "Campaign planning for a hair transplant clinic",
    kicker: "Hair clinics",
    title: "Hair transplant leads",
    body: "Acquisition for men comparing clinics and booking consults. We qualify budget and procedure readiness before the lead hits your desk.",
    points: ["Local clinic targeting", "Intent scoring", "Faster follow-up flow"],
  },
] as const;

const fit = [
  {
    title: "Clinics with counsellor capacity",
    body: "Inquiries are useful only if your team can reply the same day. We size spend to how many consults you can actually take.",
  },
  {
    title: "Centres with a defined offer",
    body: "Consult fee, EMI, or a first-visit structure. Ads convert better when the next step is clear on the landing page.",
  },
  {
    title: "Operators who want quality, not dumps",
    body: "If you already know what a junk inquiry looks like, we use that to filter. Volume without consults is not the brief.",
  },
] as const;

const channels = [
  {
    title: "Meta Ads",
    body: "Reach and retargeting around your cities, with creative that matches treatment intent and platform health rules.",
    image: photos.metaAds,
  },
  {
    title: "Google Ads",
    body: "Search and Performance Max for people already looking for a clinic, consult, or procedure in your catchment.",
    image: photos.googleAds,
  },
  {
    title: "Landing and routing",
    body: "A consult-focused page, form fields that qualify, and WhatsApp or CRM handoff so the first reply is fast.",
    image: photos.analytics,
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Clinic briefing",
    body: "Locations, offer, counsellor capacity, and what a good inquiry looks like for your front desk.",
  },
  {
    n: "02",
    title: "Funnel and creative",
    body: "Landing page, ads, and form fields aligned to treatment intent - not generic healthcare traffic.",
  },
  {
    n: "03",
    title: "Launch and routing",
    body: "Campaigns go live with WhatsApp and CRM handoff so your team can reply in minutes, not hours.",
  },
  {
    n: "04",
    title: "Weekly quality review",
    body: "We optimize for consults booked, not raw form fills. Spend follows the cities and creatives that convert.",
  },
] as const;

const cadence = [
  { day: "Mon", title: "Quality sample", body: "Review a set of inquiries with your counsellor notes. Pause what is wasting spend." },
  { day: "Wed", title: "Tests live", body: "New creative, audiences, or landing copy. One change at a time so we can read it." },
  { day: "Fri", title: "Written recap", body: "CPL, consults, source mix, and the next tests. No vanity dashboards." },
] as const;

const included = [
  "Account structure on Meta and Google",
  "Landing page aligned to the offer",
  "WhatsApp or CRM routing",
  "City and radius controls",
  "Weekly written performance note",
  "Creative tests against policy",
] as const;

const heroStats = [
  { value: "7–10 days", label: "Typical first inquiries" },
  { value: "Weekly", label: "Written recap" },
  { value: "Two channels", label: "Meta and Google" },
] as const;

const inquirySteps = [
  {
    title: "Patient sees the offer",
    body: "Search or social, inside the cities your clinic can actually serve.",
  },
  {
    title: "Lands on a consult page",
    body: "Clear next step, locations, and form fields that qualify intent.",
  },
  {
    title: "Inquiry is routed",
    body: "WhatsApp or CRM, with the details your counsellor needs to call.",
  },
  {
    title: "Your team books the visit",
    body: "Medical conversation stays with the clinic. We keep the ads honest.",
  },
] as const;

const firstMonth = [
  { title: "Brief and build", body: "Locations, offer, capacity, and junk examples become campaigns and a landing page." },
  { title: "Launch", body: "City budgets go live. First inquiries typically arrive inside 7–10 days." },
  { title: "Quality sample", body: "Your desk marks useful vs waste. We pause the sources that fail that test." },
  { title: "Scale what books", body: "Spend follows consults, not cheap form fills. Tests stay written down." },
] as const;

const guardrails = [
  "We do not treat patients or present Techify Labs as a clinic.",
  "We do not run guaranteed medical outcome claims in ads.",
  "We do not scale spend into a front desk that cannot reply.",
  "We do not dump nationwide traffic on a single-city centre.",
] as const;

const comparisonRows = [
  {
    topic: "Traffic",
    left: "Broad healthcare or cheap quiz traffic",
    right: "Treatment-intent audiences around your cities",
  },
  {
    topic: "Handoff",
    left: "A spreadsheet of form fills",
    right: "WhatsApp and CRM routing with fields your desk can use",
  },
  {
    topic: "Reporting",
    left: "Monthly spend PDF",
    right: "Weekly recap: CPL, consults, source, next tests",
  },
  {
    topic: "Creative",
    left: "Generic medical stock",
    right: "Policy-aware ads matched to the landing page",
  },
] as const;

const faqs = [
  {
    q: "Do you treat patients?",
    a: "No. Techify Labs is a performance marketing studio in Pune. We generate inquiries. Counselling and treatment stay with your medical team.",
  },
  {
    q: "How soon do inquiries typically start?",
    a: "Most clinics see the first inquiries within 7–10 days of launch. Stable quality usually takes three to four weeks of creative and audience testing.",
  },
  {
    q: "What do you need from the clinic to start?",
    a: "Locations and service radius, counsellor hours, the consult offer, and a few examples of good versus junk inquiries. That briefing is how we filter.",
  },
  {
    q: "Which channels do you run?",
    a: "Meta Ads and Google Ads as the core. Landing pages, tracking, and WhatsApp or CRM routing are part of the same program.",
  },
  {
    q: "Can one retainer cover IVF and hair?",
    a: "Only if both practices exist and you want them run as separate funnels. We do not mix fertility intent with hair transplant spend.",
  },
] as const;

const briefing = [
  "Clinic type: IVF, hair transplant, or both as separate funnels",
  "Cities, centres, and a realistic travel radius",
  "Counsellor hours and how many first conversations you can take in a day",
  "The consult offer that can sit honestly on the landing page",
  "Two recent junk inquiries and two useful ones",
] as const;

const notAFit = [
  "Clinics that cannot reply the same day",
  "Operators who want guaranteed medical outcomes in ads",
  "Nationwide volume dumped on one local centre or theatre",
  "Teams that only want cheap form fills, not consults booked",
] as const;

const practice = [
  {
    src: photos.meeting,
    alt: "Briefing a clinic acquisition program",
    caption: "Brief: cities, offer, capacity, and what junk looks like",
  },
  {
    src: photos.analytics,
    alt: "Weekly clinic campaign recap",
    caption: "Friday recap: CPL, consults, sources paused",
  },
  {
    src: photos.workshop,
    alt: "Reviewing clinic ad creative",
    caption: "Creative stays inside Meta and Google health rules",
  },
] as const;

export default function LeadGenerationPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden rounded-b-[1.75rem] bg-[#050816] text-white">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgba(99,102,241,0.38),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_70%,rgba(234,88,12,0.16),transparent_48%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-[1440px] px-6 pb-14 pt-10 sm:px-8 lg:px-10">
            <nav className="mb-6 flex items-center gap-3 text-[13px] text-white/45" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Lead generation</span>
            </nav>
            <ProgramNav current="overview" />
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[12px] text-violet-200">
                  Clinic acquisition · IVF and hair
                </p>
                <h1 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  Patient inquiries for IVF and hair transplant clinics
                </h1>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/65">
                  Paid acquisition, landing pages, and WhatsApp routing for
                  clinics in India. We send consultation-ready leads. We are an
                  agency, not a treatment provider.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={GENERIC_WA}
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
                <HeroStatRow items={heroStats} />
              </div>
              <div className="lg:col-span-6">
                <div className="lg-hero-media">
                  <Image
                    src={photos.collaboration}
                    alt="Growth studio working on clinic acquisition"
                    width={1200}
                    height={800}
                    className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[340px]"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050816]/85 to-transparent p-4">
                    <p className="text-[12px] text-white/75">
                      Pune studio · Meta and Google · Weekly written recap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="lead-generation" className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn>
            <SectionIntro
              kicker="Two clinic programs"
              title="Choose the practice you run"
              body="Each program is built around how patients actually book that treatment - not a generic healthcare ads template."
            />
          </FadeIn>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {programs.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.article
                  key={program.href}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease }}
                  className="lg-card flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden sm:h-44">
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#3b31a1]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3b31a1]/70">
                      {program.kicker}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-900">
                      {program.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
                      {program.body}
                    </p>
                    <ul className="mt-4 space-y-2 text-[13.5px] text-slate-600">
                      {program.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ea580c]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Link
                        href={program.href}
                        className="inline-flex h-10 items-center rounded-full bg-[#3b31a1] px-5 text-[13px] font-semibold text-white transition hover:bg-[#32297f]"
                      >
                        View program
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                      <a
                        href={program.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center rounded-full border border-slate-200 bg-white px-5 text-[13px] font-semibold text-slate-700 transition hover:border-[#3b31a1]/30"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn>
            <SectionIntro
              kicker="Who this is for"
              title="Built for clinics that can take the consult"
              body="Lead generation only works when ads, the landing page, and your front desk are on the same brief."
            />
          </FadeIn>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {fit.map((item, i) => (
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
          <FadeIn>
            <SectionIntro
              kicker="Channels"
              title="Where the program runs"
              body="Media, landing, and routing sit in one weekly loop. Your doctors do not need another vendor for each piece."
            />
          </FadeIn>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {channels.map((channel, i) => (
              <FadeIn key={channel.title} delay={i * 0.05}>
                <article className="lg-card overflow-hidden">
                  <div className="relative h-36">
                    <Image
                      src={channel.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[16px] font-semibold text-slate-900">
                      {channel.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                      {channel.body}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-inner">
          <FadeIn className="text-center">
            <SectionIntro
              align="center"
              kicker="How a clinic program runs"
              title="Four steps from brief to weekly review"
            />
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.n} className="lg-card-tint p-5">
                <p className="text-[12px] font-semibold tracking-[0.16em] text-[#3b31a1]/70">
                  {step.n}
                </p>
                <h3 className="mt-2 text-[15px] font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">
                  {step.body}
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
                  kicker="Inquiry path"
                  title="How a patient reaches your counsellor"
                  body="The program is a path, not a pile of ads. Each step has an owner."
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
                  title="What the first four weeks look like"
                  body="No mystery launch. You know what happens each week and what we need from the front desk."
                />
              </FadeIn>
              <WeekPlan weeks={firstMonth} />
            </div>
          </section>

          <section className="home-section home-section-white">
            <div className="home-section-inner">
              <FadeIn>
                <SectionIntro
                  kicker="Operating split"
                  title="We generate the inquiry. You run the consult."
                  body="Clear ownership so the program does not stall on who replies, who treats, or who owns the ads account."
                />
              </FadeIn>
              <div className="mt-8">
                <SplitRoles
                  we={[
                    "Campaign build, creative, and landing pages",
                    "City and intent targeting, exclusions, and tests",
                    "WhatsApp or CRM routing setup",
                    "Weekly written recap and next experiments",
                  ]}
                  you={[
                    "Medical counselling and treatment",
                    "Same-day reply from your counsellor team",
                    "Offer, pricing, and clinic availability",
                    "Feedback on which inquiries were actually useful",
                  ]}
                />
              </div>
            </div>
          </section>

          <section className="home-section">
            <div className="home-section-inner">
              <div className="grid gap-10 lg:grid-cols-12">
                <FadeIn className="lg:col-span-4">
                  <SectionIntro
                    kicker="Weekly cadence"
                    title="A written operating rhythm"
                    body="Same three checkpoints every week so your counsellor team knows when to expect changes."
                  />
                </FadeIn>
                <div className="grid gap-3 lg:col-span-8">
                  {cadence.map((item) => (
                    <article
                      key={item.day}
                      className="lg-card flex gap-4 p-5 sm:items-start"
                    >
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
              <FadeIn>
                <SectionIntro
                  kicker="Included"
                  title="What every clinic retainer covers"
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

          <section className="home-section">
            <div className="home-section-inner">
              <FadeIn className="mb-8">
                <SectionIntro
                  kicker="Compared"
                  title="Typical ads setup versus this program"
                  body="Same platforms. Different operating standard."
                />
              </FadeIn>
              <ComparisonTable
                leftLabel="Typical setup"
                rightLabel="Techify Labs"
                rows={comparisonRows}
              />
            </div>
          </section>

          <section className="home-section home-section-white">
            <div className="home-section-inner">
              <FadeIn className="mb-8">
                <SectionIntro
                  kicker="First call"
                  title="What a 20-minute briefing covers"
                  body="We do not need EMR access or theatre schedules. These five points are enough to see if we can help."
                />
              </FadeIn>
              <BriefingAgenda items={briefing} />
            </div>
          </section>

          <section className="home-section">
            <div className="home-section-inner">
              <FadeIn className="mb-8">
                <SectionIntro
                  kicker="How we work"
                  title="The operating loop in practice"
                  body="Brief, recap, and creative review - not dummy clinic stock or fake dashboards."
                />
              </FadeIn>
              <PracticeStrip items={practice} />
            </div>
          </section>

          <section className="home-section home-section-white">
            <div className="home-section-inner">
              <FadeIn className="mb-8">
                <SectionIntro
                  kicker="Not a fit"
                  title="When we will decline the brief"
                  body="A mismatch wastes your counsellor time and our media budget. We say no early."
                />
              </FadeIn>
              <NotAFit items={notAFit} />
            </div>
          </section>

          <section className="home-section">
            <div className="home-section-inner">
              <FadeIn className="mb-8">
                <SectionIntro
                  kicker="Guardrails"
                  title="What we will not do"
                  body="These limits keep accounts eligible and keep your counsellor time on real consults."
                />
              </FadeIn>
              <GuardrailList items={guardrails} />
            </div>
          </section>

          <section className="home-section home-section-white">
            <div className="home-section-inner max-w-3xl">
              <FadeIn className="mb-8 text-center">
                <SectionIntro
                  align="center"
                  kicker="FAQ"
                  title="Questions clinic owners ask first"
                />
              </FadeIn>
              <FaqAccordion items={faqs} />
            </div>
          </section>

          <CtaBand title="Speak with a clinic growth lead" wa={GENERIC_WA} />
    </>
  );
}
