"use client";

import { motion } from "framer-motion";

export default function ConsultationModal({ isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white text-black rounded-2xl w-full max-w-md p-6 relative shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg font-bold text-black"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2">
          Get Free Consultation 🚀
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-5 text-sm">
          Fill this form and we’ll contact you shortly.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg bg-white text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border rounded-lg bg-white text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 border rounded-lg bg-white text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows={3}
            placeholder="Tell us about your business..."
            className="p-3 border rounded-lg bg-white text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}