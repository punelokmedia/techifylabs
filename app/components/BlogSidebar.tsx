"use client";

import { useRouter } from "next/navigation";

const categories = [
  {
    name: "All",
    value: "all",
    desc: "Explore all marketing insights",
  },
  {
    name: "SEO",
    value: "seo",
    desc: "Search engine optimization strategies",
  },
  {
    name: "Advertising",
    value: "ads",
    desc: "Paid ads & campaign optimization",
  },
  {
    name: "Content",
    value: "content",
    desc: "Content marketing strategies",
  },
  {
    name: "Social Media",
    value: "social",
    desc: "Growth & engagement tactics",
  },
  {
    name: "Email",
    value: "email",
    desc: "Funnels, retention, and lifecycle growth",
  },
  {
    name: "CRO",
    value: "cro",
    desc: "Turn more visitors into customers",
  },
  {
    name: "Trends",
    value: "trends",
    desc: "New moves in digital marketing",
  },
];

export default function BlogSidebar({
  activeCategory = "all",
}: {
  activeCategory?: string;
}) {
  const router = useRouter();

  const handleClick = (value: string) => {
    router.push(`/services/blogs?category=${value}`);
  };

  return (
    <aside className="w-full lg:w-80 bg-white rounded-2xl p-6 shadow-lg">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-6">Browse Topics</h3>

      <div className="flex flex-col gap-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;

          return (
            <button
              key={cat.value}
              onClick={() => handleClick(cat.value)}
              className={`w-full rounded-xl p-4 text-left transition ${
                isActive
                  ? "bg-orange-500 text-white shadow-md"
                  : "hover:bg-gray-200"
              }`}
            >
              <h4 className="font-semibold">{cat.name}</h4>
              <p
                className={`text-sm mt-1 ${isActive ? "text-white/90" : "text-gray-500"}`}
              >
                {cat.desc}
              </p>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
