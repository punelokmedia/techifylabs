import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../data/blogData";

type BlogDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPosts.find((blogPost) => blogPost.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#f4f6f9]">
      <div className="relative min-h-[60vh]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex min-h-[60vh] items-end px-6 pb-12 lg:px-10">
          <div className="max-w-3xl text-white">
            <Link
              href="/services/blogs"
              className="inline-flex text-sm font-medium text-white/85 hover:text-white transition"
            >
              Back to blogs
            </Link>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-orange-200">
              {post.category}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-white/85">
              {post.date} - {post.readTime}
            </p>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xl leading-8 text-gray-700">{post.excerpt}</p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-gray-700">
          {post.content.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
