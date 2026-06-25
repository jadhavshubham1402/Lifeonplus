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
        title: "Advanced ECG Screening",
        price: "₹799",
        duration: "45 seconds",
        description:
          "A digital ECG test using a single handheld device with two leads that records your heart’s electrical activity in under 45 seconds.",
        features: [
          "Detects arrhythmias, heart rate abnormalities, early signs of ischemia, and cardiac stress",
          "Instant results with graphical representation",
        ],
        image: "/images/shop/aet.jpeg",
      },
      {
        id: 2,
        title: "Vascular Age Test",
        price: "₹699",
        duration: "30 seconds",
        description:
          "Measured using an advanced pulse oximeter. Shows how 'old' your arteries are by assessing pulse strength, SpO₂, and arterial stiffness.",
        features: [
          "Detects early signs of cardiovascular aging",
          "Non-invasive assessment of arterial elasticity",
          "Helps in preventive lifestyle changes",
        ],
        image: "/images/shop/vat.jpeg",
      },
      {
        id: 3,
        title: "Capillary Blood Shape Analysis",
        price: "₹899",
        duration: "2 minutes",
        description:
          "Utilizes Blood Capillaroscopy to analyse shape, density, and flow in nailfold capillaries, reflecting microvascular health.",
        features: [
          "Helps detect poor circulation and metabolic issues early",
          "Indicates overall microvascular function",
        ],
        image: "/images/shop/cbt.jpeg",
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
        duration: "10 Minutes",
        description:
          "Essential 10 vital health checks using advanced digital devices. Perfect for quick preventive screening.",
        features: [
          "Anthropometric Measurements (BMI, Waist-Hip Ratio)",
          "Blood Pressure, Pulse, SpO₂, Temperature",
          "ECG, Hemoglobin, Vision Screening",
          "Instant digital reports",
        ],
        image: "/images/shop/xmt1.jpeg",
      },
      {
        id: 5,
        title: "Express Basic Plus – 12 Vital Tests",
        price: "₹1,499",
        duration: "10 Minutes",
        description:
          "Executive-grade preventive healthcare with Smart Health Card. Includes Lipid Profile for deeper insights.",
        features: [
          "All 10 Basic Tests + Lipid Profile",
          "Smart Health Card Included",
          "Instant Digital Results",
          "Ideal for Corporate Executives",
        ],
        image: "/images/shop/xmt2.jpeg",
      },
      {
        id: 6,
        title: "Express Advanced – Lifeline Package (32+ Tests)",
        price: "₹4,999",
        duration: "10-15 Minutes",
        description:
          "Comprehensive Lifeline Package with 32+ vital parameters. The most complete preventive health screening.",
        features: [
          "All Basic + Advanced Tests",
          "HbA1c, Full Lipid Profile",
          "Smart RFID/NFC Health Card",
          "Deep preventive health evaluation",
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
        title: "AcuGraph Energy Analysis",
        price: "₹1,500",
        duration: "10 Minutes",
        description:
          "Non-invasive meridian and energy balance assessment based on Traditional Chinese Medicine principles.",
        features: [
          "12 Major Meridian Assessment",
          "Yin-Yang Balance",
          "Left-Right & Upper-Lower Balance",
          "Instant Graphical Report",
        ],
        image: "/images/shop/act.jpeg",
      },
      {
        id: 8,
        title: "Power Foot Detox Therapy",
        price: "₹1,500",
        duration: "20-30 Minutes",
        description:
          "Advanced iontophoresis foot detox therapy using ionized water to support natural detoxification and relaxation.",
        features: [
          "Promotes relaxation and rejuvenation",
          "Supports blood circulation",
          "Helps relieve tired feet",
          "Recommended 3 times/month",
        ],
        image: "/images/shop/pfdt.jpeg",
      },
      {
        id: 9,
        title: "Power Recharge Therapy (MEOL)",
        price: "₹1,500",
        duration: "30 Minutes",
        description:
          "Miracle Energy Oscillation Loop – Gentle energy-based stimulation while sitting for deep relaxation and vitality.",
        features: [
          "Restores vital life force",
          "Supports better sleep",
          "Enhances energy & immunity",
          "Non-invasive & comfortable",
        ],
        image: "/images/shop/prt.jpeg",
      },
    ],
  },
  {
    name: "Wearable Products",
    id: "wearable",
    products: [
      {
        id: 11,
        title: "Rev22 Lifeonplus Alkaline Beads",
        price: "₹2,499",
        description: "Turn normal water into alkaline antioxidant water.",
        features: ["pH 8.5", "Antioxidant", "Micro-clustered"],
        image: "/images/shop/akalb.jpeg",
      },
      {
        id: 12,
        title: "Lifeonplus Neck Support",
        price: "₹1,299",
        description: "Tourmaline infused neck support with nanotechnology.",
        features: ["Better sleep", "Reduce jet lag", "Desk comfort"],
        image: "/images/shop/necks.jpeg",
      },
      {
        id: 13,
        title: "Lifeonplus Gloves",
        price: "₹899",
        description: "Polypropylene gloves with infrared & negative ions.",
        features: ["Hand warmth", "Joint comfort"],
        image: "/images/shop/gloves.jpeg",
      },
      {
        id: 14,
        title: "Lifeonplus Socks",
        price: "₹799",
        description: "Advanced wellness socks for foot comfort.",
        features: ["Warm feet", "Support for active lifestyle"],
        image: "/images/shop/socks.jpeg",
      },
      {
        id: 15,
        title: "Short Sleeve White T-Shirt",
        price: "₹1,199",
        description: "Therapeutic T-shirt for chest & heart support.",
        features: ["Improve sleep", "Boost immunity"],
        image: "/images/shop/tshirt.jpeg",
      },
    ],
  },
  // {
  //   name: "Food Supplements",
  //   id: "supplements",
  //   products: [
  //     {
  //       id: 16,
  //       title: "Detox & Liver Support",
  //       price: "₹1,299",
  //       description: "NAC + Milk Thistle formula for liver health.",
  //       features: ["Liver detox", "Energy support"],
  //       image: "/shop/liver-detox.jpg",
  //     },
  //     {
  //       id: 17,
  //       title: "Weight Loss Supplements",
  //       price: "₹1,499",
  //       description: "Natural fat metabolism & appetite control.",
  //       features: ["Burn fat", "Improve digestion"],
  //       image: "/shop/weight-loss.jpg",
  //     },
  //     {
  //       id: 18,
  //       title: "Immunity Booster+",
  //       price: "₹899",
  //       description: "Vitamin C, Zinc, Amla & Ginger blend.",
  //       features: ["Strong immunity", "Energy boost"],
  //       image: "/shop/immunity.jpg",
  //     },
  //     {
  //       id: 19,
  //       title: "Olive Oil",
  //       price: "₹699",
  //       description: "Premium Mediterranean olive oil.",
  //       features: ["Heart healthy", "Antioxidant rich"],
  //       image: "/shop/olive-oil.jpg",
  //     },
  //   ],
  // },
  // {
  //   name: "Scalar Products",
  //   id: "scalar",
  //   products: [
  //     {
  //       id: 20,
  //       title: "Relax Activation Holographic Disc",
  //       price: "₹1,999",
  //       description: "Scalar energy disc for stress relief and better sleep.",
  //       features: ["Deep relaxation", "Better sleep"],
  //       image: "/shop/relax-disc.jpg",
  //     },
  //     {
  //       id: 21,
  //       title: "Power Holographic Disc",
  //       price: "₹1,999",
  //       description: "Scalar energy disc for stamina and vitality.",
  //       features: ["Increase energy", "Physical endurance"],
  //       image: "/shop/power-disc.jpg",
  //     },
  //   ],
  // },
];

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <div className="bg-green-700 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Shop Our Services
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Preventive Healthcare • Wellness Therapies • Quick Diagnostics
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-6 my-8 relative z-10">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-2xl mx-auto block px-6 py-2 border border-gray-300 rounded-full text-lg focus:outline-none focus:border-green-600 shadow-lg"
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
          <div key={category.id} className="max-w-7xl mx-auto px-6 mb-16">
            <h2 className="text-2xl font-bold text-green-700 mb-8 border-b border-green-200 pb-3">
              {category.name}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product: any) => (
                <div
                  key={product.id}
                  className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-96 bg-gray-100 border-b border-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                      {product.title}
                    </h3>

                    {/* Duration + Price in One Line */}
                    <div className="flex items-center justify-between mb-4">
                      {product.duration && (
                        <p className="text-green-600 font-medium text-sm flex items-center gap-1">
                          ⏱ {product.duration}
                        </p>
                      )}
                      <div className="bg-green-700 text-white px-4 py-0.5 rounded-full font-semibold text-sm">
                        {product.price}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-tight mb-5 line-clamp-3">
                      {product.description}
                    </p>

                    <ul className="space-y-1.5 mb-6 text-xs text-gray-600">
                      {product.features?.map((feature: any, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✔</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-2xl transition-all text-sm">
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
