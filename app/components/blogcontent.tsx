"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const tags = [
  { name: "Meta Ads", color: "bg-blue-100 text-blue-600" },
  { name: "Performance", color: "bg-purple-100 text-purple-600" },
  { name: "Scaling", color: "bg-green-100 text-green-600" },
  { name: "ROAS", color: "bg-orange-100 text-orange-600" },
  { name: "Creative", color: "bg-pink-100 text-pink-600" },
];

export default function BlogContentLayout() {
  const [, setMobileOpen] = useState(false);
  //   function setMobileOpen(arg0: boolean): void {
  //     throw new Error("Function not implemented.");
  //   }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_320px] gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* TITLE */}
          <h1 className="text-3xl font-semibold leading-tight mb-4">
            Why most brands plateau between ₹1,000–₹5,000/day
          </h1>

          {/* INTRO */}
          <p className="text-gray-600 mb-4 leading-relaxed">
            Scaling Meta ads isn&apos;t just about increasing budget. Most brands hit
            a ceiling not because of budget constraints - but because their
            creative, audience segmentation, and campaign structure aren’t built
            for scale.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            When you increase budget without addressing these, your cost per
            result climbs, your ROAS tanks, and you panic-pause campaigns.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            The good news: it&apos;s a solvable problem. Here&apos;s the exact framework
            we use.
          </p>

          {/* PHASE 1 */}
          <h2 className="text-xl font-semibold mb-3">
            Phase 1: The ₹500–₹5,000/day foundation
          </h2>

          <p className="text-gray-600 mb-4">
            At this stage, your job is to find what works - not scale
            prematurely.
          </p>

          <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
            <li>TOF: Broad targeting + creative testing</li>
            <li>MOF: Retargeting website visitors</li>
            <li>BOF: Cart abandoners & warm audiences</li>
          </ul>

          <div className="bg-white border rounded-lg p-4 mb-8 shadow-sm">
            💡 Pro Tip: Give each ad set 3–5 days before making decisions.
          </div>

          {/* PHASE 2 */}
          <h2 className="text-xl font-semibold mb-3">
            Phase 2: Scaling to ₹5,000–₹20,000/day
          </h2>

          <p className="text-gray-600 mb-4">
            Once you find winners, scale carefully instead of aggressively.
          </p>

          <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
            <li>Duplicate winning ads into new audiences</li>
            <li>Increase budget slowly (20% rule)</li>
            <li>Use CBO campaigns</li>
          </ul>

          {/* PHASE 3 */}
          <h2 className="text-xl font-semibold mb-3">
            Phase 3: ₹20,000–₹50,000/day - creative engine
          </h2>

          <p className="text-gray-600 mb-4">
            At scale, creatives become your biggest growth lever.
          </p>

          <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-10">
            <li>Launch 5–10 creatives weekly</li>
            <li>Refresh ads frequently</li>
            <li>Focus on UGC & storytelling</li>
          </ul>
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 sticky top-24 h-fit"
        >
          {/* TOC */}
          <div className="bg-gray-100/70 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 mb-4 uppercase">
              In This Article
            </h3>

            <ul className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
              <li className="hover:text-black cursor-pointer transition">
                Why most brands plateau between ₹1,000–₹5,000/day
              </li>

              <li className="hover:text-black cursor-pointer transition">
                Phase 1: The ₹500–₹5,000/day foundation
              </li>

              <li className="hover:text-black cursor-pointer transition">
                Phase 2: Scaling to ₹5,000–₹20,000/day
              </li>

              <li className="hover:text-black cursor-pointer transition">
                Phase 3: ₹20,000–₹50,000/day - the creative factory mindset
              </li>

              <li className="hover:text-black cursor-pointer transition">
                The metric hierarchy that actually matters
              </li>

              <li className="hover:text-black cursor-pointer transition">
                Final thoughts
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-indigo-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-sm font-semibold mb-2">FREE CONSULTATION</h3>

            <p className="text-sm mb-4">
              Get a custom marketing audit for your brand.
            </p>
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-indigo-600 py-2 rounded-lg font-medium hover:bg-gray-100"
              onClick={() => setMobileOpen(true)}
            >
              Book Free Call →
            </motion.button>
            {/* <button className="w-full bg-white text-indigo-600 py-2 rounded-lg font-medium hover:bg-gray-100">
              Book Free Call →
            </button> */}
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}
