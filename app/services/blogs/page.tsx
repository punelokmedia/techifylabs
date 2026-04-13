"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Simulates a single blog post page — in production this would use dynamic [slug] routing
// and fetch data server-side. This file shows the full layout/component pattern.

const post = {
  title: "The Complete 2025 Guide to Meta Ads Scaling: From ₹500/day to ₹50,000/day",
  category: "Performance Marketing",
  author: "Rahul Mehta",
  authorRole: "Sr. Creative Strategist & Client Partner",
  authorBio:
    "Rahul leads creative strategy and client growth at TechEasify. He has managed ₹10Cr+ in Meta & Google ad spend across e-commerce, real estate, and SaaS verticals.",
  date: "March 28, 2025",
  readTime: "12 min read",
  coverImage: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80",
  tags: ["Meta Ads", "Performance Marketing", "Scaling", "ROAS", "Creative Strategy"],
  sections: [
    {
      heading: "Why most brands plateau between ₹1,000–₹5,000/day",
      body: `Scaling Meta ads isn't just about increasing budget. Most brands hit an invisible ceiling not because of budget constraints — but because their creative, audience segmentation, and campaign structure aren't built for scale.\n\nWhen you increase budget without addressing these, your cost per result climbs, your ROAS tanks, and you panic-pause campaigns. We see this pattern repeatedly with new clients.\n\nThe good news: it's a solvable problem. Here's the exact framework we use.`,
    },
    {
      heading: "Phase 1: The ₹500–₹5,000/day foundation",
      body: `At this stage, your job is to find what works — not scale what you think works.\n\nStart with a simple 3-campaign structure:\n• TOF (Top of Funnel): Broad audience, creative testing\n• MOF (Middle of Funnel): Retargeting website visitors, video viewers (50%+)\n• BOF (Bottom of Funnel): Cart abandoners, past purchasers for LTV\n\nRun at least 5 creative variants per ad set. Test video vs static, UGC vs polished brand content, testimonial vs product-focused. The algorithm rewards creative diversity.\n\nAt this stage, don't touch campaign budgets daily. Give each ad set 3–5 days of data (minimum 50 events) before drawing conclusions.`,
    },
    {
      heading: "Phase 2: Scaling to ₹5,000–₹20,000/day",
      body: `Once you have 2–3 proven creative formats and 1–2 audiences consistently hitting your target CPA, it's time to scale — carefully.\n\nHorizontal scaling first: duplicate winning ad sets into new audiences (1% LAL, 2–5% LAL, interest stacks). Don't increase budget on a single ad set by more than 20% every 72 hours — the algorithm needs time to re-optimize.\n\nCampaign Budget Optimization (CBO) at this stage: launch a fresh CBO campaign with your 3 best creatives and your 3 best audiences. Let Meta distribute budget algorithmically. This often outperforms ABO at scale.\n\nWinning creative formula at this stage: hook (0–3s) + social proof + CTA. The hook is everything. A scroll-stopping first 3 seconds can double your thumb-stop rate.`,
    },
    {
      heading: "Phase 3: ₹20,000–₹50,000/day — the creative factory mindset",
      body: `At this scale, your primary constraint is creative fatigue. Even the best ad creative typically has a 2–4 week lifespan before frequency kills performance.\n\nYou need a systematic creative production pipeline:\n1. Weekly content batches (minimum 8–10 new creatives per week)\n2. Creative brief templates built on what's already working\n3. UGC creators on retainer for authentic content\n4. Motion graphics variations of your top statics\n\nBid strategy matters here: Advantage+ Shopping Campaigns (ASC) often outperform manual campaigns at scale. Test it — we've seen 30–40% ROAS improvements for e-commerce clients after switching.\n\nAlso invest in post-click experience at this point. If your landing page converts at 1.5% and you can get it to 3%, you just doubled your ROAS without touching ad spend.`,
    },
    {
      heading: "The metric hierarchy that actually matters",
      body: `Most brands obsess over ROAS but optimize for the wrong thing.\n\nHere's the hierarchy we use:\n\n1. MER (Marketing Efficiency Ratio) = Total Revenue / Total Ad Spend. This is your north star — it accounts for all channels, including the halo effect.\n\n2. nCAC (new Customer Acquisition Cost). Are you actually acquiring new customers or just re-converting existing ones?\n\n3. LTV:CAC ratio. For sustainable scaling, this should be >3:1. If it's not, you're potentially growing a leaky bucket.\n\n4. ROAS. Important but can be misleading — especially with attribution windows and cross-device journeys.\n\nOnce you're spending ₹20,000+/day, invest in a proper attribution tool (Triple Whale, Northbeam, or even a well-configured GA4). The default Meta attribution lies at scale.`,
    },
    {
      heading: "Final thoughts",
      body: `Scaling Meta ads is 40% strategy, 40% creative, and 20% technical setup. Most agencies get the technical setup right but leave money on the table with weak creative systems.\n\nIf you're stuck below ₹5,000/day or your ROAS is declining as you scale, audit your creative first. Everything else is secondary.\n\nWant us to audit your ad account and build a scaling roadmap? Book a free consultation below.`,
    },
  ],
};

const relatedPosts = [
  {
    title: "B2B Lead Generation with LinkedIn: A Step-by-Step System",
    category: "Performance Marketing",
    readTime: "11 min",
    date: "Feb 5, 2025",
  },
  {
    title: "Content Marketing Strategies That Drive Traffic & Conversions",
    category: "SEO",
    readTime: "10 min",
    date: "Feb 28, 2025",
  },
  {
    title: "Why Your Shopify Store Isn't Converting",
    category: "Web Development",
    readTime: "7 min",
    date: "March 14, 2025",
  },
];

export default function BlogPostPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Cover */}
      <section className="relative h-[50vh] min-h-[360px] bg-[#0a0a0a] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#431247] via-[#0a0a0a]/60 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-full flex flex-col justify-end max-w-4xl mx-auto px-6 pb-12"
        >
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
        </motion.div>
      </section>

      {/* Meta bar */}
      <section className="border-b border-gray-100 bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium text-gray-800">{post.author}</span>
            </div>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="text-orange-500 font-medium">{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 transition-colors px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-400"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10" />
              </svg>
              {copied ? "Copied!" : "Copy link"}
            </button>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
          {/* Main content */}
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {post.sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                    {section.heading}
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    {section.body.split("\n").map((para, j) => {
                      if (para.trim() === "") return null;
                      if (para.startsWith("•") || para.match(/^\d+\./)) {
                        return (
                          <p key={j} className="text-gray-600 leading-relaxed pl-4 text-[15px] mb-1">
                            {para}
                          </p>
                        );
                      }
                      return (
                        <p key={j} className="text-gray-600 leading-relaxed text-[15px] mb-3">
                          {para}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Author box */}
            <div className="mt-16 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-900">{post.author}</p>
                <p className="text-xs text-orange-500 mb-2">{post.authorRole}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{post.authorBio}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-20 space-y-6">
            {/* Table of contents */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                In this article
              </p>
              <ul className="space-y-2.5">
                {post.sections.map((s, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors leading-snug block"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="bg-[#0a0a0a] rounded-2xl p-5 text-center">
              <p className="text-xs text-orange-400 font-semibold uppercase tracking-widest mb-2">
                Free consultation
              </p>
              <p className="text-white font-bold mb-2 text-sm leading-snug">
                Get a custom Meta Ads audit for your brand
              </p>
              <p className="text-white/50 text-xs mb-4">
                We'll review your account and show you exactly where your budget is leaking.
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold py-2.5 rounded-full transition-colors">
                Book Free Call →
              </button>
            </div>
          </aside>
        </div>
      </article>

      {/* Related posts */}
      <section className="bg-[#f8f5f0] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More from TechEasify</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((rp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-gray-100 p-5 cursor-pointer group"
              >
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                  {rp.category}
                </span>
                <h3 className="font-bold text-gray-900 text-sm mt-2 mb-3 leading-snug group-hover:text-orange-600 transition-colors">
                  {rp.title}
                </h3>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{rp.date}</span>
                  <span>{rp.readTime} read</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
