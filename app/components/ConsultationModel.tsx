"use client";

import { motion } from "framer-motion";

export default function ConsultationModal({ isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative w-full max-w-md rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl p-6"
      >

        {/* Glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fuchsia-200 rounded-full blur-3xl opacity-30"></div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-700"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900">
          Get Consultation For Free
        </h2>
        <p className="text-gray-500 mt-1 mb-5 text-sm">
          Tell us about your business — we’ll get back quickly.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your number"
              className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Business Details
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your business..."
              className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition resize-none"
            />
          </div>

          {/* Button */}
          <button className="mt-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition">
            Submit Request
          </button>
        </form>
      </motion.div>
    </div>
  );
}