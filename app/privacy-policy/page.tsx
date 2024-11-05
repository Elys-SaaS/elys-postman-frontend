import Head from "next/head";
import React from "react";

function NextPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Privacy Policy - Elys</title>
      </Head>
      <main className="bg-gray-100 text-gray-800 font-sans">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Privacy Policy
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  1. Data Collection
                </h3>
                <p className="text-gray-600">
                  Elys collects necessary data, such as account details and
                  posting preferences, to provide automation services for your
                  social media accounts.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  2. Data Use
                </h3>
                <p className="text-gray-600">
                  Data collected is used exclusively to manage and execute
                  scheduled posts across your social media platforms, including
                  TikTok. We do not sell or share your data with third parties
                  without consent.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  3. Data Security
                </h3>
                <p className="text-gray-600">
                  We employ reasonable security measures to protect your data.
                  However, no online service is entirely secure, and we cannot
                  guarantee absolute security.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  4. User Rights
                </h3>
                <p className="text-gray-600">
                  You have the right to access, update, or delete your data
                  within Elys. Contact our support for assistance with data
                  requests.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  5. Policy Changes
                </h3>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. Please
                  review this page periodically to stay informed of any changes.
                </p>
              </div>
            </div>
          </section>

          <footer className="mt-12 text-center text-gray-500">
            <p>&copy; 2024 Elys. All Rights Reserved.</p>
          </footer>
        </div>
      </main>
    </>
  );
}

export default NextPage;
