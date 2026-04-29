import BlogContent from "../../components/blogcontent";
import BlogCard from "../../components/BlogCard";
import BlogSidebar from "../../components/BlogSidebar";
import BlogHero from "../../components/bloghero";
import { blogPosts } from "../../data/blogData";

const categoryMatches: Record<string, string[]> = {
  ads: ["paid ads", "google ads"],
  content: ["content marketing"],
  cro: ["cro"],
  email: ["email marketing"],
  seo: ["seo"],
  social: ["social media"],
  trends: ["trends"],
};

type BlogsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const category = (await searchParams)?.category || "all";
  const allowedCategories = categoryMatches[category] || [];

  const filteredBlogs =
    category === "all"
      ? blogPosts
      : blogPosts.filter((post) =>
          allowedCategories.includes(post.category.toLowerCase()),
        );

  return (
    <>
      <BlogHero />
      <BlogContent />

      <div className="w-full px-6 lg:px-10 py-16 grid lg:grid-cols-[300px_1fr] gap-10 items-start">
        <BlogSidebar activeCategory={category} />

        <section>
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                No blogs found
              </h2>
              <p className="text-gray-500 mt-3">
                Try another topic from the sidebar.
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
