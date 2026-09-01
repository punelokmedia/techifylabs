"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import ConsultationModal from "@/app/components/ConsultationModel";

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

const youtubeBackgroundId = process.env.NEXT_PUBLIC_HERO_YOUTUBE_ID?.trim();

const springTap = { type: "spring" as const, stiffness: 520, damping: 34 };

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { value: "3.5x", label: "Avg. ROAS" },
  { value: "47+", label: "Active clients" },
  { value: "10%", label: "Advantage+ CVR" },
];

const services = [
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Web",
  "Shopify",
  "Branding",
];

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
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
  const activeClip = HERO_VIDEOS[activeVideoIndex];

  const advanceVideo = useCallback(() => {
    setActiveVideoIndex((i) => (i + 1) % HERO_VIDEOS.length);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !useMp4Bg) return;
    el.play().catch(() => {
      /* autoplay may be blocked */
    });
  }, [useMp4Bg, activeVideoIndex]);

  return (
    <section id="hero" className="hero-shell relative w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        {useYoutubeBg ? (
          <iframe
            title="Hero background video"
            src={youtubeEmbedSrc!}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.12] border-0"
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
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full scale-[1.04] object-cover"
                autoPlay
                muted
                playsInline
                preload="metadata"
                aria-hidden
                onEnded={advanceVideo}
              >
                <source src={activeClip.src} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="hero-fallback absolute inset-0" aria-hidden />
        )}
        <div className="hero-scrim" aria-hidden />
        <div className="hero-mesh" aria-hidden />
        <span className="hero-orb hero-orb-a" aria-hidden />
        <span className="hero-orb hero-orb-b" aria-hidden />
        <div className="hero-grain" aria-hidden />
      </div>

      <div className="hero-inner relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-6 px-5 py-8 sm:gap-8 sm:px-8 sm:py-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.82fr)] lg:gap-10 lg:px-10 lg:py-10 [perspective:1400px]">
        <div className="min-w-0">
          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:text-xs"
          >
            Meta · Google · Amazon · SEO · Web
          </motion.p>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0.06}
            className="mt-2.5 max-w-[18ch] text-[1.85rem] font-bold leading-[1.12] tracking-tight sm:mt-3 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
          >
            Your Revenue,{" "}
            <span className="hero-title-accent">Our Expertise</span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0.12}
            className="mt-3 max-w-lg text-[13.5px] leading-relaxed text-white/78 sm:mt-3.5 sm:text-[15px]"
          >
            Data-driven campaigns that turn clicks into sales. We plan, launch,
            and scale ads, SEO, and web so your brand grows with profit - not
            just traffic.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0.18}
            className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6"
          >
            <motion.button
              type="button"
              onClick={() => setOpenModal(true)}
              whileTap={{ scale: 0.97, transition: springTap }}
              className="hero-cta group inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-semibold text-white sm:px-6 sm:py-2.5 sm:text-sm"
            >
              Get Free Consultation
              <ArrowIcon className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </motion.button>
            <a
              href="#services"
              className="hero-cta-ghost inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-semibold sm:px-6 sm:text-sm"
            >
              View services
            </a>
          </motion.div>

          <motion.dl
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0.24}
            className="mt-6 grid max-w-lg grid-cols-3 gap-2 sm:mt-7 sm:gap-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-[1.05rem] font-bold tracking-tight sm:text-xl">
                  {stat.value}
                </dd>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-white/55 sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.aside
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.16}
          className="hero-panel hidden w-full max-w-md justify-self-end lg:flex lg:flex-col"
          aria-label="Campaign snapshot"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="hero-live-dot" aria-hidden />
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                Live now
              </p>
            </div>
            <p className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white/80">
              360 agency
            </p>
          </div>

          <h2 className="mt-3 text-lg font-bold leading-snug tracking-tight">
            {activeClip.label}
          </h2>
          <p className="mt-1 text-sm text-white/65">{activeClip.hint}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Core services">
            {services.map((item) => (
              <li key={item} className="hero-chip">
                {item}
              </li>
            ))}
          </ul>

          <div
            className="mt-4 grid gap-1.5"
            role="tablist"
            aria-label="Hero films"
          >
            {HERO_VIDEOS.map((clip, i) => {
              const current = i === activeVideoIndex;
              return (
                <button
                  key={clip.src}
                  type="button"
                  role="tab"
                  aria-selected={current}
                  className={`hero-video-tab ${current ? "is-active" : ""}`}
                  onClick={() => setActiveVideoIndex(i)}
                >
                  <span className="hero-video-tab-index">{i + 1}</span>
                  <span className="min-w-0">
                    <span className="block truncate text-[13px] font-semibold">
                      {clip.label}
                    </span>
                    <span className="block truncate text-[11px] text-white/55">
                      {clip.hint}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.aside>

        <div
          className="flex gap-1.5 lg:hidden"
          role="tablist"
          aria-label="Hero films"
        >
          {HERO_VIDEOS.map((clip, i) => (
            <button
              key={clip.src}
              type="button"
              role="tab"
              aria-selected={i === activeVideoIndex}
              aria-label={clip.label}
              className={`hero-dot ${i === activeVideoIndex ? "is-active" : ""}`}
              onClick={() => setActiveVideoIndex(i)}
            />
          ))}
        </div>
      </div>

      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
}
