"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. (Demo)");
    // Connect to your backend / email service here
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-green-700 text-white  py-10 mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl text-white md:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-green-100">We'd love to hear from you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-8">
              Singapore
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-semibold">Paxykop Technologies Pte Ltd</p>
                  <p className="text-gray-600">
                    L-39, MBFC, 10 Marina Blvd, Singapore - 018983
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:info@lifeonplus.com"
                    className="text-gray-600 hover:text-green-600"
                  >
                    info@lifeonplus.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+6580136083"
                    className="text-gray-600 hover:text-green-600"
                  >
                    +65 8013 6083
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.93436869263!2d103.69218944902053!3d1.2878721647299003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da196094c54723%3A0x604af0ef5e71df46!2sPaxykop%20Technologies%20Pte%20Ltd!5e0!3m2!1sen!2sin!4v1634647495783!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 mb-8">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                    placeholder="+65 8013 6083"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 resize-y"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-full text-lg transition-all duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
