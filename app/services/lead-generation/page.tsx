"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  HeartPulse,
  Lock,
  MessageCircle,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

import { PHONE_TEL, WHATSAPP_LINK } from "@/app/lib/contact";

const IVF_MSG = "Hi, I run a clinic. I need IVF patient leads.";
const HAIR_MSG = "Hi, I run a clinic. I need Hair Transplant leads.";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function waLink(message: string) {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease },
  }),
};

const features = [
  { icon: Target, label: "High-intent patient leads" },
  { icon: BadgeCheck, label: "Verified & filtered inquiries" },
  { icon: Sparkles, label: "ROI-focused campaigns" },
] as const;

const ivfSteps = [
  { title: "You choose", label: "IVF leads", icon: HeartPulse },
  { title: "We open", label: "WhatsApp", icon: MessageCircle },
  { title: "You send", label: "A ready message", icon: Sparkles },
  { title: "We reply", label: "Same-day setup", icon: UserRound },
] as const;

const hairSteps = [
  { title: "You choose", label: "Hair leads", icon: Scissors },
  { title: "We open", label: "WhatsApp", icon: MessageCircle },
  { title: "You send", label: "A ready message", icon: Sparkles },
  { title: "We reply", label: "Same-day setup", icon: UserRound },
] as const;

export default function LeadGenerationPage() {
  const reduceMotion = useReducedMotion();

  const scrollToPicker = () => {
    document
      .getElementById("clinic-select")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  };

  return (
    <section id="lead-generation" className="bg-[#f4f6f9]">
      <div className="relative overflow-hidden bg-[#070b1c] text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="hero-mesh" />
          <div className="hero-grain" />
          <span className="hero-orb hero-orb-a" />
          <span className="hero-orb hero-orb-b" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_20%,#000_20%,transparent_75%)]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 py-12 pb-14 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 lg:px-10 lg:py-16 lg:pb-[4.5rem] xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)_minmax(240px,0.4fr)] xl:gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="min-w-0"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-100">
              <UserRound className="h-3.5 w-3.5" />
              For clinics & healthcare providers
            </span>

            <h1 className="mt-5 max-w-[16ch] text-[1.9rem] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.55rem] lg:leading-[1.1]">
              Patient leads for{" "}
              <span className="hero-title-accent">IVF & hair transplant</span>{" "}
              clinics
            </h1>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75">
              Performance marketing that sends verified, consultation-ready
              inquiries to your front desk — not raw form dumps.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToPicker}
                className="hero-cta group inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-semibold sm:px-6 sm:text-sm"
              >
                Get patients for your clinic
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href={waLink("Hi, I run a clinic. I need patient leads.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-ghost inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-semibold sm:px-6 sm:text-sm"
              >
                Talk to an expert
              </a>
            </div>

            <ul className="mt-6 flex max-w-lg flex-col gap-2 sm:flex-row sm:flex-wrap">
              {features.map((item) => (
                <li
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1.5 text-[12px] font-medium text-white/85"
                >
                  <item.icon className="h-3.5 w-3.5 text-violet-300" />
                  {item.label}
                </li>
              ))}
            </ul>

            <p className="mt-5 flex items-center gap-2 text-xs font-medium text-white/55">
              <ShieldCheck className="h-4 w-4 text-white/70" />
              We work with clinics. We are not a treatment provider.
            </p>
          </motion.div>

          <motion.div
            id="clinic-select"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="scroll-mt-[calc(var(--site-header-height)+1rem)]"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.14] bg-white p-5 text-slate-950 shadow-[0_32px_80px_-28px_rgba(0,0,0,0.55)] ring-1 ring-black/5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-orange-400" />
              <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />

              <div className="relative">
                <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                  Start here
                </p>
                <h2 className="mt-1.5 text-center text-2xl font-bold tracking-tight text-slate-950 sm:text-[1.7rem]">
                  Choose your clinic type
                </h2>
                <p className="mt-1.5 text-center text-sm text-slate-500">
                  We will route you to a specialized lead program.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <ServicePick
                    href="/services/lead-generation-ivf-center"
                    tone="violet"
                    icon={HeartPulse}
                    title="IVF leads"
                    caption="Fertility clinics"
                    bullets={[
                      "High-intent couples",
                      "Consultation-ready",
                      "City & radius targeting",
                    ]}
                    cta="Get IVF leads"
                  />
                  <ServicePick
                    href="/services/lead-generation-hair-transplant-clinic"
                    tone="orange"
                    icon={Scissors}
                    title="Hair transplant leads"
                    caption="Hair clinics"
                    bullets={[
                      "Qualified male leads",
                      "Budget-ready intent",
                      "Consultation bookings",
                    ]}
                    cta="Get hair leads"
                  />
                </div>

                <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <Lock className="h-3.5 w-3.5 text-slate-700" />
                  For clinics only. We do not provide medical treatment.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.16}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-2 xl:col-span-1 xl:grid-cols-1"
            aria-label="Lead performance snapshot"
          >
            <article className="rounded-2xl border border-white/[0.14] bg-white p-4 text-slate-950 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Monthly leads delivered
                </p>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                  <span className="hero-live-dot !h-1.5 !w-1.5 !shadow-none" />
                  Live
                </span>
              </div>
              <div className="mt-1 flex items-end gap-2">
                <p className="text-[2.4rem] font-black leading-none tracking-tight">
                  248
                </p>
                <p className="mb-1 text-sm font-bold text-emerald-600">+32%</p>
              </div>
              <LineChart />
              <div className="mt-1 flex justify-between text-[10px] font-medium text-slate-400">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-white/[0.14] bg-white p-4 text-slate-950 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.5)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Leads by service
              </p>
              <div className="mt-3 flex items-center gap-4">
                <DonutChart />
                <ul className="min-w-0 flex-1 space-y-2.5 text-[12px] font-semibold text-slate-700">
                  <li className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-600" />
                      IVF
                    </span>
                    <span>60%</span>
                  </li>
                  <li className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                      Hair
                    </span>
                    <span>40%</span>
                  </li>
                </ul>
              </div>
            </article>
          </motion.aside>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-6 max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] lg:grid-cols-4">
          {[
            { value: "248+", label: "Leads / month" },
            { value: "< 15 min", label: "Avg. first reply" },
            { value: "Verified", label: "Inquiry filters" },
            { value: "Clinic-only", label: "B2B programs" },
          ].map((item) => (
            <div key={item.label} className="bg-white px-4 py-4 text-center">
              <p className="text-base font-bold tracking-tight text-slate-950">
                {item.value}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-violet-400 sm:w-24" />
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            What happens next
          </h2>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-violet-400 sm:w-24" />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <ProcessLane
            tone="violet"
            title="IVF clinics"
            steps={ivfSteps}
            message={IVF_MSG}
            pageHref="/services/lead-generation-ivf-center"
            waHref={waLink(IVF_MSG)}
            callHref={PHONE_TEL}
          />
          <ProcessLane
            tone="orange"
            title="Hair transplant clinics"
            steps={hairSteps}
            message={HAIR_MSG}
            pageHref="/services/lead-generation-hair-transplant-clinic"
            waHref={waLink(HAIR_MSG)}
            callHref={PHONE_TEL}
          />
        </div>
      </div>
    </section>
  );
}

function ServicePick({
  href,
  tone,
  icon: Icon,
  title,
  caption,
  bullets,
  cta,
}: {
  href: string;
  tone: "violet" | "orange";
  icon: typeof HeartPulse;
  title: string;
  caption: string;
  bullets: string[];
  cta: string;
}) {
  const isViolet = tone === "violet";

  return (
    <Link
      href={href}
      className={[
        "group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-2xl border p-4 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)]",
        isViolet
          ? "border-violet-200 bg-gradient-to-br from-violet-50 to-white hover:border-violet-300 focus-visible:ring-violet-500"
          : "border-orange-200 bg-gradient-to-br from-orange-50 to-white hover:border-orange-300 focus-visible:ring-orange-500",
      ].join(" ")}
    >
      <Icon
        className={[
          "pointer-events-none absolute -right-4 -top-3 h-28 w-28 opacity-[0.08]",
          isViolet ? "text-violet-700" : "text-orange-600",
        ].join(" ")}
      />
      <span
        className={[
          "mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg",
          isViolet
            ? "bg-violet-600 shadow-violet-600/30"
            : "bg-orange-500 shadow-orange-500/30",
        ].join(" ")}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3
        className={[
          "text-lg font-bold tracking-tight",
          isViolet ? "text-violet-800" : "text-orange-700",
        ].join(" ")}
      >
        {title}
      </h3>
      <p className="text-xs font-medium text-slate-500">{caption}</p>
      <ul className="mt-3 space-y-1.5 text-[13px] font-medium text-slate-600">
        {bullets.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span
              className={[
                "flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                isViolet ? "bg-violet-100 text-violet-600" : "bg-orange-100 text-orange-600",
              ].join(" ")}
            >
              <BadgeCheck className="h-3 w-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4">
        <span
          className={[
            "inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-xl text-sm font-bold text-white transition",
            isViolet
              ? "bg-violet-600 group-hover:bg-violet-500"
              : "bg-orange-500 group-hover:bg-orange-400",
          ].join(" ")}
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function ProcessLane({
  tone,
  title,
  steps,
  message,
  pageHref,
  waHref,
  callHref,
}: {
  tone: "violet" | "orange";
  title: string;
  steps: typeof ivfSteps;
  message: string;
  pageHref: string;
  waHref: string;
  callHref: string;
}) {
  const isViolet = tone === "violet";

  return (
    <article
      className={[
        "rounded-3xl border bg-white p-5 shadow-sm sm:p-6",
        isViolet ? "border-violet-100" : "border-orange-100",
      ].join(" ")}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p
            className={[
              "text-[11px] font-bold uppercase tracking-[0.16em]",
              isViolet ? "text-violet-600" : "text-orange-600",
            ].join(" ")}
          >
            Path
          </p>
          <h3 className="mt-1 text-lg font-bold text-slate-950">{title}</h3>
        </div>
        <Link
          href={pageHref}
          className={[
            "inline-flex items-center gap-1 text-xs font-bold",
            isViolet ? "text-violet-700" : "text-orange-700",
          ].join(" ")}
        >
          View program
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <ol className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
        <span
          className={[
            "pointer-events-none absolute left-[12%] right-[12%] top-6 hidden h-px sm:block",
            isViolet ? "bg-violet-200" : "bg-orange-200",
          ].join(" ")}
          aria-hidden
        />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={step.label} className="relative text-center">
              <span
                className={[
                  "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border bg-white",
                  isViolet
                    ? "border-violet-100 text-violet-600"
                    : "border-orange-100 text-orange-600",
                ].join(" ")}
              >
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                0{index + 1}
              </p>
              <p className="text-[13px] font-bold text-slate-900">{step.title}</p>
              <p
                className={[
                  "text-[12px] font-semibold",
                  isViolet ? "text-violet-700" : "text-orange-700",
                ].join(" ")}
              >
                {step.label}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-[#ece5dd]">
        <div className="flex items-center gap-2 bg-[#075e54] px-3 py-2.5 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
            <MessageCircle className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold">Techify Labs</p>
            <p className="text-[10px] text-white/70">online · typically replies in minutes</p>
          </div>
        </div>
        <div className="p-3">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Message that will be sent
          </p>
          <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-[#dcf8c6] px-3 py-2.5 text-sm font-medium leading-6 text-slate-800 shadow-sm">
            {message}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 bg-white p-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex h-11 items-center justify-center gap-1.5 rounded-xl text-sm font-bold text-white",
              isViolet ? "bg-violet-600 hover:bg-violet-500" : "bg-orange-500 hover:bg-orange-400",
            ].join(" ")}
          >
            <MessageCircle className="h-4 w-4" />
            Open WhatsApp
          </a>
          <a
            href={callHref}
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-800 hover:bg-slate-50"
          >
            <Phone className="h-4 w-4" />
            Call us
          </a>
        </div>
      </div>
    </article>
  );
}

function LineChart() {
  return (
    <svg viewBox="0 0 210 72" className="mt-3 h-16 w-full overflow-visible" aria-hidden>
      <defs>
        <linearGradient id="leadArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M8 54 C32 45, 42 47, 58 38 S90 42, 106 32 S134 37, 148 24 S178 32, 202 12 V72 H8 Z"
        fill="url(#leadArea)"
      />
      <path
        d="M8 54 C32 45, 42 47, 58 38 S90 42, 106 32 S134 37, 148 24 S178 32, 202 12"
        fill="none"
        stroke="#7c3aed"
        strokeLinecap="round"
        strokeWidth="3"
      />
      {[
        [8, 54],
        [58, 38],
        [106, 32],
        [148, 24],
        [202, 12],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3.2" fill="#7c3aed" />
      ))}
    </svg>
  );
}

function DonutChart() {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" className="shrink-0" aria-hidden>
      <circle cx="38" cy="38" r="24" fill="none" stroke="#ffedd5" strokeWidth="10" />
      <circle
        cx="38"
        cy="38"
        r="24"
        fill="none"
        stroke="#f97316"
        strokeDasharray="60.3 150.8"
        strokeWidth="10"
        transform="rotate(126 38 38)"
      />
      <circle
        cx="38"
        cy="38"
        r="24"
        fill="none"
        stroke="#7c3aed"
        strokeDasharray="90.5 150.8"
        strokeLinecap="round"
        strokeWidth="10"
        transform="rotate(-90 38 38)"
      />
      <text
        x="38"
        y="41"
        textAnchor="middle"
        className="fill-slate-900"
        fontSize="11"
        fontWeight="800"
      >
        248
      </text>
    </svg>
  );
}
