"use client";

import { motion } from "framer-motion";
import { createPortal } from "react-dom";

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
      onClick={onClose}
    >
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl"
      >

        {/* Glow */}
        <div className="pointer-events-none absolute -left-10 -top-10 z-0 h-40 w-40 rounded-full bg-violet-200 opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 z-0 h-40 w-40 rounded-full bg-fuchsia-200 opacity-30 blur-3xl" />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close consultation form"
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 id="consultation-title" className="relative z-10 text-2xl font-semibold text-gray-900">
          Get Consultation For Free
        </h2>
        <p className="relative z-10 mb-5 mt-1 text-sm text-gray-500">
          Tell us about your business - we’ll get back quickly.
        </p>

        {/* Form */}
        <form className="relative z-10 flex flex-col gap-4">

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
    </div>,
    document.body,
  );
}
