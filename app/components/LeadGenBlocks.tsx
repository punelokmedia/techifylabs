"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Ban, ChevronDown, MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/app/lib/contact";

const ease = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionIntro({
  kicker,
  title,
  body,
  align = "left",
}: {
  kicker: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="section-kicker">
        <span className="section-kicker-dot" aria-hidden />
        {kicker}
      </span>
      <h2 className="section-title mt-4 text-3xl sm:text-[2rem]">{title}</h2>
      {body ? (
        <p
          className={`mt-3 text-[15px] leading-relaxed text-slate-500 ${
            align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function FaqAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_12px_28px_-24px_rgba(15,23,42,0.35)]"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[14.5px] font-semibold text-slate-900">
                {item.q}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-slate-400 transition ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-[14px] leading-relaxed text-slate-600">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function CtaBand({
  title,
  wa,
  note,
}: {
  title: string;
  wa: string;
  note?: string;
}) {
  return (
    <section className="home-section">
      <div className="home-section-inner">
        <div className="lg-cta-panel">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Next step
            </p>
            <p className="mt-2 max-w-xl text-xl font-semibold tracking-tight sm:text-2xl">
              {title}
            </p>
            <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-white/65">
              {note ??
                `A 20-minute briefing is enough to see if we can help. Call ${PHONE_DISPLAY} or message WhatsApp.`}
            </p>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
              Pune studio · IST hours · Not a clinic
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={PHONE_TEL}
              className="inline-flex h-11 items-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-semibold text-[#3b31a1]"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-full border border-white/25 px-5 text-[13px] font-semibold"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full border border-white/25 px-5 text-[13px] font-semibold"
            >
              Briefing form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComparisonTable({
  leftLabel,
  rightLabel,
  rows,
}: {
  leftLabel: string;
  rightLabel: string;
  rows: readonly { topic: string; left: string; right: string }[];
}) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.28)] md:block">
        <div className="grid grid-cols-3 border-b border-slate-100 bg-[#f8f7ff] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          <span>Topic</span>
          <span>{leftLabel}</span>
          <span className="text-[#3b31a1]">{rightLabel}</span>
        </div>
        {rows.map((row) => (
          <div
            key={row.topic}
            className="grid grid-cols-3 gap-4 border-b border-slate-100 px-6 py-4 last:border-b-0"
          >
            <p className="text-[13px] font-semibold text-slate-800">{row.topic}</p>
            <p className="text-[13px] leading-relaxed text-slate-500">{row.left}</p>
            <p className="text-[13px] leading-relaxed text-slate-700">{row.right}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-3 md:hidden">
        {rows.map((row) => (
          <article key={row.topic} className="lg-card p-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              {row.topic}
            </p>
            <p className="mt-2 text-[13px] text-slate-500">
              <span className="font-semibold text-slate-400">{leftLabel}: </span>
              {row.left}
            </p>
            <p className="mt-1.5 text-[13px] text-slate-700">
              <span className="font-semibold text-[#3b31a1]">{rightLabel}: </span>
              {row.right}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}

export function SplitRoles({
  we,
  you,
}: {
  we: readonly string[];
  you: readonly string[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <article className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.22)] sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3b31a1]/70">
          Techify Labs
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">
          What we run
        </h3>
        <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-slate-600">
          {we.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b31a1]" />
              {item}
            </li>
          ))}
        </ul>
      </article>
      <article className="rounded-2xl border border-slate-200/90 bg-[#f8f7ff] p-6 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ea580c]/80">
          Your clinic
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">
          What stays with you
        </h3>
        <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-slate-600">
          {you.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ea580c]" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export function HeroStatRow({
  items,
}: {
  items: readonly { value: string; label: string }[];
}) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-2">
      {items.map((item) => (
        <div key={item.label} className="lg-hero-stat">
          <p className="text-[14px] font-semibold text-white sm:text-[16px]">
            {item.value}
          </p>
          <p className="mt-0.5 text-[10px] leading-snug text-white/55 sm:text-[11px]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function InquiryPath({
  steps,
  tone = "violet",
}: {
  steps: readonly { title: string; body: string }[];
  tone?: "violet" | "orange";
}) {
  return (
    <ol className="lg-path">
      {steps.map((step, i) => (
        <li key={step.title} className="lg-path-step">
          <span
            className={`lg-path-n ${tone === "orange" ? "lg-path-n-orange" : ""}`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-[15px] font-semibold text-slate-900">
            {step.title}
          </h3>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function WeekPlan({
  weeks,
  tone = "violet",
}: {
  weeks: readonly { title: string; body: string }[];
  tone?: "violet" | "orange";
}) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {weeks.map((week, i) => (
        <li key={week.title} className="lg-card h-full p-5">
          <p
            className={`text-[12px] font-semibold tracking-[0.14em] ${
              tone === "orange" ? "text-[#ea580c]/80" : "text-[#3b31a1]/70"
            }`}
          >
            Week {i + 1}
          </p>
          <h3 className="mt-2 text-[15px] font-semibold text-slate-900">
            {week.title}
          </h3>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">
            {week.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function GuardrailList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="lg-card flex gap-3 p-4 text-[14px] leading-relaxed text-slate-600"
        >
          <Ban className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProgramNav({
  current,
}: {
  current: "overview" | "ivf" | "hair";
}) {
  const items = [
    {
      id: "overview" as const,
      href: "/services/lead-generation",
      label: "All programs",
    },
    {
      id: "ivf" as const,
      href: "/services/lead-generation-ivf-center",
      label: "IVF clinics",
    },
    {
      id: "hair" as const,
      href: "/services/lead-generation-hair-transplant-clinic",
      label: "Hair transplant",
    },
  ];

  return (
    <nav className="lg-program-nav mb-8" aria-label="Lead generation programs">
      {items.map((item) => {
        const active = item.id === current;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={
              active
                ? "rounded-full bg-white px-3.5 py-1.5 text-[12px] font-semibold text-slate-900"
                : "rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[12px] font-medium text-white/70 transition hover:border-white/30 hover:text-white"
            }
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function QualifyFields({
  items,
  tone = "violet",
}: {
  items: readonly { label: string; hint: string }[];
  tone?: "violet" | "orange";
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <article key={item.label} className="lg-card h-full p-5">
          <p
            className={`text-[12px] font-semibold tracking-[0.14em] ${
              tone === "orange" ? "text-[#ea580c]/80" : "text-[#3b31a1]/70"
            }`}
          >
            {String(i + 1).padStart(2, "0")} · {item.label}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
            {item.hint}
          </p>
        </article>
      ))}
    </div>
  );
}

export function BriefingAgenda({ items }: { items: readonly string[] }) {
  return (
    <ol className="lg-agenda">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex gap-4 border-b border-slate-100 px-5 py-3.5 last:border-b-0"
        >
          <span className="mt-0.5 flex h-6 w-7 shrink-0 items-center justify-center rounded-md bg-[#f8f7ff] text-[11px] font-semibold text-[#3b31a1]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="text-[14px] leading-relaxed text-slate-600">{item}</p>
        </li>
      ))}
    </ol>
  );
}

export function NotAFit({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 text-[14px] leading-relaxed text-slate-600 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.3)]"
        >
          <Ban className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ScoreLegend({
  items,
  tone = "violet",
}: {
  items: readonly { label: string; body: string }[];
  tone?: "violet" | "orange";
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, i) => (
        <article key={item.label} className="lg-card h-full p-6">
          <p
            className={`text-[12px] font-semibold tracking-[0.14em] ${
              tone === "orange" ? "text-[#ea580c]/80" : "text-[#3b31a1]/70"
            }`}
          >
            {String(i + 1).padStart(2, "0")} · {item.label}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
            {item.body}
          </p>
        </article>
      ))}
    </div>
  );
}

export function OpsGrid({
  items,
  tone = "violet",
}: {
  items: readonly { label: string; value: string }[];
  tone?: "violet" | "orange";
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.label} className="lg-card p-5">
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
              tone === "orange" ? "text-[#ea580c]/80" : "text-[#3b31a1]/70"
            }`}
          >
            {item.label}
          </p>
          <p className="mt-2 text-[14px] font-medium leading-relaxed text-slate-800">
            {item.value}
          </p>
        </article>
      ))}
    </div>
  );
}

export function RelatedProgram({
  href,
  kicker,
  title,
  body,
}: {
  href: string;
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="lg-card group flex flex-col justify-between p-6 transition hover:border-[#3b31a1]/25 sm:flex-row sm:items-center sm:gap-8 sm:p-7"
    >
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3b31a1]/70">
          {kicker}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900 group-hover:text-[#3b31a1]">
          {title}
        </h3>
        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-slate-500">
          {body}
        </p>
      </div>
      <span className="mt-4 inline-flex h-10 shrink-0 items-center rounded-full bg-[#3b31a1] px-5 text-[13px] font-semibold text-white transition group-hover:bg-[#32297f] sm:mt-0">
        View program
      </span>
    </Link>
  );
}

export function PracticeStrip({
  items,
}: {
  items: readonly { src: string; alt: string; caption: string }[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <figure key={item.src} className="lg-card overflow-hidden">
          <div className="relative h-48 sm:h-56">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
          <figcaption className="px-4 py-3 text-[13px] font-medium text-slate-600">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
