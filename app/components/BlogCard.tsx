"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Blog } from "../data/blogData";
import Image from "next/image";

export default function BlogCard({ post }: { post: Blog }) {
  const postHref = `/services/blogs/${post.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="blog-card group"
    >
      <Link href={postHref} className="blog-card-media block">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-contain p-6 transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-3 text-xs text-slate-400">
          <span>{post.date}</span>
          <span aria-hidden>-</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-lg font-semibold leading-snug text-[#0c2d52] line-clamp-2">
          <Link href={postHref} className="transition hover:text-violet-700">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm text-slate-500">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
          <Link
            href={postHref}
            className="rounded-lg bg-[#2d4987] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#1d4ed8]"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
