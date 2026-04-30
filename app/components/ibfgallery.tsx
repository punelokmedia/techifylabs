"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// Using Unsplash photos relevant to healthcare / hospital
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=70",
    caption: "State-of-the-Art Operation Theatres",
    category: "Facilities",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=70",
    caption: "Advanced Diagnostic Imaging Centre",
    category: "Diagnostics",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=70",
    caption: "Patient-Centred Ward Design",
    category: "Wards",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=70",
    caption: "Expert Cardiology Team",
    category: "Team",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&q=70",
    caption: "Paediatric Care Unit",
    category: "Specialities",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=70",
    caption: "NABL-Accredited Pathology Lab",
    category: "Diagnostics",
  },
];

export default function IBFGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <section id="gallery" className="py-28 bg-[#030d1a] relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-5"
          >
            <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">
              Our Facilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            A Look Inside{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00b496, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IBF Healthcare
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Modern infrastructure built to heal — from quiet private wards to high-tech
            operation theatres.
          </motion.p>
        </div>

        {/* Masonry-style gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setLightbox(item)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                i === 0 || i === 5 ? "md:col-span-1 row-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.thumb}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs text-emerald-400 font-medium mb-1">{item.category}</span>
                <p className="text-white text-sm font-semibold leading-tight">{item.caption}</p>
              </div>

              {/* Expand icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M8.5 2H12v3.5M5.5 12H2V8.5M12 2L8 6M2 12l4-4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightbox.src} alt={lightbox.caption} className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80">
              <span className="text-xs text-emerald-400 font-medium">{lightbox.category}</span>
              <p className="text-white font-semibold mt-1">{lightbox.caption}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-9 h-9 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}