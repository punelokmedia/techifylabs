"use client";

import BlogCard from "./BlogCard";
import { blogPosts } from "../data/blogData";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function BlogSection() {
  const router = useRouter();

  return (
    <section id="insights" className="home-section">
      <div className="home-section-inner">
        <div className="mb-10 text-center">
          <span className="section-kicker">
            <span className="section-kicker-dot" aria-hidden />
            Insights
          </span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl">
            Our Latest Insights and Blogs
          </h2>
        </div>

        <div className="blog-grid">
          {blogPosts.slice(0, 6).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/services/blogs")}
            className="home-cta"
          >
            Load More Articles
            <span aria-hidden>↓</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
