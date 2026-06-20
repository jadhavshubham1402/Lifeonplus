"use client";
import withBasePath from "@/utils/basePath";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
// Add this function for static export
type Service = any; // You can define a proper interface later

export default function ServiceDetailsClient({ id }: { id: string }) {
  // -------------------------------------------------------------
  const [courseDetail, setCourseDetail] = useState<Service>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(withBasePath("/data/data.json"));
        if (!res.ok) throw new Error("Failed to fetch.");
        const data = await res.json();
        setCourseDetail(data.serviceData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const service = courseDetail.find((item: any) => String(item.id) === id);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  return (
    <div className="container mx-auto p-10 mt-16">
      <h1 className="text-3xl font-bold">{service.course}</h1>
      {service.category === "dek" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            LifeOnPlus Digital Emergency Health Kit
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Your Health. Your Safety. One Touch Away.
          </p>

          {/* INTRODUCTION */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              The LifeOnPlus Digital Emergency Health Kit is a comprehensive
              healthcare, safety, and emergency response solution that combines
              a Global Digital Health Smart Card, Mobile App, Emergency Medical
              Records, Smart Health Reminders, and One-Touch Emergency Services
              to help protect you and your family 24×7.
            </p>
            <p className="text-gray-700 mt-4">
              Whether you are at home, traveling, working, or living alone,
              LifeOnPlus ensures that your health information, emergency
              support, and healthcare services are always available at the touch
              of a button.
            </p>
          </div>

          {/* GLOBAL DIGITAL HEALTH SMART CARD */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              💳 Global Digital Health Smart Card
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-medium mb-3">Card Features</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Photo ID</li>
                  <li>QR Code &amp; NFC Enabled</li>
                  <li>Blood Group Information</li>
                  <li>Emergency Contact Details</li>
                  <li>Health Profile Summary</li>
                  <li>Digital Emergency Medical Records Access</li>
                  <li>Global Accessibility</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-3">Benefits</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Instant patient identification</li>
                  <li>Quick access to medical information</li>
                  <li>Faster emergency response</li>
                  <li>Easy sharing with doctors and hospitals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ONE TOUCH PANIC BUTTON */}
          <div className="mb-12 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              🚨 One Touch Panic Button
            </h2>
            <p className="text-gray-700 mb-4">
              For medical emergencies such as Heart Attack, Stroke, Accident,
              Breathing Difficulty, Unconsciousness, etc.
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-6">
              <p className="font-medium mb-3">Automatically Activates:</p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                <li>✅ Emergency SMS alerts to family</li>
                <li>✅ Live GPS location sharing</li>
                <li>✅ Automatic emergency phone calls</li>
                <li>✅ Real-time location tracking</li>
                <li>✅ Access to Emergency Medical Records</li>
              </ul>
            </div>
            <p className="font-medium text-green-700">
              Benefits: Immediate response • Faster medical intervention •
              Real-time family awareness • Improved survival chances
            </p>
          </div>

          {/* ONE TOUCH RESCUE BUTTON */}
          <div className="mb-12 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              🛡️ One Touch Rescue Button
            </h2>
            <p className="text-gray-700 mb-4">
              For personal safety emergencies — Threat situations, Women safety,
              Travel emergencies, etc.
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 mb-6">
              <p className="font-medium mb-3">Automatically Activates:</p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                <li>✅ Emergency SMS alerts</li>
                <li>✅ Live GPS location sharing</li>
                <li>✅ Automatic call to nearest police/emergency services</li>
                <li>✅ Continuous location updates</li>
                <li>✅ Alerts family and contacts</li>
              </ul>
            </div>
            <p className="font-medium text-green-700">
              Benefits: Enhanced personal safety • Faster rescue response •
              Real-time tracking
            </p>
          </div>

          {/* ONE TOUCH AMBULANCE & DOCTOR */}
          <div className="grid md:grid-cols-2 gap-10 mb-12 border-t border-gray-100 pt-10">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                🚑 One Touch GPS Enabled Ambulance Tracking
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>✅ Locate nearest ambulance</li>
                <li>✅ Real-time GPS tracking</li>
                <li>✅ Live ETA monitoring</li>
                <li>✅ Family tracking support</li>
              </ul>
              <p className="text-green-700 mt-4 font-medium">
                Reduced waiting time • Faster patient transport
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                👨‍⚕️ One Touch Doctor Consultation
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>✅ Video Consultation</li>
                <li>✅ Audio Consultation</li>
                <li>✅ Online Medical Advice</li>
              </ul>
              <p className="text-green-700 mt-4 font-medium">
                Medical guidance anytime • Faster treatment decisions
              </p>
            </div>
          </div>

          {/* EMR & REMINDERS */}
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">
                📄 Emergency Medical Records (EMR)
              </h3>
              <p className="text-gray-700 mb-4">
                Stores critical information: Blood Group, Allergies,
                Medications, Medical History, Chronic Diseases, Insurance,
                Emergency Contacts, etc.
              </p>
              <p className="text-green-700 font-medium">
                Faster diagnosis • Reduced medical errors • Better emergency
                outcomes
              </p>
            </div>
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">
                ⏰ Smart Health Reminders
              </h3>
              <p className="text-gray-700 mb-4">
                Medicine, pill, refill, and health check-up reminders with
                family notifications.
              </p>
              <p className="text-green-700 font-medium">
                Improved medication compliance • Better chronic disease
                management
              </p>
            </div>
          </div>

          {/* SMART VITAL MONITORING */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              ❤️ Smart Vital Health Status Monitoring
            </h2>
            <p className="text-gray-700 mb-6">
              Reminders and smart alerts for Blood Pressure, Blood Sugar, SpO₂,
              Heart Rate, Weight, and Annual Check-ups.
            </p>
            <p className="text-green-700 font-medium">
              Early disease detection • Preventive healthcare • Improved quality
              of life
            </p>
          </div>

          {/* KEY ADVANTAGES */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              🌟 Key Advantages of LifeOnPlus
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-gray-700">
              {[
                "✅ One Touch Emergency Assistance",
                "✅ One Touch Rescue Support",
                "✅ One Touch Doctor Consultation",
                "✅ One Touch Ambulance Tracking",
                "✅ One Touch Medical Records",
                "✅ Smart Medicine Reminders",
                "✅ Smart Vital Monitoring",
                "✅ GPS Location Sharing",
                "✅ Auto SMS & Auto Calling",
                "✅ Family Safety Network",
                "✅ QR & NFC Enabled Smart Card",
                "✅ Secure Cloud-Based Health Records",
                "✅ 24×7 Healthcare Support",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* PROMISE & BUY NOW */}
          <div className="bg-green-50 border border-green-100 rounded-3xl p-10 text-center">
            <p className="italic text-2xl font-semibold text-green-700 mb-6">
              "Know Today. Protect Tomorrow. Save Lives."
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-green-600 font-medium mb-8">
              <span>💚 One Touch for Health</span>
              <span>💚 One Touch for Safety</span>
              <span>💚 One Touch for Life</span>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-10 py-4 rounded-2xl transition-colors shadow-lg">
              🛒 BUY NOW
            </button>

            <p className="text-gray-600 mt-8">
              Protect Yourself and Your Loved Ones with the LifeOnPlus Digital
              Emergency Health Kit
            </p>
            <p className="text-green-600 font-medium mt-2">
              Your Health. Your Safety. One Touch Away.
            </p>
          </div>
        </div>
      )}
      {service.category === "pharmacy" && (
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold text-green-600 mb-6">Pharmacy</h1>

          <p className="text-lg text-gray-700 mb-8">
            Pharmacy Order: Trusted Medicines Anytime, Anywhere — Right from
            Your LifeOnPlus App.
          </p>

          <h2 className="text-3xl font-semibold text-green-600 mb-4">
            What is this Feature?
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The Pharmacy Order feature on the LifeOnPlus app allows users to
            conveniently browse, select, and order genuine, trusted medicines
            from licensed pharmacies, all from the comfort of their home.
            Whether it's a one-time purchase or a recurring prescription,
            LifeOnPlus ensures doorstep delivery, fast service, and complete
            transparency.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Advantages of this Feature
          </h3>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
            <li>
              <strong>24/7 Accessibility:</strong> No need to step out or wait
              in lines. Place your order anytime, from anywhere.
            </li>

            <li>
              <strong>Verified Pharmacies:</strong> All orders are fulfilled by
              certified and trusted pharmacy partners, ensuring safety and
              authenticity.
            </li>

            <li>
              <strong>Prescription Upload:</strong> Easily upload your
              prescription and get medicines without any hassle.
            </li>

            <li>
              <strong>Smart Reminders:</strong> Get notified when it's time to
              reorder your regular medications.
            </li>

            <li>
              <strong>Discounts & Offers:</strong> Enjoy exclusive prices,
              cashback, and deals available only on LifeOnPlus.
            </li>

            <li>
              <strong>Track Your Orders:</strong> Real-time tracking of your
              orders keeps you informed every step of the way.
            </li>

            <li>
              <strong>Medical History Management:</strong> All your past
              medicine orders are stored securely, making reorders and health
              tracking effortless.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">
            Why Should You Use It?
          </h3>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Managing health shouldn't be stressful. With the LifeOnPlus Pharmacy
            Order feature, you save time, avoid unnecessary exposure, and gain
            peace of mind knowing that your health essentials are just a tap
            away.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            It's not just about convenience—it's about making your healthcare
            journey simpler, safer, and smarter.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-lg font-semibold text-green-700">
              Stay healthy, stay secure—your trusted health partner is just a
              tap away.
            </p>
          </div>

          <div className="mt-8 text-2xl font-bold text-green-600">
            ₹ {service.price}
          </div>
        </div>
      )}

      {service.category === "emt" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            LifeOnPlus Xpress Medical Tests
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            12 Vital Health Tests in Just 10 Minutes
          </p>

          {/* INTRO */}
          <p className="text-gray-700 mb-8 text-lg">
            LifeOnPlus Xpress Medical Tests is a fast, technology-enabled health
            screening solution that performs 12 essential health assessments
            within 10 minutes. All tests are conducted using advanced digital
            devices connected to a Mobile App and Tablet, providing instant
            analysis and reports.
          </p>

          {/* KEY FEATURES */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Key Features
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                12 Vital Health Tests in 10 Minutes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                Instant Digital Reports
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                Reports Available in Multiple Languages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                Mobile App & Tablet-Based Testing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                Quick, Convenient & User-Friendly
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                Real-Time Health Analysis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                Secure Digital Record Storage
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✅</span>
                Ideal for Individuals, Corporates & Health Camps
              </li>
            </ul>
          </div>

          {/* TESTS INCLUDED */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Tests Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "🩺 Anthropometry (Height, Weight, BMI)",
                "🩸 Blood Pressure",
                "💓 Pulse Rate",
                "🧪 Hemoglobin",
                "❤️ ECG Screening",
                "🌡️ Body Temperature",
                "🫁 Oxygen Saturation (SpO₂)",
                "💧 Drinking Water TDS Test",
                "🍬 Blood Sugar Screening",
                "👁️ Vision Test",
                "🫀 Cardiovascular Risk Assessment",
                "🔍 Astigmatism & Vision Analysis",
              ].map((test, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  {test}
                </div>
              ))}
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              How It Works
            </h2>
            <div className="space-y-6">
              {[
                "1. Registration through Mobile App or Tablet",
                "2. Vital Health Tests Conducted",
                "3. Real-Time Data Capture",
                "4. Instant AI-Assisted Analysis",
                "5. Multi-Language Digital Report Generated",
                "6. Secure Storage in LifeOnPlus Health Records",
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 font-semibold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BENEFITS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Benefits
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Early Health Risk Identification</li>
              <li>Fast & Accurate Screening</li>
              <li>Preventive Healthcare Approach</li>
              <li>Digital Health Record Creation</li>
              <li>Convenient for Medical Camps, Corporates & Communities</li>
              <li>Easy-to-Understand Reports in Multiple Languages</li>
            </ul>
          </div>

          {/* TAGLINE */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center mb-10">
            <p className="text-xl font-semibold text-green-700 italic">
              "12 Vital Tests • 10 Minutes • Instant Multi-Language Reports"
            </p>
          </div>

          {/* SHORT BROCHURE VERSION */}
          <div className="text-gray-600 border-l-4 border-green-600 pl-6 py-1">
            <p>
              <strong>LifeOnPlus Xpress Medical Tests</strong> delivers 12
              essential health screenings in just 10 minutes using advanced
              mobile and tablet-based technology. Instant reports are generated
              in multiple languages, helping individuals take proactive steps
              toward better health and wellness.
            </p>
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

      {service.category === "wt" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            Wearable Technologies
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Smart Health Monitoring for a Better Life
          </p>

          {/* WHAT IS WEARABLE TECHNOLOGY */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              What is Wearable Technology?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wearable Technology includes smart devices and wellness products
              designed to be worn on the body to monitor health, fitness,
              comfort, and overall well-being in real time. These innovative
              solutions help individuals stay informed, proactive, and connected
              to their health.
            </p>
          </div>

          {/* WHY USE WEARABLE TECHNOLOGY */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Why Use Wearable Technology?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="text-3xl">❤️</span>
                <div>
                  <p className="font-semibold">Monitor Your Health</p>
                  <p className="text-gray-700">
                    Track vital parameters such as heart rate, blood oxygen
                    (SpO₂), sleep quality, stress levels, activity, and wellness
                    indicators.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🛡️</span>
                <div>
                  <p className="font-semibold">Support Preventive Healthcare</p>
                  <p className="text-gray-700">
                    Receive early health insights and wellness alerts that help
                    you take proactive steps toward better health.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🏃</span>
                <div>
                  <p className="font-semibold">Stay Active & Fit</p>
                  <p className="text-gray-700">
                    Monitor daily activity, steps, calories burned, exercise
                    performance, and recovery progress.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">📱</span>
                <div>
                  <p className="font-semibold">Real-Time Monitoring</p>
                  <p className="text-gray-700">
                    Access health information anytime, anywhere and stay
                    connected to your wellness journey.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:col-span-2">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                <div>
                  <p className="font-semibold">Family Wellness</p>
                  <p className="text-gray-700">
                    Support the health and safety of family members through
                    continuous monitoring and wellness tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WHO CAN BENEFIT */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Who Can Benefit?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium mb-2">👨‍💼 Busy Professionals</p>
                <p className="text-gray-700">
                  Stay on top of your health despite demanding work schedules.
                </p>
              </div>
              <div>
                <p className="font-medium mb-2">👵 Senior Citizens</p>
                <p className="text-gray-700">
                  Easy-to-use solutions for wellness monitoring and daily
                  support.
                </p>
              </div>
              <div>
                <p className="font-medium mb-2">
                  🏃 Fitness Enthusiasts & Athletes
                </p>
                <p className="text-gray-700">
                  Track fitness performance, recovery, sleep quality, and
                  activity levels.
                </p>
              </div>
              <div>
                <p className="font-medium mb-2">
                  ❤️ Individuals Managing Health Conditions
                </p>
                <p className="text-gray-700">
                  Support regular monitoring and healthy lifestyle management.
                </p>
              </div>
              <div>
                <p className="font-medium mb-2">👦 Kids & Teens</p>
                <p className="text-gray-700">
                  Encourage healthy habits, activity tracking, and wellness
                  awareness.
                </p>
              </div>
            </div>
          </div>

          {/* PRODUCT RANGE */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              LifeOnPlus Wearable Product Range
            </h2>

            {/* Smart Devices */}
            <div className="mb-10">
              <h3 className="font-semibold text-lg mb-4">
                Smart Health Devices
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-xl p-5">
                  <p className="font-medium mb-3">⌚ Smart Watches</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                    <li>Heart Rate Monitoring</li>
                    <li>Blood Oxygen (SpO₂)</li>
                    <li>ECG Monitoring</li>
                    <li>Sleep Analysis</li>
                    <li>Activity Tracking</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-5">
                  <p className="font-medium mb-3">📿 Fitness Bands</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                    <li>Step Tracking</li>
                    <li>Calorie Monitoring</li>
                    <li>Exercise Tracking</li>
                    <li>Daily Activity Reports</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-5">
                  <p className="font-medium mb-3">💍 Smart Health Rings</p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                    <li>Sleep Monitoring</li>
                    <li>Stress Analysis</li>
                    <li>Recovery Tracking</li>
                    <li>Wellness Insights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Wellness Wearables */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Energia Wellness Wearables
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-xl p-5">
                  <p className="font-medium mb-2">
                    👕 Energia Wellness T-Shirt
                  </p>
                  <p className="text-sm text-gray-700">
                    Relax. Recharge. Feel Comfortable.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5 mt-3">
                    <li>Supports chest comfort</li>
                    <li>Helps promote relaxation</li>
                    <li>Ideal for daily use</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-5">
                  <p className="font-medium mb-2">🧦 Energia Wellness Socks</p>
                  <p className="text-sm text-gray-700">
                    Comfort & Support for Active Living
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5 mt-3">
                    <li>Provides additional foot support</li>
                    <li>Ideal for travel and daily activities</li>
                    <li>Supports overall foot wellness</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-5">
                  <p className="font-medium mb-2">🦴 Energia Wellness Corset</p>
                  <p className="text-sm text-gray-700">
                    Relax • Recharge • Rejuvenate
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5 mt-3">
                    <li>Supports posture and comfort</li>
                    <li>Helps maintain daily mobility</li>
                    <li>Designed for everyday wellness</li>
                  </ul>
                </div>
                <div className="border rounded-xl p-5">
                  <p className="font-medium mb-2">
                    🧤 Additional Wellness Products
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                    <li>Caps • Gloves • Compression Supports</li>
                    <li>Wellness Accessories</li>
                    <li>Smart Health Devices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* KEY BENEFITS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Key Benefits of LifeOnPlus Wearable Technologies
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              {[
                "Real-Time Health Monitoring",
                "Wellness & Lifestyle Tracking",
                "Better Health Awareness",
                "Fitness & Activity Insights",
                "Family Wellness Support",
                "Convenient & Easy to Use",
                "Advanced Smart Technology",
                "Supports Preventive Healthcare",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span> {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* VISION & TAGLINE */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
            <p className="text-gray-700 mb-4">
              <strong>LifeOnPlus Vision:</strong> Combining Wearable Technology,
              AI-Powered Insights, and Preventive Healthcare to help individuals
              live healthier, safer, and more informed lives.
            </p>
            <p className="italic text-xl font-semibold text-green-700">
              "Wear Smart. Live Healthy. Stay Connected." 🌿⌚💚
            </p>
          </div>

          {/* FINAL CTA */}
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-gray-700">
              Ready to Upgrade Your Health?
            </p>
            <p className="text-green-600 mt-2">
              Discover the future of preventive healthcare with LifeOnPlus
              Wearable Technologies. 🚀🌍💚
            </p>
          </div>
        </div>
      )}

      {service.category === "rpmt" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            Remote Patient Monitoring (RPM) Technology
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Continuous Healthcare. Anytime. Anywhere.
          </p>

          {/* WHAT IS RPM */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              What is Remote Patient Monitoring?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Remote Patient Monitoring (RPM) is an advanced healthcare
              technology that uses smart connected devices, wearable sensors,
              and AI-powered platforms to continuously monitor a person's health
              in real time. Vital health data is securely transmitted to
              healthcare professionals, caregivers, and family members, enabling
              proactive health management and timely intervention.
            </p>
          </div>

          {/* WHAT CAN BE MONITORED */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              What Can Be Monitored?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "❤️ Heart Rate Monitoring",
                "🩸 Blood Pressure Monitoring",
                "🫁 Blood Oxygen (SpO₂) Monitoring",
                "🍬 Blood Glucose Monitoring",
                "📈 ECG Monitoring",
                "🌡️ Body Temperature Monitoring",
                "😴 Sleep & Recovery Tracking",
                "🚶 Activity & Mobility Monitoring",
                "⚕️ Chronic Disease Management",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* KEY BENEFITS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="text-3xl">⏰</span>
                <div>
                  <p className="font-semibold">24/7 Health Monitoring</p>
                  <p className="text-gray-700">
                    Continuous tracking of vital health parameters anytime,
                    anywhere.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🚨</span>
                <div>
                  <p className="font-semibold">
                    Early Detection of Health Risks
                  </p>
                  <p className="text-gray-700">
                    Identify potential health issues before they become
                    emergencies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">👨‍👩‍👧</span>
                <div>
                  <p className="font-semibold">Peace of Mind for Families</p>
                  <p className="text-gray-700">
                    Family members can stay informed about their loved one's
                    health status.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">👨‍⚕️</span>
                <div>
                  <p className="font-semibold">Remote Doctor Monitoring</p>
                  <p className="text-gray-700">
                    Doctors and healthcare professionals can review patient data
                    remotely.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🎯</span>
                <div>
                  <p className="font-semibold">Better Treatment Outcomes</p>
                  <p className="text-gray-700">
                    Accurate health data supports informed healthcare decisions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🏥</span>
                <div>
                  <p className="font-semibold">
                    Fewer Emergency Hospital Visits
                  </p>
                  <p className="text-gray-700">
                    Timely intervention helps reduce unnecessary hospital
                    admissions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:col-span-2">
                <span className="text-3xl">📱</span>
                <div>
                  <p className="font-semibold">Real-Time Alerts</p>
                  <p className="text-gray-700">
                    Instant notifications when abnormal readings are detected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WHO SHOULD USE */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Who Should Use Remote Patient Monitoring?
            </h2>

            <div className="space-y-8">
              <div>
                <p className="font-medium mb-3">❤️ Chronic Disease Patients</p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm pl-6 list-disc">
                  <li>Diabetes</li>
                  <li>Hypertension</li>
                  <li>Heart Disease</li>
                  <li>Respiratory Conditions</li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-3">👵 Senior Citizens</p>
                <ul className="text-gray-700 text-sm pl-6 list-disc">
                  <li>Regular vital monitoring</li>
                  <li>Fall-risk management</li>
                  <li>Improved independent living</li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-3">🏥 Post-Surgery Patients</p>
                <ul className="text-gray-700 text-sm pl-6 list-disc">
                  <li>Recovery monitoring</li>
                  <li>Progress tracking</li>
                  <li>Reduced hospital visits</li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-3">👨‍💼 Busy Professionals</p>
                <ul className="text-gray-700 text-sm pl-6 list-disc">
                  <li>Convenient health monitoring without clinic visits</li>
                  <li>Preventive healthcare support</li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-3">👨‍👩‍👧 Home Caregivers</p>
                <ul className="text-gray-700 text-sm pl-6 list-disc">
                  <li>Monitor patient health remotely</li>
                  <li>Receive alerts and updates instantly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              How It Works
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "Step 1",
                  title: "Wear or connect a smart monitoring device",
                  items: [
                    "Smart Watch",
                    "ECG Monitor",
                    "Blood Pressure Monitor",
                    "Glucose Monitor",
                    "Pulse Oximeter",
                  ],
                },
                {
                  step: "Step 2",
                  title:
                    "Device automatically syncs with the LifeOnPlus App through Bluetooth or Wi-Fi.",
                },
                {
                  step: "Step 3",
                  title:
                    "Health data is securely stored in the LifeOnPlus Digital Health Platform.",
                },
                {
                  step: "Step 4",
                  title:
                    "Doctors, Health Coaches, and Family Members can access authorized health information.",
                },
                {
                  step: "Step 5",
                  title:
                    "Automatic alerts are generated when abnormal health readings are detected.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center flex-shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{item.step}</p>
                    <p className="text-gray-700">{item.title}</p>
                    {item.items && (
                      <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                        {item.items.map((it, idx) => (
                          <li key={idx}>{it}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ECOSYSTEM */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              LifeOnPlus Remote Monitoring Ecosystem
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              {[
                "✅ Mobile App Integration",
                "✅ Global Digital Health Smart Card Integration",
                "✅ Emergency Alert System",
                "✅ One-Touch Doctor Consultation",
                "✅ GPS-Enabled Emergency Support",
                "✅ Health Records Management",
                "✅ AI-Based Health Insights",
                "✅ Multi-User Family Monitoring",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* AVAILABILITY & TAGLINE */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <p className="font-medium">Available Through LifeOnPlus</p>
              <p className="text-gray-700 mt-2">
                🏥 At your nearest LifeOnPlus Franchise Outlet
                <br />
                📱 Download the LifeOnPlus App
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Available on Google Play Store &amp; Apple App Store
              </p>
            </div>

            <p className="italic text-xl font-semibold text-green-700 mb-6">
              "Monitor Today. Prevent Tomorrow. Stay Connected with LifeOnPlus."
              💚📱🏥🌍
            </p>
          </div>
        </div>
      )}

      {service.category === "sep" && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-8">
            Scalar Energy Products
          </h1>

          <p className="text-gray-700 mb-6">
            Scalar Energy Is A Unique, Zero-Point Energy Form Discovered By
            Nikola Tesla. These Products Are Infused With Scalar Frequencies
            That Help Balance The Body's Energy Field And Enhance Natural
            Healing.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Benefits
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Boosts Cellular Energy And Immunity</li>
            <li>Reduces Pain, Inflammation, And Fatigue</li>
            <li>Neutralizes Harmful EMF Radiation</li>
            <li>Enhances Blood Flow, Hydration, And Oxygenation</li>
            <li>Promotes Relaxation And Quality Sleep</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Who Should Use It?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Busy Professionals Under Stress</li>
            <li>Elderly Individuals Seeking Better Mobility And Vitality</li>
            <li>Children And Teens Exposed To Screen Time</li>
            <li>Athletes And Fitness Enthusiasts</li>
            <li>Anyone Looking For Natural Energy Support</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Popular Scalar Products At LifeOnPlus
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Scalar Energy Pendants &amp; Bracelets</li>
            <li>Scalar Water Bottles</li>
            <li>Scalar Energy Plates For Food/Water</li>
            <li>Scalar EMF Shields For Phones And Laptops</li>
            <li>Scalar Sleep Pads &amp; Mattresses</li>
          </ul>
        </div>
      )}
      {service.category === "sct" && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-8">
            Skin Carotenoid Test
          </h1>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Know Your Body's Defense Power!
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            What is it?
          </h3>
          <p className="text-gray-700 mb-8">
            A quick, non-invasive scan that measures antioxidant levels in your
            skin — your first line of defense against disease and aging.
          </p>

          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Why Take It?
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Detect nutritional deficiencies early</li>
            <li>Prevent lifestyle-related health issues</li>
            <li>Evaluate how effective your diet or supplements are</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Who Should Take It?
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Busy professionals</li>
            <li>Seniors</li>
            <li>Health-conscious individuals</li>
            <li>People managing chronic illness</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Benefits
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Instant results</li>
            <li>Painless &amp; safe</li>
            <li>Personalized health suggestions</li>
            <li>Track your wellness over time</li>
          </ul>
        </div>
      )}

      {service.category === "ak" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            LifeOnPlus Advanced Health Kiosk
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Smart Self-Service Healthcare Station
          </p>

          {/* WHAT IS ADVANCED KIOSK */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              What is a LifeOnPlus Advanced Kiosk?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The LifeOnPlus Advanced Kiosk is an AI-enabled self-service health
              screening station that combines digital healthcare, preventive
              diagnostics, and health record management in one easy-to-use
              platform. Users can perform quick health assessments, access
              reports, and connect with healthcare services through a
              touchscreen interface.
            </p>
          </div>

          {/* KEY FEATURES */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Smart Digital Interface */}
              <div>
                <p className="font-semibold text-lg mb-3 flex items-center gap-2">
                  📱 Smart Digital Interface
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>User-friendly touchscreen</li>
                  <li>Multi-language support</li>
                  <li>Voice-assisted navigation</li>
                </ul>
              </div>

              {/* Health Screening */}
              <div>
                <p className="font-semibold text-lg mb-3 flex items-center gap-2">
                  🩺 Health Screening & Monitoring
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Blood Pressure Monitoring</li>
                  <li>Blood Sugar Screening</li>
                  <li>Pulse Rate Monitoring</li>
                  <li>Oxygen Saturation (SpO₂)</li>
                  <li>Body Temperature</li>
                  <li>BMI & Weight Analysis</li>
                  <li>Quick Health Risk Assessment</li>
                </ul>
              </div>

              {/* Advanced Technologies */}
              <div>
                <p className="font-semibold text-lg mb-3 flex items-center gap-2">
                  🤖 Advanced Technologies
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>AI-Powered Health Insights</li>
                  <li>Non-Invasive Health Screening</li>
                  <li>Digital Health Smart Card Integration</li>
                  <li>QR Code & Mobile App Connectivity</li>
                  <li>Cloud-Based Health Record Storage</li>
                </ul>
              </div>

              {/* Instant Reporting */}
              <div>
                <p className="font-semibold text-lg mb-3 flex items-center gap-2">
                  🖨️ Instant Reporting
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Real-time report generation</li>
                  <li>Thermal printer support</li>
                  <li>Mobile App report access</li>
                  <li>Multi-language digital reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              How It Works
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "Step 1",
                  title: "Register using:",
                  items: ["Mobile Number", "QR Code", "LifeOnPlus Smart Card"],
                },
                {
                  step: "Step 2",
                  title: "Complete health screening using integrated devices.",
                },
                {
                  step: "Step 3",
                  title:
                    "Data is analyzed instantly through the LifeOnPlus platform.",
                },
                {
                  step: "Step 4",
                  title: "Receive instant reports and health recommendations.",
                },
                {
                  step: "Step 5",
                  title:
                    "Reports are securely stored in your LifeOnPlus Digital Health Record.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center flex-shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{item.step}</p>
                    <p className="text-gray-700">{item.title}</p>
                    {item.items && (
                      <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                        {item.items.map((it, idx) => (
                          <li key={idx}>{it}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BENEFITS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "✅ Quick & Convenient Health Screening",
                "✅ No Appointment Required",
                "✅ Affordable Preventive Healthcare",
                "✅ Early Risk Detection",
                "✅ Digital Health Record Creation",
                "✅ AI-Based Health Insights",
                "✅ Available 24×7",
                "✅ Supports Community & Corporate Wellness Programs",
              ].map((benefit, i) => (
                <div key={i} className="text-gray-700">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* SETUP REQUIREMENTS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Setup Requirements
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li>🏢 Indoor Installation</li>
              <li>⚡ Power Supply Required</li>
              <li>🌐 Internet Connectivity</li>
              <li>📏 Minimum 3 ft × 3 ft Floor Space</li>
              <li>🛠️ Installation & Maintenance by LifeOnPlus</li>
            </ul>
          </div>

          {/* WHO CAN USE IT */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Who Can Use It?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>👨‍💼 Corporate Employees</div>
              <div>👵 Senior Citizens</div>
              <div>🏃 Fitness Enthusiasts</div>
              <div>👨‍👩‍👧 Families</div>
              <div>🏥 Clinics & Hospitals</div>
              <div>🏭 Industries & Factories</div>
              <div>🏫 Educational Institutions</div>
              <div>🌍 Community Health Programs</div>
            </div>
          </div>

          {/* INTEGRATED ECOSYSTEM */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Integrated with LifeOnPlus Ecosystem
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-gray-700">
              {[
                "💳 Global Digital Health Smart Card",
                "📱 LifeOnPlus Mobile App",
                "🚑 Emergency Health Services",
                "👨‍⚕️ Doctor Consultation",
                "📂 Digital Medical Records",
                "🔔 Health Alerts & Reminders",
              ].map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>

          {/* FINAL HIGHLIGHT */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
            <p className="italic text-xl font-semibold text-green-700">
              Smart Self-Service Healthcare at Your Fingertips
            </p>
            <p className="text-gray-600 mt-4">
              Experience the future of preventive health with LifeOnPlus
              Advanced Health Kiosk.
            </p>
          </div>
        </div>
      )}
      {service.category === "aih" && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-8">
            Artificial Intelligence (AI)
          </h1>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            What is AI in Healthcare?
          </h2>
          <p className="text-gray-700 mb-8">
            Artificial Intelligence (AI) in healthcare refers to the use of
            machine learning algorithms, data analysis, and smart automation to
            support diagnosis, treatment, patient care, and operational
            efficiency in the medical field.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            How is AI Being Applied?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
              Diagnostics: AI detects diseases from imaging (X-rays, MRIs, CT
              scans).
            </li>
            <li>
              Predictive Analytics: Forecasts disease risks (like diabetes,
              heart issues) using patient history.
            </li>
            <li>
              Virtual Assistants: AI chatbots answer health queries or schedule
              appointments.
            </li>
            <li>
              Robot-Assisted Surgeries: Enhances precision during complex
              procedures.
            </li>
            <li>
              Drug Discovery: Speeds up the identification of potential new
              medicines.
            </li>
            <li>
              Remote Patient Monitoring: AI tracks patient vitals and alerts
              healthcare providers.
            </li>
            <li>
              Health Record Management: Smart systems organize and retrieve
              medical data faster.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Countries Actively Using AI in Healthcare
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
              United States: Leading in AI-based diagnostics and robotic
              surgeries.
            </li>
            <li>United Kingdom: NHS using AI for triage and diagnostics.</li>
            <li>
              India: Growing adoption in diagnostics, telemedicine, and rural
              outreach.
            </li>
            <li>
              China: Major investments in AI hospitals and smart health tools.
            </li>
            <li>
              Canada, Germany, UAE, South Korea: Emerging adoption in
              diagnostics, research, and wellness apps.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Benefits of AI in Healthcare
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Early and accurate diagnosis</li>
            <li>Personalized treatment plans</li>
            <li>Faster and more efficient services</li>
            <li>Cost reduction in healthcare delivery</li>
            <li>Bridging the rural-urban healthcare divide</li>
            <li>24/7 virtual care and assistance</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Who Can Use AI in Healthcare?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Doctors and Hospitals</li>
            <li>Diagnostic Labs and Pharmacies</li>
            <li>Health-Tech Startups</li>
            <li>Government Health Systems</li>
            <li>Patients and Caregivers</li>
            <li>Insurance Companies</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            How End Users Can Use AI in Healthcare (via LifeOnPlus)
          </h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-8">
            <li>
              <strong>1. Personalized Health Insights</strong>
              <br />
              AI algorithms in the app analyze your health data (from wearables,
              tests, or answers to health surveys). You receive customized
              alerts, diet tips, and lifestyle advice.
            </li>
            <li>
              <strong>2. Virtual Health Assistants</strong>
              <br />
              In-app AI chatbots help answer medical questions, guide symptoms,
              and recommend next steps. Works 24/7 — ideal for first-line
              guidance before you see a doctor.
            </li>
            <li>
              <strong>3. Predictive Health Alerts</strong>
              <br />
              AI tracks data over time (vitals, test reports, lifestyle input).
              Flags potential future risks like high BP, diabetes, or cardiac
              issues — before symptoms show up.
            </li>
            <li>
              <strong>4. AI-Based Remote Monitoring</strong>
              <br />
              If you’re subscribed to patient monitoring services, AI watches
              over your vitals. Care team or family receives alerts in case of
              abnormal activity.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            LifeOnPlus AI-Powered Health Analysis
          </h2>
          <p className="text-gray-700 mb-4">
            LifeOnPlus offers powerful AI-based health analysis through
            non-invasive tests to help you understand and manage your wellness.
          </p>

          <h3 className="text-xl font-semibold text-green-600 mb-3">
            Our AI Tests Include:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Vital Signs: Real-time monitoring of key body functions</li>
            <li>Heart Rate &amp; Variability</li>
            <li>Breathing Rate</li>
            <li>Blood Pressure</li>
            <li>Parasympathetic Activity %</li>
            <li>Stress Index</li>
            <li>Cardiac Workload</li>
            <li>Body Mass Index (BMI)</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-600 mb-3">
            Health Indices
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Vascular Age &amp; Wellness Score</li>
            <li>Waist-to-Height Ratio</li>
            <li>Basal Metabolic Range</li>
            <li>Body Shape, Fat %, and Roundness Index</li>
            <li>Daily Energy Expenditure</li>
            <li>Conicity Index</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-600 mb-3">
            Health Risks
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Cardiovascular Risk &amp; Event Score</li>
            <li>Atherosclerotic Disease Risk</li>
            <li>Coronary Death Risk</li>
            <li>Peripheral Vascular Risk</li>
            <li>Stroke &amp; Diabetes Risk</li>
          </ul>
        </div>
      )}

      {service.category === "fs" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            LifeOnPlus Food Supplements
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Complete Nutrition for a Healthier Life
          </p>

          {/* INTRODUCTION */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              Food Supplements are nutritional products designed to provide
              essential vitamins, minerals, proteins, herbs, and other nutrients
              that may be missing from your daily diet. Available as tablets,
              capsules, powders, and liquids, they help support overall health,
              wellness, and active living.
            </p>
          </div>

          {/* WHY ARE FOOD SUPPLEMENTS IMPORTANT */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Why Are Food Supplements Important?
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              {[
                "Help bridge nutritional gaps in modern diets",
                "Support immunity and overall wellness",
                "Compensate for nutrient loss due to soil depletion and food processing",
                "Assist people with busy lifestyles and irregular eating habits",
                "Support specific nutritional needs during childhood, pregnancy, and aging",
                "Aid recovery, energy, and healthy body functions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COMMON SUPPLEMENTS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Common LifeOnPlus Food Supplements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "🔹 Multivitamins – Daily nutritional support",
                "🔹 Vitamin D3 – Bone & immune health",
                "🔹 Omega-3 Fish Oil – Heart & brain wellness",
                "🔹 Calcium – Strong bones & teeth",
                "🔹 Iron – Healthy blood formation",
                "🔹 Probiotics – Digestive & gut health",
                "🔹 Protein Supplements – Muscle support & recovery",
                "🔹 Magnesium – Muscle, nerve & stress support",
                "🔹 B-Complex Vitamins – Energy & metabolism support",
                "🔹 Herbal Supplements – Ashwagandha, Turmeric, Curcumin and more",
              ].map((supplement, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                >
                  {supplement}
                </div>
              ))}
            </div>
          </div>

          {/* WHO CAN BENEFIT */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Who Can Benefit?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>👨‍💼 Busy Professionals</div>
              <div>👵 Senior Citizens</div>
              <div>🏃 Fitness Enthusiasts & Athletes</div>
              <div>👩 Women & Pregnant Mothers</div>
              <div>👨‍👩‍👧 Families Seeking Better Nutrition</div>
              <div>🧒 Growing Children & Teenagers</div>
            </div>
          </div>

          {/* LIFEONPLUS ADVANTAGE */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              LifeOnPlus Advantage
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              {[
                "✔ Quality Nutritional Products",
                "✔ Preventive Wellness Focus",
                "✔ Supports Daily Health & Vitality",
                "✔ Easy to Use & Affordable",
                "✔ Complements a Healthy Lifestyle",
              ].map((advantage, i) => (
                <li key={i} className="flex items-start gap-2">
                  {advantage}
                </li>
              ))}
            </ul>
          </div>

          {/* TAGLINE & VISION */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center mb-10">
            <p className="text-xl font-semibold text-green-700 italic">
              Healthy Nutrition. Strong Immunity. Better Living.
            </p>
            <p className="text-gray-700 mt-3">
              LifeOnPlus – Your Partner in Preventive Healthcare &amp; Wellness.
            </p>
          </div>

          {/* DISCLAIMER */}
          <div className="text-xs text-gray-500 border-l-4 border-gray-300 pl-4">
            <strong>Disclaimer:</strong> Food supplements are intended to
            support general nutrition and wellness. They are not intended to
            diagnose, treat, cure, or prevent any disease. Consult a healthcare
            professional before use if you have medical conditions, are
            pregnant, or are taking medication.
          </div>
        </div>
      )}

      {service.category === "md" && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-10">
            Medical Devices
          </h1>

          <p className="text-gray-700 mb-12 text-lg">
            LifeOnPlus offers a comprehensive range of medical devices and
            equipment. Browse our extensive catalog across various categories.
          </p>

          {/* Two Column Grid of Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  ECG MACHINE
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  AUTOCLAVE / STERILIZER
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  CUTERY & ELECTROSURGERY TOURNIQUETS MISCELLANEOUS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  PULSE OXIMETER
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">ENT</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  DIGITAL ASSIST SYRINGE / INFUSION PUMPS DIABETIC PRODUCTS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  PATIENT MONITORS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  OBSTETRICS & GYNAECOLOGY
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  HAND INSTRUMENTS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  SKIN STAPLERS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  FIRST AID & SAFETY
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  UTERINE & PELVIC SURGERY
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  STONE RETRIEVAL BASKET
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  COLD CHAIN EQUIPMENT
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">SUTURES</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  DIAGNOSTICS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  HERNIA REPAIR
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  MEDICAL RUBBER PRODUCTS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  ANALYZER ONE TOUCH ACCU-CHEK
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  DENTAL HAND PIECES
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  LAPROSCOPY
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  HYSTEROSCOPY
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">LIGHTS</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  INCONTINENCE
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">UROLOGY</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">ORTHO</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  PEDIATRICS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">ENT</h3>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  MEDICAL LIGHTS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  SUCTION UNIT
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  LABORATORY EQUIPMENT
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  AED / DEFIBRILLATORS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  ANAESTHESIA
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  DIABETIC PRODUCTS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  HOSPITAL FURNITURE
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  SCALES & MEASURES
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  WOUND CARE & DRESSINGS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  HOSPITAL SCRUBS & LINENS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  BY SPECIALITY
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">HEMOSTATS</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  LABORATORY TEST KITS
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  DISPOSABLES
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">STENTS</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  INFECTION PREVENTION
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">X-RAY</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">DIABETES</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  DIABETIC NEUROPATHY
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  BY SPECIALITY
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  RESPIRATORY CARE
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  ANESTHESIOLOGY
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  CARDIO VASCULAR
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  SLEEP APNEA
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">OSTOMY</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  INFECTION & PREVENTION
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">
                  OPHTHALMOLOGY
                </h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-700 mb-2">BOOKS</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      {service.category === "dc" && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-8">
            Doctor Consultation
          </h1>

          <p className="text-gray-700 mb-8">
            Online Doctor Consultation: Online Doctor Consultation, also known
            as Telemedicine, allows patients to consult with certified doctors
            remotely using smartphones, computers, or tablets. This service
            provides medical advice, diagnoses, and even prescriptions without
            needing a physical visit to a clinic or hospital.
          </p>

          <p className="text-gray-700 mb-10">
            In Person Doctor Consultation: Direct visits to clinics or hospitals
            to seek expert help.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-6">
            Key Features:
          </h2>

          <h3 className="text-xl font-semibold text-green-600 mb-4">
            LifeOnPlus Doctor Consultation – Online & In-Person
          </h3>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-12">
            <li>
              <strong>24/7 Online Consultation</strong> – Talk to certified
              doctors anytime, anywhere.
            </li>
            <li>
              <strong>In-Person Clinic & Hospital Visits</strong> – Book
              consultations at partner hospitals & clinics.
            </li>
            <li>
              <strong>Exclusive Discounts</strong> – Enjoy special pricing on
              doctor visits.
            </li>
            <li>
              <strong>Priority Appointments</strong> – Get faster access to top
              specialists.
            </li>
            <li>
              <strong>100% Confidential & Secure</strong> – Your health data is
              always protected.
            </li>
          </ul>

          <p className="text-green-700 font-medium text-lg mb-8">
            Your Health, Your Choice – Anytime, Anywhere!
          </p>
        </div>
      )}
      {service.category === "ht" && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-8">
            Health Tech
          </h1>

          <h2 className="text-2xl font-semibold text-green-600 mb-6">
            Transform Your Hospital Management with LifeOnPlus
          </h2>

          <p className="text-gray-700 mb-10">
            LifeOnPlus offers comprehensive software and hardware solutions
            designed to streamline operations, improve patient care, and boost
            efficiency. Tailored to meet the unique needs of your hospital, our
            integrated platform covers every aspect of hospital management,
            ensuring seamless coordination across departments.
          </p>

          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Key Features:
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
            <li>
              <strong>Hospital Management Software (HMS):</strong> Streamlines
              patient management (OPD & IPD), billing, appointment scheduling,
              and electronic health records.
            </li>
            <li>
              <strong>Patient Monitoring Systems:</strong> Real-time tracking of
              patient vitals and health status for both OPD and IPD.
            </li>
            <li>
              <strong>Asset Management:</strong> Efficient tracking of medical
              equipment, inventory, and assets using IoT, RFID, and predictive
              maintenance.
            </li>
            <li>
              <strong>Laboratory & Pharmacy Management:</strong> Automated
              systems for lab testing, patient samples, and medication
              inventory.
            </li>
            <li>
              <strong>Housekeeping & Waste Management:</strong> Efficient
              monitoring of hospital cleanliness and waste disposal protocols.
            </li>
            <li>
              <strong>Dietary Management:</strong> Personalized nutritional
              planning for inpatients to ensure proper recovery.
            </li>
            <li>
              <strong>Customer Care:</strong> Enhance patient experience through
              seamless communication and engagement tools.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Why Choose LifeOnPlus?
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-12">
            <li>
              <strong>Customizable Solutions:</strong> We tailor our offerings
              to your hospital’s specific requirements, ensuring optimal
              performance.
            </li>
            <li>
              <strong>Integrated Technology:</strong> Our software and hardware
              systems work together to provide a comprehensive management
              solution.
            </li>
            <li>
              <strong>Seamless Implementation:</strong> Easy integration with
              your existing infrastructure, ensuring minimal disruption.
            </li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Get Started Today!
            </h3>
            <p className="text-gray-700 mb-4">
              Transform your hospital with LifeOnPlus and focus on what matters
              most — your patients. Contact us today to learn how we can help
              streamline your operations and enhance patient care.
            </p>
          </div>
        </div>
      )}
      {service.category === "aes" && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-8">
            Accessing Emergency Services
          </h1>

          <p className="text-gray-700 mb-8">
            In Life's Most Critical Moments, Every Second Matters. LifeOnPlus
            brings together essential emergency services — Ambulance, Air
            Ambulance, Blood and Organ Matching, First Responders, Police, and
            Fire Support — into one seamless app. Whether it's a health
            emergency or a public safety crisis, help is just a tap away.
          </p>

          <p className="text-gray-700 mb-12">
            Download the LifeOnPlus App and subscribe to become a member to
            access priority support, discounted services, and a growing
            ecosystem of health and emergency care.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-8">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🚑</div>
              <h3 className="font-semibold text-green-700 mb-2">
                Road Ambulance
              </h3>
              <p className="text-gray-600 text-sm">
                Swift medical help, right at your doorstep.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🚁</div>
              <h3 className="font-semibold text-green-700 mb-2">
                Air Ambulance
              </h3>
              <p className="text-gray-600 text-sm">
                Critical care that flies to save lives.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🩸</div>
              <h3 className="font-semibold text-green-700 mb-2">
                Blood & Plasma Requirement
              </h3>
              <p className="text-gray-600 text-sm">
                Book lifesaving blood and plasma in seconds.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-semibold text-green-700 mb-2">
                Organ Donation Match
              </h3>
              <p className="text-gray-600 text-sm">
                Connecting donors to save lives.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-green-700 mb-2">
                First Responder Needed
              </h3>
              <p className="text-gray-600 text-sm">
                Be the help before help arrives.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🚔</div>
              <h3 className="font-semibold text-green-700 mb-2">Police</h3>
              <p className="text-gray-600 text-sm">
                Secure response when safety is at risk.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="font-semibold text-green-700 mb-2">Fire</h3>
              <p className="text-gray-600 text-sm">
                Rapid action when every second counts.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-green-600 mb-6">
            Do's and Don'ts Before Help Arrives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="font-semibold text-green-700 mb-4">Do's:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Stay calm and assess the situation.</li>
                <li>Ensure your safety before helping others.</li>
                <li>
                  Call emergency services or use the LifeOnPlus app for
                  immediate assistance.
                </li>
                <li>
                  Apply basic first aid if trained (stop bleeding, perform CPR,
                  etc.).
                </li>
                <li>Keep the patient conscious and reassured.</li>
                <li>Share accurate location and details with responders.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-700 mb-4">Don'ts:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Don't move the injured unless there's immediate danger.</li>
                <li>Don't crowd the scene — give responders space.</li>
                <li>
                  Don't give food, drink, or medications unless instructed.
                </li>
                <li>Don't delay contacting help by trying to manage alone.</li>
              </ul>
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
            well-being through advanced non-invasive German technologies.
          </p>

          {/* AcuGraph Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              A) AcuGraph Energy Analysis
            </h2>
            <p className="text-gray-700 mb-4">
              AcuGraph Energy Health Screening is a non-invasive assessment that
              measures the energy balance of the body's acupuncture meridians.
              It helps identify energy imbalances that may affect overall health
              and wellness.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Assesses energy flow across major body meridians</li>
                  <li>Detects imbalances before symptoms become serious</li>
                  <li>
                    Supports preventive healthcare and wellness management
                  </li>
                  <li>Helps monitor the effectiveness of treatments</li>
                  <li>
                    Provides personalized insights for better health decisions
                  </li>
                  <li>
                    Useful during stress, lifestyle changes, and environmental
                    challenges
                  </li>
                  <li>
                    Promotes improved energy, vitality, and overall well-being
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <p className="italic text-green-600 font-medium">
                  "Know Your Energy. Balance Your Health. Live Better." 🌿💚
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  AcuGraph Energy Analysis is a safe, non-invasive screening
                  that evaluates the body's energy flow through 12 meridians,
                  helping detect imbalances early and supporting proactive
                  health and wellness management.
                </p>
              </div>
            </div>
          </div>

          {/* Power Detox Section */}
          <div className="mb-12 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              B) Power Detox Therapy (German Technology – Advanced Foot Detox)
            </h2>
            <p className="text-gray-700 mb-4">
              Power Detox Therapy is a non-invasive wellness treatment that uses
              advanced iontophoresis and electrolysis technology to support the
              body's natural detoxification process. By helping improve
              circulation and cellular function, it promotes relaxation, energy,
              and overall well-being.
            </p>

            <h3 className="font-semibold mb-2">Key Benefits:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
              <li>Supports natural detoxification</li>
              <li>Helps improve blood and lymphatic circulation</li>
              <li>Enhances energy and vitality</li>
              <li>Promotes relaxation and stress relief</li>
              <li>Supports immune system function</li>
              <li>May help reduce muscle and joint discomfort</li>
              <li>Improves overall wellness and rejuvenation</li>
              <li>Helps maintain healthy body balance</li>
            </ul>

            <div className="bg-green-50 p-5 rounded-xl mb-4">
              <p className="font-medium mb-1">How It Works</p>
              <p className="text-gray-700">
                The therapy uses ionized water technology to stimulate the
                body's natural detox pathways, supporting the removal of waste
                products while promoting circulation and relaxation.
              </p>
            </div>

            <div className="flex items-center gap-4 text-lg">
              <span className="font-semibold">Package:</span>
              <span>Power Detox Therapy Session</span>
              <span className="font-bold text-green-600">
                ₹1,500 + Applicable Taxes
              </span>
            </div>

            <p className="italic text-green-600 mt-4">
              "Detox. Recharge. Rejuvenate." 🌿
            </p>

            <p className="text-xs text-gray-500 mt-6">
              <strong>Disclaimer:</strong> Power Detox Therapy is a wellness
              service designed to support relaxation and overall well-being.
              Individual experiences may vary. It is not intended to diagnose,
              treat, cure, or prevent any disease and should not replace
              professional medical advice or treatment.
            </p>
          </div>

          {/* Energia Power Recharge Section */}
          <div className="mb-12 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              C) Energia Power Recharge Therapy
            </h2>
            <p className="text-amber-600 font-medium mb-1">
              Powered by Advanced German Technology
            </p>
            <p className="text-gray-700 mb-4">
              Energia Power Recharge Therapy combines Cell Therapy, Light
              Therapy, and Sound Therapy to support relaxation, energy
              enhancement, and overall wellness. This non-invasive wellness
              experience helps promote physical rejuvenation, mental relaxation,
              and healthy lifestyle support.
            </p>

            <h3 className="font-semibold mb-2">Key Benefits:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6">
              <li>Enhances energy and vitality</li>
              <li>Promotes relaxation and stress management</li>
              <li>Supports restful sleep and recovery</li>
              <li>Encourages mental focus and concentration</li>
              <li>Helps improve overall wellness and balance</li>
              <li>Non-invasive and comfortable therapy</li>
            </ul>

            <h3 className="font-semibold mb-3">Who Can Benefit?</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium mb-2">👨‍💼 Business Professionals</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Supports focus and productivity</li>
                  <li>Helps manage daily stress</li>
                  <li>Encourages mental relaxation</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">
                  🏃 Athletes & Fitness Enthusiasts
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Supports pre- and post-workout recovery</li>
                  <li>Promotes relaxation and well-being</li>
                  <li>Helps maintain active lifestyles</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">👵 Older Adults</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Supports mobility and flexibility</li>
                  <li>Encourages vitality and wellness</li>
                  <li>Promotes relaxation and comfort</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">🌿 General Wellness</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Supports energy balance</li>
                  <li>Encourages relaxation</li>
                  <li>Promotes healthy lifestyle habits</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4 text-lg mt-8">
              <span className="font-semibold">Therapy Package:</span>
              <span>Energia Power Recharge Therapy Session</span>
              <span className="font-bold text-green-600">
                ₹1,500 + Applicable Taxes
              </span>
            </div>

            <p className="italic text-green-600 mt-4">
              "Recharge Your Body. Relax Your Mind. Revitalize Your Life." 🌿⚡
            </p>

            <p className="text-sm text-gray-600 mt-4">
              Energia Power Recharge Therapy integrates Cell Therapy, Light
              Therapy, and Sound Therapy to support relaxation, energy
              enhancement, stress management, restful sleep, and overall
              wellness through advanced non-invasive technology.
            </p>

            <p className="text-xs text-gray-500 mt-6">
              <strong>Disclaimer:</strong> Energia Power Recharge Therapy is a
              wellness service intended to support relaxation and general
              well-being. Individual experiences may vary. It is not intended to
              diagnose, treat, cure, or prevent any disease and should not
              replace professional medical advice or treatment.
            </p>
          </div>

          {/* Overall Benefits & Who Can Benefit */}
          <div className="border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of the Body Recharge Station
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-10">
              <li>Boosts energy levels and daily performance</li>
              <li>Supports natural detoxification and toxin removal</li>
              <li>Strengthens overall wellness and vitality</li>
              <li>Reduces stress, fatigue, and mental exhaustion</li>
              <li>
                Promotes holistic physical, emotional, and mental well-being
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Who Can Benefit?</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Individuals experiencing chronic fatigue or stress</li>
              <li>Professionals looking to enhance productivity and focus</li>
              <li>Fitness enthusiasts seeking faster recovery</li>
              <li>People interested in preventive healthcare and wellness</li>
              <li>Anyone seeking a natural way to recharge and rejuvenate</li>
            </ul>
          </div>
        </div>
      )}
      {service.category === "qhc" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Quick Health Check-up – A Smarter Step Toward Preventive Wellness
          </h1>

          {/* INTRO */}
          <p className="text-gray-700 mb-6">
            Your health deserves timely attention — not just when symptoms
            arise, but even before they appear. Quick Health Check-up plays a
            vital role in preventive wellness.
          </p>

          {/* WHAT IS SECTION */}
          <h2 className="text-2xl font-semibold mb-3">
            What is a Quick Health Check-up?
          </h2>

          <p className="text-gray-700 mb-4">
            A quick health check-up is a fast, non-invasive screening that gives
            an overview of your general health status and key parameters.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
            <li>Blood pressure</li>
            <li>Pulse rate</li>
            <li>Blood sugar (random)</li>
            <li>BMI (Body Mass Index)</li>
            <li>Oxygen saturation (SpO2)</li>
            <li>Temperature</li>
            <li>Basic vital screening</li>
          </ul>

          {/* BENEFITS */}
          <h2 className="text-2xl font-semibold mb-3">
            Benefits of Quick Health Check-up
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
            <li>Early detection of diseases</li>
            <li>Time-saving & convenient</li>
            <li>Affordable preventive care</li>
            <li>Encourages healthy lifestyle habits</li>
            <li>Quick and reliable health insights</li>
          </ul>

          {/* WHO SHOULD USE */}
          <h2 className="text-2xl font-semibold mb-3">Who Should Use This?</h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
            <li>Working professionals</li>
            <li>Elderly individuals</li>
            <li>Students</li>
            <li>Corporate employees</li>
            <li>Anyone focused on preventive health</li>
          </ul>

          {/* PROCESS */}
          <h2 className="text-2xl font-semibold mb-3">How the Process Works</h2>

          <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-6">
            <li>Register via LifeOnPlus app</li>
            <li>Visit or schedule health camp</li>
            <li>Basic screening is done</li>
            <li>Get instant digital report</li>
            <li>Doctor consultation if needed</li>
          </ol>

          {/* SERVICES */}
          <h2 className="text-2xl font-semibold mb-3">Included Services</h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
            <li>Health & wellness camps</li>
            <li>Screening at clinics / camps</li>
            <li>Community health programs</li>
          </ul>

          {/* CORE CHECKUP */}
          <h2 className="text-2xl font-semibold mb-3">
            Quick Health Check-up Components
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
            <li>Non-invasive testing</li>
            <li>Fast results (within minutes)</li>
            <li>Digital report generation</li>
          </ul>

          {/* SUB SECTIONS */}
          <h3 className="text-xl font-semibold mb-2">Advanced ECG</h3>

          <p className="text-gray-700 mb-4">
            Detects heart rhythm abnormalities and cardiovascular risk
            indicators.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Vascular & Biological Age
          </h3>

          <p className="text-gray-700 mb-4">
            Helps evaluate arterial health and biological aging patterns.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Blood Capillary & Circulation
          </h3>

          <p className="text-gray-700 mb-6">
            Evaluates blood flow, oxygen delivery, and circulation efficiency.
          </p>
        </div>
      )}
      <img
        src={service.imageSrc}
        alt={service.course}
        className="w-full max-w-xl mt-5 rounded-lg"
      />
    </div>
  );
}
