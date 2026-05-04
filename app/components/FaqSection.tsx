"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ConsultationModal from "./ConsultationModel";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    q: "What digital marketing services do you offer?",
    a: "Paid media (Meta, Google, Amazon), SEO, creative, web development, email, and full-funnel strategy—aligned to your growth stage.",
  },
  {
    q: "How do you measure campaign success?",
    a: "We set clear KPIs up front—ROAS, CPA, leads, or revenue—and report in dashboards you can actually use, with plain-language commentary.",
  },
  {
    q: "Do you work with small businesses or only enterprises?",
    a: "Both. We scope retainers and projects to your budget, starting with quick wins and a roadmap to scale.",
  },
  {
    q: "How long before we see results?",
    a: "Some channels move in weeks; SEO and brand builds take longer. You’ll get a realistic timeline in the first sprint.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      className="bg-[#f4f6f9] py-16 sm:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {" "}
          <div>
            <div className="text-center mb-10">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease }}
                className="inline-flex items-center gap-2 rounded-full bg-violet-200 px-3.5 py-1.5 text-lg font-semibold text-[#1446b1] ring-2 ring-violet-400/80"
              >
                FAQ
              </motion.span>
              {/* <motion.h2
                id="faq-heading"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#0c2d52] sm:text-4xl"
              >
                Frequently asked questions about digital marketing services
              </motion.h2> */}
            </div>
            <ul className="mt-8 divide-y divide-slate-200">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q} className="py-1">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-start justify-between gap-4 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="flex gap-3">
                        <span className="mt-0.5 text-lg font-bold text-violet-400 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-xl font-semibold transition-colors duration-200 ${isOpen ? "text-violet-700" : "text-[#0c2d52] group-hover:text-violet-600"}`}
                        >
                          {item.q}
                        </span>
                      </span>
                      <span
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-light transition-colors duration-200 ${isOpen ? "bg-emerald-500/15 text-emerald-600" : "bg-slate-100 text-indigo-600 group-hover:bg-violet-50 group-hover:text-violet-600"}`}
                        aria-hidden
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease }}
                          className="overflow-hidden"
                        >
                          <p className="pb-4 pl-9 text-sm leading-relaxed text-slate-600 sm:pl-10">
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
          {/* <div className="flex justify-center items-center mt-60">
            <img
              src="/gallery/faq4.jpg"
              alt="FAQ"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            /> */}
          <div className="flex justify-center items-center">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 max-w-md w-full">
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-violet-100 text-violet-600 mb-4 text-xl">
                ❓
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-slate-900">
                Have more questions?
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Our team is here to help you understand how digital marketing
                can grow your business. Get clarity before you invest.
              </p>

              {/* POINTS */}
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✔ Free consultation</li>
                <li>✔ Clear strategy roadmap</li>
                <li>✔ No hidden costs</li>
              </ul>

              {/* CTA */}
              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-lg font-medium transition"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
      {/* </div> */}
    </section>
  );
}
