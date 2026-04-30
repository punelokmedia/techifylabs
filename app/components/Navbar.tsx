"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TopBar from "./TopBar";
import ConsultationModal from "./ConsultationModel";
type MenuKey = "solutions" | "leadGeneration" | "knowledge" | null;

const solutionsSections = [
  {
    title: "Performance marketing (paid)",
    links: [
      { label: "Meta Ads", href: "/services/meta-ads", Icon: IconMegaphone },
      {
        label: "Google Ads",
        href: "/services/google-ads",
        Icon: IconSearchChart,
      },
      { label: "Amazon Ads", href: "/services/amazon-ads", Icon: IconPackage },
    ],
  },
  {
    title: "Design and development",
    links: [
      {
        label: "Website Design (UI/UX)",
        href: "/services/website-design",
        Icon: IconLayout,
      },
      {
        label: "Website Development",
        href: "/services/website-development",
        Icon: IconCode,
      },
      {
        label: "Shopify Development",
        href: "/services/shopify-development",
        Icon: IconShopping,
      },
      {
        label: "App Development",
        href: "/services/app-development",
        Icon: IconAppDevelopment, // you need to create/import this
      },
    ],
  },
  {
    title: "Quick commerce & marketplace",
    links: [
      {
        label: "E-Commerce Marketplace",
        href: "/services/ecommerce-marketplace",
        Icon: IconStore,
      },
      {
        label: "Quick Commerce",
        href: "/services/quick-commerce",
        Icon: IconZap,
      },
    ],
  },
  {
    title: "Branding & growth marketing",
    links: [
      {
        label: "Organic Growth (SEO)",
        href: "/services/organic-growth-seo",
        Icon: IconTrending,
      },
      {
        label: "Retention Marketing",
        href: "/services/retention-marketing",
        Icon: IconHeart,
      },
      {
        label: "Social Media Agency India",
        href: "/services/socialmedia-agency",
        Icon: IconShare,
      },
      {
        label: "Branding Agency India",
        href: "/services/Branding-agency",
        Icon: IconSparkle,
      },
    ],
  },
];

const knowledgeLinks = [
  { label: "Our Team", href: "/about#team", Icon: IconUsers },
  { label: " Our Blogs", href: "/services/blogs", Icon: IconBook },
];

const leadGenerationLinks = [
  {
    label: "Lead Generation Overview",
    href: "/services/lead-generation",
    Icon: IconMegaphone,
  },
  {
    label: "Lead Generation for IVF Center",
    href: "/services/lead-generation-ivf-center",
    Icon: IconHeart,
  },
  {
    label: "Lead Generation for Hair Transplant Clinic",
    href: "/services/lead-generation-hair-transplant-clinic",
    Icon: IconSparkle,
  },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconMegaphone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M3 11v4a1 1 0 001 1h2l4 4V6L6 10H4a1 1 0 00-1 1z" />
      <path d="M16 8a5 5 0 010 8M19 5a9 9 0 010 14" />
    </svg>
  );
}

function IconSearchChart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function IconPackage({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M16.5 9.4 7.5 4.21M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  );
}

function IconLayout({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function IconShopping({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function IconAppDevelopment({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      {/* Phone body */}
      <rect x="7" y="2" width="10" height="20" rx="2" />

      {/* Screen */}
      <rect x="9" y="5" width="6" height="12" rx="1" />

      {/* Home button */}
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}
function IconStore({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function IconZap({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconTrending({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  );
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function IconShare({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}

function IconSparkle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M12 3l1.09 3.26L16 7l-2.91 1.74L12 12l-1.09-3.26L8 7l2.91-1.74L12 3zM19 15l.66 2h2.09l-1.73 1.26.66 2-1.68-1.22L19 21l-.66-2-1.68 1.22.66-2-1.73-1.26h2.09L19 15zM5 15l.66 2h2.09l-1.73 1.26.66 2L5 19.78 3.32 21l.66-2L2.25 17.74h2.09L5 15z" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconBook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

function MenuPanel({
  children,
  className = "",
  variant = "mega",
}: {
  children: ReactNode;
  className?: string;
  /** mega: large flyout | compact: hub menu — light surface (matches indigo bar, not harsh black) */
  variant?: "mega" | "compact";
}) {
  const base =
    variant === "mega"
      ? "relative overflow-hidden rounded-3xl border border-slate-200/95 bg-white/98 shadow-[0_28px_56px_-16px_rgba(59,49,161,0.24),0_0_0_1px_rgba(15,23,42,0.04)_inset] backdrop-blur-xl"
      : "relative overflow-hidden rounded-3xl border border-slate-200/95 bg-white/98 shadow-[0_20px_44px_-14px_rgba(59,49,161,0.22)] backdrop-blur-xl";

  return (
    <div className={[base, className].join(" ")}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#ea580c] via-[#3b31a1]/35 to-violet-500/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[3px] h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/** Two columns: left = paid + design, right = commerce + branding (matches mega-menu layout). */
const solutionsColumns: (typeof solutionsSections)[] = [
  solutionsSections.slice(0, 2),
  solutionsSections.slice(2, 4),
];

const dropdownEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const dropdownEaseOut: [number, number, number, number] = [0.4, 0, 1, 1];

const megaContainerVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.34, ease: dropdownEase },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.99,
    transition: { duration: 0.22, ease: dropdownEaseOut },
  },
};

const megaColumnVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.08 },
  },
};

const megaSectionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: dropdownEase },
  },
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<MenuKey>(null);
  const [openModal, setOpenModal] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeMenus = useCallback(() => {
    setOpenMenu(null);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenus]);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!navRef.current?.contains(e.target as Node)) closeMenus();
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [closeMenus]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const triggerClass = (active: boolean) =>
    [
      "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-semibold tracking-tight transition-all duration-200 md:gap-2 md:px-3.5 md:py-2 md:text-[15px]",
      active
        ? "bg-white/20 text-white shadow-sm ring-1 ring-white/30"
        : "text-white/90 hover:bg-white/10 hover:text-white",
    ].join(" ");

  return (
    <header ref={navRef} className="sticky top-0 z-50">
      <TopBar />
      <div className="relative border-b border-white/10 bg-[#3b31a1] shadow-[0_1px_3px_rgba(15,23,42,0.12)]">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden
        />
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-2 px-4 py-1.5 sm:gap-3 sm:px-5 sm:py-2 md:gap-5 md:px-6 md:py-2.5 lg:gap-6 lg:px-8 lg:py-3 xl:px-10">
          <Link
            href="/"
            className="group relative flex shrink-0 items-center overflow-visible py-0 transition-opacity hover:opacity-95"
          >
            <Image
              src="/techify-labs-logo.png"
              alt="Techify Labs"
              width={800}
              height={500}
              className="block h-auto w-auto max-w-[min(750px,95vw)] max-h-[7rem] origin-left object-contain object-left shadow-none [box-shadow:none] sm:max-h-[5rem] md:max-h-[5.25rem] lg:max-h-[5.5rem]"
              style={{ filter: "none" }}
              priority
              sizes="(max-width: 768px) 92vw, 520px"
            />
          </Link>
          <nav
            className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-2 md:flex md:gap-3 lg:gap-4 xl:gap-5"
            aria-label="Main"
          >
            <Link
              href="/"
              className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-semibold text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white md:px-3.5 md:py-2 md:text-[15px]"
            >
              Home
            </Link>

            <div
              className="relative shrink-0"
              onMouseEnter={() => setOpenMenu("solutions")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                aria-expanded={openMenu === "solutions"}
                aria-haspopup="true"
                className={triggerClass(openMenu === "solutions")}
                onClick={() =>
                  setOpenMenu(openMenu === "solutions" ? null : "solutions")
                }
              >
                Our Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-[1.125rem] md:w-[1.125rem] ${openMenu === "solutions" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openMenu === "solutions" && (
                  <motion.div
                    key="solutions-mega"
                    role="menu"
                    aria-label="Our Solutions"
                    variants={megaContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ transformOrigin: "top center" }}
                    className="absolute left-1/2 top-full z-50 w-[min(94vw,880px)] -translate-x-1/2 pt-3.5"
                    onMouseEnter={() => setOpenMenu("solutions")}
                  >
                    <MenuPanel
                      variant="mega"
                      className="px-8 py-9 sm:px-10 sm:py-10"
                    >
                      <div className="grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
                        {solutionsColumns.map((column, colIdx) => (
                          <motion.div
                            key={colIdx}
                            className="space-y-10"
                            variants={megaColumnVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {column.map((section) => (
                              <motion.div
                                key={section.title}
                                variants={megaSectionVariants}
                              >
                                <div className="mb-4 flex items-center gap-2.5">
                                  <span
                                    className="h-2 w-2 shrink-0 rounded-[2px] bg-[#ea580c] shadow-[0_0_12px_rgba(234,88,12,0.4)]"
                                    aria-hidden
                                  />
                                  <h3 className="text-[11px] font-bold uppercase leading-tight tracking-[0.14em] text-slate-800">
                                    {section.title}
                                  </h3>
                                </div>
                                <ul className="space-y-0.5 border-l border-slate-200 pl-4">
                                  {section.links.map(({ label, href }) => (
                                    <li key={label}>
                                      <a
                                        href={href}
                                        role="menuitem"
                                        className="group relative block rounded-lg px-2 py-2.5 text-[15px] font-medium leading-snug text-slate-600 transition-colors duration-200 ease-out hover:bg-violet-50 hover:text-[#3b31a1] focus-visible:bg-violet-50 focus-visible:text-[#3b31a1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b31a1]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                      >
                                        <span
                                          className="absolute -left-[17px] top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#3b31a1] opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block"
                                          aria-hidden
                                        />
                                        {label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </motion.div>
                        ))}
                      </div>
                    </MenuPanel>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative shrink-0"
              onMouseEnter={() => setOpenMenu("leadGeneration")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                aria-expanded={openMenu === "leadGeneration"}
                aria-haspopup="true"
                className={triggerClass(openMenu === "leadGeneration")}
                onClick={() =>
                  setOpenMenu(
                    openMenu === "leadGeneration" ? null : "leadGeneration",
                  )
                }
              >
                Lead Generation
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-[1.125rem] md:w-[1.125rem] ${openMenu === "leadGeneration" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openMenu === "leadGeneration" && (
                  <motion.div
                    key="lead-generation"
                    role="menu"
                    aria-label="Lead Generation"
                    variants={megaContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ transformOrigin: "top left" }}
                    className="absolute left-0 top-full z-50 min-w-[min(92vw,420px)] pt-3.5"
                    onMouseEnter={() => setOpenMenu("leadGeneration")}
                  >
                    <MenuPanel variant="compact" className="p-4">
                      <div className="border-b border-slate-200 pb-3 pl-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-2 w-2 shrink-0 rounded-[2px] bg-[#ea580c] shadow-[0_0_10px_rgba(234,88,12,0.35)]"
                            aria-hidden
                          />
                          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-800">
                            Lead Generation
                          </p>
                        </div>
                        <p className="mt-1.5 pl-4 text-xs text-slate-500">
                          IVF and hair transplant focused campaigns
                        </p>
                      </div>
                      <motion.ul
                        className="mt-3 space-y-0.5"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.06,
                              delayChildren: 0.1,
                            },
                          },
                          hidden: {},
                        }}
                      >
                        {leadGenerationLinks.map(({ label, href, Icon }) => (
                          <motion.li
                            key={label}
                            variants={{
                              hidden: { opacity: 0, x: -8 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                  duration: 0.26,
                                  ease: dropdownEase,
                                },
                              },
                            }}
                          >
                            <a
                              href={href}
                              role="menuitem"
                              className="group flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 ease-out hover:bg-violet-50 hover:text-[#3b31a1] focus-visible:text-[#3b31a1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b31a1]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#3b31a1] ring-1 ring-slate-200/80 transition duration-200 group-hover:bg-violet-100 group-hover:text-[#3b31a1]">
                                <Icon className="h-[17px] w-[17px]" />
                              </span>
                              <span className="flex-1">{label}</span>
                              <span
                                className="text-[#ea580c]/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#ea580c]"
                                aria-hidden
                              >
                                →
                              </span>
                            </a>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </MenuPanel>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative shrink-0"
              onMouseEnter={() => setOpenMenu("knowledge")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                aria-expanded={openMenu === "knowledge"}
                aria-haspopup="true"
                className={triggerClass(openMenu === "knowledge")}
                onClick={() =>
                  setOpenMenu(openMenu === "knowledge" ? null : "knowledge")
                }
              >
                Knowledge Hub
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-[1.125rem] md:w-[1.125rem] ${openMenu === "knowledge" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openMenu === "knowledge" && (
                  <motion.div
                    key="knowledge-hub"
                    role="menu"
                    aria-label="Knowledge Hub"
                    variants={megaContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ transformOrigin: "top left" }}
                    className="absolute left-0 top-full z-50 min-w-[min(92vw,360px)] pt-3.5"
                    onMouseEnter={() => setOpenMenu("knowledge")}
                  >
                    <MenuPanel variant="compact" className="p-4">
                      <div className="border-b border-slate-200 pb-3 pl-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-2 w-2 shrink-0 rounded-[2px] bg-[#ea580c] shadow-[0_0_10px_rgba(234,88,12,0.35)]"
                            aria-hidden
                          />
                          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-800">
                            Knowledge Hub
                          </p>
                        </div>
                        <p className="mt-1.5 pl-4 text-xs text-slate-500">
                          Our Team, and Our Blogs
                        </p>
                      </div>
                      <motion.ul
                        className="mt-3 space-y-0.5"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.06,
                              delayChildren: 0.1,
                            },
                          },
                          hidden: {},
                        }}
                      >
                        {knowledgeLinks.map(({ label, href, Icon }) => (
                          <motion.li
                            key={label}
                            variants={{
                              hidden: { opacity: 0, x: -8 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                  duration: 0.26,
                                  ease: dropdownEase,
                                },
                              },
                            }}
                          >
                            <a
                              href={href}
                              role="menuitem"
                              className="group flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 ease-out hover:bg-violet-50 hover:text-[#3b31a1] focus-visible:text-[#3b31a1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b31a1]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#3b31a1] ring-1 ring-slate-200/80 transition duration-200 group-hover:bg-violet-100 group-hover:text-[#3b31a1]">
                                <Icon className="h-[17px] w-[17px]" />
                              </span>
                              <span className="flex-1">{label}</span>
                              <span
                                className="text-[#ea580c]/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#ea580c]"
                                aria-hidden
                              >
                                →
                              </span>
                            </a>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </MenuPanel>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white md:px-3.5 md:py-2 md:text-[15px]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white md:px-3.5 md:py-2 md:text-[15px]"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2 pl-1 md:pl-2 lg:pl-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpenModal(true)}
              className="group/navcta relative hidden items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full bg-white px-3 py-2 text-[11px] font-bold text-[#3b31a1] shadow-md ring-1 ring-white/40 transition-shadow duration-300 hover:bg-violet-50 hover:shadow-lg sm:inline-flex sm:px-4 sm:py-2 sm:text-xs md:px-5 md:text-sm"
            >
              <span
                className="absolute inset-0 bg-[#3b31a1]/5 opacity-0 transition-opacity duration-200 group-hover/navcta:opacity-100"
                aria-hidden
              />
              <span
                className="absolute inset-0 bg-gradient-to-r from-violet-400/15 via-indigo-400/10 to-fuchsia-400/10 opacity-0 transition-opacity duration-300 group-hover/navcta:opacity-100"
                aria-hidden
              />
              <span className="relative z-10 flex items-center gap-1">
                Get a free consultation
                <span
                  aria-hidden
                  className="text-base leading-none transition-transform duration-200 group-hover/navcta:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </motion.button>

            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white shadow-sm transition hover:border-white/40 hover:bg-white/15 md:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-slate-900/25 backdrop-blur-sm md:hidden"
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-x-0 top-[9rem] z-50 mx-5 max-h-[min(82vh,calc(100dvh-10rem))] overflow-y-auto rounded-2xl border border-slate-200/90 bg-white/98 p-4 shadow-[0_24px_48px_-12px_rgba(59,49,161,0.18)] ring-1 ring-slate-200/50 backdrop-blur-xl sm:mx-6 md:hidden"
              >
                <nav className="flex flex-col gap-0.5" aria-label="Mobile">
                  <Link
                    href="/"
                    className="rounded-xl px-4 py-3.5 text-sm font-bold text-slate-800 transition-colors hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                    onClick={() =>
                      setMobileAccordion((a) =>
                        a === "solutions" ? null : "solutions",
                      )
                    }
                  >
                    Our Solutions
                    <ChevronDown
                      className={`shrink-0 opacity-80 transition-transform ${mobileAccordion === "solutions" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileAccordion === "solutions" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: dropdownEase }}
                        className="overflow-hidden pl-2"
                      >
                        {solutionsSections.map((section) => (
                          <div
                            key={section.title}
                            className="mb-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200/80"
                          >
                            <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#3b31a1]">
                              <span className="h-1.5 w-1.5 rounded-sm bg-[#ea580c]" />
                              {section.title}
                            </p>
                            <ul className="space-y-0.5">
                              {section.links.map(({ label, href, Icon }) => (
                                <li key={label}>
                                  <a
                                    href={href}
                                    className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-slate-700 active:bg-violet-50"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#3b31a1] ring-1 ring-slate-200/80">
                                      <Icon className="h-4 w-4" />
                                    </span>
                                    {label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                    onClick={() =>
                      setMobileAccordion((a) =>
                        a === "leadGeneration" ? null : "leadGeneration",
                      )
                    }
                  >
                    Lead Generation
                    <ChevronDown
                      className={`shrink-0 opacity-80 transition-transform ${mobileAccordion === "leadGeneration" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileAccordion === "leadGeneration" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: dropdownEase }}
                        className="overflow-hidden pl-2"
                      >
                        <ul className="space-y-1 rounded-xl bg-slate-50 p-2 pb-3 ring-1 ring-slate-200/80">
                          {leadGenerationLinks.map(({ label, href, Icon }) => (
                            <li key={label}>
                              <a
                                href={href}
                                className="flex items-center gap-3 rounded-lg px-2 py-3 text-sm font-semibold text-slate-800 active:bg-violet-50"
                                onClick={() => setMobileOpen(false)}
                              >
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#3b31a1] ring-1 ring-slate-200/80">
                                  <Icon className="h-4 w-4" />
                                </span>
                                {label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                    onClick={() =>
                      setMobileAccordion((a) =>
                        a === "knowledge" ? null : "knowledge",
                      )
                    }
                  >
                    Knowledge Hub
                    <ChevronDown
                      className={`shrink-0 opacity-80 transition-transform ${mobileAccordion === "knowledge" ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileAccordion === "knowledge" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: dropdownEase }}
                        className="overflow-hidden pl-2"
                      >
                        <ul className="space-y-1 rounded-xl bg-slate-50 p-2 pb-3 ring-1 ring-slate-200/80">
                          {knowledgeLinks.map(({ label, href, Icon }) => (
                            <li key={label}>
                              <a
                                href={href}
                                className="flex items-center gap-3 rounded-lg px-2 py-3 text-sm font-semibold text-slate-800 active:bg-violet-50"
                                onClick={() => setMobileOpen(false)}
                              >
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#3b31a1] ring-1 ring-slate-200/80">
                                  <Icon className="h-4 w-4" />
                                </span>
                                {label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Link
                    href="/about"
                    className="rounded-xl px-4 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-xl px-4 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    className="mt-3 rounded-full bg-[#3b31a1] py-3.5 text-sm font-bold text-white shadow-md ring-1 ring-slate-200/60 transition-colors hover:bg-[#32297f]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get a free consultation →
                  </motion.button>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </header>
  );
}
