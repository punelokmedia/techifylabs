"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/app/lib/contact";

const springSoft = { type: "spring" as const, stiffness: 380, damping: 28 };
const springTap = { type: "spring" as const, stiffness: 520, damping: 32 };

const serviceLinks: { label: string; href: string }[] = [
  { label: "Meta Ads Agency in India", href: "/services/meta-ads" },
  { label: "Google Ads Agency in India", href: "/services/google-ads" },
  { label: "Amazon Ads Agency in India", href: "/services/amazon-ads" },
  { label: "Website Design (UI/UX)", href: "/services/website-design" },
  { label: "Web Development", href: "/services/website-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Shopify Development", href: "/services/shopify-development" },
  { label: "Search Engine Optimization", href: "/services/organic-growth-seo" },
  { label: "Branding Agency in India", href: "/services/Branding-agency" },
  { label: "Email Marketing", href: "/services/retention-marketing" },
  { label: "E-Commerce Marketplace", href: "/services/ecommerce-marketplace" },
  { label: "Quick Commerce", href: "/services/quick-commerce" },
  { label: "Social Media Marketing", href: "/services/socialmedia-agency" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Blogs", href: "/services/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const EMAIL = "info@techifylabs.in";

const SCROLL_EDGE_PX = 80;

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50">
      {children}
    </h3>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

/** Filled handset - strong silhouette for floating call button */
function IconPhoneCall({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconChevronUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const hideFloatingControls = pathname?.startsWith(
    "/services/lead-generation",
  );

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const max = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
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
    <footer className="site-footer relative z-0 mt-auto text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="flex min-w-0 flex-col lg:col-span-3">
            <Link
              href="/"
              className="relative -mt-1 block w-fit max-w-full leading-none opacity-95 transition hover:opacity-100 lg:-mt-2"
            >
              <Image
                src="/techify-labs-logo.png"
                alt="Techify Labs"
                width={435}
                height={188}
                className="block h-auto w-full max-w-[min(220px,80vw)] -translate-y-1 object-contain object-left lg:-translate-y-2"
                sizes="220px"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/70">
              Performance marketing and product engineering for brands that want
              clear growth - ads, websites, and always-on support from Pune.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                {
                  Icon: IconFacebook,
                  label: "Facebook",
                  href: "https://www.facebook.com/Techifylabs.in",
                },
                {
                  Icon: IconInstagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/techifylabs.in/",
                },
                { Icon: IconLinkedIn, label: "LinkedIn", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/80 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav className="min-w-0 lg:col-span-4" aria-label="Services">
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-5 grid grid-cols-1 gap-x-5 gap-y-2.5 text-[13.5px] leading-snug sm:grid-cols-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/68 transition-colors hover:text-white"
                  >
                    {item.label.replace(" Agency in India", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="min-w-0 lg:col-span-2" aria-label="Company">
            <FooterHeading>Company</FooterHeading>
            <ul className="mt-5 space-y-2.5 text-[13.5px]">
              {companyLinks.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-white/68 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 lg:col-span-3">
            <FooterHeading>Get in touch</FooterHeading>
            <ul className="mt-5 space-y-4 text-[13.5px]">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-white/75 transition hover:text-white"
                >
                  <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
                  <span className="break-all">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={PHONE_TEL}
                  className="flex items-start gap-3 text-white/75 transition hover:text-white"
                >
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
                  <span className="tabular-nums">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/75 transition hover:text-white"
                >
                  <IconWhatsApp className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/65">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
                <span className="leading-relaxed">
                  UG 67-68, Clover Hills Plaza
                  <br />
                  NIBM Road, Kondhwa, Pune 411048
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-center text-[12px] text-white/45 sm:text-left">
            © {new Date().getFullYear()} Techify Labs Pvt. Ltd. All rights
            reserved.
          </p>
          <p className="text-center text-[12px] text-white/40 sm:text-right">
            Pune, India
          </p>
        </div>
      </div>

      {!hideFloatingControls && (
        <>
          {/* Side scroll: up / down - above Call + WhatsApp stack */}
          <motion.div
            className="fixed bottom-56 right-2 z-40 flex flex-col overflow-hidden rounded-xl border border-white/20 bg-[#3b31a1]/95 text-white shadow-lg shadow-black/25 backdrop-blur-md md:bottom-40 md:right-3 lg:right-2"
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
            className="fixed bottom-24 right-2 z-50 flex flex-col gap-3 md:bottom-6 md:right-3 lg:right-2"
            role="group"
            aria-label="Quick contact"
          >
            <motion.a
              href={PHONE_TEL}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b31a1] text-white shadow-lg shadow-black/35 ring-2 ring-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3b31a1] md:h-14 md:w-14"
              aria-label={`Call ${PHONE_DISPLAY}`}
              whileHover={reduceMotion ? undefined : { scale: 1.08, y: -2 }}
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.94, transition: springTap }
              }
              transition={springSoft}
            >
              <IconPhoneCall className="h-7 w-7" />
            </motion.a>
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/35 ring-2 ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3b31a1] md:h-14 md:w-14"
              aria-label="Chat on WhatsApp"
              whileHover={reduceMotion ? undefined : { scale: 1.08, y: -2 }}
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.94, transition: springTap }
              }
              transition={springSoft}
            >
              <IconWhatsApp className="h-7 w-7" />
            </motion.a>
          </div>
        </>
      )}
    </footer>
  );
}
