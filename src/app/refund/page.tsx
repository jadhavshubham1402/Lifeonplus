// app/refund-policy/page.tsx
import React from "react";

export default function RefundPolicy() {
  return (
    <div className="container mx-auto py-10 mt-28 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
        Cancellation & Refund Policy – Lifeonplus Channel Partner
      </h1>

      <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">
        <p>
          In case a Channel Partner wishes to cancel or terminate their
          association with Lifeonplus Technologies, the Channel Partner must
          have completed a minimum active period of 6 (six) months from the date
          of onboarding with the Company in order to be eligible to apply for
          cancellation and refund.
        </p>

        <p>
          A written notice must be provided at least 30 (thirty) days prior to
          the intended date of cancellation.
        </p>

        <p>
          Upon completion of the 30-day notice period and subject to
          verification of accounts and compliance with all applicable terms:
        </p>

        <p>
          The eligible refund amount shall be processed within 31 (thirty-one)
          working days from the effective date of cancellation.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            The Company will deduct the following amounts before processing the
            refund:
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Applicable GST</li>
            <li>Any Referral Incentives</li>
            <li>Any Business Promotion Incentives</li>
            <li>
              Any other dues, liabilities, or outstanding amounts payable to the
              Company
            </li>
          </ul>
        </section>

        <p>
          The final refundable amount shall be calculated after adjusting the
          above deductions, and the Company&apos;s decision regarding the
          settlement amount shall be final and binding.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 text-xs text-gray-500 text-center">
        Copyright © 2024-25 LifeOnPlus. All rights reserved.
      </div>
    </div>
  );
}
