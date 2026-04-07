"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";

const springSoft = { type: "spring" as const, stiffness: 380, damping: 28 };
const springTap = { type: "spring" as const, stiffness: 520, damping: 32 };


const services = [
  "Meta Ads Agency in India",
  "Google Ads Agency in India",
  "Amazon Ads Agency in India",
  "Website Design (UI/UX)",
  "Web Development",
  "Shopify Development",
  "Search Engine Optimization",
  "Branding Agency in India",
  "Email Marketing",
  "E-Commerce Marketplace",
  "Quick Commerce",
  "Social Media Marketing",
];

const bottomLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Blogs", href: "#" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sitemap", href: "#" },
];

const PHONE_E164 = "+918956776951";
const PHONE_TEL = `tel:${PHONE_E164}`;
const PHONE_DISPLAY = "+91 8956776951";

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

/** Filled handset — strong silhouette for floating call button */
function IconPhoneCall({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconChevronUp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const SCROLL_EDGE_PX = 80;

function FooterSectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-0">
      <h3 className="m-0 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/45 leading-tight">
        {children}
      </h3>
      <div className="mt-1 h-px w-10 bg-[#ea580c]" aria-hidden />
    </div>
  );
}

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      setAtTop(y < SCROLL_EDGE_PX);
      setAtBottom(max - y < SCROLL_EDGE_PX);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <footer className="relative z-0 mt-auto overflow-hidden bg-[#3b31a1] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-18%,rgba(255,255,255,0.07),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.06] via-transparent to-black/[0.18]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[#ea580c]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-[3px] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-8 sm:px-8 lg:px-10 lg:pb-16 lg:pt-9">
        {/*
          md:flex: har column apna stack — heading turant upar, list/card neeche (grid row height ≠ logo height).
        */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-6 lg:gap-8 xl:gap-10">
          {/* Column — brand */}
          <div className="flex min-w-0 flex-col gap-7 md:max-w-[34%] md:flex-[1.02] md:basis-0">
            <motion.div
              className="-translate-y-4 flex w-fit max-w-full flex-col md:-translate-y-5"
              whileHover={reduceMotion ? undefined : { scale: 1.01 }}
              transition={springSoft}
            >
              <Link
                href="/"
                className="block w-fit max-w-full leading-none transition hover:opacity-95"
              >
                <Image
                  src="/techify-logo.png"
                  alt="Techify Labs"
                  width={635}
                  height={331}
                  className="block h-auto w-full max-w-[min(248px,85vw)] origin-left object-contain object-left object-top sm:max-w-[268px]"
                  sizes="(max-width: 640px) 85vw, 268px"
                />
              </Link>
              <div className="mt-1 h-px w-10 shrink-0 self-center bg-[#ea580c]" aria-hidden />
            </motion.div>
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/40">Digital growth partner</p>
            <p className="max-w-md text-[15px] leading-[1.65] text-white/80">
              Trusted marketing and development partner — practical strategies and execution that help your brand
              compete and scale online.
            </p>
            <div className="border-t border-white/[0.12] pt-7">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Connect</p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { Icon: IconFacebook, label: "Facebook", hover: "hover:bg-[#1877f2]/20 hover:border-[#1877f2]/35" },
                  { Icon: IconInstagram, label: "Instagram", hover: "hover:bg-fuchsia-500/15 hover:border-fuchsia-400/30" },
                  { Icon: IconLinkedIn, label: "LinkedIn", hover: "hover:bg-[#0a66c2]/20 hover:border-[#0a66c2]/35" },
                ].map(({ Icon, label, hover }) => (
                  <motion.a
                    key={label}
                    href="#"
                    aria-label={label}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.14] bg-white/[0.05] text-white/95 transition-colors ${hover}`}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.96, transition: springTap }}
                    transition={springSoft}
                  >
                    <Icon className="h-[17px] w-[17px]" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Column — services (title + list tight stack) */}
          <div className="flex min-w-0 flex-col gap-4 md:flex-[1.15] md:basis-0">
            <FooterSectionTitle>Our services</FooterSectionTitle>
            <ul className="grid w-full min-w-0 grid-cols-1 gap-x-5 gap-y-0 text-[14px] leading-snug sm:grid-cols-2 sm:gap-x-5 md:gap-x-4 lg:gap-x-6 sm:gap-y-px">
              {services.map((item) => (
                <li key={item} className="border-b border-white/[0.06] sm:border-0">
                  <a
                    href="#"
                    className="group/footer-link flex items-baseline gap-2 py-2.5 text-white/75 transition-colors duration-200 hover:text-white sm:py-2"
                  >
                    <span
                      className="mt-[0.35em] h-1 w-1 shrink-0 rounded-full bg-[#ea580c]/80 opacity-60 transition-opacity group-hover/footer-link:opacity-100"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1 group-hover/footer-link:underline group-hover/footer-link:decoration-white/30 group-hover/footer-link:underline-offset-4">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column — contact */}
          <div className="flex w-full min-w-0 flex-col gap-4 md:max-w-[min(100%,320px)] md:flex-[0.95] md:shrink-0">
            <FooterSectionTitle>Contact</FooterSectionTitle>
            <div className="overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.04] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] backdrop-blur-[2px]">
              <a
                href="mailto:info@techifylabs.in"
                className="group flex gap-4 border-b border-white/[0.08] px-5 py-4 transition-colors hover:bg-white/[0.05]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ea580c]/15 text-white ring-1 ring-white/10">
                  <IconMail className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">Email</p>
                  <p className="mt-1 break-all text-[14px] font-medium text-white/95 transition group-hover:underline group-hover:underline-offset-4">
                    info@techifylabs.in
                  </p>
                </div>
              </a>
              <a href={PHONE_TEL} className="group flex gap-4 border-b border-white/[0.08] px-5 py-4 transition-colors hover:bg-white/[0.05]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ea580c]/15 text-white ring-1 ring-white/10">
                  <IconPhone className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">Phone</p>
                  <p className="mt-1 text-[14px] font-medium tabular-nums text-white/95">{PHONE_DISPLAY}</p>
                </div>
              </a>
              <div className="flex gap-4 px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-lg bg-[#ea580c]/15 text-white ring-1 ring-white/10">
                  <IconMapPin className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0 flex-1 text-[13px] leading-relaxed text-white/78">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">Office</p>
                  <p className="mt-1.5 font-semibold text-white">Techify Labs Pvt. Ltd.</p>
                  <p className="mt-1.5">
                    UG Floor, Office No. 67-68, Clover Hills Plaza
                    <br />
                    NIBM Road, Kondhwa, Pune — 411048
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.1] bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8">
          <p className="text-center text-[13px] leading-relaxed text-white/55 sm:text-left">
            © {new Date().getFullYear()} Techify Labs Pvt. Ltd. All rights reserved.
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 text-[13px] sm:justify-end"
            aria-label="Footer legal"
          >
            {bottomLinks.map((link, i) => (
              <span key={link.label} className="inline-flex items-center">
                {i > 0 ? (
                  <span className="mx-2 hidden h-3 w-px bg-white/25 sm:inline" aria-hidden />
                ) : null}
                <motion.a
                  href={link.href}
                  className="rounded px-1.5 py-0.5 text-white/65 transition-colors hover:text-white"
                  whileHover={reduceMotion ? undefined : { y: -0.5 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  transition={springSoft}
                >
                  {link.label}
                </motion.a>
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Side scroll: up / down — above Call + WhatsApp stack */}
      <motion.div
        className="fixed bottom-40 right-6 z-40 flex flex-col overflow-hidden rounded-xl border border-white/20 bg-[#3b31a1]/95 text-white shadow-lg shadow-black/25 backdrop-blur-md"
        role="group"
        aria-label="Page scroll"
        initial={false}
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        transition={springSoft}
      >
        <motion.button
          type="button"
          onClick={scrollToTop}
          disabled={atTop}
          className="flex h-11 w-11 items-center justify-center transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-35 focus:outline-none focus-visible:bg-white/15"
          aria-label="Scroll to top"
          whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        >
          <IconChevronUp className="h-5 w-5" />
        </motion.button>
        <span className="mx-2 h-px shrink-0 bg-white/15" aria-hidden />
        <motion.button
          type="button"
          onClick={scrollToBottom}
          disabled={atBottom}
          className="flex h-11 w-11 items-center justify-center transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-35 focus:outline-none focus-visible:bg-white/15"
          aria-label="Scroll to bottom"
          whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        >
          <IconChevronDown className="h-5 w-5" />
        </motion.button>
      </motion.div>

      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        role="group"
        aria-label="Quick contact"
      >
        <motion.a
          href={PHONE_TEL}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3b31a1] text-white shadow-lg shadow-black/35 ring-2 ring-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3b31a1]"
          aria-label={`Call ${PHONE_DISPLAY}`}
          whileHover={reduceMotion ? undefined : { scale: 1.08, y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.94, transition: springTap }}
          transition={springSoft}
        >
          <IconPhoneCall className="h-7 w-7" />
        </motion.a>
        <motion.a
          href={`https://wa.me/${PHONE_E164.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/35 ring-2 ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3b31a1]"
          aria-label="Chat on WhatsApp"
          whileHover={reduceMotion ? undefined : { scale: 1.08, y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.94, transition: springTap }}
          transition={springSoft}
        >
          <IconWhatsApp className="h-7 w-7" />
        </motion.a>
      </div>
    </footer>
  );
}
