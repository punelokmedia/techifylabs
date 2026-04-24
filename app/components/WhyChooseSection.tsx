"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, HeartHandshake, Layers3, Clock4 } from "lucide-react";

const reasons = [
  {
    icon: <Rocket className="w-7 h-7" />,
    title: "Launch Faster",
    desc: "Our agile workflow and pre-built systems mean you go from idea to live product in record time.",
    stat: "2x",
    statLabel: "Faster Delivery",
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "We Build With You",
    desc: "You're not just a client — you're a partner. Transparent communication at every step.",
    stat: "98%",
    statLabel: "Client Retention",
  },
  {
    icon: <Layers3 className="w-7 h-7" />,
    title: "Full-Stack Expertise",
    desc: "From pixel-perfect UI to bulletproof backend, we handle the entire technology stack.",
    stat: "50+",
    statLabel: "Tech Stack Tools",
  },
  {
    icon: <Clock4 className="w-7 h-7" />,
    title: "Always On Support",
    desc: "Post-launch support and maintenance so your product stays fast, secure, and evolving.",
    stat: "24/7",
    statLabel: "Availability",
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-choose-us" className="bg-white py-24">
      <div className="container mx-auto px-3 lg:px-16">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Techify
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            The Techify{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map(({ icon, title, desc, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                {/* LEFT */}
                <div className="flex items-start gap-5">
                  <div className="w-23 h-14 rounded-xl bg-indigo-200 text-indigo-600 flex items-center justify-center">
                    {icon}
                  </div>

                  <div>
                    <h3 className="text-gray-900 font-semibold text-xl mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>

                {/* RIGHT STAT */}
                <div className="text-right shrink-0">
                  <p className="text-3xl font-bold text-indigo-600">{stat}</p>
                  <p className="text-gray-500 text-xs">{statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";

// const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
// const spring = { type: "spring" as const, stiffness: 380, damping: 32 };

// const reasons = [
//   "Proven performance, transparent results",
//   "360° ad solutions under one roof",
//   "Audience-first approach, not fluff",
//   "Transparent communication & client-centric process",
// ];

// function GaugeIllustration() {
//   return (
//     <div className="relative flex aspect-[4/3] w-full max-w-md flex-col items-center justify-center rounded-3xl bg-gradient-to-b from-slate-100 to-slate-200/80 p-8 shadow-inner ring-1 ring-slate-200/80">
//       <svg viewBox="0 0 200 120" className="h-40 w-full max-w-[280px]" aria-hidden>
//         <path
//           d="M 20 100 A 80 80 0 0 1 180 100"
//           fill="none"
//           stroke="#e2e8f0"
//           strokeWidth="16"
//           strokeLinecap="round"
//         />
//         <path d="M 20 100 A 80 80 0 0 1 52 40" fill="none" stroke="#166534" strokeWidth="16" strokeLinecap="round" />
//         <path d="M 52 40 A 80 80 0 0 1 84 28" fill="none" stroke="#22c55e" strokeWidth="16" strokeLinecap="round" />
//         <path d="M 84 28 A 80 80 0 0 1 116 28" fill="none" stroke="#eab308" strokeWidth="16" strokeLinecap="round" />
//         <path d="M 116 28 A 80 80 0 0 1 148 40" fill="none" stroke="#f97316" strokeWidth="16" strokeLinecap="round" />
//         <path d="M 148 40 A 80 80 0 0 1 180 100" fill="none" stroke="#dc2626" strokeWidth="16" strokeLinecap="round" />
//         <g transform="translate(100,100)">
//           <line x1="0" y1="0" x2="-55" y2="-35" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
//           <circle r="8" fill="#0f172a" />
//         </g>
//       </svg>
//       <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-800">Ad performance</p>
//     </div>
//   );
// }

// export default function WhyChooseSection() {
//   return (
//     <section className="bg-[#f4f6f9] py-16 sm:py-20 lg:py-24" aria-labelledby="why-choose-heading">
//       <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.5, ease }}
//           className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
//         >
//           <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
//             Digital growth
//           </span>
//           <span className="mx-3 inline-block text-slate-300">✦</span>
//           <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
//             Smart solutions
//           </span>
//         </motion.p>

//         <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-40px" }}
//             transition={{ duration: 0.55, ease }}
//             whileHover={{ y: -4, transition: spring }}
//             className="group/gauge mx-auto w-full max-w-lg lg:mx-0"
//           >
//             <div className="rounded-[1.75rem] bg-slate-50/80 p-4 shadow-sm ring-1 ring-slate-200/60 transition-shadow duration-300 group-hover/gauge:shadow-xl group-hover/gauge:shadow-slate-300/40">
//               <GaugeIllustration />
//             </div>
//           </motion.div>

//           <div>
//             <motion.span
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.45, ease }}
//               className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1.5 text-sm font-semibold text-[#2563eb] ring-1 ring-sky-200/80"
//             >
//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-xs text-white">
//                 ✓
//               </span>
//               Why choose us
//             </motion.span>
//             <motion.h2
//               id="why-choose-heading"
//               initial={{ opacity: 0, y: 14 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.05, ease }}
//               className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0c2d52] sm:text-4xl"
//             >
//               Because we focus on results that matter to your business
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1, ease }}
//               className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg"
//             >
//               Techify is known for a customer-centric approach—clear reporting and education so you always
//               understand the value behind every campaign and deliverable.
//             </motion.p>

//             <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

//             <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
//               <ul className="space-y-4">
//                 {reasons.map((item, i) => (
//                   <motion.li
//                     key={item}
//                     initial={{ opacity: 0, x: -8 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: 0.12 + i * 0.06, ease }}
//                     whileHover={{ x: 4, transition: spring }}
//                     className="flex gap-3 text-sm font-medium text-slate-700 sm:text-base"
//                   >
//                     <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-xs text-white">
//                       ✓
//                     </span>
//                     {item}
//                   </motion.li>
//                 ))}
//               </ul>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.96 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2, ease }}
//                 whileHover={{ y: -6, scale: 1.02, transition: spring }}
//                 className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1e40af] px-8 py-10 text-center text-white shadow-xl ring-1 ring-white/10 sm:min-w-[200px]"
//               >
//                 <div
//                   className="pointer-events-none absolute inset-0 opacity-20"
//                   style={{
//                     backgroundImage: `radial-gradient(circle at 30% 20%, white 0%, transparent 45%), radial-gradient(circle at 80% 80%, violet 0%, transparent 40%)`,
//                   }}
//                   aria-hidden
//                 />
//                 <p className="relative text-4xl font-bold sm:text-5xl">10+</p>
//                 <p className="relative mt-2 text-sm font-medium text-white/85">Years of experience</p>
//               </motion.div>
//             </div>

//             <motion.a
//               href="#"
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.45, delay: 0.25, ease }}
//               whileHover={{ scale: 1.03, y: -2, transition: spring }}
//               whileTap={{ scale: 0.98 }}
//               className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white shadow-md ring-1 ring-slate-900/10 transition-colors hover:bg-[#1d4ed8]"
//             >
//               Get free consultation
//               <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
//             </motion.a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
