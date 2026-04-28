"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Blog } from "../data/blogData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import router from "next/router";
export default function BlogCard({ post }: { post: Blog }) {
  const postHref = `/services/blogs/${post.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <Link href={postHref} className="relative block h-40 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-contain group-hover:scale-105 transition duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </Link>

      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <span>{post.date}</span>
          <span>-</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
          <Link href={postHref} className="hover:text-orange-500 transition">
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-500 mt-3 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="border-t border-gray-100 mt-5 pt-5 flex items-center justify-between">
          <Link
            href={postHref}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-2 rounded-lg font-medium transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
