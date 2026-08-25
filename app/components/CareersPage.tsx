"use client";

import {
  useCallback,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/app/lib/contact";
import { photos } from "@/app/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;
const EMAIL = "info@techifylabs.in";
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "ff3fb5d5-cfc0-4631-9ecb-4bfa761cf8c4";

const departments = [
  "All roles",
  "Marketing",
  "Engineering",
  "Design",
  "Client success",
] as const;

type Department = (typeof departments)[number];

type Role = {
  id: string;
  title: string;
  department: Exclude<Department, "All roles">;
  type: "Full-time" | "Internship";
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

const roles: Role[] = [
  {
    id: "performance-marketing",
    title: "Performance Marketing Associate",
    department: "Marketing",
    type: "Full-time",
    location: "Pune · Hybrid",
    experience: "1–3 years",
    summary:
      "Run Meta and Google campaigns for live accounts. You will own testing, reporting, and weekly recommendations with a channel lead.",
    responsibilities: [
      "Build, launch, and optimize paid campaigns across Meta and Google.",
      "Write clear weekly notes: what changed, why, and what we will test next.",
      "Work with creative and landing-page teams so ads and pages stay aligned.",
    ],
    requirements: [
      "Hands-on time inside Ads Manager or Google Ads.",
      "Comfort with numbers, naming conventions, and honest reporting.",
      "Clear written English for client-facing updates.",
    ],
  },
  {
    id: "seo-executive",
    title: "SEO Executive",
    department: "Marketing",
    type: "Full-time",
    location: "Pune · Hybrid",
    experience: "1–4 years",
    summary:
      "Technical SEO, content briefs, and search reporting for service and commerce sites. You will ship improvements every week, not quarterly decks.",
    responsibilities: [
      "Audit pages, fix crawl issues, and keep metadata and internal links clean.",
      "Brief writers on intent, structure, and proof the page needs.",
      "Track rankings, traffic quality, and conversions with the account lead.",
    ],
    requirements: [
      "Experience with Search Console, crawling tools, and on-page SEO.",
      "Ability to explain recommendations in plain language.",
      "Portfolio of pages or sites you have improved.",
    ],
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Pune · Hybrid",
    experience: "2–5 years",
    summary:
      "Build fast marketing sites and landing experiences in Next.js. You will ship with designers and media teams, not in isolation.",
    responsibilities: [
      "Implement responsive pages with clean, maintainable React and Tailwind.",
      "Protect Core Web Vitals, accessibility, and form reliability.",
      "Collaborate on tracking, CMS, and launch checklists.",
    ],
    requirements: [
      "Production experience with Next.js or similar React frameworks.",
      "Strong CSS and component discipline.",
      "A GitHub or live site we can review.",
    ],
  },
  {
    id: "uiux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Pune · Hybrid",
    experience: "2–4 years",
    summary:
      "Design landing pages, brand systems, and ad creative that convert. Taste matters, but so does testing against real campaign data.",
    responsibilities: [
      "Design page layouts, component systems, and campaign creative.",
      "Prototype flows that reduce friction from click to enquiry.",
      "Partner with developers so design intent survives implementation.",
    ],
    requirements: [
      "A portfolio of live digital work, not only concept decks.",
      "Figma fluency and a clear process from brief to handoff.",
      "Comfort taking feedback from media performance, not only aesthetics.",
    ],
  },
  {
    id: "account-manager",
    title: "Account Manager",
    department: "Client success",
    type: "Full-time",
    location: "Pune · Hybrid",
    experience: "2–5 years",
    summary:
      "Own the client relationship. You will run weekly reviews, keep work unblocked, and translate performance into decisions founders can use.",
    responsibilities: [
      "Lead weekly reporting calls and written recaps.",
      "Coordinate media, creative, and web so timelines stay honest.",
      "Flag risks early and keep scope, budget, and goals aligned.",
    ],
    requirements: [
      "Agency or in-house experience managing marketing retainers.",
      "Calm communication under deadline pressure.",
      "Enough channel literacy to ask the right follow-up questions.",
    ],
  },
  {
    id: "marketing-intern",
    title: "Digital Marketing Intern",
    department: "Marketing",
    type: "Internship",
    location: "Pune · On-site",
    experience: "0–1 year",
    summary:
      "A structured internship beside live accounts. You will help with research, reporting, creative QA, and campaign setup - not coffee runs.",
    responsibilities: [
      "Support campaign setup, reporting sheets, and creative checklists.",
      "Research competitors, keywords, and landing-page examples.",
      "Sit in on reviews and document action items.",
    ],
    requirements: [
      "Curiosity about ads, SEO, or web - show us a project or coursework.",
      "Reliable written communication and attention to detail.",
      "Ability to work from the Pune studio on weekdays.",
    ],
  },
];

const culture = [
  {
    title: "Own the work",
    body: "Specialists speak to clients and ship the work. Strategy and execution stay with the same people.",
  },
  {
    title: "Ship every week",
    body: "Tests, pages, and creative move on a weekly cadence. Roadmaps are living documents, not quarterly theatre.",
  },
  {
    title: "Say the hard thing",
    body: "If a channel cannot be measured, we say so. Feedback is direct, specific, and meant to make the next sprint better.",
  },
  {
    title: "Learn on live brands",
    body: "You will work on real spend and real launches from Pune - with a lead beside you, not a slide deck instead of you.",
  },
];

const steps = [
  { n: "01", title: "Apply", body: "Share your role, a short note, and a portfolio or LinkedIn." },
  { n: "02", title: "Intro call", body: "A 20–30 minute conversation about your work and how we operate." },
  { n: "03", title: "Practical task", body: "A scoped exercise that mirrors the job - paid, if it takes real time." },
  { n: "04", title: "Offer", body: "Clear role, compensation, and start date. No vague “culture fit” loops." },
];

function FadeIn({
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
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function CareersPage() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Department>("All roles");
  const [openId, setOpenId] = useState<string | null>(roles[0]?.id ?? null);
  const [roleId, setRoleId] = useState(roles[0]?.id ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [portfolio, setPortfolio] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState("");

  const visibleRoles = useMemo(
    () =>
      filter === "All roles"
        ? roles
        : roles.filter((role) => role.department === filter),
    [filter],
  );

  const selectedRole = roles.find((role) => role.id === roleId);

  const applyTo = useCallback((id: string) => {
    setRoleId(id);
    setOpenId(id);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const validate = useCallback(() => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Please add your name";
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid email";
    if (!note.trim()) next.note = "A short note helps us review faster";
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [name, email, note]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitError("");
    setFormStatus("submitting");
    try {
      const roleTitle = selectedRole?.title ?? "General application";
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Career application - ${roleTitle} - ${name.trim()}`,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || " - ",
        message: `Role: ${roleTitle}\nPortfolio / LinkedIn: ${portfolio.trim() || "—"}\n\n${note.trim()}`,
        from_name: name.trim(),
        replyto: email.trim(),
        botcheck: false,
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
      };
      if (!res.ok || !data.success) {
        throw new Error(
          data.message || "Something went wrong. Please email us directly.",
        );
      }
      setFormStatus("success");
    } catch (err) {
      setFormStatus("error");
      setSubmitError(
        err instanceof Error ? err.message : "Submission failed. Please try again.",
      );
    }
  };

  return (
    <>
      <section className="relative overflow-hidden rounded-b-[1.75rem] bg-[#050816] text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgba(99,102,241,0.42),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_60%,rgba(234,88,12,0.14),transparent_45%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-12 pt-8 sm:px-8 sm:pb-14 sm:pt-10 lg:px-10">
          <nav
            className="mb-10 flex items-center gap-3 text-[13px] text-white/45"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-white/25" aria-hidden>
              /
            </span>
            <span className="font-medium text-white">Careers</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[12px] font-medium tracking-wide text-violet-200/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                  Open roles · Pune studio
                </div>
                <h1 className="mt-6 text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.85rem]">
                  Work on live brands.
                  <span className="block bg-gradient-to-r from-white via-violet-200 to-orange-200 bg-clip-text text-transparent">
                    Own the outcome.
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/65">
                  Techify Labs is hiring marketers, designers, and engineers in
                  Pune. You will ship weekly, talk to clients, and see the
                  numbers behind the work.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#open-roles"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[14px] font-semibold text-slate-900 shadow-lg shadow-violet-900/25 transition hover:bg-violet-50"
                  >
                    View open roles
                  </a>
                  <a
                    href="#apply"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-[14px] font-semibold text-white transition hover:bg-white/10"
                  >
                    Apply now
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
                <Image
                  src={photos.collaboration}
                  alt="Techify Labs team collaborating in studio"
                  width={1200}
                  height={800}
                  className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[320px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "Studio", value: "Pune" },
                    { label: "Work", value: "Hybrid" },
                    { label: "Roles", value: `${roles.length} open` },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-black/35 px-3 py-3 backdrop-blur-md"
                    >
                      <p className="text-[11px] uppercase tracking-[0.14em] text-white/50">
                        {item.label}
                      </p>
                      <p className="mt-1 text-[15px] font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn>
            <span className="section-kicker">
              <span className="section-kicker-dot" aria-hidden />
              Life at Techify
            </span>
            <h2 className="section-title mt-4 max-w-2xl text-3xl sm:text-4xl">
              A studio that treats the work like a craft
            </h2>
            <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-slate-500">
              Small team, live retainers, and a Pune office you can actually
              use. We hire people who want ownership more than job titles.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <article className="career-value-card h-full">
                  <span className="career-value-index">0{i + 1}</span>
                  <h3 className="mt-5 text-[17px] font-semibold text-slate-900">
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

      <section id="open-roles" className="home-section scroll-mt-28">
        <div className="home-section-inner">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <FadeIn>
              <span className="section-kicker">
                <span className="section-kicker-dot" aria-hidden />
                Open positions
              </span>
              <h2 className="section-title mt-4 text-3xl sm:text-4xl">
                Find a role that fits
              </h2>
              <p className="mt-3 max-w-xl text-[15px] text-slate-500">
                {visibleRoles.length}{" "}
                {visibleRoles.length === 1 ? "role" : "roles"} in {filter === "All roles" ? "the studio" : filter.toLowerCase()}.
              </p>
            </FadeIn>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setFilter(dept)}
                  className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                    filter === dept
                      ? "bg-[#3b31a1] text-white shadow-md"
                      : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-[#3b31a1]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-2.5">
            {visibleRoles.map((role) => {
              const open = openId === role.id;
              return (
                <article key={role.id} className="career-role">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    onClick={() => setOpenId(open ? null : role.id)}
                    aria-expanded={open}
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[16px] font-semibold text-slate-900">
                          {role.title}
                        </h3>
                        <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#3b31a1]">
                          {role.type}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] text-slate-500">
                        {role.department} · {role.location} · {role.experience}
                      </p>
                    </div>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition ${open ? "rotate-180 border-transparent bg-[#3b31a1] text-white" : ""}`}
                      aria-hidden
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  {open ? (
                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">
                      <p className="max-w-3xl text-[14px] leading-relaxed text-slate-600">
                        {role.summary}
                      </p>
                      <div className="mt-5 grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                            You will
                          </h4>
                          <ul className="mt-2.5 space-y-1.5 text-[14px] leading-relaxed text-slate-600">
                            {role.responsibilities.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ea580c]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                            You bring
                          </h4>
                          <ul className="mt-2.5 space-y-1.5 text-[14px] leading-relaxed text-slate-600">
                            {role.requirements.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b31a1]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => applyTo(role.id)}
                        className="mt-5 inline-flex h-10 items-center rounded-full bg-[#3b31a1] px-5 text-[13px] font-semibold text-white transition hover:bg-[#32297f]"
                      >
                        Apply for this role
                      </button>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section home-section-white">
        <div className="home-section-inner">
          <FadeIn className="text-center">
            <span className="section-kicker">
              <span className="section-kicker-dot" aria-hidden />
              How we hire
            </span>
            <h2 className="section-title mt-4 text-3xl sm:text-4xl">
              Four steps. No maze.
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.05}>
                <article className="rounded-xl border border-slate-200/80 bg-white p-5">
                  <p className="text-[12px] font-semibold tracking-[0.16em] text-[#3b31a1]/70">
                    {step.n}
                  </p>
                  <h3 className="mt-2 text-[16px] font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">
                    {step.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="home-section scroll-mt-28">
        <div className="home-section-inner">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <FadeIn className="lg:col-span-5">
              <span className="section-kicker">
                <span className="section-kicker-dot" aria-hidden />
                Apply
              </span>
              <h2 className="section-title mt-4 text-3xl sm:text-4xl">
                Send a thoughtful application
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-slate-500">
                Tell us the role, a link to your work, and why this studio. We
                read every application and reply within a few business days.
              </p>
              <ul className="mt-8 space-y-4 text-[14.5px] text-slate-600">
                <li>
                  Email{" "}
                  <a
                    href={`mailto:${EMAIL}?subject=Career application`}
                    className="font-semibold text-[#3b31a1] hover:underline"
                  >
                    {EMAIL}
                  </a>
                </li>
                <li>
                  WhatsApp{" "}
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#3b31a1] hover:underline"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li>Studio · Clover Hills Plaza, NIBM Road, Pune</li>
              </ul>
            </FadeIn>

            <FadeIn className="lg:col-span-7" delay={0.08}>
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] sm:p-8">
                {formStatus === "success" ? (
                  <div className="py-10 text-center">
                    <p className="text-xl font-semibold text-slate-900">
                      Application received
                    </p>
                    <p className="mt-3 text-[15px] text-slate-500">
                      Thank you. We will review your note and get back to you.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-[13px] font-medium text-slate-700">
                        Full name
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="career-input mt-1.5"
                          autoComplete="name"
                        />
                        {errors.name ? (
                          <span className="mt-1 block text-[12px] text-red-600">
                            {errors.name}
                          </span>
                        ) : null}
                      </label>
                      <label className="block text-[13px] font-medium text-slate-700">
                        Email
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="career-input mt-1.5"
                          autoComplete="email"
                        />
                        {errors.email ? (
                          <span className="mt-1 block text-[12px] text-red-600">
                            {errors.email}
                          </span>
                        ) : null}
                      </label>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-[13px] font-medium text-slate-700">
                        Phone
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="career-input mt-1.5"
                          autoComplete="tel"
                        />
                      </label>
                      <label className="block text-[13px] font-medium text-slate-700">
                        Role
                        <select
                          value={roleId}
                          onChange={(e) => setRoleId(e.target.value)}
                          className="career-input mt-1.5"
                        >
                          {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                              {role.title}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <label className="block text-[13px] font-medium text-slate-700">
                      LinkedIn or portfolio URL
                      <input
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        className="career-input mt-1.5"
                        placeholder="https://"
                      />
                    </label>
                    <label className="block text-[13px] font-medium text-slate-700">
                      Why this role
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={5}
                        className="career-input mt-1.5 resize-y"
                        placeholder="A few lines on your work and what you want to build here."
                      />
                      {errors.note ? (
                        <span className="mt-1 block text-[12px] text-red-600">
                          {errors.note}
                        </span>
                      ) : null}
                    </label>
                    {formStatus === "error" ? (
                      <p className="text-[13px] text-red-600">{submitError}</p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#3b31a1] text-[14px] font-semibold text-white transition hover:bg-[#32297f] disabled:opacity-70 sm:w-auto sm:px-10"
                    >
                      {formStatus === "submitting"
                        ? "Sending…"
                        : "Submit application"}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
