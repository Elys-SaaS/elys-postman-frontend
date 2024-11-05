import Head from "next/head";
import React from "react";

function NextPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Terms of Service - Elys</title>
      </Head>
      <main className="bg-gray-100 text-gray-800 font-sans">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Elys Terms of Service
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Terms of Service
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  1. Acceptance of Terms
                </h3>
                <p className="text-gray-600">
                  By using Elys, you agree to these Terms of Service. Please
                  read them carefully. If you do not agree with these terms,
                  please discontinue use of the application.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  2. Service Description
                </h3>
                <p className="text-gray-600">
                  Elys automates social media postings across your linked
                  accounts, including TikTok, based on your preferences and
                  settings.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  3. User Responsibilities
                </h3>
                <p className="text-gray-600">
                  Users are responsible for ensuring that any content shared
                  through Elys complies with all applicable laws and platform
                  guidelines. Elys holds no responsibility for any content
                  posted through its automation service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  4. Prohibited Uses
                </h3>
                <p className="text-gray-600">
                  You agree not to use Elys for any illegal or unauthorized
                  purposes, including posting prohibited content on TikTok or
                  other linked platforms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  5. Termination
                </h3>
                <p className="text-gray-600">
                  Elys reserves the right to suspend or terminate your access to
                  our services at any time, especially if you violate these
                  terms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  6. Limitation of Liability
                </h3>
                <p className="text-gray-600">
                  Elys is not liable for any indirect, incidental, or
                  consequential damages arising from the use of our service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  7. Changes to Terms
                </h3>
                <p className="text-gray-600">
                  We may update these Terms of Service periodically. Continued
                  use of Elys after any changes constitutes acceptance of the
                  revised terms.
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
