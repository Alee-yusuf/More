import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-4">KMV Enterprises - Comprehensive Privacy Policy</h1>
          <p className="text-muted-light dark:text-text-dark/80">Effective Date: September 1, 2025</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-6">
            KMV Enterprises ("Company", "we", "our", "us") respects your privacy and is committed to protecting it. This Privacy Policy explains how we collect, use, share, and protect your personal information.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We may collect:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Personal Data:</strong> Name, email, phone, billing information</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited</li>
              <li><strong>Cookies:</strong> For tracking and analytics</li>
              <li><strong>Communications Data:</strong> Emails, messages, and other correspondence</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
            <p className="mb-4">
              We use your data to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide and maintain our Services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send administrative and promotional communications</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Legal Bases for Processing (GDPR)</h2>
            <p className="mb-4">
              We process personal data based on:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your consent</li>
              <li>Contractual necessity</li>
              <li>Legitimate business interests</li>
              <li>Legal compliance requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Sharing of Data</h2>
            <p className="mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Business partners (with your explicit consent)</li>
              <li>Legal authorities when required by law</li>
              <li>Successors in case of business transfer or acquisition</li>
            </ul>
            <p className="mb-4">
              <strong>Note:</strong> We do not sell your personal data to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. International Data Transfers</h2>
            <p className="mb-4">
              Your data may be transferred to and processed in the United States. We implement appropriate safeguards, such as standard contractual clauses, to ensure your data remains protected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
            <p className="mb-4">
              We implement administrative, technical, and physical security measures to protect your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
            <p className="mb-4">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent (where applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="mb-4">
              Our Services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Cookies & Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Essential website functionality</li>
              <li>Analytics and performance monitoring</li>
              <li>Marketing and advertising</li>
            </ul>
            <p className="mb-4">
              You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. This Privacy Policy does not apply to those sites, and we are not responsible for their privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Updates to Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. The updated version will be indicated by the "Effective Date" at the top of this page.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-muted-light dark:text-text-dark/80">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@kmventerprises.com" className="text-accent hover:underline">
                privacy@kmventerprises.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
