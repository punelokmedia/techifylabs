"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  breadcrumb: string;
  heroTag: string;
  heroTitle: string;
  heroHighlight: string;
  heroTitleAfter?: string;
  heroSubtitle: string;
  heroCta: string;
  accentColor: string;
  stats: StatItem[];
  problemTitle: string;
  problems: string[];
  whyTitle: string;
  whyPoints: string[];
  servicesTitle: string;
  services: ServiceItem[];
  processTitle: string;
  process: ProcessStep[];
  ctaBanner: string;
  ctaButtonText: string;
}

// ─── Sidebar other services ───────────────────────────────────────────────────

const otherServices = [
  { label: "Web Designing", href: "/website-design-company-india/" },
  { label: "Web Development", href: "/website-development-company-in-india/" },
  { label: "Shopify Development", href: "/shopify-development-company-in-india/" },
  { label: "SEO", href: "/seo-company-in-india/" },
  { label: "Branding", href: "/branding-agency-in-india/" },
  { label: "Email Marketing", href: "/email-marketing-company-in-india/" },
  { label: "E-Commerce Marketplace", href: "/e-commerce-marketplace-services/" },
  { label: "Quick Marketplace", href: "/quick-commerce-ads-agency/" },
];

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Accent colour map ────────────────────────────────────────────────────────

const accentMap: Record<string, { text: string; bg: string; border: string; dot: string }> = {
  emerald: {
    text: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
  },
  violet: {
    text: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    dot: "bg-violet-500",
  },
  sky: {
    text: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    dot: "bg-sky-500",
  },
  amber: {
    text: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    dot: "bg-amber-500",
  },
};

// ─── Main layout component ────────────────────────────────────────────────────

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const ac = accentMap[data.accentColor] ?? accentMap.emerald;

  // Hero accent uses the original dark-theme tints so hero stays unchanged
  const heroAc = {
    emerald: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30", dot: "bg-emerald-400" },
    violet:  { text: "text-violet-400",  bg: "bg-violet-400/10",  border: "border-violet-400/30",  dot: "bg-violet-400"  },
    sky:     { text: "text-sky-400",     bg: "bg-sky-400/10",     border: "border-sky-400/30",     dot: "bg-sky-400"     },
    amber:   { text: "text-amber-400",   bg: "bg-amber-400/10",   border: "border-amber-400/30",   dot: "bg-amber-400"   },
  }[data.accentColor] ?? { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30", dot: "bg-emerald-400" };

  return (
    <div className="bg-white min-h-screen text-gray-900">

      {/* ── Hero — UNCHANGED ──────────────────────────────────────────────── */}
      <section className="relative  bg-gradient-to-br from-black via-[#310f39] to-[#1a0b2e] border-b border-white/[0.06] overflow-hidden sm:rounded-b-[1.75rem]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className={`absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl
            ${data.accentColor === "emerald" ? "bg-violet-500" :
              data.accentColor === "violet"  ? "bg-fhusia-400"  :
              data.accentColor === "sky"     ? "bg-violet-400"     : "bg-amber-400"}`}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-2 text-sm text-white/35 mb-8"
          >
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/55">{data.breadcrumb}</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
            <div className="flex-1 max-w-2xl">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase
                            px-3 py-1.5 rounded-full border mb-6
                            ${heroAc.text} ${heroAc.bg} ${heroAc.border}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${heroAc.dot}`} />
                {data.heroTag}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-5 text-white"
              >
                {data.heroTitle}{" "}
                <span className={heroAc.text}>{data.heroHighlight}</span>
                {data.heroTitleAfter && <> {data.heroTitleAfter}</>}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-white/50 text-lg leading-relaxed mb-8"
              >
                {data.heroSubtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 bg-fuchsia-500 text-white text-sm font-bold
px-6 py-3.5 rounded-full hover:bg-fuchsia-600 transition-all duration-200
hover:gap-3"
                >
                  {data.heroCta}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact-us/"
                  className={`inline-flex items-center gap-2 text-sm font-semibold
                              px-6 py-3.5 rounded-xl border ${heroAc.border} ${heroAc.text} ${heroAc.bg}
                              hover:border-opacity-60 transition-all duration-200`}
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 gap-3 lg:w-72 flex-shrink-0"
            >
              {data.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#141414] border border-white/[0.07] rounded-2xl p-5"
                >
                  <p className={`text-2xl font-black tracking-tight mb-1 ${heroAc.text}`}>{s.value}</p>
                  <p className="text-white/45 text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Body — white bg, dark text ────────────────────────────────────── */}
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* ── Main content ──────────────────────────────────────────────── */}
          <main className="flex-1 min-w-0 space-y-16">

            {/* Problems */}
            <FadeUp>
              <SectionLabel text="Common Problems" accentClass={ac.text} />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 mt-2 text-gray-900">
                {data.problemTitle}
              </h2>
              <ul className="space-y-3">
                {data.problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${ac.dot}`} />
                    {p}
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Why choose us */}
            <FadeUp delay={1}>
              <SectionLabel text="Why Choose Us" accentClass={ac.text} />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 mt-2 text-gray-900">
                {data.whyTitle}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {data.whyPoints.map((w) => (
                  <div
                    key={w}
                    className="flex items-start gap-3 bg-gray-50 border border-gray-200
                               rounded-xl p-4 text-sm text-gray-700 leading-relaxed"
                  >
                    <CheckIcon accentClass={ac.text} />
                    {w}
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Services grid */}
            <FadeUp delay={1}>
              <SectionLabel text="What We Offer" accentClass={ac.text} />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 mt-2 text-gray-900">
                {data.servicesTitle}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.services.map((svc) => (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group bg-white border border-gray-200 rounded-2xl p-5
                               hover:border-gray-300 hover:shadow-sm transition-all duration-300"
                  >
                    <div className={`mb-3 ${ac.text}`}>{svc.icon}</div>
                    <h3 className="text-gray-900 font-bold text-base mb-2">{svc.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            {/* Process */}
            <FadeUp delay={1}>
              <SectionLabel text="Our Process" accentClass={ac.text} />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 mt-2 text-gray-900">
                {data.processTitle}
              </h2>
              <div className="space-y-4">
                {data.process.map((p, i) => (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-4 items-start"
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                                  text-xs font-bold ${ac.bg} ${ac.text} ${ac.border} border`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 flex-1">
                      <p className="text-gray-900 font-semibold text-sm mb-1">{p.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            {/* CTA Banner */}
            <FadeUp delay={1}>
              <div
                className={`rounded-2xl border ${ac.border} ${ac.bg} p-6 sm:p-8
                            flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between`}
              >
                <p className={`text-base font-semibold ${ac.text} max-w-md`}>{data.ctaBanner}</p>
                <Link
                  href="/contact-us/"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-gray-900 text-white
                             text-sm font-bold px-6 py-3 rounded-xl hover:bg-gray-800 transition-all"
                >
                  {data.ctaButtonText}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </FadeUp>

          </main>

          {/* ── Sidebar ───────────────────────────────────────────────────── */}
          <aside className="lg:w-64 flex-shrink-0 space-y-6">
            <div className="sticky top-8 space-y-4">

              {/* Other services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="text-gray-400 text-[11px] font-semibold uppercase tracking-widest mb-4">
                  Other Services
                </h3>
                <ul className="space-y-1">
                  {otherServices.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="flex items-center justify-between group py-2 px-3 rounded-lg
                                   hover:bg-gray-50 transition-colors duration-150 text-sm text-gray-600
                                   hover:text-gray-900"
                      >
                        {s.label}
                        <ArrowRight size={13} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact card */}
              <div className={`bg-white border ${ac.border} rounded-2xl p-5`}>
                <h3 className="text-gray-400 text-[11px] font-semibold uppercase tracking-widest mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  Reach out to our team for fast support or any inquiries — we're just a call away.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919313961011"
                    className={`flex items-center gap-2.5 text-sm ${ac.text} hover:opacity-80 transition-opacity`}
                  >
                    <PhoneIcon />
                    +91 9313961011
                  </a>
                  <a
                    href="mailto:info@techeasify.com"
                    className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <MailIcon />
                    info@techeasify.com
                  </a>
                </div>
                <Link
                  href="/contact-us/"
                  className={`mt-5 w-full flex items-center justify-center gap-2 text-sm font-bold
                              py-3 rounded-xl ${ac.bg} ${ac.text} border ${ac.border}
                              hover:brightness-95 transition-all`}
                >
                  Book Free Consultation
                </Link>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// ─── Mini helpers ─────────────────────────────────────────────────────────────

function SectionLabel({ text, accentClass }: { text: string; accentClass: string }) {
  return (
    <span className={`text-[11px] font-semibold tracking-[0.18em] uppercase ${accentClass}`}>
      {text}
    </span>
  );
}

function CheckIcon({ accentClass }: { accentClass: string }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${accentClass}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 2.5c0-.3.2-.5.5-.5H5l1.5 3.5-1.5 1a9 9 0 004 4l1-1.5L13.5 10v2.5c0 .3-.2.5-.5.5A11.5 11.5 0 012 2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.5 4.5L8 9l6.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}




// "use client";

// import Link from "next/link";
// import { motion ,Variants} from "framer-motion";
// import { useRef } from "react";

// // ─── Types ────────────────────────────────────────────────────────────────────

// export interface StatItem {
//   value: string;
//   label: string;
// }

// export interface ServiceItem {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// export interface ProcessStep {
//   step: string;
//   title: string;
//   description: string;
// }

// export interface ServicePageData {
//   breadcrumb: string;
//   heroTag: string;
//   heroTitle: string;
//   heroHighlight: string;        // word(s) to accent in title
//   heroTitleAfter?: string;
//   heroSubtitle: string;
//   heroCta: string;
//   accentColor: string;          // tailwind color name e.g. "emerald"
//   stats: StatItem[];
//   problemTitle: string;
//   problems: string[];
//   whyTitle: string;
//   whyPoints: string[];
//   servicesTitle: string;
//   services: ServiceItem[];
//   processTitle: string;
//   process: ProcessStep[];
//   ctaBanner: string;
//   ctaButtonText: string;
// }

// // ─── Sidebar other services ───────────────────────────────────────────────────

// const otherServices = [
//   { label: "Web Designing", href: "/website-design-company-india/" },
//   { label: "Web Development", href: "/website-development-company-in-india/" },
//   { label: "Shopify Development", href: "/shopify-development-company-in-india/" },
//   { label: "SEO", href: "/seo-company-in-india/" },
//   { label: "Branding", href: "/branding-agency-in-india/" },
//   { label: "Email Marketing", href: "/email-marketing-company-in-india/" },
//   { label: "E-Commerce Marketplace", href: "/e-commerce-marketplace-services/" },
//   { label: "Quick Marketplace", href: "/quick-commerce-ads-agency/" },
// ];

// // ─── Animation helpers ────────────────────────────────────────────────────────

// const fadeUp:Variants= {
//   hidden: { opacity: 0, y: 32 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
//   }),
// };

// function FadeUp({
//   children,
//   delay = 0,
//   className = "",
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-60px" }}
//       custom={delay}
//       variants={fadeUp}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ─── Accent colour map (Tailwind safe-list) ───────────────────────────────────

// const accentMap: Record<string, { text: string; bg: string; border: string; dot: string }> = {
//   emerald: {
//     text: "text-emerald-400",
//     bg: "bg-emerald-400/10",
//     border: "border-emerald-400/30",
//     dot: "bg-emerald-400",
//   },
//   violet: {
//     text: "text-violet-400",
//     bg: "bg-violet-400/10",
//     border: "border-violet-400/30",
//     dot: "bg-violet-400",
//   },
//   sky: {
//     text: "text-sky-400",
//     bg: "bg-sky-400/10",
//     border: "border-sky-400/30",
//     dot: "bg-sky-400",
//   },
//   amber: {
//     text: "text-amber-400",
//     bg: "bg-amber-400/10",
//     border: "border-amber-400/30",
//     dot: "bg-amber-400",
//   },
// };

// // ─── Main layout component ────────────────────────────────────────────────────

// export default function ServicePageLayout({ data }: { data: ServicePageData }) {
//   const ac = accentMap[data.accentColor] ?? accentMap.emerald;

//   return (
//     <div className="bg-[#0a0a0a] min-h-screen text-white">

//       {/* ── Hero ──────────────────────────────────────────────────────────── */}
//       <section className="relative bg-[#0d0d0d] border-b border-white/[0.06] overflow-hidden">
//         {/* Background grid pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />
//         {/* Accent glow blob */}
//         <div
//           className={`absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl
//             ${data.accentColor === "emerald" ? "bg-emerald-400" :
//               data.accentColor === "violet" ? "bg-violet-400" :
//               data.accentColor === "sky" ? "bg-sky-400" : "bg-amber-400"}`}
//         />

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//           {/* Breadcrumb */}
//           <motion.div
//             initial={{ opacity: 0, y: -12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.45 }}
//             className="flex items-center gap-2 text-sm text-white/35 mb-8"
//           >
//             <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
//             <span>/</span>
//             <span className="text-white/55">{data.breadcrumb}</span>
//           </motion.div>

//           <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
//             {/* Left: text */}
//             <div className="flex-1 max-w-2xl">
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4 }}
//                 className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase
//                             px-3 py-1.5 rounded-full border mb-6
//                             ${ac.text} ${ac.bg} ${ac.border}`}
//               >
//                 <span className={`w-1.5 h-1.5 rounded-full ${ac.dot}`} />
//                 {data.heroTag}
//               </motion.span>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-5"
//               >
//                 {data.heroTitle}{" "}
//                 <span className={ac.text}>{data.heroHighlight}</span>
//                 {data.heroTitleAfter && <> {data.heroTitleAfter}</>}
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.55, delay: 0.2 }}
//                 className="text-white/50 text-lg leading-relaxed mb-8"
//               >
//                 {data.heroSubtitle}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="flex flex-wrap gap-3"
//               >
//                 <Link
//                   href="/contact-us/"
//                   className="inline-flex items-center gap-2 bg-white text-black text-sm font-bold
//                              px-6 py-3.5 rounded-xl hover:bg-opacity-90 transition-all duration-200
//                              hover:gap-3"
//                 >
//                   {data.heroCta}
//                   <ArrowRight size={16} />
//                 </Link>
//                 <Link
//                   href="/contact-us/"
//                   className={`inline-flex items-center gap-2 text-sm font-semibold
//                               px-6 py-3.5 rounded-xl border ${ac.border} ${ac.text} ${ac.bg}
//                               hover:border-opacity-60 transition-all duration-200`}
//                 >
//                   View Our Work
//                 </Link>
//               </motion.div>
//             </div>

//             {/* Right: stats */}
//             <motion.div
//               initial={{ opacity: 0, x: 24 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.25 }}
//               className="grid grid-cols-2 gap-3 lg:w-72 flex-shrink-0"
//             >
//               {data.stats.map((s) => (
//                 <div
//                   key={s.label}
//                   className="bg-[#141414] border border-white/[0.07] rounded-2xl p-5"
//                 >
//                   <p className={`text-2xl font-black tracking-tight mb-1 ${ac.text}`}>{s.value}</p>
//                   <p className="text-white/45 text-xs leading-snug">{s.label}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ── Body ──────────────────────────────────────────────────────────── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
//         <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

//           {/* ── Main content ──────────────────────────────────────────────── */}
//           <main className="flex-1 min-w-0 space-y-16">

//             {/* Problems section */}
//             <FadeUp>
//               <SectionLabel text="Common Problems" accentClass={ac.text} />
//               <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 mt-2">
//                 {data.problemTitle}
//               </h2>
//               <ul className="space-y-3">
//                 {data.problems.map((p) => (
//                   <li key={p} className="flex items-start gap-3 text-white/65 text-base leading-relaxed">
//                     <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${ac.dot}`} />
//                     {p}
//                   </li>
//                 ))}
//               </ul>
//             </FadeUp>

//             {/* Why choose us */}
//             <FadeUp delay={1}>
//               <SectionLabel text="Why Choose Us" accentClass={ac.text} />
//               <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 mt-2">
//                 {data.whyTitle}
//               </h2>
//               <div className="grid sm:grid-cols-2 gap-3">
//                 {data.whyPoints.map((w) => (
//                   <div
//                     key={w}
//                     className="flex items-start gap-3 bg-[#111] border border-white/[0.07]
//                                rounded-xl p-4 text-sm text-white/70 leading-relaxed"
//                   >
//                     <CheckIcon accentClass={ac.text} />
//                     {w}
//                   </div>
//                 ))}
//               </div>
//             </FadeUp>

//             {/* Services grid */}
//             <FadeUp delay={1}>
//               <SectionLabel text="What We Offer" accentClass={ac.text} />
//               <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 mt-2">
//                 {data.servicesTitle}
//               </h2>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 {data.services.map((svc) => (
//                   <motion.div
//                     key={svc.title}
//                     initial={{ opacity: 0, y: 24 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: "-40px" }}
//                     transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                     className="group bg-[#111] border border-white/[0.07] rounded-2xl p-5
//                                hover:border-white/[0.14] transition-colors duration-300"
//                   >
//                     <div className={`mb-3 ${ac.text}`}>{svc.icon}</div>
//                     <h3 className="text-white font-bold text-base mb-2">{svc.title}</h3>
//                     <p className="text-white/50 text-sm leading-relaxed">{svc.description}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </FadeUp>

//             {/* Process */}
//             <FadeUp delay={1}>
//               <SectionLabel text="Our Process" accentClass={ac.text} />
//               <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 mt-2">
//                 {data.processTitle}
//               </h2>
//               <div className="space-y-4">
//                 {data.process.map((p, i) => (
//                   <motion.div
//                     key={p.step}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, margin: "-40px" }}
//                     transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
//                     className="flex gap-4 items-start"
//                   >
//                     <div
//                       className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
//                                   text-xs font-bold ${ac.bg} ${ac.text} ${ac.border} border`}
//                     >
//                       {String(i + 1).padStart(2, "0")}
//                     </div>
//                     <div className="bg-[#111] border border-white/[0.07] rounded-xl px-5 py-4 flex-1">
//                       <p className="text-white font-semibold text-sm mb-1">{p.title}</p>
//                       <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </FadeUp>

//             {/* CTA Banner */}
//             <FadeUp delay={1}>
//               <div
//                 className={`rounded-2xl border ${ac.border} ${ac.bg} p-6 sm:p-8
//                             flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between`}
//               >
//                 <p className={`text-base font-semibold ${ac.text} max-w-md`}>{data.ctaBanner}</p>
//                 <Link
//                   href="/contact-us/"
//                   className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-black
//                              text-sm font-bold px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all"
//                 >
//                   {data.ctaButtonText}
//                   <ArrowRight size={15} />
//                 </Link>
//               </div>
//             </FadeUp>

//           </main>

//           {/* ── Sidebar ───────────────────────────────────────────────────── */}
//           <aside className="lg:w-64 flex-shrink-0 space-y-6">

//             {/* Other services */}
//             <div className="sticky top-8 space-y-4">
//               <div className="bg-[#111] border border-white/[0.07] rounded-2xl p-5">
//                 <h3 className="text-white/40 text-[11px] font-semibold uppercase tracking-widest mb-4">
//                   Other Services
//                 </h3>
//                 <ul className="space-y-1">
//                   {otherServices.map((s) => (
//                     <li key={s.href}>
//                       <Link
//                         href={s.href}
//                         className="flex items-center justify-between group py-2 px-3 rounded-lg
//                                    hover:bg-white/[0.04] transition-colors duration-150 text-sm text-white/60
//                                    hover:text-white"
//                       >
//                         {s.label}
//                         <ArrowRight size={13} className="opacity-0 group-hover:opacity-60 transition-opacity" />
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Contact card */}
//               <div className={`bg-[#111] border ${ac.border} rounded-2xl p-5`}>
//                 <h3 className="text-white/40 text-[11px] font-semibold uppercase tracking-widest mb-4">
//                   Contact Information
//                 </h3>
//                 <p className="text-white/45 text-xs leading-relaxed mb-4">
//                   Reach out to our team for fast support or any inquiries — we're just a call away.
//                 </p>
//                 <div className="space-y-3">
//                   <a
//                     href="tel:+919313961011"
//                     className={`flex items-center gap-2.5 text-sm ${ac.text} hover:opacity-80 transition-opacity`}
//                   >
//                     <PhoneIcon />
//                     +91 9313961011
//                   </a>
//                   <a
//                     href="mailto:info@techeasify.com"
//                     className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors"
//                   >
//                     <MailIcon />
//                     info@techeasify.com
//                   </a>
//                 </div>
//                 <Link
//                   href="/contact-us/"
//                   className={`mt-5 w-full flex items-center justify-center gap-2 text-sm font-bold
//                               py-3 rounded-xl ${ac.bg} ${ac.text} border ${ac.border}
//                               hover:brightness-110 transition-all`}
//                 >
//                   Book Free Consultation
//                 </Link>
//               </div>
//             </div>

//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Mini helpers ─────────────────────────────────────────────────────────────

// function SectionLabel({ text, accentClass }: { text: string; accentClass: string }) {
//   return (
//     <span className={`text-[11px] font-semibold tracking-[0.18em] uppercase ${accentClass}`}>
//       {text}
//     </span>
//   );
// }

// function CheckIcon({ accentClass }: { accentClass: string }) {
//   return (
//     <svg
//       className={`w-4 h-4 flex-shrink-0 mt-0.5 ${accentClass}`}
//       viewBox="0 0 16 16"
//       fill="none"
//     >
//       <path
//         d="M3 8l3.5 3.5L13 5"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function ArrowRight({ size = 16, className = "" }: { size?: number; className?: string }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
//       <path
//         d="M3 8h10M9 4l4 4-4 4"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function PhoneIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
//       <path
//         d="M2 2.5c0-.3.2-.5.5-.5H5l1.5 3.5-1.5 1a9 9 0 004 4l1-1.5L13.5 10v2.5c0 .3-.2.5-.5.5A11.5 11.5 0 012 2.5z"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function MailIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
//       <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
//       <path d="M1.5 4.5L8 9l6.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
//   );
// }