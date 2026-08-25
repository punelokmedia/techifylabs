"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/app/lib/contact";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    q: "What digital marketing services do you offer?",
    a: "Paid media (Meta, Google, Amazon), SEO, creative, web development, email, and full-funnel strategy - aligned to your growth stage.",
  },
  {
    q: "How do you measure campaign success?",
    a: "We set clear KPIs up front - ROAS, CPA, leads, or revenue - and report in dashboards you can actually use, with plain-language commentary.",
  },
  {
    q: "Do you work with small businesses or only enterprises?",
    a: "Both. We scope retainers and projects to your budget, starting with quick wins and a roadmap to scale.",
  },
  {
    q: "How long before we see results?",
    a: "Some channels move in weeks; SEO and brand builds take longer. You'll get a realistic timeline in the first sprint.",
  },
  {
    q: "Can you manage our existing ad accounts?",
    a: "Yes. We audit structure, creatives, and tracking, then optimize or rebuild where needed - without losing historical data.",
  },
  {
    q: "What does onboarding look like?",
    a: "Kickoff, access checklist, audience and offer review, then a 30-60-90 plan so everyone knows what ships when.",
  },
  {
    q: "How do we get started?",
    a: "Book a free consultation. We'll align on goals and share a proposal with scope, timelines, and investment.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="home-section"
      aria-labelledby="faq-heading"
    >
      <div className="home-section-inner">
        <div className="faq-split">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease }}
              className="section-kicker"
            >
              <span className="section-kicker-dot" aria-hidden />
              FAQ
            </motion.span>
            <motion.h2
              id="faq-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
              className="section-title mt-4 max-w-xl text-2xl sm:text-4xl"
            >
              Frequently asked questions about digital marketing services
            </motion.h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Straight answers on services, timelines, and how we work - so you
              can decide with clarity before the first sprint.
            </p>

            <ul className="faq-list mt-8">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                const panelId = `faq-panel-${i}`;
                return (
                  <li key={item.q} className="faq-item" data-open={isOpen}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex items-start justify-between gap-4 px-4 py-4 text-left sm:px-5"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="flex min-w-0 gap-3">
                        <span className="mt-0.5 shrink-0 text-sm font-bold tabular-nums text-violet-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-base font-semibold leading-snug transition-colors duration-200 sm:text-lg ${
                            isOpen
                              ? "text-violet-700"
                              : "text-[#0c2d52] group-hover:text-violet-700"
                          }`}
                        >
                          {item.q}
                        </span>
                      </span>
                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-light transition-colors duration-200 ${
                          isOpen
                            ? "bg-emerald-500/15 text-emerald-600"
                            : "bg-slate-100 text-indigo-600 group-hover:bg-violet-50 group-hover:text-violet-600"
                        }`}
                        aria-hidden
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-4 pl-12 text-sm leading-relaxed text-slate-600 sm:px-5 sm:pl-[3.35rem]">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease }}
            className="faq-visual"
            aria-label="Digital marketing support"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/facebook-adss.jpg"
                alt="Digital marketing team planning campaigns and social engagement"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="faq-visual-scrim" aria-hidden />
            <div className="faq-help-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-lg">
                🎧
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">Need any help?</p>
                <a
                  href={PHONE_TEL}
                  className="text-xs text-white/75 transition hover:text-white"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 block text-xs font-semibold text-emerald-200 underline-offset-4 hover:text-white hover:underline"
                >
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="mt-1 block text-xs font-semibold text-violet-200 underline-offset-4 hover:text-white hover:underline"
                >
                  Book a free consultation
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
