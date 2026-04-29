"use client";

import BlogCard from "./BlogCard";
import { blogPosts } from "../data/blogData";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function BlogSection() {
  const router = useRouter();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Latest Insights and Blogs
        </h2>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 6).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* 🔥 BUTTON (AFTER CARDS - CENTERED) */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/services/blogs")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition flex items-center gap-2"
          >
            Load More Articles ↓
          </motion.button>
        </div>
      </div>
    </section>
  );
}
