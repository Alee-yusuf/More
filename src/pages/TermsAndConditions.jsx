import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background-light dark:bg-primary text-text-light dark:text-text-dark py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <a 
            href="/" 
            className="inline-flex items-center text-accent hover:underline mb-4"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
          <p className="text-sm text-muted-light dark:text-text-dark/60">Last updated: February 8, 2025</p>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">KMV Enterprises - Terms of Use</h1>
          <p className="text-muted-light dark:text-text-dark/80">Effective Date: September 1, 2025</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-6">
            Welcome to KMV Enterprises (“Company”, “we”, “our”, “us”). These Terms of Use (“Terms”) govern your access to and use of our website https://www.kmventerprises.com (the “Site”) and any services, features, or content we provide (collectively, the “Services”).
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Eligibility & Acceptance</h2>
            <p className="mb-4">
              You must be at least 18 years old or the legal age of majority in your jurisdiction. By using this Site, you represent that you have the legal capacity to enter into binding agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Permitted & Prohibited Use</h2>
            <p className="mb-2">You agree to use the Site only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Engage in unauthorized access, hacking, or disruption of the Site</li>
              <li>Copy, distribute, or exploit Site content without written permission</li>
              <li>Upload malware or harmful code</li>
              <li>Misrepresent your identity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Services</h2>
            <p className="mb-4">
              KMV Enterprises provides business and consulting services. We may update, modify, or discontinue Services at any time without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Accounts & Registration</h2>
            <p className="mb-4">
              You may need to create an account to access certain Services. You are responsible for safeguarding your login credentials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payments</h2>
            <p className="mb-4">
              All fees must be paid in accordance with posted terms or agreements. Prices are subject to change.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              All content, trademarks, and materials are owned by or licensed to KMV Enterprises. You are granted a limited, non-exclusive license to use the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
            <p className="mb-4">
              Our Site may integrate third-party tools. We are not responsible for third-party content, security, or practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. User Content & Submissions</h2>
            <p className="mb-4">
              By submitting content, you grant KMV Enterprises a non-exclusive right to use it for business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimers</h2>
            <p className="mb-4">
              Services are provided “AS IS” and “AS AVAILABLE” without warranties of any kind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="mb-4">
              KMV Enterprises shall not be liable for indirect or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless KMV Enterprises from claims or damages arising from your use of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
            <p className="mb-4">
              We may suspend or terminate your access to the Site at our discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law & Dispute Resolution</h2>
            <p className="mb-4">
              These Terms are governed by the laws of the State of Montana, United States of America. Disputes shall first attempt mediation; unresolved disputes may be subject to binding arbitration or court in Montana.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Severability</h2>
            <p className="mb-4">
              If any provision is found unenforceable, the remaining provisions remain valid.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Entire Agreement</h2>
            <p className="mb-4">
              These Terms constitute the entire agreement between you and KMV Enterprises.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. Changes</h2>
            <p className="mb-4">
              We may update these Terms at any time. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-muted-light dark:text-text-dark/80">
              If you have any questions about these Terms of Use, please contact us at{' '}
              <a href="mailto:info@kmventerprises.com" className="text-accent hover:underline">
                info@kmventerprises.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
