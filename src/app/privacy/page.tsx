// app/privacy/page.tsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-10 mt-28 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
        Privacy Policy
      </h1>

      <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">
        <p>
          LifeOnPlus Technologies India Pvt. Ltd. ("we", "our", "us") is
          committed to protecting your privacy and ensuring the confidentiality
          of your data. This Privacy Policy explains how we collect, use,
          disclose, and protect your personal data across all LifeOnPlus
          platforms including the mobile application ("LifeOnPlus App") and the
          website ("Website": www.lifeonplus.com).
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            SECTION I: GENERAL POLICY (COMMON TO ALL PLATFORMS)
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">
            1. Jurisdiction and Applicability
          </h3>
          <p>
            This Privacy Policy is governed by Indian laws, including the
            Information Technology Act, 2000 and the Information Technology
            (Reasonable Security Practices and Procedures and Sensitive Personal
            Data or Information) Rules, 2011. This policy applies to all users
            of LifeOnPlus platforms within India.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            2. Information We Collect
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, gender, date of
              birth, mobile number, email ID, and address.
            </li>
            <li>
              <strong>Health Data:</strong> Reports, test results, wellness
              inputs (with explicit consent).
            </li>
            <li>
              <strong>Device & Location Info:</strong> OS, browser, GPS data,
              crash logs.
            </li>
            <li>
              <strong>Usage Data:</strong> User activity, preferences,
              interaction logs.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            3. Data Use & Data Retention
          </h3>
          <p>Your data is used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Deliver and enhance healthcare services</li>
            <li>Personalize user experience</li>
            <li>Notify users of updates, services, or alerts</li>
            <li>Ensure compliance with legal obligations</li>
          </ul>
          <p>
            Data is retained for service continuity, legal or audit purposes,
            and may be opted for deletion anytime.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            4. Data Processing & Consent
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data is processed only with consent or lawful necessity.</li>
            <li>Secure Cloud Infrastructure.</li>
            <li>Access is restricted to authorized personnel.</li>
            <li>
              Sensitive Personal Data or Information (SPDI) is encrypted and
              securely stored.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">5. Data Storage</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Data is stored on secure, India-based cloud servers with backups
              on GDPR-compliant infrastructure.
            </li>
            <li>
              All vendors are contractually required to meet Indian data
              protection standards.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            6. Security Measures
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of health and personal data.</li>
            <li>Firewall and role-based access.</li>
            <li>Periodic audits and vulnerability assessments.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            7. Third-Party Sharing
          </h3>
          <p>We do not sell your data. It may be shared with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Authorized health and service providers.</li>
            <li>Technical vendors (under NDAs).</li>
            <li>Government bodies (only when legally required).</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            8. Business Transfers
          </h3>
          <p>
            User data may be transferred during mergers, acquisitions, or
            restructures. Users will be notified of such events.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">9. User Rights</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and correct your data.</li>
            <li>Withdraw consent.</li>
            <li>Request data deletion.</li>
            <li>Opt out of marketing communications.</li>
            <li>Email us at support@lifeonplus.com to exercise your rights.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            10. Children's Privacy
          </h3>
          <p>
            We do not knowingly collect data from children under 13 without
            parental consent. If discovered, such data will be deleted.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">11. Policy Updates</h3>
          <p>
            We may update this policy periodically. Material changes will be
            communicated via email or platform notifications.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">
            12. Protection of LifeOnPlus Technologies India Pvt. Ltd.
          </h3>
          <p>
            We reserve the right to take appropriate action, including legal
            remedies, against unauthorized access, misuse, or threats to our
            systems, intellectual property, employees, partners, and brand.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">13. Contact Us</h3>
          <p>
            C.T.S.No. 1679/A, No.301, 3rd Floor, "MasterMind 1", Royal Palms,
            Aarey Milk Colony,
            <br />
            Goregaon (East), Mumbai - 400065
            <br />
            Email: support@lifeonplus.com
            <br />
            Website: www.lifeonplus.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            SECTION II: PRIVACY POLICY – LIFEONPLUS APP
          </h2>

          <h3 className="text-xl font-medium mt-5 mb-3">
            A. Additional Data Collected via App
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Location Services: GPS data for nearby health services.</li>
            <li>
              App Usage Analytics: Screen interactions, time spent, crashes.
            </li>
            <li>Mobile Identifiers: Device ID, push notification tokens.</li>
          </ul>

          <h3 className="text-xl font-medium mt-5 mb-3">
            B. App-Specific Usage
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enable Body Recharge Station bookings.</li>
            <li>Track wellness progress and health reports.</li>
            <li>Access digital health smart card.</li>
            <li>Use location to suggest local providers.</li>
            <li>Access Camera for scanning reports or QR codes.</li>
          </ul>

          <h3 className="text-xl font-medium mt-5 mb-3">
            C. Tracking Technologies
          </h3>
          <p>
            The app may use local storage, analytics SDKs, or app tracking tools
            to improve functionality. You can disable tracking via device
            permissions.
          </p>

          <h3 className="text-xl font-medium mt-5 mb-3">
            D. SPDI (Sensitive Personal Data or Information) Handling
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Collected only with consent.</li>
            <li>Used solely for healthcare-related features.</li>
            <li>Shared only with authorized, bound personnel.</li>
            <li>Consent can be withdrawn anytime via app settings or email.</li>
          </ul>

          <h3 className="text-xl font-medium mt-5 mb-3">
            E. Notification Preferences
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Health alerts and tips are opt-in.</li>
            <li>Users may manage push notification settings via the app.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            SECTION III: PRIVACY POLICY – LIFEONPLUS WEBSITE
          </h2>

          <h3 className="text-xl font-medium mt-5 mb-3">
            A. Additional Data Collected via Website
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and device/browser type.</li>
            <li>Page visits, time on site, click-through rates.</li>
            <li>Form submissions and communication records.</li>
          </ul>

          <h3 className="text-xl font-medium mt-5 mb-3">
            B. Cookies and Web Tracking
          </h3>
          <p>We use cookies and tools like Google Analytics to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Understand user behaviour.</li>
            <li>Save preferences.</li>
            <li>Personalize browsing experience.</li>
          </ul>
          <p>
            You may disable cookies via browser settings, but certain features
            may be affected.
          </p>

          <h3 className="text-xl font-medium mt-5 mb-3">
            C. Marketing and Forms
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Store your contact info.</li>
            <li>Send relevant marketing emails (opt-in).</li>
            <li>Share your queries with internal teams for response.</li>
            <li>You may unsubscribe anytime via the provided links.</li>
          </ul>

          <h3 className="text-xl font-medium mt-5 mb-3">
            D. Third-Party Tools
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chatbots</li>
            <li>Payment gateways</li>
            <li>Third-party forms or analytics tools</li>
          </ul>
          <p>
            These tools are subject to their own privacy policies, and we ensure
            they adhere to our data protection standards.
          </p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 text-xs text-gray-500 text-center">
        Copyright © 2024-25 LifeOnPlus. All rights reserved.
      </div>
    </div>
  );
}
