"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import withBasePath from "@/utils/basePath";

export default function ServicesPage() {
  const [services, setServices] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(withBasePath("/data/data.json"));
        const data = await res.json();
        setServices(data.serviceData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-10">Loading services...</div>;
  }

  return (
    <div className="container mx-auto mt-16 px-4 py-10">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-green-600 mb-8">Our Services</h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services
          .filter((e: any) => e.subCategory === undefined)
          .map((item: any) => (
            <Link
              key={item.id}
              href={`/services/${item.id}`}
              className="bg-white shadow-md  overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative border-2 border-green-500 rounded-sm overflow-hidden">
                <Image
                  src={withBasePath(item.imageSrc)}
                  alt={item.course}
                  width={700}
                  height={700}
                  className="object-cover w-full"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">
                  {item.course}
                </h2>

                <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                  {item.profession}
                </p>
                <button className="mt-4 text-sm bg-green-500 text-white px-3 py-1 rounded-md">
                  Read More
                </button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
