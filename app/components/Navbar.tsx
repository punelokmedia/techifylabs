"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopBar from "./TopBar";
import ConsultationModal from "./ConsultationModel";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/app/lib/contact";
type MenuKey = "solutions" | "leadGeneration" | "knowledge" | null;

const solutionsSections = [
  {
    title: "Paid marketing",
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
    title: "Design & development",
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
    title: "Commerce",
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
    title: "Growth & branding",
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
  { label: "Our Blogs", href: "/services/blogs", Icon: IconBook },
  { label: "Careers", href: "/careers", Icon: IconBriefcase },
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

function IconBriefcase({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M2 13h20" />
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
  variant?: "mega" | "compact";
}) {
  const base =
    variant === "mega"
      ? "nav-dropdown relative"
      : "nav-dropdown nav-dropdown-compact relative";

  return (
    <div className={[base, className].join(" ")}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const dropdownEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const dropdownEaseOut: [number, number, number, number] = [0.4, 0, 1, 1];

const megaContainerVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: dropdownEase },
  },
  exit: {
    opacity: 0,
    y: 6,
    transition: { duration: 0.14, ease: dropdownEaseOut },
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
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<MenuKey>(null);
  const [openModal, setOpenModal] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenus = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(null);
  }, []);

  const openDropdown = useCallback((key: Exclude<MenuKey, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
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
    if (mobileOpen) setOpenMenu(null);
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const syncHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${el.offsetHeight}px`,
      );
    };
    syncHeight();
    const ro = new ResizeObserver(syncHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const triggerClass = (active: boolean) =>
    [
      "inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-1 text-[13px] font-semibold tracking-tight transition-all duration-200 xl:gap-1.5 xl:px-3 xl:py-1.5 xl:text-[14.5px]",
      active
        ? "bg-white/20 text-white shadow-sm ring-1 ring-white/30"
        : "text-white/90 hover:bg-white/10 hover:text-white",
    ].join(" ");

  const navLinkClass = (href: string) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    return [
      "shrink-0 whitespace-nowrap rounded-full px-2 py-1 text-[13px] font-semibold transition-all duration-200 xl:px-3 xl:py-1.5 xl:text-[14.5px]",
      active
        ? "bg-white/20 text-white shadow-sm ring-1 ring-white/30"
        : "text-white/90 hover:bg-white/10 hover:text-white",
    ].join(" ");
  };

  return (
    <>
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-[200] w-full overflow-visible"
    >
      <TopBar />
      <div className="relative overflow-visible border-b border-white/10 bg-[#3b31a1] shadow-[0_1px_3px_rgba(15,23,42,0.12)]">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden
        />
        <div className="mx-auto flex h-[3.75rem] w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-16 sm:px-5 md:h-[4.25rem] md:px-6 lg:h-[4.5rem] lg:gap-4 lg:px-8 xl:px-10">
          <Link
            href="/"
            className="relative z-10 flex h-full shrink-0 items-center overflow-visible"
          >
            <Image
              src="/techify-labs-logo.png"
              alt="Techify Labs"
              width={435}
              height={188}
              className="block h-full w-auto max-w-[min(280px,58vw)] object-contain object-left sm:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]"
              priority
              sizes="400px"
            />
          </Link>
          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1.5"
            aria-label="Main"
          >
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
            <div
              className="relative shrink-0"
              onMouseEnter={() => openDropdown("solutions")}
              onMouseLeave={scheduleClose}
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
                  className={`h-3.5 w-3.5 transition-transform duration-300 xl:h-4 xl:w-4 ${openMenu === "solutions" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <div
              className="relative shrink-0"
              onMouseEnter={() => openDropdown("leadGeneration")}
              onMouseLeave={scheduleClose}
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
                  className={`h-3.5 w-3.5 transition-transform duration-300 xl:h-4 xl:w-4 ${openMenu === "leadGeneration" ? "rotate-180" : ""}`}
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
                    className="nav-flyout absolute left-0 top-full z-[220] w-[min(calc(100vw-2rem),22rem)] pt-2"
                    onMouseEnter={() => openDropdown("leadGeneration")}
                  >
                    <MenuPanel variant="compact" className="p-3.5">
                      <p className="nav-dropdown-section-title px-1">
                        Lead Generation
                      </p>
                      <p className="mb-2.5 px-1 text-xs text-slate-500">
                        IVF and hair transplant focused campaigns
                      </p>
                      <motion.ul
                        className="grid gap-1"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.05,
                              delayChildren: 0.06,
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
                                  duration: 0.24,
                                  ease: dropdownEase,
                                },
                              },
                            }}
                          >
                            <Link
                              href={href}
                              role="menuitem"
                              className="nav-link-card group"
                            >
                              <span className="nav-link-icon">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="flex-1 text-[13.5px] font-medium text-slate-700 group-hover:text-[#3b31a1]">
                                {label}
                              </span>
                              <span className="nav-link-arrow" aria-hidden>
                                →
                              </span>
                            </Link>
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
              onMouseEnter={() => openDropdown("knowledge")}
              onMouseLeave={scheduleClose}
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
                  className={`h-3.5 w-3.5 transition-transform duration-300 xl:h-4 xl:w-4 ${openMenu === "knowledge" ? "rotate-180" : ""}`}
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
                    className="nav-flyout absolute right-0 top-full z-[220] w-[min(calc(100vw-2rem),20rem)] pt-2"
                    onMouseEnter={() => openDropdown("knowledge")}
                  >
                    <MenuPanel variant="compact" className="p-3.5">
                      <p className="nav-dropdown-section-title px-1">
                        Knowledge Hub
                      </p>
                      <p className="mb-2.5 px-1 text-xs text-slate-500">
                        Team, blogs, and careers
                      </p>
                      <motion.ul
                        className="grid gap-1"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.05,
                              delayChildren: 0.06,
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
                                  duration: 0.24,
                                  ease: dropdownEase,
                                },
                              },
                            }}
                          >
                            <Link
                              href={href}
                              role="menuitem"
                              className="nav-link-card group"
                            >
                              <span className="nav-link-icon">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="flex-1 text-[13.5px] font-medium text-slate-700 group-hover:text-[#3b31a1]">
                                {label}
                              </span>
                              <span className="nav-link-arrow" aria-hidden>
                                →
                              </span>
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </MenuPanel>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpenModal(true)}
              className="group/navcta relative hidden items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-[#3b31a1] shadow-md ring-1 ring-white/40 transition-shadow duration-300 hover:bg-violet-50 hover:shadow-lg lg:inline-flex xl:px-5 xl:text-sm"
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
                <span className="xl:hidden">Consult</span>
                <span className="hidden xl:inline">Get a free consultation</span>
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
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white shadow-sm transition hover:border-white/40 hover:bg-white/15 lg:hidden"
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
          {openMenu === "solutions" && (
            <motion.div
              key="solutions-mega"
              role="menu"
              aria-label="Our Solutions"
              variants={megaContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-x-4 top-full z-[220] pt-1.5 lg:inset-x-8 xl:inset-x-10"
              onMouseEnter={() => openDropdown("solutions")}
              onMouseLeave={scheduleClose}
            >
              <div className="mx-auto max-w-[1080px]">
                <MenuPanel variant="mega" className="px-4 py-3.5 sm:px-5 sm:py-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 xl:grid-cols-4 xl:gap-x-5">
                    {solutionsSections.map((section) => (
                      <motion.div
                        key={section.title}
                        variants={megaSectionVariants}
                      >
                        <h3 className="nav-dropdown-section-title">
                          {section.title}
                        </h3>
                        <ul className="grid gap-px">
                          {section.links.map(({ label, href, Icon }) => (
                            <li key={label}>
                              <Link
                                href={href}
                                role="menuitem"
                                className="nav-link-card group"
                              >
                                <span className="nav-link-icon">
                                  <Icon className="h-3.5 w-3.5" />
                                </span>
                                <span className="min-w-0 flex-1 text-[12.5px] font-medium leading-snug text-slate-700 group-hover:text-[#3b31a1]">
                                  {label}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                  <div className="nav-dropdown-foot">
                    <div>
                      <p className="text-[13px] font-semibold text-slate-800">
                        Need a custom growth stack?
                      </p>
                      <p className="mt-0.5 text-[12px] text-slate-500">
                        Call {PHONE_DISPLAY}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={PHONE_TEL} className="nav-dropdown-cta">
                        Call
                      </a>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-dropdown-cta nav-dropdown-cta-wa"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </MenuPanel>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-x-0 bottom-0 top-[var(--site-header-height)] z-40 bg-slate-900/25 backdrop-blur-sm lg:hidden"
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-x-0 top-[var(--site-header-height)] z-50 mx-5 max-h-[min(82vh,calc(100dvh-var(--site-header-height)-0.75rem))] overflow-y-auto rounded-2xl border border-slate-200/90 bg-white/98 p-4 shadow-[0_24px_48px_-12px_rgba(59,49,161,0.18)] ring-1 ring-slate-200/50 backdrop-blur-xl sm:mx-6 lg:hidden"
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
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <a
                      href={PHONE_TEL}
                      className="inline-flex items-center justify-center rounded-xl bg-[#3b31a1] py-3 text-sm font-semibold text-white"
                    >
                      Call
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-[#128c7e] py-3 text-sm font-semibold text-white"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 w-full rounded-full bg-[#3b31a1] py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#32297f]"
                    onClick={() => {
                      setMobileOpen(false);
                      setOpenModal(true);
                    }}
                  >
                    Get a free consultation →
                  </motion.button>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
    <div
      className="h-[var(--site-header-height)] shrink-0"
      aria-hidden
    />
    <ConsultationModal
      isOpen={openModal}
      onClose={() => setOpenModal(false)}
    />
    </>
  );
}
