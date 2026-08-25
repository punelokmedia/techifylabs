"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/app/lib/images";

const sectionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const springSoft = {
  type: "spring" as const,
  stiffness: 380,
  damping: 32,
  mass: 0.85,
};
const springTap = { type: "spring" as const, stiffness: 500, damping: 35 };

function serviceCardVariants(featured: boolean, delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: sectionEase, delay },
    },
    hover: {
      y: -10,
      rotateX: 7,
      rotateY: -5,
      scale: featured ? 1.015 : 1.02,
      transition: {
        ...springSoft,
        staggerChildren: 0.05,
        delayChildren: 0.03,
      },
    },
  };
}

function iconVariants(featured: boolean) {
  return {
    initial: { opacity: 1, scale: 1, rotate: 0, y: 0 },
    inView: { opacity: 1, scale: 1, rotate: 0, y: 0 },
    hover: featured
      ? { scale: 1.08, y: -3, transition: springTap }
      : { scale: 1.1, rotate: -6, transition: springTap },
  };
}

const arrowVariants = {
  initial: { scale: 1, rotate: 0 },
  inView: { scale: 1, rotate: 0 },
  hover: { scale: 1.12, rotate: -14, transition: springTap },
};

const bulletRowVariants = {
  initial: { x: 0, opacity: 1 },
  inView: { x: 0, opacity: 1 },
  hover: { x: 4, transition: springTap },
};

function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const featuredRow = [
  {
    featured: true,
    title: "Facebook Ads",
    href: "/services/meta-ads",
    description:
      "Full-funnel Meta campaigns with creative testing and scaling playbooks.",
    bullets: ["Smart targeting", "High-intent clicks"],
    Icon: IconMeta,
  },
  {
    featured: false,
    title: "Google Ads",
    href: "/services/google-ads",
    image: photos.googleAds,
    description:
      "Search, Performance Max, and intent-led structures that protect margin.",
    bullets: ["Search & PMax", "Clear attribution"],
    Icon: IconGoogle,
  },
  {
    featured: false,
    title: "Amazon Ads",
    href: "/services/amazon-ads",
    image: photos.amazonAds,
    description:
      "Sponsored products and brand placements tuned for ACOS and rank.",
    bullets: ["Retail readiness", "Catalog scale"],
    Icon: IconAmazon,
  },
];

const gridRow = [
  {
    title: "Search engine optimization",
    href: "/services/organic-growth-seo",
    image: photos.seo,
    description:
      "Technical SEO, content, and authority building for sustainable organic demand.",
    bullets: ["Organic growth", "Quality traffic"],
    Icon: IconSeo,
  },
  {
    title: "Website development",
    href: "/services/website-development",
    image: photos.webDev,
    description:
      "Fast, accessible sites and landing experiences engineered for conversion.",
    bullets: ["Zero friction", "Mobile first"],
    Icon: IconCode,
  },
  {
    title: "Email marketing",
    href: "/services/retention-marketing",
    image: photos.email,
    description:
      "Lifecycle flows and campaigns that turn subscribers into repeat buyers.",
    bullets: ["Automated flows", "Repeat revenue"],
    Icon: IconMail,
  },
  {
    title: "Shopify development",
    href: "/services/shopify-development",
    image: photos.shopify,
    description:
      "Store builds, CRO, and checkout optimization on Shopify and headless stacks.",
    bullets: ["Easy checkout", "Conversion ready"],
    Icon: IconShopify,
  },
];

function IconMeta({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M20 8c-4.5 0-8 3.2-8 7.2 0 2.2 1 4.2 2.6 5.6-.4-1.2-.2-2.6.8-3.4 1-.9 2.5-.9 3.8-.2 1 .5 1.8 1.4 2.8 1.4 1 0 1.8-.9 2.8-1.4 1.3-.7 2.8-.7 3.8.2 1 .8 1.2 2.2.8 3.4 1.6-1.4 2.6-3.4 2.6-5.6C28 11.2 24.5 8 20 8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGoogle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M20 12v8h7.2c-.3 2-2.4 5.8-7.2 5.8-4.3 0-7.8-3.6-7.8-8s3.5-8 7.8-8c2.5 0 4.1 1 5 1.9l3.4-3.3C26.9 8.4 23.7 7 20 7c-6.6 0-12 5.4-12 12s5.4 12 12 12c7.7 0 12.8-5.4 12.8-13 0-.9-.1-1.5-.2-2.2H20z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconAmazon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M8 28c6 3 14 3 20 0M12 22c2-5 8-8 14-6M14 32h12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSeo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect
        x="8"
        y="10"
        width="24"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M12 26h6M12 22h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26 14l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect
        x="8"
        y="8"
        width="24"
        height="24"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M14 16l-3 4 3 4M22 24l3-4-3-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect
        x="8"
        y="12"
        width="24"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8 14l12 9 12-9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShopify({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M12 14l2 18h6l1-6h4l1 6h6l2-18H12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceCard({
  title,
  description,
  bullets,
  Icon,
  featured,
  delay,
  image,
  href,
}: {
  title: string;
  description: string;
  bullets: string[];
  Icon: ComponentType<{ className?: string }>;
  featured?: boolean;
  delay: number;
  image?: string;
  href: string;
}) {
  const v = serviceCardVariants(Boolean(featured), delay);

  return (
    <Link href={href} className="block h-full focus-visible:outline-none">
    <motion.article
      variants={v}
      initial="initial"
      whileInView="inView"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      whileTap={{ scale: 0.985, transition: springTap }}
      className={[
        "group/card card-3d relative flex h-full cursor-default flex-col rounded-2xl p-6 sm:p-7",
        featured
          ? "overflow-hidden border border-white/15 bg-slate-900 text-white shadow-xl shadow-slate-900/25 hover:border-violet-400/40 hover:shadow-violet-900/35"
          : [
              "border border-slate-200/90 bg-white shadow-sm ring-1 ring-transparent",
              "transition-[border-color,background-color,box-shadow] duration-300 ease-out",
              "hover:border-violet-400/80 hover:bg-violet-50/95 hover:shadow-xl hover:shadow-violet-500/18 hover:ring-violet-500/25",
            ].join(" "),
      ].join(" ")}
      style={
        featured
          ? { boxShadow: "0 20px 50px -15px rgba(15, 23, 42, 0.45)" }
          : { boxShadow: "0 4px 22px -8px rgba(15, 23, 42, 0.09)" }
      }
    >
      {featured && (
        <>
          {/* <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-slate-900/95 to-violet-950/90"
            aria-hidden
            variants={{
              initial: { opacity: 1 },
              inView: { opacity: 1 },
              hover: {
                opacity: 0.82,
                transition: { duration: 0.35, ease: sectionEase },
              },
            }}
          /> */}
          <motion.div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
            variants={{
              initial: { opacity: 1 },
              inView: { opacity: 1 },
              hover: {
                opacity: 0.9,
                transition: { duration: 0.35, ease: sectionEase },
              },
            }}
          >
            {/* Background Image */}
            <Image
              src={photos.metaAds}
              alt="Meta ads marketing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-slate-950/15"
              aria-hidden
            />

          </motion.div>
         
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
            aria-hidden
          />
        </>
      )}
      {/* Top Image for non-featured cards */}
      {image && (
        <div className="relative -m-6 mb-5 h-44 overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <motion.div
            className="inline-flex rounded-xl p-1"
            variants={iconVariants(Boolean(featured))}
          >
            <Icon
              className={`h-9 w-9 shrink-0 transition-colors duration-300 ${featured ? "text-violet-200 group-hover/card:text-white" : "text-[#0a192f] group-hover/card:text-violet-700"}`}
            />
          </motion.div>
          <motion.span
            className={[
              "flex h-9 w-9 items-center justify-center rounded-full border transition-[border-color,background-color,color,box-shadow] duration-300",
              featured
                ? "border-white/30 bg-white/10 text-white group-hover/card:border-violet-300/50 group-hover/card:bg-violet-500/45 group-hover/card:text-white"
                : "border-slate-200 bg-slate-50 text-slate-600 group-hover/card:border-violet-600 group-hover/card:bg-violet-600 group-hover/card:text-white group-hover/card:shadow-md group-hover/card:shadow-violet-600/30",
            ].join(" ")}
            aria-hidden
            variants={arrowVariants}
          >
            <ExternalLinkIcon className="transition-transform duration-300 group-hover/card:-translate-y-px group-hover/card:translate-x-px" />
          </motion.span>
        </div>
        <h3
          className={`mt-5 text-lg font-bold leading-snug transition-colors duration-300 sm:text-xl ${featured ? "text-white group-hover/card:text-violet-50" : "text-[#0a192f] group-hover/card:text-violet-700"}`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 flex-1 text-sm leading-relaxed transition-colors duration-300 ${featured ? "text-white/80 group-hover/card:text-white" : "text-slate-600 group-hover/card:text-slate-700"}`}
        >
          {description}
        </p>
        <div
          className={`mt-5 border-t pt-4 transition-colors duration-300 ${featured ? "border-white/15 group-hover/card:border-violet-300/35" : "border-slate-100 group-hover/card:border-violet-200"}`}
        >
          <ul className="space-y-2 text-sm">
            {bullets.map((b) => (
              <motion.li
                key={b}
                className="flex items-center gap-2"
                variants={bulletRowVariants}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${featured ? "bg-violet-300 group-hover/card:scale-125 group-hover/card:bg-fuchsia-300 group-hover/card:shadow-[0_0_10px_rgba(216,180,254,0.75)]" : "bg-violet-500 group-hover/card:scale-125 group-hover/card:bg-violet-600 group-hover/card:shadow-sm group-hover/card:shadow-violet-400/55"}`}
                  aria-hidden
                />
                <span
                  className={`transition-colors duration-300 ${featured ? "text-white/90 group-hover/card:text-white" : "text-slate-600 group-hover/card:text-slate-800"}`}
                >
                  {b}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-[var(--site-header-height)] home-section"
      aria-labelledby="services-heading"
    >
      <div className="home-section-inner">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: sectionEase }}
          className="text-center"
        >
          <span className="section-kicker">
            <span className="section-kicker-dot" aria-hidden />
            Our services
          </span>
          <h2
            id="services-heading"
            className="section-title mx-auto mt-5 max-w-3xl text-3xl sm:text-4xl"
          >
            Our 360° Digital Marketing &amp; Development Services
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ServiceCard {...featuredRow[0]} delay={0} />
          </div>
          <div className="lg:col-span-4">
            <ServiceCard {...featuredRow[1]} delay={0.08} />
          </div>
          <div className="lg:col-span-3">
            <ServiceCard {...featuredRow[2]} delay={0.16} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {gridRow.map((item, i) => (
            <ServiceCard
              key={item.title}
              {...item}
              image={item.image}
              delay={0.12 + i * 0.06}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: sectionEase }}
          className="mt-14 flex flex-col items-center gap-5 lg:mt-16"
        >
          <Link href="/#services" className="home-cta">
            View all services
            <span aria-hidden>→</span>
          </Link>
          <p className="max-w-xl text-center text-sm text-slate-600 sm:text-base">
            <span className="mr-2 inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
              Free
            </span>
            From setup to scaling -{" "}
            <Link
              href="/contact"
              className="font-semibold text-violet-700 underline-offset-4 transition-colors duration-300 hover:text-fuchsia-600 hover:underline"
            >
              book free consultation now.
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
