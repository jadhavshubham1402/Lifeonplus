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
        description: "Digital ECG test using handheld device.",
        features: ["Detects arrhythmias", "Instant results"],
        image: "/shop/advanced-ecg.jpg",
      },
      {
        id: 2,
        title: "Vascular Age Test",
        price: "₹699",
        duration: "30 seconds",
        description: "Assesses arterial age and stiffness.",
        features: ["Early cardiovascular insights"],
        image: "/shop/vascular-age.jpg",
      },
      {
        id: 3,
        title: "Capillary Blood Shape Analysis",
        price: "₹899",
        duration: "2 minutes",
        description: "Microvascular health analysis.",
        features: ["Detects circulation issues"],
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
        description: "Essential 10 vital parameters.",
        features: ["BMI, BP, ECG, Vision"],
        image: "/shop/basic-10.jpg",
      },
      {
        id: 5,
        title: "Express Basic Plus – 12 Vital Tests",
        price: "₹1,499",
        description: "Executive package with Smart Card.",
        features: ["Lipid Profile + Smart Card"],
        image: "/shop/basic-plus.jpg",
      },
      {
        id: 6,
        title: "Express Advanced – Lifeline Package",
        price: "₹4,999",
        description: "32+ vital tests.",
        features: ["Comprehensive screening"],
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
        description: "Energy meridian analysis.",
        features: ["Detect energy blockages"],
        image: "/shop/acugraph.jpg",
      },
      {
        id: 8,
        title: "Power Foot Detox Therapy",
        price: "₹1,500",
        description: "Ionized foot detox.",
        features: ["Deep detoxification"],
        image: "/shop/foot-detox.jpg",
      },
      {
        id: 9,
        title: "Power Recharge Therapy (MEOUL)",
        price: "₹1,500",
        description: "Scalar energy recharge.",
        features: ["Restores vital energy"],
        image: "/shop/power-recharge.jpg",
      },
      {
        id: 10,
        title: "Bio Energy Therapy",
        price: "₹1,500",
        description: "Biofield balancing therapy.",
        features: ["Energy alignment"],
        image: "/shop/bio-energy.jpg",
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
        image: "/shop/alkaline-beads.jpg",
      },
      {
        id: 12,
        title: "Lifeonplus Neck Support",
        price: "₹1,299",
        description: "Tourmaline infused neck support with nanotechnology.",
        features: ["Better sleep", "Reduce jet lag", "Desk comfort"],
        image: "/shop/neck-support.jpg",
      },
      {
        id: 13,
        title: "Lifeonplus Gloves",
        price: "₹899",
        description: "Polypropylene gloves with infrared & negative ions.",
        features: ["Hand warmth", "Joint comfort"],
        image: "/shop/gloves.jpg",
      },
      {
        id: 14,
        title: "Lifeonplus Socks",
        price: "₹799",
        description: "Advanced wellness socks for foot comfort.",
        features: ["Warm feet", "Support for active lifestyle"],
        image: "/shop/socks.jpg",
      },
      {
        id: 15,
        title: "Short Sleeve White T-Shirt",
        price: "₹1,199",
        description: "Therapeutic T-shirt for chest & heart support.",
        features: ["Improve sleep", "Boost immunity"],
        image: "/shop/tshirt.jpg",
      },
    ],
  },
  {
    name: "Food Supplements",
    id: "supplements",
    products: [
      {
        id: 16,
        title: "Detox & Liver Support",
        price: "₹1,299",
        description: "NAC + Milk Thistle formula for liver health.",
        features: ["Liver detox", "Energy support"],
        image: "/shop/liver-detox.jpg",
      },
      {
        id: 17,
        title: "Weight Loss Supplements",
        price: "₹1,499",
        description: "Natural fat metabolism & appetite control.",
        features: ["Burn fat", "Improve digestion"],
        image: "/shop/weight-loss.jpg",
      },
      {
        id: 18,
        title: "Immunity Booster+",
        price: "₹899",
        description: "Vitamin C, Zinc, Amla & Ginger blend.",
        features: ["Strong immunity", "Energy boost"],
        image: "/shop/immunity.jpg",
      },
      {
        id: 19,
        title: "Olive Oil",
        price: "₹699",
        description: "Premium Mediterranean olive oil.",
        features: ["Heart healthy", "Antioxidant rich"],
        image: "/shop/olive-oil.jpg",
      },
    ],
  },
  {
    name: "Scalar Products",
    id: "scalar",
    products: [
      {
        id: 20,
        title: "Relax Activation Holographic Disc",
        price: "₹1,999",
        description: "Scalar energy disc for stress relief and better sleep.",
        features: ["Deep relaxation", "Better sleep"],
        image: "/shop/relax-disc.jpg",
      },
      {
        id: 21,
        title: "Power Holographic Disc",
        price: "₹1,999",
        description: "Scalar energy disc for stamina and vitality.",
        features: ["Increase energy", "Physical endurance"],
        image: "/shop/power-disc.jpg",
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
