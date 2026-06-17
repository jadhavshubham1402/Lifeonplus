// app/returns/page.tsx
import React from "react";

export default function ReturnsPolicy() {
  return (
    <div className="container mx-auto py-10 mt-28 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
        Returns Policy
      </h1>

      <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">
        <p>
          At LifeOnPlus, we are committed to ensuring a seamless experience for our users. Our returns and replacement policy is designed to be transparent, fair, and compliant with applicable consumer protection laws in India.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">1. General Return Eligibility</h2>
          <p>Products sold on LifeOnPlus may be returned within the applicable return window if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You have received a physically damaged or defective item.</li>
            <li>The product is missing parts or accessories.</li>
            <li>The product delivered is different from its description or image on lifeonplus.com or the LifeOnPlus app.</li>
          </ul>
          <p className="mt-3">
            Return or replacement requests must be raised within 7 days of delivery unless specified otherwise on the product detail page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">2. Condition for Return Acceptance</h2>
          <p>A return will be processed only if the following conditions are met:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The product was not damaged while in your possession.</li>
            <li>The product is not different from what was originally shipped.</li>
            <li>The product is returned in its original condition, including:</li>
            <li>Brand&apos;s/manufacturer&apos;s original box or packaging</li>
            <li>MRP tag, user manual, warranty card, and accessories</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">3. Product Categories & Return Conditions</h2>
          <p>Products marked as <strong>“Non-returnable”</strong> on the product page cannot be returned or replaced unless defective or damaged upon delivery.</p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left">Product Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Return Window</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Return Eligibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Medical Devices</td>
                  <td className="border border-gray-300 px-4 py-3">7 days</td>
                  <td className="border border-gray-300 px-4 py-3">Returnable if defective, damaged, or not as described. May require technician evaluation.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Global Digital Health Smart Card</td>
                  <td className="border border-gray-300 px-4 py-3">Non-returnable</td>
                  <td className="border border-gray-300 px-4 py-3">As it is a digital card, and only some packages get Physical Card if opted.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Non-Consumables (e.g. wearables, diagnostic tools)</td>
                  <td className="border border-gray-300 px-4 py-3">7 days</td>
                  <td className="border border-gray-300 px-4 py-3">Returnable if in original, unused condition.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Perishable/Consumable items (e.g. supplements, testing strips)</td>
                  <td className="border border-gray-300 px-4 py-3">Non-returnable</td>
                  <td className="border border-gray-300 px-4 py-3">Due to hygiene and health standards.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Services (e.g. bookings, health checkups)</td>
                  <td className="border border-gray-300 px-4 py-3">Non-returnable</td>
                  <td className="border border-gray-300 px-4 py-3">Unless service was not delivered or fulfilled as per terms.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">4. Replacement Policy</h2>
          <p>Replacements are offered only if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The exact same item is available in stock with the same vendor.</li>
            <li>You request the replacement within the return window.</li>
            <li>All return conditions are met.</li>
          </ul>
          <p className="mt-3">If the replacement is unavailable, a full refund will be initiated.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">5. Vendor-Specific Policies</h2>
          <p>As LifeOnPlus is an aggregator platform:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Each vendor/seller listed on our platform has their own return and replacement policy.</li>
            <li>The seller&apos;s return policy will override the general platform policy where applicable.</li>
            <li>Seller policies will be clearly mentioned on the product detail page.</li>
          </ul>
          <p className="mt-3">
            LifeOnPlus facilitates the process between users and vendors but is not liable for non-fulfilment where vendors are non-compliant with stated return terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">6. Technician Visits for Evaluation</h2>
          <p>For select products like medical devices or hardware:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A technician visit may be scheduled at your location to verify the issue.</li>
            <li>Alternatively, you may be requested to visit a designated service point or office (locations available on the website).</li>
            <li>The return/replacement decision will be made based on the technician&apos;s evaluation report.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">7. Refunds</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refunds will be initiated only after the returned item passes quality checks.</li>
            <li>Refunds are processed to the original payment method or as LifeOnPlus credits, as per your preference.</li>
            <li>Refunds are typically completed within 7–10 working days after approval.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">8. Statutory Compliance</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>This policy complies with the Consumer Protection (E-Commerce) Rules, 2020 and relevant provisions of the Consumer Protection Act, 2019.</li>
            <li>Customers have the right to receive clear information about returns.</li>
            <li>Sellers must honour stated return/refund terms unless there is misuse of the policy.</li>
            <li>Any violation may be escalated to the consumer forum.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">9. Need Help?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email:</strong> support@lifeonplus.com</li>
            <li><strong>Phone/Chat:</strong> Available on the app and website during working hours.</li>
          </ul>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 text-xs text-gray-500 text-center">
        Copyright © 2024-25 LifeOnPlus. All rights reserved.
      </div>
    </div>
  );
}