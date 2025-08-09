'use client';

import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
  {
    id: 1,
    slug: "1688-jana-post",
    title: "1688 | Jana post",
    date: "24.02.2025",
    timeAgo: "5 months ago",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    slug: "agriculture-expo", // ✅ қосу керек
    title: "Agriculture Expo",
    date: "12.01.2025",
    timeAgo: "6 months ago",
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    slug: "modern-office", // ✅ қосу керек
    title: "Modern Office Interior",
    date: "05.12.2024",
    timeAgo: "8 months ago",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    slug: "city-lights", // ✅ қосу керек
    title: "City Lights Photography",
    date: "20.11.2024",
    timeAgo: "9 months ago",
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=800&q=80",
  },
];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-light mb-8">Моушен Дизайн</h1>

      <div className="grid gap-10">
        {posts.map((post) => (
          <div key={post.id} className="md:flex md:items-center gap-6 group">
            {/* Сурет */}
            <div className="relative w-full md:w-1/2 h-64 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
            </div>

            {/* Мәтін */}
            <div className="md:w-1/2 mt-4 md:mt-0">
              <h2 className="text-xl font-medium mb-3">{post.title}</h2>
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                <span>📅 {post.date}</span>
                <span>⏱ {post.timeAgo}</span>
              </div>
              <Link
                href={`/projects/${post.slug}`}
                className="inline-block bg-black text-white px-5 py-2 text-sm rounded hover:bg-gray-800 transition"
              >
                Перейти к проекту
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
