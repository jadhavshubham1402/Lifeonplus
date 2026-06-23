"use client";

import Link from "next/link";

const pressArticles = [
  {
    id: 1,
    title: "Global Leaders Today (April 2025)",
    date: "April 2025",
    description:
      "Rajanikant M. Torgal was featured in the January-March 2025 issue of Global Leaders Today, highlighting his significant contributions to the healthcare technology sector. The article discusses his journey from telecommunications to healthcare innovation, emphasizing the creation of LifeOnPlus and its Global Digital Health Card.",
  },
  {
    id: 2,
    title: "The New Indian Express (August 2014)",
    date: "August 2014",
    description:
      "In an article titled 'Smart' Way to Handle Med Emergency,' Torgal introduced the iMaxGSM Smart Card—a device designed to carry vital patient information. This card aimed to provide instant access to medical histories, facilitating better emergency care.",
  },
  {
    id: 3,
    title:
      "LifeOnPlus Launches “Miracle Water of Life – Miracle Beads” in India (August 2014)",
    date: "August 2014",
    description:
      "Transforming Everyday Water into Alkaline, Antioxidant Wellness. Bengaluru, India – LifeOnPlus Technologies India Pvt. Ltd., a leader in innovative wellness solutions, today announced the launch of its latest product – Miracle Water of Life – Miracle Beads – a premium, easy-to-use solution that converts ordinary water into alkaline, mineral-rich, antioxidant water to support hydration, pH balance, and overall health.",
    hasReadMore: true,
  },
];

export default function PressMedia() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-green-700 text-white py-10 mt-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Press Media
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Featured stories, media coverage, and press releases about
            LifeOnPlus
          </p>
        </div>
      </div>

      {/* Press Articles */}
      <div className="max-w-4xl mx-auto py-16">
        <div className="space-y-12">
          {pressArticles.map((article, index) => (
            <div
              key={article.id}
              className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                      {article.title}
                    </h2>
                    <span className="text-sm text-gray-500 font-medium px-3 py-1 bg-gray-100 rounded-full">
                      {article.date}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-[17px]">
                    {article.description}
                  </p>

                  {article.hasReadMore && (
                    <Link
                      href="#"
                      className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-200"
                    >
                      Read More →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white border-t py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            Stay Updated with LifeOnPlus
          </h3>
          <p className="text-gray-600 mb-8">
            Follow our journey as we continue to make headlines in healthcare
            innovation and digital wellness.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-700 text-white px-8 py-4 rounded-full font-medium hover:bg-green-800 transition">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
