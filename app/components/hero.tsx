"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import ConsultationModal from "@/app/components/ConsultationModel";
/**
 * Hero cycles these full-screen clips in order (no loop per clip — next plays when one ends).
 * Swap URLs for your own MP4s in /public or direct links.
 */
const HERO_VIDEOS = [
  {
    src: "/videos/meta-ads.mp4",
    label: "Meta Ads",
    hint: "Facebook & Instagram performance",
  },
  {
    src: "/videos/seo-search.mp4",
    label: "SEO & search",
    hint: "Visibility that compounds",
  },
  {
    src: "/videos/business-growth.mp4",
    label: "Business growth",
    hint: "Scale revenue faster",
  },
] as const;

/**
 * Optional: set NEXT_PUBLIC_HERO_YOUTUBE_ID in .env.local to use a YouTube (Google) background instead of MP4.
 * Example: NEXT_PUBLIC_HERO_YOUTUBE_ID=LXb3EKWsInQ
 */
const youtubeBackgroundId = process.env.NEXT_PUBLIC_HERO_YOUTUBE_ID?.trim();

const springTap = { type: "spring" as const, stiffness: 520, damping: 34 };
const springStack = {
  type: "spring" as const,
  stiffness: 380,
  damping: 26,
  mass: 0.9,
};

const ctaStackRest = { scale: 1, y: 0 };
const ctaStackHover = {
  scale: 1.02,
  y: -2,
  transition: springStack,
};

const ctaBtnRest = { y: 0, scale: 1 };
const ctaBtnHover = {
  y: -5,
  scale: 1.04,
  boxShadow: "0 28px 56px -12px rgba(124, 58, 237, 0.5)",
  transition: springStack,
};

function ArrowIcon({
  className = "ml-2 inline-block h-4 w-4 shrink-0",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const youtubeEmbedSrc = youtubeBackgroundId
    ? `https://www.youtube-nocookie.com/embed/${youtubeBackgroundId}?autoplay=1&mute=1&loop=1&playlist=${youtubeBackgroundId}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`
    : null;

  const useYoutubeBg = Boolean(youtubeEmbedSrc && !reduceMotion);
  const useMp4Bg = !youtubeBackgroundId && !reduceMotion;

  const advanceVideo = useCallback(() => {
    setActiveVideoIndex((i) => (i + 1) % HERO_VIDEOS.length);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !useMp4Bg) return;
    el.play().catch(() => {
      /* autoplay may be blocked; overlay still shows */
    });
  }, [useMp4Bg, activeVideoIndex]);

  return (
    <section className="relative w-full min-h-[min(86vh,780px)] overflow-hidden border border-t-0 border-white/10 bg-[#2563eb] text-white shadow-[0_25px_80px_-20px_rgba(15,23,42,0.65)]">
      {/* Background: YouTube (Google) or MP4 */}
      <div className="absolute inset-0">
        {useYoutubeBg ? (
          <iframe
            title="Hero background video"
            src={youtubeEmbedSrc!}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.15] border-0 object-cover"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        ) : useMp4Bg ? (
          <AnimatePresence>
            <motion.div
              key={activeVideoIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover"
                autoPlay
                muted
                playsInline
                preload="auto"
                aria-hidden
                onEnded={advanceVideo}
              >
                <source
                  src={HERO_VIDEOS[activeVideoIndex].src}
                  type="video/mp4"
                />
              </video>
            </motion.div>
          </AnimatePresence>
        ) : null}

        {/* Readability: gradient + vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/72 via-slate-950/80 to-black/65"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(15,23,42,0.24),transparent_58%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 ring-1 ring-inset ring-white/[0.06]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-[min(86vh,780px)] flex-col justify-center px-6 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-sm"
          >
            Facebook Ads · Google Ads · Branding · Social · SEO
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur-md"
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-bold shadow-inner"
              aria-hidden
            >
              360
            </span>
            Digital Marketing Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Your Revenue,{" "}
            <span className="bg-gradient-to-r from-white via-violet-100 to-violet-200 bg-clip-text text-transparent">
              Our Expertise
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Propel your vision with data-driven marketing. Our team turns clicks
            into sales—we deliver campaigns, growth, and profit. Let&apos;s make
            your brand unforgettable on the global stage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap items-center gap-4 pb-2"
          >
            <motion.div
              className="relative flex w-full max-w-md flex-col items-stretch sm:w-auto sm:max-w-none"
              initial="rest"
              whileHover={reduceMotion ? undefined : "hover"}
              animate="rest"
              variants={{
                rest: ctaStackRest,
                hover: reduceMotion ? ctaStackRest : ctaStackHover,
              }}
            >
             

              <motion.button
                onClick={() => setOpenModal(true)}
                variants={{
                  rest: ctaBtnRest,
                  hover: reduceMotion ? ctaBtnRest : ctaBtnHover,
                }}
                whileTap={{ scale: 0.97, transition: springTap }}
                className="group/cta order-1 relative z-[2] inline-flex w-full items-center justify-center self-center overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-fuchsia-600 px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_18px_40px_-12px_rgba(109,40,217,0.65)] ring-2 ring-white/25 sm:w-auto sm:px-9 sm:text-[15px]"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-600 opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100"
                  aria-hidden
                />
                <span
                  className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/cta:translate-x-[100%]"
                  aria-hidden
                />
                <span
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-400/0 via-white/15 to-fuchsia-400/0 opacity-0 blur-md transition-opacity duration-500 group-hover/cta:opacity-100"
                  aria-hidden
                />
                <span className="relative z-10 flex items-center">
                  Get Free Consultation
                  <ArrowIcon className="ml-2 inline-block h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover/cta:translate-x-1.5 sm:h-[1.05rem] sm:w-[1.05rem]" />
                </span>
              </motion.button>
            </motion.div>
            <motion.a
              href="/services/lead-generation"
              whileTap={{ scale: 0.97, transition: springTap }}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 sm:text-[15px]"
            >
              Open Lead Generation Page
            </motion.a>
          </motion.div>
        </div>
      </div>
      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
}
