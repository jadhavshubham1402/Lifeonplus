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
      {service.category === "dmek" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            LifeOnPlus Medical Emergency First Aid Kit
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Be Prepared. Be Protected. Be Safe.
          </p>

          {/* INTRODUCTION */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              The LifeOnPlus Medical Emergency First Aid Kit is a compact and
              essential emergency care kit designed to provide immediate first
              aid support during accidents, injuries, medical emergencies, and
              unexpected situations before professional medical help arrives.
            </p>
            <p className="text-gray-700 mt-4">
              It is ideal for homes, offices, schools, vehicles, industries,
              travel, and outdoor activities.
            </p>
          </div>

          {/* WHAT'S INSIDE */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              📦 What's Inside?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "✅ Adhesive Bandages",
                "✅ Sterile Gauze Pads",
                "✅ Crepe Bandages",
                "✅ Medical Tape",
                "✅ Antiseptic Solution",
                "✅ Alcohol Swabs",
                "✅ Cotton Rolls",
                "✅ Scissors & Tweezers",
                "✅ Disposable Gloves",
                "✅ Digital Thermometer",
                "✅ Emergency Care Guide",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* KEY BENEFITS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              🌟 Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="text-3xl">🚑</span>
                <div>
                  <p className="font-semibold">Immediate Emergency Care</p>
                  <p className="text-gray-700">
                    Provides quick first aid support during accidents and
                    injuries.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">❤️</span>
                <div>
                  <p className="font-semibold">Saves Critical Time</p>
                  <p className="text-gray-700">
                    Helps stabilize patients until professional medical
                    assistance arrives.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🛡️</span>
                <div>
                  <p className="font-semibold">Prevents Infection</p>
                  <p className="text-gray-700">
                    Sterile supplies help reduce the risk of wound contamination
                    and infection.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🏠</span>
                <div>
                  <p className="font-semibold">Essential for Every Family</p>
                  <p className="text-gray-700">
                    Keeps your loved ones prepared for unexpected emergencies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🚗</span>
                <div>
                  <p className="font-semibold">Travel Safety Companion</p>
                  <p className="text-gray-700">
                    Perfect for cars, travel, camping, and outdoor activities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">⚡</span>
                <div>
                  <p className="font-semibold">Quick Response</p>
                  <p className="text-gray-700">
                    Enables faster action during emergencies when every second
                    matters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ADVANTAGES */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              ✅ Advantages
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              {[
                "✔ Portable & Easy to Carry",
                "✔ User-Friendly – Easy-to-use supplies suitable for all age groups",
                "✔ Multi-Purpose Usage – For cuts, burns, sprains, bleeding & more",
                "✔ Workplace & Home Safety",
                "✔ Cost-Effective Protection",
                "✔ Reliable Emergency Support",
                "✔ Suitable for Everyone – Families, children, seniors, travelers & students",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* IDEAL FOR */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              🎯 Ideal For
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "🏠 Homes",
                "🏢 Offices",
                "🏫 Schools & Colleges",
                "🏭 Factories & Industries",
                "🚗 Vehicles",
                "✈️ Travelers",
                "🏕️ Outdoor Activities",
                "🏥 Healthcare Camps",
              ].map((place, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 text-center py-4 rounded-xl shadow-sm"
                >
                  {place}
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="bg-green-50 border border-green-100 rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Be Prepared for Any Emergency
            </h3>
            <p className="text-gray-700 max-w-xl mx-auto">
              Don’t wait for an emergency to happen. Equip your home, office,
              and vehicle with the LifeOnPlus Medical Emergency First Aid Kit
              today.
            </p>
            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-10 py-4 rounded-2xl transition-colors shadow-lg">
              🛒 Get Your Kit Now
            </button>
            <p className="text-green-600 font-medium mt-6">
              Your Safety. One Kit at a Time.
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
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            LifeOnPlus Xpress Medical Test
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            10 Tests • 10 Minutes • Instant Multi-Language Report
          </p>

          {/* INTRODUCTION */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              The LifeOnPlus Xpress Medical Test is an innovative preventive
              healthcare screening solution that delivers 10 essential health
              tests in just 10 minutes using advanced digital technology,
              dedicated mobile software, and tablet-enabled diagnostic systems.
            </p>
            <p className="text-gray-700 mt-4">
              Designed for individuals, families, corporates, schools,
              healthcare camps, and communities.
            </p>
          </div>

          {/* 10 TESTS COVERED */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              🩺 10 Tests Covered
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "❤️ Blood Pressure",
                "💓 Pulse Rate",
                "🩸 Blood Sugar",
                "🌡️ Body Temperature",
                "🫁 Oxygen Saturation (SpO₂)",
                "🧬 Hemoglobin",
                "⚖️ BMI / Body Composition",
                "📈 Advanced ECG",
                "❤️‍🩹 Vascular Age Test",
                "👁️ Vision Screening",
              ].map((test, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-start gap-3"
                >
                  <span className="text-green-600 text-xl mt-0.5">•</span>
                  <span className="text-gray-700">{test}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNOLOGY USED */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              📱 Technology Used
            </h2>
            <p className="text-gray-700 mb-6">
              Smart Mobile Software Enabled Through Tablets
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              {[
                "✅ Dedicated Health Screening Software",
                "✅ Tablet-Based Operation",
                "✅ Smart Diagnostic Sensors",
                "✅ Cloud-Based Data Management",
                "✅ AI-Assisted Health Analysis",
                "✅ Instant Report Generation",
                "✅ Multi-Language Reporting System",
              ].map((tech, i) => (
                <div key={i} className="flex items-start gap-2">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* INSTANT REPORTS */}
          <div className="mb-12 bg-green-50 border border-green-100 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              📄 Instant Multi-Language Reports
            </h2>
            <p className="text-gray-700">
              Reports are generated instantly and can be provided in multiple
              languages, making healthcare more accessible and understandable
              for diverse populations.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
              <div>✅ Easy to Understand</div>
              <div>✅ Language-Friendly</div>
              <div>✅ Digital & Paperless</div>
              <div>✅ Instant Availability</div>
            </div>
          </div>

          {/* ADVANTAGES */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              🌟 Advantages of Xpress Medical Test
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              {[
                "⚡ Fast Screening – 10 parameters in only 10 minutes",
                "🎯 Early Risk Detection – Before symptoms appear",
                "🩺 Preventive Healthcare – Proactive health management",
                "📱 Digital Technology – Speed, accuracy & convenience",
                "🌍 Portable & Scalable – Ideal for camps, workplaces & communities",
                "💰 Cost Effective – Affordable screening for large groups",
                "👨‍👩‍👧‍👦 Family Health Monitoring – For all age groups",
              ].map((advantage, i) => (
                <div key={i} className="flex items-start gap-3">
                  {advantage}
                </div>
              ))}
            </div>
          </div>

          {/* BENEFITS TO INDIVIDUALS & COMMUNITIES */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              💚 Benefits to Individuals & Communities
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              {[
                "Early Detection of Health Risks",
                "Improved Health Awareness",
                "Better Lifestyle Decisions",
                "Reduced Healthcare Costs",
                "Timely Medical Intervention",
                "Enhanced Quality of Life",
                "Reduced Risk of NCDs",
                "Better Long-Term Health Outcomes",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✔</span> {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* LIFEONPLUS IMPACT */}
          <div className="bg-green-50 border border-green-100 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              🌍 How LifeOnPlus is Helping the World
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div>
                <strong>Accessible</strong>
                <br />
                Bringing screening closer to people
              </div>
              <div>
                <strong>Affordable</strong>
                <br />
                Reducing cost barriers
              </div>
              <div>
                <strong>Scalable</strong>
                <br />
                Large-scale community programs
              </div>
              <div>
                <strong>Digital</strong>
                <br />
                Instant reports & smart insights
              </div>
              <div>
                <strong>Preventive</strong>
                <br />
                Early detection and action
              </div>
              <div>
                <strong>Inclusive</strong>
                <br />
                Multi-language support
              </div>
            </div>

            <p className="text-green-600 font-medium mt-10 text-lg">
              Know Today. Protect Tomorrow.
            </p>
          </div>
        </div>
      )}
      {service.category === "diagnosis" && (
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            Preventive Healthcare & NCD Awareness
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Why Prevention is Better Than Cure
          </p>

          {/* INTRODUCTION */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              Most serious diseases develop silently. By the time symptoms
              appear, the condition may have already progressed. LifeOnPlus
              empowers you with early detection, regular monitoring, and
              proactive care to prevent major health crises.
            </p>
          </div>

          {/* WHY PREVENTIVE HEALTHCARE IS REQUIRED */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Why Preventive Healthcare Is Required
            </h2>
            <p className="text-gray-700 mb-6">
              Many health conditions do not show symptoms in their early stages.
              Early detection through regular screening can save lives and
              reduce complications.
            </p>

            <h3 className="font-semibold mb-4">Common Silent Diseases</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700">
              {[
                "❤️ Heart Disease",
                "🩸 High Blood Pressure",
                "🍬 Diabetes",
                "🧠 Stroke Risk",
                "🫁 Respiratory Diseases",
                "🎗️ Cancer",
                "🧬 Kidney Disease",
                "🩺 Cholesterol Disorders",
              ].map((disease, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-4 text-center"
                >
                  {disease}
                </div>
              ))}
            </div>
          </div>

          {/* WHY PREVENTION IS BETTER */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Why Prevention Is Better Than Cure
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "✅ Early Detection Saves Lives",
                "✅ Reduces Healthcare Costs",
                "✅ Prevents Complications",
                "✅ Improves Quality of Life",
                "✅ Increases Life Expectancy",
                "✅ Protects Families",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 text-xl">•</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HOW LIFEONPLUS SUPPORTS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              How LifeOnPlus Supports Preventive Healthcare
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <p className="font-medium">🩺 Regular Health Screening</p>
                  <p className="text-gray-700">
                    Early identification of health risks
                  </p>
                </div>
                <div>
                  <p className="font-medium">
                    ❤️ Vascular Age & Heart Health Assessment
                  </p>
                  <p className="text-gray-700">
                    Detect cardiovascular risks early
                  </p>
                </div>
                <div>
                  <p className="font-medium">🤖 AI-Based Health Monitoring</p>
                  <p className="text-gray-700">Smart alerts and insights</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-medium">📊 Digital Health Records</p>
                  <p className="text-gray-700">
                    Secure lifelong health profile
                  </p>
                </div>
                <div>
                  <p className="font-medium">⏰ Smart Health Reminders</p>
                  <p className="text-gray-700">
                    Medicine, check-up & vaccination alerts
                  </p>
                </div>
                <div>
                  <p className="font-medium">🚨 Emergency Preparedness</p>
                  <p className="text-gray-700">
                    One-touch panic, rescue & ambulance support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WHAT ARE NCDS */}
          <div className="mb-12 border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              What is NCD (Non-Communicable Disease)?
            </h2>
            <p className="text-gray-700 mb-8">
              Non-Communicable Diseases are chronic conditions not transmitted
              from person to person. They develop slowly and are largely
              preventable through lifestyle and early screening.
            </p>

            <h3 className="font-semibold mb-4">Major Types of NCDs</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                ❤️ Cardiovascular Diseases (Heart Attack, Stroke, Hypertension)
              </div>
              <div>🍬 Diabetes</div>
              <div>🎗️ Cancer</div>
              <div>🫁 Chronic Respiratory Diseases (Asthma, COPD)</div>
              <div>🧠 Neurological Disorders (Dementia, Parkinson’s)</div>
              <div>🩺 Chronic Kidney Disease</div>
            </div>
          </div>

          {/* GLOBAL & INDIA IMPACT */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              NCD Impact – Global & India
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="font-medium mb-3">🌍 Global Facts (WHO)</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 41 million deaths every year</li>
                  <li>• 74% of all global deaths</li>
                  <li>• 17 million premature deaths (before age 70)</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="font-medium mb-3">🇮🇳 India Situation</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Responsible for nearly 2/3 of all deaths</li>
                  <li>• Over 100 million people with diabetes</li>
                  <li>• Rising cases in 30s & 40s age group</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PREVENTION */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              How NCDs Can Be Prevented
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-medium mb-3">Early Screening</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Blood Pressure, Blood Sugar, Cholesterol</li>
                  <li>Kidney & Liver Function Tests</li>
                  <li>Vascular Age Test</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-3">Healthy Lifestyle</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Balanced Diet & Regular Exercise</li>
                  <li>Good Sleep & Stress Management</li>
                  <li>No Tobacco, Limited Alcohol</li>
                </ul>
              </div>
            </div>
          </div>

          {/* LIFEONPLUS MESSAGE */}
          <div className="bg-green-50 border border-green-100 rounded-3xl p-10 text-center">
            <p className="italic text-2xl font-semibold text-green-700 mb-4">
              "Prevention Today Is Protection Tomorrow."
            </p>
            <p className="text-gray-700 mb-6">
              Most diseases don’t start with symptoms. They start silently.
            </p>
            <p className="text-green-600 font-medium text-lg">
              Know Your Numbers. Monitor Your Health. Prevent NCDs Before They
              Become Life-Threatening.
            </p>
            <p className="text-green-700 mt-8 font-semibold">
              💚 Know Today. Protect Tomorrow. Live Better with LifeOnPlus.
            </p>
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
        <div className="container mx-auto p-10">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            AI Camera-Based Body Screening Technology
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Non-Invasive • Contactless • AI-Powered Health Assessment
          </p>

          {/* WHAT IS IT */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              What is AI Camera-Based Body Screening Technology?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              AI Camera-Based Body Screening Technology is an advanced health
              assessment solution that uses Artificial Intelligence (AI),
              Computer Vision, Machine Learning, and Optical Signal Processing
              to evaluate multiple health and wellness parameters without
              touching the body.
            </p>
            <p className="text-gray-700 mt-4">
              This completely contactless and non-invasive system analyzes
              subtle physiological signals from the face and body, making it
              fast, convenient, and ideal for homes, clinics, corporates,
              schools, and community health programs.
            </p>
          </div>

          {/* HOW IT WORKS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              🌟 How the Technology Works
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "Step 1",
                  title: "Camera-Based Scan",
                  desc: "The individual stands or sits in front of the AI screening system.",
                },
                {
                  step: "Step 2",
                  title: "AI Analysis",
                  desc: "The camera captures subtle physiological patterns and visual signals.",
                },
                {
                  step: "Step 3",
                  title: "Advanced Algorithms",
                  desc: "Artificial Intelligence and Computer Vision analyze multiple health indicators.",
                },
                {
                  step: "Step 4",
                  title: "Instant Report Generation",
                  desc: "The system generates an easy-to-understand digital wellness report within minutes.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center flex-shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold">
                      {item.step} — {item.title}
                    </p>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HEALTH PARAMETERS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              🩺 Health Parameters (6 to 30+ Vitals)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-medium mb-3">❤️ Cardiovascular Parameters</p>
                <ul className="text-gray-700 space-y-1 list-disc pl-5">
                  <li>Heart Rate</li>
                  <li>Heart Rate Variability (HRV)</li>
                  <li>Pulse Analysis</li>
                  <li>Blood Pressure Trends</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-3">🫁 Respiratory Parameters</p>
                <ul className="text-gray-700 space-y-1 list-disc pl-5">
                  <li>Respiratory Rate</li>
                  <li>Breathing Patterns</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-3">🩸 Oxygen & Circulation</p>
                <ul className="text-gray-700 space-y-1 list-disc pl-5">
                  <li>Blood Oxygen Saturation Trends (SpO₂)</li>
                  <li>Circulatory Wellness Indicators</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-3">🌡️ General & Mental Wellness</p>
                <ul className="text-gray-700 space-y-1 list-disc pl-5">
                  <li>Body Temperature Trends</li>
                  <li>Stress Level & Relaxation Status</li>
                  <li>Fatigue & Recovery Indicators</li>
                  <li>Energy Level & Wellness Score</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Plus 20+ additional parameters depending on the platform and
              configuration.
            </p>
          </div>

          {/* BENEFITS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              💚 Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              {[
                "Early Health Awareness & Preventive Care",
                "Quick & Convenient (Few Minutes)",
                "Completely Contactless Experience",
                "No Needles, Sensors or Blood Samples",
                "Instant Digital Reports",
                "Scalable for Clinics, Corporates & Camps",
                "Suitable for All Age Groups",
                "Improved Accessibility & User Comfort",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-600">✅</span> {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* ADVANTAGES */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              ⭐ Advantages
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              {[
                "✅ Completely Non-Invasive",
                "✅ Fully Contactless",
                "✅ Fast Screening Process",
                "✅ User-Friendly",
                "✅ Suitable for All Age Groups",
                "✅ Digital Health Integration",
                "✅ Cost-Effective & Scalable",
                "✅ Supports Remote & Telehealth Programs",
              ].map((adv, i) => (
                <div key={i}>{adv}</div>
              ))}
            </div>
          </div>

          {/* LIFEONPLUS VISION */}
          <div className="bg-green-50 border border-green-100 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              🌍 How LifeOnPlus is Helping the World
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              LifeOnPlus is introducing advanced AI-powered, non-invasive, and
              contactless healthcare technologies to make preventive healthcare
              more accessible and affordable for everyone.
            </p>

            <p className="italic text-xl font-semibold text-green-700 mb-8">
              "Screen Early. Act Early. Live Better."
            </p>

            <p className="text-green-600 font-medium text-lg">
              Smarter Screening. Better Wellness. Healthier Lives. 💚🌍
            </p>
          </div>

          {/* DISCLAIMER */}
          <div className="mt-12 text-xs text-gray-500 border-l-4 border-gray-300 pl-4">
            <strong>Important Note:</strong> AI camera-based screening tools are
            wellness and screening technologies. They are not a replacement for
            medical diagnosis, treatment, or professional healthcare evaluation.
            Any health findings should be confirmed by qualified healthcare
            professionals.
          </div>
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
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            QUICK HEALTH CHECK-UP
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-8">
            Early Detection Today. Better Health Tomorrow.
          </p>

          {/* SHORT DESCRIPTION */}
          <div className="mb-12 max-w-3xl">
            <p className="text-gray-700 text-lg leading-relaxed">
              Identify early signs of heart disease, stroke risk, and vascular
              aging in minutes with advanced non-invasive technology.
            </p>
          </div>

          {/* 3 MAIN FEATURES */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-3">❤️</div>
                <p className="font-semibold">Vascular Age Test</p>
              </div>
              <div className="text-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-3">📈</div>
                <p className="font-semibold">Advanced Handheld ECG</p>
              </div>
              <div className="text-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-3">📄</div>
                <p className="font-semibold">Instant Digital Health Report</p>
              </div>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                Early Risk Detection
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                Fast & Non-Invasive
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                Accurate Health Insights
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                Better Preventive Healthcare
              </div>
            </div>
          </div>

          {/* LIFEONPLUS SECTION */}
          <div className="mb-12 bg-green-50 border border-green-100 rounded-2xl p-8">
            <p className="text-gray-700 text-lg text-center">
              LifeOnPlus helps you stay ahead of health risks through smart
              screening, early detection, and preventive healthcare solutions.
            </p>
          </div>

          {/* CALL TO ACTION */}
          <div className="text-center">
            <p className="italic text-2xl font-semibold text-green-700 mb-6">
              Know Today. Protect Tomorrow.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-12 py-4 rounded-2xl transition-colors shadow-lg">
              Book Your Health Check-Up Today
            </button>
          </div>
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
