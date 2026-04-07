"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export type IndustryIconId =
  | "fashion"
  | "cart"
  | "building"
  | "health"
  | "education"
  | "tech"
  | "food"
  | "briefcase"
  | "cloud"
  | "sparkle"
  | "home"
  | "family"
  | "sport"
  | "rocket";

export type ServiceIndustriesTheme = "meta" | "google" | "amazon";

export type IndustryCard = {
  title: string;
  tagline: string;
  icon: IndustryIconId;
};

const themeMap: Record<
  ServiceIndustriesTheme,
  {
    eyebrowClass: string;
    lineClass: string;
    iconWrap: string;
    iconColor: string;
    cardHover: string;
    pillClass: string;
    mesh: string;
  }
> = {
  meta: {
    eyebrowClass: "text-violet-600/90",
    lineClass: "from-[#ea580c] via-violet-500 to-fuchsia-500/40",
    iconWrap: "bg-violet-500/10 ring-violet-500/15",
    iconColor: "text-violet-600",
    cardHover: "hover:border-violet-200/90 hover:shadow-[0_20px_40px_-24px_rgba(109,40,217,0.25)]",
    pillClass: "bg-violet-50 text-violet-800 ring-violet-200/60",
    mesh: "[background-image:radial-gradient(rgba(109,40,217,0.07)_1px,transparent_1px)] [background-size:20px_20px]",
  },
  google: {
    eyebrowClass: "text-blue-600/90",
    lineClass: "from-[#ea580c] via-blue-500 to-emerald-500/40",
    iconWrap: "bg-blue-500/10 ring-blue-500/15",
    iconColor: "text-blue-600",
    cardHover: "hover:border-blue-200/90 hover:shadow-[0_20px_40px_-24px_rgba(37,99,235,0.2)]",
    pillClass: "bg-blue-50 text-blue-900 ring-blue-200/60",
    mesh: "[background-image:radial-gradient(rgba(37,99,235,0.07)_1px,transparent_1px)] [background-size:20px_20px]",
  },
  amazon: {
    eyebrowClass: "text-amber-700/90",
    lineClass: "from-amber-500 via-orange-500 to-yellow-500/35",
    iconWrap: "bg-amber-500/12 ring-amber-600/20",
    iconColor: "text-amber-700",
    cardHover: "hover:border-amber-200/90 hover:shadow-[0_20px_40px_-24px_rgba(217,119,6,0.22)]",
    pillClass: "bg-amber-50 text-amber-900 ring-amber-200/70",
    mesh: "[background-image:radial-gradient(rgba(217,119,6,0.08)_1px,transparent_1px)] [background-size:20px_20px]",
  },
};

function IndustryIcon({ id, className }: { id: IndustryIconId; className?: string }) {
  const cn = `h-6 w-6 ${className ?? ""}`;
  switch (id) {
    case "fashion":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.121zm11.543-7.117a3 3 0 00-4.122-4.122l-1.172 1.171a.75.75 0 001.061 1.06l1.171-1.171A3 3 0 0119.5 9a3 3 0 01-1.506 2.605l-1.172 1.171a.75.75 0 101.061 1.06l1.172-1.171a4.5 4.5 0 00-1.5-7.95z"
          />
        </svg>
      );
    case "cart":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5M19.5 10.5H4.5l1.35 8.1a1.5 1.5 0 001.48 1.254h10.34a1.5 1.5 0 001.48-1.254L19.5 10.5z" />
        </svg>
      );
    case "building":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h18M4.5 3h15M5.5 3v18m-1-6h15m-15-6h15M9 8.25h.008v.008H9V8.25zM9 12h.008v.008H9V12zm0 3.75h.008v.008H9v-.008zm3.75-7.5h.008v.008h-.008V8.25zm0 3.75h.008v.008h-.008V12zm0 3.75h.008v.008h-.008v-.008zm3.75-7.5h.008v.008h-.008V8.25zm0 3.75h.008v.008h-.008V12zm0 3.75h.008v.008h-.008v-.008z" />
        </svg>
      );
    case "health":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case "education":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      );
    case "tech":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-13.5h10.5a2.25 2.25 0 012.25 2.25v4.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-4.5a2.25 2.25 0 012.25-2.25z" />
        </svg>
      );
    case "food":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5H18a2.25 2.25 0 012.25 2.25v1.002a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M15.75 10.5V6.375a1.125 1.125 0 00-1.125-1.125h-9A1.125 1.125 0 006 6.375v12a2.25 2.25 0 002.25 2.25h6A2.25 2.25 0 0016.5 18.375v-7.875"
          />
        </svg>
      );
    case "briefcase":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006a2.18 2.18 0 01-.75 1.661m-18 0a2.18 2.18 0 01.75-1.661M21.75 8.25v.75a48.665 48.665 0 01-8.25 3.48 48.667 48.667 0 01-8.25-3.48v-.75m16.5 0a2.625 2.625 0 00-2.625-2.625h-13.5A2.625 2.625 0 003.75 8.25v.75m16.5 0v.75a2.625 2.625 0 01-2.625 2.625h-13.5a2.625 2.625 0 01-2.625-2.625v-.75" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "home":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
    case "family":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    case "sport":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case "rocket":
      return (
        <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServiceIndustriesSection({
  theme,
  items,
  headline = "Industries we serve",
  subhead = "Every vertical gets its own targeting logic, creative language, and measurement — not a recycled template.",
}: {
  theme: ServiceIndustriesTheme;
  items: IndustryCard[];
  headline?: string;
  subhead?: string;
}) {
  const reduce = useReducedMotion();
  const t = themeMap[theme];

  return (
    <section id="industries" className="relative overflow-hidden border-t border-slate-200/70 bg-gradient-to-b from-slate-50/95 via-white to-slate-50/80 py-14 sm:py-20">
      <div className={`pointer-events-none absolute inset-0 opacity-70 ${t.mesh}`} aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            className="max-w-xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${t.eyebrowClass}`}>Industries</p>
            <div className={`mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r ${t.lineClass}`} aria-hidden />
            <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem]">{headline}</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">{subhead}</p>
            <div className={`mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold ring-1 ${t.pillClass}`}>
              <span className="flex h-2 w-2 rounded-full bg-current opacity-60" aria-hidden />
              {items.length} verticals · tailored growth playbooks
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              className={`group relative flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.18)] ring-1 ring-slate-100/80 backdrop-blur-sm transition duration-300 sm:p-6 ${t.cardHover}`}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: reduce ? 0 : 0.04 * i, ease }}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${t.iconWrap} ${t.iconColor}`}
                >
                  <IndustryIcon id={item.icon} />
                </span>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-[15px] font-semibold leading-snug text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{item.tagline}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
