"use client";
import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phnumber: "",
    Message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation
  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== "",
    );
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phnumber: "",
      Message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoader(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/bhainirav772@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Name: formData.firstname,
            LastName: formData.lastname,
            Email: formData.email,
            PhoneNo: formData.phnumber,
            Message: formData.Message,
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setShowThanks(true);
        resetForm();

        setTimeout(() => {
          setShowThanks(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Optionally show error message to user
    } finally {
      setLoader(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="relative">
          <h2 className="mb-8 md:mb-12 text-xl md:text-2xl font-bold tracking-tight text-center md:text-left">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label
                  htmlFor="fname"
                  className="block pb-2 text-sm md:text-base font-medium"
                >
                  First Name
                </label>
                <input
                  id="fname"
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="lname"
                  className="block pb-2 text-sm md:text-base font-medium"
                >
                  Last Name
                </label>
                <input
                  id="lname"
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block pb-2 text-sm md:text-base font-medium"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="phnumber"
                  className="block pb-2 text-sm md:text-base font-medium"
                >
                  Phone Number
                </label>
                <input
                  id="phnumber"
                  type="tel"
                  name="phnumber"
                  value={formData.phnumber}
                  onChange={handleChange}
                  placeholder="+1234567890"
                  className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block pb-2 text-sm md:text-base font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                rows={5}
                placeholder="Anything else you wanna communicate..."
                className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300 resize-y min-h-[140px]"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={!isFormValid || loader}
                className={`w-full sm:w-auto px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  !isFormValid || loader
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white hover:bg-transparent hover:text-primary border border-primary hover:border-primary"
                }`}
              >
                {loader ? "Sending..." : "Submit Message"}
              </button>
            </div>
          </form>

          {/* Success Message */}
          {showThanks && (
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-2xl flex items-center gap-3 text-base shadow-lg">
              Thank you for contacting us! We will get back to you soon.
              <div className="w-4 h-4 rounded-full animate-spin border-2 border-white border-t-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
