"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface BlogPost {
  id: number;
  category: string;
  accentColor: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  fullContent: string;
  author: string;
  authorRole: string;
  emoji: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "SEO Strategy",
    accentColor: "#6c63ff",
    date: "Apr 20, 2025",
    readTime: "6 min read",
    title: "How to Rank #1 on Google in 2025",
    excerpt: "Modern SEO strategies that actually work.",
    fullContent: "Full blog content...",
    author: "Priya Sharma",
    authorRole: "SEO Strategist",
    emoji: "🔍",
  },
  {
    id: 2,
    category: "Social Media",
    accentColor: "#f43f5e",
    date: "Apr 17, 2025",
    readTime: "5 min read",
    title: "Instagram Algorithm Decoded",
    excerpt: "What’s boosting reach in 2025.",
    fullContent: "Full blog content...",
    author: "Anya Mehta",
    authorRole: "Social Media Lead",
    emoji: "📱",
  },
];

// 🔥 Blog Card
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3 },
      }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/80 cursor-pointer"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.07)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push(`/blogs/${post.id}`)}
    >
      {/* Accent */}
      <motion.div
        className="h-1 w-full"
        animate={{ scaleX: hovered ? 1 : 0.3, originX: 0 }}
        transition={{ duration: 0.4 }}
        style={{ background: post.accentColor }}
      />

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <div className="flex justify-between items-center text-xs">
          <span style={{ color: post.accentColor }}>{post.category}</span>
          <span className="text-gray-400">{post.readTime}</span>
        </div>

        <h3 className="font-bold text-gray-900">{post.title}</h3>

        <p className="text-sm text-gray-500">{post.excerpt}</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/blogs/${post.id}`);
          }}
          className="mt-2 text-sm font-semibold"
          style={{ color: post.accentColor }}
        >
          Read More →
        </button>
      </div>
    </motion.article>
  );
}

// 🔥 Main Section
export default function TechifyBlog() {
  return (
    <section className="bg-[#f7f8fc] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Marketing Insights</h2>
          <p className="text-gray-500 mt-2">Strategies that actually work.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => (window.location.href = "/blogs")}
            className="px-6 py-3 bg-black text-white rounded-xl"
          >
            View All Articles →
          </button>
        </div>
      </div>
    </section>
  );
}
