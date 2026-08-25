"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BlogHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#050816] text-white rounded-b-[1.75rem]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgba(99,102,241,0.45),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_60%,rgba(168,85,247,0.18),transparent_45%)]" />

      {/* Noise */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E')]"/>

      {/* Bottom line */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative w-full px-6 py-20 lg:px-16">

        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-white/50">
          <Link href="/">Home</Link>
          <span>/</span>
          <span className="text-white">Blogs</span>
        </nav>

        {/* Content */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-violet-200">
            <span className="h-2 w-2 bg-violet-400 rounded-full animate-ping"></span>
            Techify Insights
          </div>

          <h1 className="mt-6 text-4xl lg:text-6xl font-semibold">
            Learn & grow with{" "}
            <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              marketing strategies
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            SEO, Ads, Social Media - practical tips that actually work.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="#blogs" className="px-6 py-3 bg-white text-black rounded-full">
              Explore Blogs
            </Link>

            <Link href="/contact" className="px-6 py-3 border border-white/20 rounded-full">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}