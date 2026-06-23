"use client";

import Image from "next/image";
import Link from "next/link";

export default function NewsEvents() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <NewsCard
            image="/images/news/MSME_award.jpg"
            title="LifeOnPlus Founder & CEO Honored with Star MSME Award 2025"
            date="18th August 2025"
            location="Le Meridien, New Delhi"
            description="We are proud to announce that our Founder & CEO, Mr. Rajanikant M. Torgal, has been conferred with the Star MSME Award 2025 at the prestigious International MSME Business Conclave 5.0, held on 18th August 2025 at Le Meridien, New Delhi."
            link="#"
          />

          {/* Card 2 */}
          {/* <NewsCard
            image="/images/news2.jpg"
            title="Brainstorm AI Singapore 2025"
            date="22-23 July 2025"
            location="The Ritz Carlton, Millenia, Singapore"
            description="Theme: 'The Age of Intelligence' — exploring AI's shift from perception to reasoning, planning, and action."
            link="#"
          /> */}

          {/* Card 3 */}
          <NewsCard
            image="/images/news/awards.jpg"
            title="Hosting a Paradigm Shift in Healthcare Emergencies Treatments"
            description="Treatments-Rajanikant M Torgal, Founder & CEO, LifeOnPlus Technologies India Limited- Featured on CEO Insights Asia..."
            link="#"
          />

          {/* Card 4 */}
          <NewsCard
            image="/images/news/business_tales.jpg"
            title="Most Iconic Business Leader to Look Out for in 2025"
            description="Mr. Rajanikant M. Torgal, Founder & CEO of LifeOnPlus, has been featured in the prestigious Business Tales e-Magazine..."
            link="#"
          />

          {/* Card 5 */}
          <NewsCard
            image="/images/news/most_powerful_leader.jpg"
            title="Featured in The Prime Today Magazine"
            description="Most Powerful Leader 2025. Mr. Rajanikant M. Torgal, Founder & CEO of LifeOnPlus, has been honored..."
            link="#"
          />

          {/* Card 6 */}
          {/* <NewsCard
            image="/images/news6.jpg"
            title="Upcoming Event: Business Frontier Leadership Conclave & Awards"
            date="25th April 2025"
            location="Le Meridien Dubai"
            description="We are excited to announce our participation in the Business Frontier Leadership Conclave & Awards..."
            link="#"
          /> */}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-white py-16 border-t border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-700 mb-6">
                Why Subscribe To LifeOnPlus Now? (Pre-Launch Offer)
              </h2>
              <p className="text-gray-600 mb-8">
                This Is The Best Time To Join LifeOnPlus — Your Gateway To
                Smart, Affordable, And Connected Healthcare.
              </p>

              <ol className="space-y-4 text-gray-700">
                {[
                  "Pay Less, Enjoy More — Forever!",
                  "Instant Access To Core Features",
                  "Get All Future Add-Ons At No Extra Cost",
                  "Be A Founding Member",
                  "Priority Access & Special Invites",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-green-600 font-bold">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">
                WHY SUBSCRIBE TO LIFEONPLUS NOW?
              </h3>
              <div className="space-y-4 text-sm">
                <p>
                  <strong>PAY LESS, ENJOY MORE — FOREVER!</strong>
                </p>
                <p>
                  Instant Access To Core Features • Get All Future Add-Ons At No
                  Extra Cost
                </p>
                <p>Be A Founding Member • Limited Period Offer - Act Now!</p>
              </div>
              <div className="mt-8 text-center">
                <p className="text-2xl font-bold">+91 99868 80000</p>
                <p className="text-sm mt-1">LifeOnPlus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable News Card Component
function NewsCard({
  image,
  title,
  date,
  location,
  description,
  link,
}: {
  image: string;
  title: string;
  date?: string;
  location?: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all group">
      <div className="relative h-96">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        {date && (
          <p className="text-green-600 text-sm font-medium mb-2">
            {date} {location && `• ${location}`}
          </p>
        )}

        <h3 className="font-bold text-xl leading-tight mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-6">{description}</p>

        {/* <Link
          href={link}
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-3 rounded-full transition"
        >
          Read More →
        </Link> */}
      </div>
    </div>
  );
}
