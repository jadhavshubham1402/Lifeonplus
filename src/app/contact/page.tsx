"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  state: Yup.string().required("State is required"),
  district: Yup.string().required("District is required"),
  city: Yup.string().required("City is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactUs = () => {
  const initialValues = {
    name: "",
    email: "",
    state: "",
    district: "",
    city: "",
    phone: "",
    message: "",
  };

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any,
  ) => {
    try {
      const response = await fetch(
        "https://lifeonplus.in/api/contactForm",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Name: values.name,
            Email: values.email,
            State: values.state,
            District: values.district,
            City: values.city,
            Phone: values.phone,
            Message: values.message,
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! Your message has been sent.", {
          position: "top-right",
          autoClose: 4000,
        });
        resetForm();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-green-700 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl text-white md:text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-green-100">We'd love to hear from you</p>
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

            {/* Google Map */}
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
          <div className="bg-white p-5 md:p-7 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 mb-8">
              Get In Touch
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                      placeholder="Your Full Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                        placeholder="your@email.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                        placeholder="+65 8013 6083"
                      />
                      <ErrorMessage
                        name="phone"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        State <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        name="state"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                        placeholder="State"
                      />
                      <ErrorMessage
                        name="state"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        District <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        name="district"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                        placeholder="District"
                      />
                      <ErrorMessage
                        name="district"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        name="city"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                        placeholder="City"
                      />
                      <ErrorMessage
                        name="city"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 resize-y"
                      placeholder="Write your message here..."
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-full text-lg font-semibold transition-all duration-200 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Submit Message"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
