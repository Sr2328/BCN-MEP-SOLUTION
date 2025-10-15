export default function TermsPage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not
              agree to these terms, please do not use this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Use License
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the
              materials on our website for personal, non-commercial transitory
              viewing only. This is the grant of a license, not a transfer of
              title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide various digital services including web development,
              mobile app development, digital marketing, and cloud solutions. All
              services are provided "as is" and we reserve the right to modify or
              discontinue services at any time without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. User Accounts
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you create an account with us, you must provide information
              that is accurate, complete, and current at all times. Failure to do
              so constitutes a breach of the terms, which may result in immediate
              termination of your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The service and its original content, features, and functionality
              are and will remain the exclusive property of Business and its
              licensors. The service is protected by copyright, trademark, and
              other laws of both India and foreign countries.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Payment Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All prices are quoted in Indian Rupees (₹) unless otherwise stated.
              Payment terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Payment is due as per the agreed schedule in the service contract</li>
              <li>We accept various payment methods including bank transfer and digital payments</li>
              <li>Late payments may incur additional charges</li>
              <li>All sales are final unless otherwise stated in the service agreement</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The materials on our website are provided on an "as is" basis. We
              make no warranties, expressed or implied, and hereby disclaim and
              negate all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Limitations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In no event shall Business or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use the materials on our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Revisions and Errata
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The materials appearing on our website could include technical,
              typographical, or photographic errors. We do not warrant that any of
              the materials on its website are accurate, complete, or current. We
              may make changes to the materials at any time without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Links
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We have not reviewed all of the sites linked to our website and are
              not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by us. Use of any
              such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These terms and conditions are governed by and construed in
              accordance with the laws of India and you irrevocably submit to the
              exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes by posting the new terms on
              this page and updating the "last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these terms, please contact us:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>Email: legal@business.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Business Street, Tech Park, Mumbai, India 400001</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
