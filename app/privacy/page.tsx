import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to Business. We respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law
              protects you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Data We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal
              data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Identity Data: first name, last name, username</li>
              <li>Contact Data: email address, telephone numbers, postal address</li>
              <li>Technical Data: IP address, browser type, device information</li>
              <li>Usage Data: information about how you use our website and services</li>
              <li>Marketing Data: your preferences in receiving marketing from us</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most
              commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. We limit access to your
              personal data to those employees, agents, contractors and other
              third parties who have a business need to know.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Your Legal Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website uses cookies to distinguish you from other users of our
              website. This helps us to provide you with a good experience when
              you browse our website and also allows us to improve our site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website may include links to third-party websites, plug-ins and
              applications. Clicking on those links or enabling those connections
              may allow third parties to collect or share data about you. We do
              not control these third-party websites and are not responsible for
              their privacy statements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Changes to Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new privacy policy on this page
              and updating the "last updated" date at the top of this privacy
              policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>Email: privacy@business.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Business Street, Tech Park, Mumbai, India 400001</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
