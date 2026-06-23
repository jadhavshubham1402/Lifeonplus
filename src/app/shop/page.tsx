"use client";

import Image from "next/image";
import { useState } from "react";

const shopCategories = [
  {
    name: "Quick Health Checkup",
    id: "quick",
    products: [
      {
        id: 1,
        title: "Advanced ECG",
        price: "₹799",
        duration: "45 seconds",
        description:
          "Digital ECG test using a single handheld device with two leads that records your heart’s electrical activity.",
        features: [
          "Detects arrhythmias",
          "Instant graphical results",
          "Non-invasive & painless",
        ],
        image: "/shop/advanced-ecg.jpg",
      },
      {
        id: 2,
        title: "Vascular Age Test",
        price: "₹699",
        duration: "30 seconds",
        description:
          "Advanced pulse oximeter test that reveals how 'old' your arteries are by measuring arterial stiffness.",
        features: [
          "Assesses biological vascular age",
          "SpO₂ & Heart Rate",
          "Early cardiovascular risk detection",
        ],
        image: "/shop/vascular-age.jpg",
      },
      {
        id: 3,
        title: "Capillary Blood Shape Analysis",
        price: "₹899",
        duration: "2 minutes",
        description:
          "Non-invasive capillaroscopy to analyze nailfold capillaries for microvascular health.",
        features: [
          "Detects poor circulation",
          "Early metabolic & autoimmune insights",
          "Microvascular function assessment",
        ],
        image: "/shop/capillary.jpg",
      },
    ],
  },
  {
    name: "Express Medical Tests",
    id: "express",
    products: [
      {
        id: 4,
        title: "Express Basic – 10 Vital Tests",
        price: "₹999",
        description:
          "Essential preventive health screening with 10 vital parameters and instant digital reports.",
        features: [
          "Anthropometric + BP + SpO₂",
          "ECG + Hemoglobin",
          "Vision Screening",
        ],
        image: "/shop/basic-10.jpg",
      },
      {
        id: 5,
        title: "Express Basic Plus – 12 Vital Tests",
        price: "₹1,499",
        description:
          "Executive preventive package with Smart Health Card and advanced lipid profile.",
        features: [
          "All 10 Basic Tests",
          "Non-Invasive Lipid Profile",
          "Smart Health Card Included",
        ],
        image: "/shop/basic-plus.jpg",
      },
      {
        id: 6,
        title: "Express Advanced – Lifeline Package",
        price: "₹4,999",
        description:
          "Comprehensive 32+ vital tests for complete preventive health evaluation.",
        features: [
          "32+ Parameters",
          "HbA1c + Full Lipid",
          "Smart Health Card + Consultation",
        ],
        image: "/shop/lifeline.jpg",
      },
    ],
  },
  {
    name: "Body Recharge Station",
    id: "brs",
    products: [
      {
        id: 7,
        title: "Acugraph Test",
        price: "₹1,500",
        description:
          "Advanced energy meridian analysis to detect energy blockages in your body.",
        features: [
          "Non-invasive energy mapping",
          "Personalized wellness insights",
        ],
        image: "/shop/acugraph.jpg",
      },
      {
        id: 8,
        title: "Power Foot Detox Therapy",
        price: "₹1,500",
        description:
          "Ionized foot detox therapy to remove toxins through 2000+ pores.",
        features: ["Deep detoxification", "Improved circulation", "Relaxation"],
        image: "/shop/foot-detox.jpg",
      },
      {
        id: 9,
        title: "Power Recharge Therapy (MEOUL)",
        price: "₹1,500",
        description:
          "Scalar energy & electromagnetic field therapy to recharge your biofield.",
        features: [
          "Restores vital energy",
          "Enhances immunity",
          "Reduces stress",
        ],
        image: "/shop/power-recharge.jpg",
      },
      {
        id: 10,
        title: "Bio Energy Therapy",
        price: "₹1,500",
        description:
          "Non-invasive bio energy therapy to balance and strengthen your body's natural healing power.",
        features: [
          "Energy field alignment",
          "Emotional resilience",
          "Cellular recharge",
        ],
        image: "/shop/bio-energy.jpg",
      },
    ],
  },
];

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <div className="bg-green-700 text-white  py-10 mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Shop Our Services
          </h1>
          <p className="text-xl text-green-100">
            Preventive Healthcare • Wellness Therapies • Quick Diagnostics
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-4 mt-8 relative z-10 mb-12">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-xl mx-auto block px-6 py-4 border border-gray-300 rounded-full text-lg focus:outline-none focus:border-green-600"
        />
      </div>

      {/* Categories */}
      {shopCategories.map((category) => {
        const filteredProducts = category.products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()),
        );

        if (filteredProducts.length === 0) return null;

        return (
          <div key={category.id} className="max-w-7xl mx-auto px-4 mb-20">
            <h2 className="text-4xl font-bold text-green-700 mb-10 border-b border-green-200 pb-4">
              {category.name}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product: any) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-64 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-green-700 text-white px-5 py-2 rounded-full font-bold text-lg">
                      {product.price}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                    {product.duration && (
                      <p className="text-green-600 font-medium mb-4">
                        {product.duration}
                      </p>
                    )}
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-8 text-sm">
                      {product.features.map((feature: any, i: any) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✔</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-4 rounded-2xl transition-all text-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
