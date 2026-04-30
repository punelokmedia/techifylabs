"use client";

import IBFServices from "../../components/ibfservices";
import IBFAbout from "../../components/ibfabout";
import IBFLeadForm from "../../components/ibfleadform";
import IBFGallery from "../../components/ibfgallery";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main>
      {/* ✅ HERO SECTION */}
      {/* (your provided hero, cleaned and ready) */}
      <section className="relative overflow-hidden bg-[#050816] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_25%_-20%,rgba(139,92,246,0.28),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(236,72,153,0.12),transparent_50%)]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full">
              IBF Healthcare
            </div>

            <h1 className="mt-6 text-4xl lg:text-6xl font-bold leading-tight">
              Your Health,{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>

            <p className="mt-6 text-white/70 max-w-xl">
              Advanced multi-speciality hospital offering world-class treatment,
              expert doctors, and compassionate care for every patient.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold"
              >
                Book Appointment
              </Link>

              <Link
                href="#services"
                className="px-6 py-3 rounded-full border border-white/20"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src="/images/tree.png"
                alt="hospital"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ SERVICES */}
      <IBFServices />

      {/* ✅ ABOUT */}
      <IBFAbout />

      {/* ✅ GALLERY */}
      <IBFGallery />

      {/* ✅ LEAD FORM */}
      <IBFLeadForm />
    </main>
  );
}
