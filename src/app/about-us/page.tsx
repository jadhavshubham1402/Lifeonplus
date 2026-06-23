// app/about-us/page.tsx  OR  components/AboutUs.tsx

import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
          About Us
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Our Story
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            LifeOnPlus Was Founded With A Bold Vision: To Bridge The Gap Between
            Healthcare And Everyday Accessibility. Born Out Of Real-World
            Experiences In Global Healthcare And Technology Sectors, Our
            Platform Brings Preventive Diagnostics, Non-Invasive Therapies,
            Smart Health Access, And AI-Driven Insights To Users Through A
            Unified Digital Ecosystem. We Aim To Redefine Wellness By Putting
            Proactive, Affordable, And Intelligent Healthcare In Everyone&apos;s
            Hands—Urban And Rural Alike.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-green-50 border border-green-100 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Vision</h3>
          <p className="text-gray-600">
            To be a global leader in preventive, digital, and democratized
            healthcare—empowering every individual to live healthier, longer,
            and fuller lives.
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Mission
          </h3>
          <p className="text-gray-600">
            To make healthcare more accessible, personalized, and non-invasive
            through smart technologies, strategic partnerships, and scalable
            wellness ecosystems.
          </p>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="mb-20 bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
        <h3 className="text-2xl font-semibold text-green-700 mb-6">
          Founder&apos;s Message
        </h3>
        <div className="italic text-gray-600 text-lg leading-relaxed">
          &ldquo;The idea of LifeOnPlus was born during my journey across
          continents where I witnessed how technology could transform lives—but
          also how healthcare remained inaccessible for many. My goal was to
          create something that not only healed but empowered. With decades of
          experience in tech and wellness, LifeOnPlus is my commitment to a
          healthier tomorrow—driven by purpose, backed by innovation.&rdquo;
        </div>
        <p className="mt-6 font-medium text-gray-800">
          — Rajanikant M. Torgal
          <br />
          <span className="text-sm text-gray-500">
            Founder & CEO, LifeOnPlus
          </span>
        </p>
      </section>

      {/* Milestones */}
      <section className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-10 text-green-700">
          Milestones & Journey
        </h3>
        <div className="space-y-8 max-w-4xl mx-auto">
          {[
            {
              year: "2011",
              desc: "Conceptualized while facing a personal healthcare access issue in South Korea",
            },
            {
              year: "2016",
              desc: "Global research & partnership groundwork laid through PayJoyk Technology, Singapore",
            },
            {
              year: "2020",
              desc: "Development of affordable, non-invasive technologies resumed post-COVID",
            },
            {
              year: "2023",
              desc: "Launch of LifeOnPlus app and pilot projects in India",
            },
            {
              year: "2024",
              desc: "Body Recharge Station franchise model and Smart Health Card rollout",
            },
            {
              year: "2025",
              desc: "National expansion, AI-driven diagnostics, global partnerships, and IPO preparation",
            },
          ].map((milestone, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-green-600 text-white flex-shrink-0 flex items-center justify-center font-bold text-xl border-4 border-green-100">
                {milestone.year}
              </div>
              <div className="pt-2">
                <p className="text-gray-700 text-lg">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board */}
      <section className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-8 text-green-700">
          Advisory Board & Team
        </h3>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Our strength lies in a diverse team of medical experts, technologists,
          wellness leaders, and public health professionals. The LifeOnPlus
          advisory board guides us in strategy, innovation, and scalable impact.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border">
            <p className="font-semibold">Dr. S. Arulraj</p>
            <p className="text-sm text-gray-500">
              Eminent Physician & Healthcare Visionary
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border">
            <p className="font-semibold">Rajanikant M. Torgal</p>
            <p className="text-sm text-gray-500">
              Tech entrepreneur with 30+ years in global innovation
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-12 text-green-700">
          Our Team
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Card - Repeat for each person */}
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-80 bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-green-700">
                  {member.name}
                </h4>
                <p className="text-green-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Team Data
const teamMembers = [
  {
    name: "Dr. S. Arulraj",
    position: "Chairman",
    image: "/images/team/arhulraj.jpg", // Replace with actual paths
    bio: "Dr. S. Arulraj is a highly esteemed medical professional with over 42 years of distinguished service... (full bio from website)",
  },
  {
    name: "Mr. Rajanikant M. Torgal",
    position: "Founder & CEO",
    image: "/images/team/rajanikant.jpg",
    bio: "Rajanikant M. Torgal is the visionary founder and CEO of LifeOnPlus & PayJoyk Technologies...",
  },
  {
    name: "Mr. Peter Yeo",
    position: "Chief Marketing Officer",
    image: "/images/team/peter.jpg",
    bio: "Mr. Peter Yeo is a seasoned marketing professional with over 40 years...",
  },
  {
    name: "Mr. Francis Tan",
    position: "Vice President, Marketing",
    image: "/images/team/francis.jpg",
    bio: "Mr. Francis Tan is a senior marketing professional with over 25 years...",
  },
  {
    name: "Mr. Sanjay Gandhi",
    position: "Director, International Projects",
    image: "/images/team/sanjay.jpg",
    bio: "Mr. Sanjay Gandhi is a seasoned industry leader with extensive experience...",
  },
  {
    name: "Mr. Sachin D. Agrawal",
    position: "Director, Head Of Marketing",
    image: "/images/team/sachin.jpg",
    bio: "Mr. Sachin D. Agrawal is a seasoned professional in Pharma Marketing...",
  },
  {
    name: "Mr. Rajendra Bagrecha",
    position: "Head - Channel Partner",
    image: "/images/team/rajendra.jpg",
    bio: "Rajendra Bagrecha is a dynamic businessman and entrepreneur...",
  },
];
