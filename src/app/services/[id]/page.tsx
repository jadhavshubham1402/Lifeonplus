"use client";
import withBasePath from "@/utils/basePath";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServiceDetails() {
  const params = useParams();
  const id = String(params.id);
  // -------------------------------------------------------------
  const [courseDetail, setCourseDetail] = useState<any>([]);
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

      {service.category === "wt" && (
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold text-green-600 mb-6">
            Wearable Technology
          </h1>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            What is Wearable Technology?
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Wearable technology includes smart devices worn on the body that
            track health, fitness, and wellness in real time. These include
            smartwatches, fitness bands, health rings, ECG monitors, and more.
          </p>

          <h3 className="text-xl font-semibold mb-4">Why Should We Use It?</h3>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
            <li>
              <strong>Track Your Health:</strong> Monitor heart rate, oxygen
              levels, sleep quality, stress, and even ECG.
            </li>

            <li>
              <strong>Preventive Care:</strong> Get alerts before problems occur
              with AI-powered health insights.
            </li>

            <li>
              <strong>Stay Fit:</strong> Stay motivated with step counters,
              calorie trackers, and workout logs.
            </li>

            <li>
              <strong>Real-Time Monitoring:</strong> Keep yourself and your
              family safe with 24/7 health data.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">
            Who Should Use Wearable Tech?
          </h3>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
            <li>
              <strong>Busy Professionals:</strong> Stay on top of your health
              despite a hectic schedule.
            </li>

            <li>
              <strong>Seniors:</strong> Easy-to-use devices for monitoring
              vitals and fall detection.
            </li>

            <li>
              <strong>Fitness Enthusiasts:</strong> Get deeper insights into
              workouts and recovery.
            </li>

            <li>
              <strong>Chronic Patients:</strong> Regular updates on blood
              pressure, sugar, and other health parameters.
            </li>

            <li>
              <strong>Kids & Teens:</strong> Sleep tracking, safe zone alerts,
              and screen time management.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Available Products</h3>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
            <li>Smartwatches with BP, SpO2 and ECG monitoring</li>
            <li>Fitness bands for activity tracking and calorie monitoring</li>
            <li>Health rings with sleep and stress analytics</li>
            <li>Posture correction wearables</li>
            <li>Fall detection and emergency alert devices</li>
            <li>Kids smart trackers with GPS and health features</li>
            <li>
              Short Sleeve White T-Shirt for people suffering from insomnia,
              providing comfort and relaxation.
            </li>
            <li>
              Smart health socks offering enhanced support throughout the day.
            </li>
            <li>
              Energia Corset for body aches — helps relax, recharge and
              rejuvenate.
            </li>
            <li>And many more innovative wearable solutions.</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Ready to Upgrade Your Health?
            </h3>

            <p className="text-gray-700">
              Explore smart wearable technologies that help you monitor,
              improve, and maintain your health anytime, anywhere.
            </p>
          </div>
        </div>
      )}

      {service.category === "rpmt" && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-8">
            Remote Patient Monitoring Technology
          </h1>

          <p className="text-gray-700 mb-6">
            Patient Monitoring Technology includes smart, connected devices and
            AI-driven platforms that continuously track vital signs and health
            metrics such as heart rate, blood pressure, oxygen levels, glucose,
            ECG, and more in real time. This data is securely shared with
            doctors, caregivers, or healthcare platforms for ongoing care and
            early detection of risks.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Benefits
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>24/7 Health Tracking</li>
            <li>Early Detection of Complications</li>
            <li>Peace of Mind for Families</li>
            <li>Remote Monitoring by Doctors</li>
            <li>Improved Treatment Accuracy</li>
            <li>Reduces Emergency Hospital Visits</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Who Should Use It?
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
            <li>Chronic Patients: Diabetes, hypertension, heart conditions</li>
            <li>
              Elderly Individuals: To monitor vitals and avoid hospital
              readmissions
            </li>
            <li>Post-Surgery Patients: For safe and informed recovery</li>
            <li>
              Busy Professionals: For proactive health checks without clinic
              visits
            </li>
            <li>
              Home-Based Caregivers: To track patient conditions from anywhere
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            How It Works
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
            <li>
              Wear or connect the monitoring device (e.g., wearable ECG, BP
              monitor, glucose tracker).
            </li>
            <li>
              The device syncs with the LifeOnPlus App using Bluetooth or Wi-Fi.
            </li>
            <li>
              Data is securely stored and shared with your health coach or
              doctor.
            </li>
            <li>Real-time alerts are sent in case of any abnormalities.</li>
          </ol>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              Available at Your Nearest LifeOnPlus Franchise Outlet
            </h3>

            <p className="text-gray-700 mb-3">
              Download and subscribe to the LifeOnPlus App.
            </p>

            <p className="text-gray-700">
              Available now on <strong>Google Play Store</strong> and{" "}
              <strong>Apple App Store</strong>.
            </p>

            <p className="mt-3 text-green-600 font-medium">
              Visit: www.lifeonplus.com
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
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-8">
            Advanced KIOSK
          </h1>

          <p className="text-gray-700 mb-8">
            An Advanced Kiosk is a self-service digital station equipped with
            integrated hardware and software to deliver health services,
            information, and interactive features. LifeOnPlus kiosks can serve
            as mini health stations offering express check-ups, health reports,
            and wellness product access.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Features of LifeOnPlus Advanced Kiosks
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Touchscreen interface for easy navigation</li>
            <li>
              Smart health monitoring tools: BP, sugar, BMI, temperature, SPO2
            </li>
            <li>
              Non-invasive body scan tech (like skin carotenoids, stress levels,
              etc.)
            </li>
            <li>Health Smart Card integration</li>
            <li>QR code scan &amp; app sync</li>
            <li>Voice assistance &amp; multilingual support</li>
            <li>Thermal printer for instant reports</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Benefits of Using Advanced Kiosks
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Quick access to basic health screenings</li>
            <li>No doctor visit needed for routine checks</li>
            <li>
              Affordable, accessible, 24/7 in public or franchise locations
            </li>
            <li>Helps in early detection and preventive care</li>
            <li>
              Syncs with the LifeOnPlus app for continuous health tracking
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            How to Avail This Service?
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
            <li>Visit the nearest LifeOnPlus Franchise Outlet</li>
            <li>
              Locate a kiosk via the LifeOnPlus app (Download from Google Play
              Store / Apple Store)
            </li>
            <li>Use your mobile number or scan QR to begin</li>
            <li>
              Get instant report and health suggestions on-screen and on your
              phone
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            User Precautions at the Kiosk
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
              Use sanitizer before and after touching the screen or sensors
            </li>
            <li>Follow on-screen instructions carefully</li>
            <li>Sit/stand still while scanning for accurate readings</li>
            <li>
              Avoid use if you have open wounds on fingers or are extremely
              sweaty
            </li>
            <li>Seek doctor consultation if readings show abnormalities</li>
          </ul>
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
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-8">
            Food Supplements
          </h1>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Brief on Food Supplements
          </h2>
          <p className="text-gray-700 mb-8">
            Food supplements, also known as dietary or nutritional supplements,
            are products designed to add essential nutrients to your diet. They
            come in various forms such as tablets, capsules, powders, or
            liquids, and typically contain vitamins, minerals, amino acids,
            enzymes, herbs, or other botanicals.
          </p>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Why Food Supplements Are Necessary?
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
            <li>
              <strong>Nutrient Gaps:</strong> Modern diets often lack essential
              nutrients due to processed foods, poor eating habits, or limited
              food variety.
            </li>
            <li>
              <strong>Soil Depletion:</strong> Modern farming can strip the soil
              of minerals, reducing the nutrient content in fruits and
              vegetables.
            </li>
            <li>
              <strong>Busy Lifestyles:</strong> People may skip meals or rely on
              fast food, missing out on vital nutrients.
            </li>
            <li>
              <strong>Medical Conditions:</strong> Certain health issues or
              medications can impair nutrient absorption.
            </li>
            <li>
              <strong>Age & Life Stages:</strong> Children, pregnant women, and
              the elderly may have higher or specific nutrient needs.
            </li>
            <li>
              <strong>Boosting Immunity:</strong> Supplements can help
              strengthen the immune system and improve overall well-being.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Common Food Supplements
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
              Multivitamins – Combination of essential vitamins and minerals.
            </li>
            <li>Vitamin D – Supports bone health and immune function.</li>
            <li>
              Omega-3 Fatty Acids (Fish Oil) – Good for heart and brain health.
            </li>
            <li>Calcium – Important for bones and teeth.</li>
            <li>Iron – Essential for blood health, especially for women.</li>
            <li>Probiotics – Help maintain gut health.</li>
            <li>Protein Powders – Aid muscle repair and growth.</li>
            <li>
              Magnesium – Supports muscle and nerve function, reduces stress.
            </li>
            <li>B-Complex Vitamins – Boost energy and metabolism.</li>
            <li>
              Herbal Supplements – Like ashwagandha, turmeric, or ginseng for
              specific health benefits.
            </li>
          </ul>
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
