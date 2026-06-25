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
  state: Yup.string()
    .min(2, "State must be at least 2 characters")
    .required("State is required"),
  district: Yup.string()
    .min(2, "District must be at least 2 characters")
    .required("District is required"),
  city: Yup.string()
    .min(2, "City must be at least 2 characters")
    .required("City is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactForm = () => {
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
        toast.success("Thank you! We will get back to you soon.", {
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
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="relative">
          <h2 className="mb-8 md:mb-12 text-xl md:text-2xl font-bold tracking-tight text-center md:text-left">
            Get in Touch
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6 md:space-y-8">
                {/* Name */}
                <div>
                  <label className="block pb-2 text-sm md:text-base font-medium">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block pb-2 text-sm md:text-base font-medium">
                      Email Address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300"
                      placeholder="john.doe@example.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block pb-2 text-sm md:text-base font-medium">
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      name="phone"
                      className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300"
                      placeholder="9876543210"
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* State, District, City */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <label className="block pb-2 text-sm md:text-base font-medium">
                      State
                    </label>
                    <Field
                      type="text"
                      name="state"
                      className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300"
                      placeholder="State"
                    />
                    <ErrorMessage
                      name="state"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block pb-2 text-sm md:text-base font-medium">
                      District
                    </label>
                    <Field
                      type="text"
                      name="district"
                      className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300"
                      placeholder="District"
                    />
                    <ErrorMessage
                      name="district"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block pb-2 text-sm md:text-base font-medium">
                      City
                    </label>
                    <Field
                      type="text"
                      name="city"
                      className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300"
                      placeholder="City"
                    />
                    <ErrorMessage
                      name="city"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block pb-2 text-sm md:text-base font-medium">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={5}
                    className="w-full text-md md:text-base px-4 py-2.5 rounded-2xl border border-gray-300 focus:border-primary focus:outline-none transition-all duration-300 resize-y min-h-[140px]"
                    placeholder="Anything else you wanna communicate..."
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#02BE0F] text-white hover:bg-transparent hover:text-primary border border-primary hover:border-primary"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Submit Message"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
