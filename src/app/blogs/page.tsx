"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

// Top 6 Featured Blogs
const topBlogs: BlogPost[] = [
  {
    id: 1,
    title:
      "Why Pin Code Partners and Retailers Should Join LifeOnPlus – The Future of Digital Health",
    date: "",
    excerpt:
      "Healthcare is no longer just about hospitals and clinics. It’s about access, affordability, and preventive care delivered through digital technology.",
    image: "/images/blogs/1.jpg",
  },
  {
    id: 2,
    title:
      "National Nutrition Week (September 1–7): Nourishing India, One Plate at a Time",
    date: "",
    excerpt:
      "At LifeOnPlus, we believe that good nutrition is the foundation of good health. Whether it’s preventing lifestyle diseases, boosting immunity, or improving energy levels, nutrition plays a vital role in every stage of life.",
    image: "/images/blogs/2.jpg",
  },
  {
    id: 3,
    title:
      "Your Health, Your Right: Unlocking Government Benefits Every Indian Should Know",
    date: "",
    excerpt:
      "Good health is the foundation of a strong nation. The Government of India has rolled out several initiatives to safeguard the health of its citizens— from free medical care to nutritional support, disease prevention, and digital healthcare access. Unfortunately, many people don’t know what is already available to them. Here’s a clear guide to the most important schemes and how you can access them.",
    image: "/images/blogs/3.jpg",
  },
  {
    id: 4,
    title: "August 13: International Left-Handers Day",
    date: "",
    excerpt:
      "Celebrating the Unique 10% – The Left-Handed Community Published by LifeOnPlus | Awareness & Inclusivity Series",
    image: "/images/blogs/4.jpg",
  },
  {
    id: 5,
    title: "World Lung Cancer Day – Let’s Breathe Better, Together",
    date: "April 7, 2025",
    excerpt:
      "Every year on August 1st, the world comes together to recognize World Lung Cancer Day — a vital reminder of the need for awareness, early detection, and lifestyle changes that can save lives.",
    image: "/images/blogs/5.jpg",
  },
  {
    id: 6,
    title: "World Humanitarian Day – August 19th",
    date: "June 5, 2025",
    excerpt:
      "Move More. Live Stronger. Stay Healthier.Published by LifeOnPlus | Fitness & Preventive Wellness Series.",
    image: "/images/blogs/6.jpg",
  },
];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = topBlogs.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top 6 Featured Blogs */}
      <div className="max-w-7xl mx-auto px-4 py-10 mt-24">
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Featured Blogs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-96">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  {/* <p className="text-green-600 text-sm mb-3">{post.date}</p> */}
                  <h3 className="font-bold text-xl leading-tight mb-4 line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-5 mb-6 text-[15px]">
                    {post.excerpt}
                  </p>
                  {/* <Link
                    href={`/blogs/${post.id}`}
                    className="text-green-700 font-medium hover:underline inline-flex items-center gap-2"
                  >
                    Read More →
                  </Link> */}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3 py-10">
              No matching blogs found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
