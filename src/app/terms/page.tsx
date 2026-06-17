// app/terms/page.tsx
import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto py-10 mt-28 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
        Terms & Conditions
      </h1>

      <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">
        <p className="text-sm">
          Please read these Terms carefully before using the LifeOnPlus platform
          (accessible via website and mobile application). By accessing or using
          any part of the platform, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and all associated
          policies, including our Privacy Policy, Refund Policy, and User
          Consent Policy. If you do not agree to these Terms, please discontinue
          use immediately.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            1. About LifeOnPlus
          </h2>
          <p>
            The website www.LifeOnPlus.com and mobile application "LifeOnPlus"
            are owned and operated by LifeOnPlus Technologies India Private
            Limited, a company incorporated under the Companies Act, 2013.
          </p>
          <p className="mt-3">
            Throughout these Terms, "LifeOnPlus", "we", "us", "our", or "us"
            refer to the company. The term "platform" includes both the website
            and mobile application. Users of the platform are referred to as
            "you", "your", or "user".
          </p>
          <p className="mt-3">
            By using LifeOnPlus, you accept and agree to comply with these
            Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            2. Platform Scope & Service Categories
          </h2>
          <p>
            The platform offers a combination of company-owned services and
            third-party services, including:
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            a) Company-Owned Offerings
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Global Digital Health Smart Card (LifeOn+ Card): Stores emergency
              medical records, accessible via QR.
            </li>
            <li>
              Express Medical Tests & Health Camps conducted by
              LifeOnPlus-authorized professionals.
            </li>
            <li>Body Recharge Station Services at registered centres.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            b) Third-Party Services (Aggregator Model)
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Doctor Consultations with licensed professionals</li>
            <li>Diagnostics & Lab Services via partner labs</li>
            <li>
              Health Supplements, Medical Devices, and Consumables via
              third-party sellers
            </li>
            <li>
              Wellness Products & Therapeutic Devices from verified vendors
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            c) Educational & Informational Services
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Health blogs, expert videos, wellness articles, and event updates
              for user awareness and education.
            </li>
            <li>
              LifeOnPlus acts as a technology facilitator and aggregator and is
              not a healthcare provider.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            3. User Eligibility & Registration
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be 18 years or older to use this platform.</li>
            <li>
              Requires accurate, updated personal information including name,
              contact details, and KYC as applicable.
            </li>
            <li>
              You are responsible for safeguarding your login credentials and
              device access.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            4. Acceptance & Modification of Terms
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              These Terms apply each time you use our platform. We may modify
              them periodically; updates will be notified via the app or
              website.
            </li>
            <li>Continued usage post-update constitutes acceptance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            5. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the platform only for lawful and personal purposes.</li>
            <li>
              Do not share your account access or LifeOnPlus QR code with
              others.
            </li>
            <li>
              Do not upload harmful content, infringe intellectual property, or
              misuse platform services.
            </li>
            <li>
              Seek immediate medical help in emergencies—LifeOnPlus is not a
              substitute for emergency care.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            6. Global Digital Health Smart Card (LifeOn+ Card)
          </h2>
          <p>
            Subscription includes storage of medical records and emergency info,
            accessible via QR or app login.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              Access is user-controlled. You are solely responsible for
              safeguarding your QR and login credentials.
            </li>
            <li>
              Misuse, unauthorized access, or data leaks due to negligence are
              not LifeOnPlus&apos;s responsibility.
            </li>
            <li>
              If lost, report immediately to support for
              deactivation/replacement (fees may apply).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            7. Consultations & Diagnostic Services
          </h2>

          <h3 className="text-xl font-medium mt-5 mb-3">
            a) Online Doctor Consultations
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>No doctor-patient relationship is formed.</li>
            <li>
              Advice is based on your shared input; not a replacement for
              physical examination.
            </li>
            <li>
              Always consult in person for diagnosis, prescriptions, and
              emergencies.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-5 mb-3">
            b) Diagnostics & Lab Services
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              LifeOnPlus is not liable for errors, delays, or results from
              third-party labs.
            </li>
            <li>
              Booking facilitation, tracking, and coordination are offered;
              execution is the responsibility of lab partners.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            8. Express Medical Tests, Health Camps & Events
          </h2>
          <p>Available to registered users with active subscription plans.</p>
          <p className="mt-3">Services may be provided at:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>LifeOnPlus centers</li>
            <li>On-campus installations</li>
            <li>Partner clinics</li>
            <li>
              Events and wellness camps (announced via "Flash News" section)
            </li>
          </ul>
          <p className="mt-4 text-red-600 font-medium">
            Disclaimer: Health services carry inherent risks. Use is voluntary,
            and users assume full responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            9. Product Purchases & Third-Party Sellers
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Product listings (devices, supplements, consumables) may be from
              third parties.
            </li>
            <li>
              LifeOnPlus is not responsible for delivery delays, defects,
              warranties, or side effects.
            </li>
            <li>
              Refunds and disputes will be subject to each seller&apos;s policy
              and must be raised within 7 days of delivery.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            10. Content Use & Disclaimer
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Health information (blogs, videos, infographics) is for general
              awareness only.
            </li>
            <li>
              We do not endorse specific products, treatments, or practitioners.
            </li>
            <li>
              Use discretion and consult professionals before making health
              decisions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            11. Privacy, Data Security & QR Usage
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your data is protected under our Privacy Policy.</li>
            <li>
              QR code access to your Smart Card should be treated like a key to
              personal medical data.
            </li>
            <li>
              We implement encryption and safeguards, but no system is 100%
              secure.
            </li>
            <li>
              Unauthorized QR use or data breaches due to user negligence will
              not be our liability.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            12. Intellectual Property
          </h2>
          <p>
            All content—logos, images, UI design, code, documentation, articles,
            and service structure—is owned or licensed by LifeOnPlus.
            Unauthorized use, copying, or reverse engineering is prohibited and
            may attract legal action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            13. Cancellation & Refunds
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Subscription plans, health cards, and prepaid services are
              generally non-refundable unless a system error or non-delivery is
              verified.
            </li>
            <li>
              For product returns, refer to the third-party seller&apos;s
              policy.
            </li>
            <li>
              Cancellations must be raised within 48 working hours via email.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            14. Liability & Indemnity
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              LifeOnPlus is not liable for third-party services or content
              accuracy.
            </li>
            <li>You use the platform at your own risk.</li>
            <li>
              LifeOnPlus is not liable for losses due to misuse, technical
              failures, force majeure, or service delays.
            </li>
            <li>
              You indemnify LifeOnPlus against claims from your misuse of the
              platform or breach of these terms.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            15. Governing Law & Jurisdiction
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              These Terms shall be governed by and construed in accordance with
              the laws of India.
            </li>
            <li>
              All disputes, claims, or legal proceedings arising from these
              Terms or the use of LifeOnPlus services shall be exclusively
              subject to arbitration in Bangalore, Karnataka, India, as per the
              Arbitration and Conciliation Act, 1996.
            </li>
            <li>
              The decision of the arbitrator shall be final and binding on both
              parties.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            16. Contact Information
          </h2>
          <p>For support, feedback, or complaints:</p>
          <p className="mt-2">
            <strong>Email:</strong> support@lifeonplus.com
            <br />
            <strong>WhatsApp:</strong> +91 99868 80000 | +91 8013 6083
          </p>

          <div className="mt-6">
            <p className="font-semibold">Corporate Address:</p>
            <p>
              LifeOnPlus Technologies India Private Limited
              <br />
              903 Ocean View, Union Park, Khar West
              <br />
              Next to Quantum Park, Mumbai - 400 052
            </p>
          </div>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 text-xs text-gray-500 text-center">
        Copyright © 2024-25 LifeOnPlus. All rights reserved.
      </div>
    </div>
  );
}
