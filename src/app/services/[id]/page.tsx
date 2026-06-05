"use client";
import { CourseDetailType } from "@/app/types/coursedetail";
import withBasePath from "@/utils/basePath";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServiceDetails() {
  const params = useParams();
  const id = String(params.id);
  // -------------------------------------------------------------
  const [courseDetail, setCourseDetail] = useState<CourseDetailType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(withBasePath("/data/data.json"));
        if (!res.ok) throw new Error("Failed to fetch.");
        const data = await res.json();
        setCourseDetail(data.CourseDetailData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const service = courseDetail.find((item) => String(item.id) === id);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  return (
    <div className="container mx-auto p-10 mt-16">
      <h1 className="text-3xl font-bold">{service.course}</h1>
      {service.category === "dek" && (
        <div className="container mx-auto p-10">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Digital Emergency Kit
          </h1>

          <p className="mb-6 text-gray-700">
            Digital Emergency Kit powered by LifeOnPlus – Your Health Anytime,
            Anywhere.
          </p>

          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-700 mb-4">
            Every second counts in a medical emergency. Yet, most people lack
            readily available medical records — causing delays in diagnosis and
            even avoidable loss of life. LifeOnPlus introduces the Global
            Digital Emergency Kit — a game-changing, universally compatible card
            that securely stores and provides instant access to your health data
            anytime, anywhere.
          </p>

          <h2 className="text-xl font-semibold mb-2">Key Benefits</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
            <li>Instant medical record access</li>
            <li>Emergency assistance support</li>
            <li>Secure cloud-based health data</li>
            <li>QR-based health identity</li>
            <li>24/7 availability anywhere</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">What Makes It Unique?</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
            <li>One QR for complete medical profile</li>
            <li>Hospital & doctor integration</li>
            <li>Emergency SOS system</li>
            <li>Fast access in critical situations</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">How to Get Your Card</h2>
          <ol className="list-decimal pl-5 space-y-1 text-gray-700 mb-6">
            <li>Register on LifeOnPlus platform</li>
            <li>Fill personal details</li>
            <li>Verify information</li>
            <li>Get your digital card instantly</li>
          </ol>
        </div>
      )}

      {service.category === "emt" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Express Medical Test – Quick & Convenient Health Check-ups
          </h1>

          {/* INTRO */}
          <p className="text-gray-700 mb-6">
            At LifeOnPlus, we understand the importance of timely health
            assessments. Our Express Medical Test service provides quick,
            hassle-free diagnostic tests at your convenience.
          </p>

          {/* KEY FEATURES */}
          <h2 className="text-xl font-semibold mb-3">Key Features</h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
            <li>
              <b>Rapid Testing:</b> Get essential health parameters checked in
              minutes
            </li>
            <li>
              <b>Home & Office Visits:</b> Certified professionals collect
              samples at your location
            </li>
            <li>
              <b>Affordable & Reliable:</b> Cost-effective testing with accurate
              results
            </li>
            <li>
              <b>Smart Health Reports:</b> Digital reports accessible via
              LifeOnPlus app
            </li>
            <li>
              <b>Preventive Care:</b> Early detection for better health
              management
            </li>
          </ul>

          {/* CTA TEXT */}
          <p className="text-gray-700 mb-2">
            Stay proactive about your health with Express Medical Tests.
          </p>

          <p className="text-gray-700 mb-2">
            Book your test today through the LifeOnPlus App!
          </p>

          <p className="text-gray-700 mb-6 font-medium">
            Get tested anytime, anywhere.
          </p>

          {/* SERVICE CARDS SECTION */}
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Express Medical Test Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "M-Kit",
                desc: "As a Lifeonplus Digital Health Accessed with Advanced state-of-the-art technologies enabled Medical Devices & equipment brings a quick health screening of your body main vitals within 10 mins with instant results in your health card/prints to you at any location which gives a big relief in an affordable way",
              },
              {
                title: "Emma",
                desc: "Device with 40+ Tests with immediate result in Mobile App & results are stored in your account automatically.",
              },
              {
                title: "Quick Health Check-up",
                desc: "Your health deserves timely attention—not just when symptoms arise, but even before they appear. That’s where the Quick Health Check-up plays a vital role.",
              },
            ].map((item, i) => (
              <div key={i} className="border rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* TESTS SECTION */}
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Book Express Medical Test
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mb-10">
            {[
              "Anthropometry",
              "Blood Pressure",
              "Pulse",
              "Hemoglobin",
              "ECG",
              "Temperature",
              "Oxygen Saturation",
              "Blood Sugar",
            ].map((test, i) => (
              <div key={i} className="border p-3 rounded text-center">
                {test}
              </div>
            ))}
          </div>
        </div>
      )}
      {service.category === "diagnosis" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Diagnostic Services
          </h1>

          {/* INTRO */}
          <p className="text-gray-700 mb-6">
            LifeOnPlus aims to integrate diagnostics & quick health check-ups as
            part of its digital health initiative. These services are designed
            for preventive healthcare and early disease detection.
          </p>

          {/* WHO SHOULD BUY */}
          <h2 className="text-2xl font-semibold mb-4">
            Who Should Buy LifeOnPlus Diagnostics?
          </h2>

          <div className="space-y-5 text-gray-700">
            <div>
              <h3 className="font-semibold">
                1. People Looking for Lifestyle Change
              </h3>
              <ul className="list-disc pl-5">
                <li>Individuals aiming for healthier lifestyle</li>
                <li>People tracking health parameters</li>
                <li>Fitness & wellness seekers</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">
                2. Family History of Chronic Diseases
              </h3>
              <ul className="list-disc pl-5">
                <li>Diabetes monitoring & control</li>
                <li>Hypertension management</li>
                <li>Cholesterol tracking</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">3. Existing Health Concerns</h3>
              <ul className="list-disc pl-5">
                <li>Fatigue, stress or low immunity</li>
                <li>Obesity or metabolic disorders</li>
                <li>Post illness recovery monitoring</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">4. Corporate Employees</h3>
              <ul className="list-disc pl-5">
                <li>Sedentary lifestyle users</li>
                <li>Corporate wellness programs</li>
                <li>Preventive checkups</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">5. Senior Citizens</h3>
              <ul className="list-disc pl-5">
                <li>Regular health monitoring</li>
                <li>Non-invasive diagnostics</li>
                <li>AI-based health tracking</li>
              </ul>
            </div>
          </div>

          {/* PROBLEM SECTION */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">The Problem</h2>

          <p className="text-gray-700 mb-6">
            Many people ignore early symptoms which leads to serious chronic
            diseases. Regular screening helps in early detection and prevention.
          </p>

          {/* SIMPLE STATS SECTION */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-10">
            <div className="border p-4 rounded">
              <p className="text-2xl font-bold text-green-600">70%</p>
              <p className="text-sm">Lifestyle diseases</p>
            </div>

            <div className="border p-4 rounded">
              <p className="text-2xl font-bold text-green-600">6M</p>
              <p className="text-sm">Deaths annually</p>
            </div>

            <div className="border p-4 rounded">
              <p className="text-2xl font-bold text-green-600">60%</p>
              <p className="text-sm">Preventable cases</p>
            </div>

            <div className="border p-4 rounded">
              <p className="text-2xl font-bold text-green-600">50%</p>
              <p className="text-sm">Unaware patients</p>
            </div>
          </div>
        </div>
      )}
      {service.category === "brs" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Body Recharge Station
          </h1>

          {/* INTRO */}
          <p className="text-gray-700 mb-6">
            The Body Recharge Station is a revolutionary wellness solution
            designed to restore energy, enhance vitality, and promote overall
            well-being through non-invasive wellness technologies.
          </p>

          {/* WHAT IS BRS */}
          <h2 className="text-2xl font-semibold mb-4">
            What is a Body Recharge Station?
          </h2>

          <p className="text-gray-700 mb-8">
            The Body Recharge Station helps recharge your body's energy levels,
            detoxify, and rejuvenate using advanced bioenergetic wellness
            technologies. It integrates modern scientific advancements with
            traditional wellness methodologies to optimize your body's natural
            energy flow.
          </p>

          {/* HOW IT WORKS */}
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>

          <div className="space-y-5 text-gray-700 mb-10">
            <div>
              <h3 className="font-semibold">AcuGraph Energy Analysis</h3>
              <p>
                Scans your body's energy meridians to identify imbalances and
                support wellness assessment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Power Detox Therapy</h3>
              <p>
                Uses bio-electromagnetic technology to support detoxification
                and toxin removal.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Power Recharge Therapy</h3>
              <p>
                Helps restore and recharge your body's natural energy levels.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Power Eye Recharge Therapy</h3>
              <p>
                Supports relaxation and wellness through impulse-based
                technology.
              </p>
            </div>
          </div>

          {/* BENEFITS */}
          <h2 className="text-2xl font-semibold mb-4">
            Benefits of the Body Recharge Station
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-10">
            <li>Boosts energy levels and daily performance.</li>
            <li>Supports detoxification and toxin removal.</li>
            <li>Strengthens overall wellness and vitality.</li>
            <li>Reduces stress, fatigue, and mental exhaustion.</li>
            <li>
              Promotes holistic physical, emotional, and mental well-being.
            </li>
          </ul>

          {/* WHO CAN BENEFIT */}
          <h2 className="text-2xl font-semibold mb-4">Who Can Benefit?</h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Individuals experiencing chronic fatigue or stress.</li>
            <li>Professionals looking to enhance productivity and focus.</li>
            <li>Fitness enthusiasts seeking faster recovery.</li>
            <li>People interested in preventive healthcare and wellness.</li>
            <li>Anyone seeking a natural way to recharge and rejuvenate.</li>
          </ul>
        </div>
      )}
      <img
        src={service.imageSrc}
        alt={service.course}
        className="w-full max-w-xl mt-5 rounded-lg"
      />

      <div className="mt-4 text-xl font-bold text-green-600">
        ₹ {service.price}
      </div>
    </div>
  );
}
