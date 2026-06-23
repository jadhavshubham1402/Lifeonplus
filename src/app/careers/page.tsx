"use client";

import Image from "next/image";
import { useState } from "react";

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    relatedRole: "",
    message: "",
  });

  const [fileName, setFileName] = useState("No file chosen");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully! (Demo)");
    // You can connect this to your backend or email service later
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16 mt-24">
        <div className="prose max-w-none text-gray-700">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
            Careers at LifeOnPlus
          </h2>

          <p className="text-lg text-center mb-12">
            Join a movement transforming the way the world experiences health
            and wellness. At LifeOnPlus, we are building a global digital health
            ecosystem — and we're looking for passionate, purpose-driven
            individuals to grow with us.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Life at LifeOnPlus</h3>
          <p className="mb-6">
            At LifeOnPlus, innovation meets compassion. Whether you're a health
            tech enthusiast, a creative storyteller, a customer champion, or a
            wellness expert — you'll find your place here.
          </p>

          <ul className="list-disc pl-6 space-y-3 mb-12 text-lg">
            <li>Meaningful impact over routine tasks</li>
            <li>Wellbeing as much as performance</li>
            <li>Collaboration across borders and backgrounds</li>
            <li>Learning through hands-on experience, every single day</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Internship Program</h3>
          <p className="mb-6">
            Our "Earn While You Learn" Internship Program gives students and
            young professionals a unique opportunity to:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-12">
            <li>Work on real-world health-tech challenges</li>
            <li>Earn performance-based incentives</li>
            <li>Get mentorship from industry leaders</li>
            <li>Contribute to social health impact initiatives</li>
          </ul>
        </div>

        {/* Careers Form */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
            Careers Form
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                placeholder="Email Address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Resume <span className="text-red-500">*</span>
              </label>
              <label className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-xl cursor-pointer hover:border-green-500">
                <span className="text-gray-500 truncate">{fileName}</span>
                <span className="text-green-600 font-medium">Choose File</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Area of Interest <span className="text-red-500">*</span>
              </label>
              <select
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
              >
                <option value="">-- Select Interest --</option>
                <option value="HealthTech">HealthTech</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Engineering">Engineering</option>
                <option value="Operations">Operations</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Related Role <span className="text-red-500">*</span>
              </label>
              <select
                name="relatedRole"
                value={formData.relatedRole}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
              >
                <option value="">-- Select Role --</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Business Development">
                  Business Development
                </option>
                <option value="Content Writer">Content Writer</option>
                <option value="Product Manager">Product Manager</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Tell us about yourself (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 resize-y"
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-12 py-4 rounded-full text-lg transition-all"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
