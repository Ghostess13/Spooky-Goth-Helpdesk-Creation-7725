import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiSkull, FiMoon, FiZap } = FiIcons;

const TermsPage = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SafeIcon icon={FiFileText} className="text-6xl text-purple-400" />
            </motion.div>
            <SafeIcon icon={FiSkull} className="text-4xl text-red-400 animate-bounce" />
            <SafeIcon icon={FiMoon} className="text-5xl text-yellow-400 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent font-marcellus">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-marcellus">
            The sacred covenant that binds us in this digital realm of shadows.
            <br />
            <span className="text-purple-400">Enter at your own peril...</span>
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="prose prose-invert max-w-none">
            <div className="flex items-center space-x-3 mb-8">
              <SafeIcon icon={FiZap} className="text-purple-400 text-2xl" />
              <h2 className="text-3xl font-bold text-white m-0 font-marcellus">The Dark Covenant</h2>
            </div>

            <div className="text-gray-300 space-y-6 leading-relaxed font-marcellus">
              <p className="text-lg">
                Welcome, brave soul, to the Terms and Conditions of our haunted digital realm. By entering these shadowy depths, you agree to be bound by the following mystical clauses...
              </p>

              <div className="bg-purple-900/20 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <SafeIcon icon={FiSkull} className="text-red-400" />
                  <h3 className="text-xl font-semibold text-white m-0 font-marcellus">Coming Soon from the Abyss</h3>
                </div>
                <p className="text-gray-300 m-0 font-marcellus">
                  Our legal scribes are currently working in the depths of the underworld to craft comprehensive terms that will govern your journey through our digital realm. These sacred documents are being inscribed with the utmost care and supernatural precision.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-purple-900/30 to-red-900/30 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <SafeIcon icon={FiMoon} className="text-yellow-400" />
                    <h4 className="text-lg font-semibold text-white m-0 font-marcellus">What to Expect</h4>
                  </div>
                  <ul className="text-gray-300 space-y-2 text-sm font-marcellus">
                    <li>• User rights and responsibilities</li>
                    <li>• Service usage guidelines</li>
                    <li>• Account management policies</li>
                    <li>• Intellectual property terms</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-900/30 to-purple-900/30 p-6 rounded-lg border border-red-500/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <SafeIcon icon={FiZap} className="text-purple-400" />
                    <h4 className="text-lg font-semibold text-white m-0 font-marcellus">Legal Protections</h4>
                  </div>
                  <ul className="text-gray-300 space-y-2 text-sm font-marcellus">
                    <li>• Limitation of liability</li>
                    <li>• Dispute resolution procedures</li>
                    <li>• Termination conditions</li>
                    <li>• Governing law specifications</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-12 p-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30">
                <SafeIcon icon={FiFileText} className="text-4xl text-purple-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold text-white mb-3 font-marcellus">
                  The Ritual is Nearly Complete
                </h3>
                <p className="text-gray-300 mb-4 font-marcellus">
                  1. Agreement to Terms
By accessing or purchasing products from our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please refrain from using Realm13.com.

2. Use of Our Store
a. Eligibility
You must be at least 18 years old or have the consent of a parent or legal guardian to purchase from Realm 13 or any other website operated by Morgana Cryptoria.

b. License
We grant you a limited, non-exclusive, non-transferable license to use our website for personal shopping purposes. This license does not permit any resale or commercial use of our products, website, or content without our express written consent.

3. Product Information
a. Accuracy
We strive to ensure all product descriptions, images, and information are accurate. However, we do not warrant that such information is complete, current, or error-free.

b. Ingredients and Allergens
It is your responsibility to review the ingredients listed for each product and determine whether they are suitable for you, considering any allergies or sensitivities.

c. Colors and Variations
Due to differences in monitor settings and the unique nature of handmade products, colors and appearances may vary slightly from images shown on our site. When available, samples will be listed in the samples section.

4. Orders and Payments
a. Order Acceptance
We reserve the right to refuse or cancel any order at our discretion, including for reasons such as product availability, pricing errors, or suspected fraud.

b. Pricing and Payment
All prices are listed in U.S. Dollars (USD) and are subject to change without notice. Payments must be made using accepted payment methods outlined on our website.

5. Shipping and Returns
a. Shipping
Products will be shipped to the address provided at checkout. Any delivery dates provided are estimates only and not guaranteed.

b. Returns and Refunds
For detailed information on returns, exchanges, and refunds, please refer to our Refunds and Returns Policy.

6. Intellectual Property
a. Ownership
All content on this website, including images, logos, designs, and text, is owned by Morgana Cryptoria and protected by copyright and other intellectual property laws. Stock photos and videos are the property of their respective owners and subject to their licensing terms.

b. Limited Use
You may download or print content from our website for personal, non-commercial use only. Any other use without our prior written permission is strictly prohibited.

7. Limitation of Liability
a. Disclaimer
We make no warranties, express or implied, regarding the performance, safety, or suitability of our products for any particular purpose. You use our products at your own risk.

b. Indirect Damages
We are not liable for any indirect, incidental, special, or consequential damages arising out of or related to the use or inability to use our products.

c. Total Liability
In no event will our total liability exceed the amount you paid for the product(s) in question.

8. Governing Law
These Terms and Conditions are governed by and construed in accordance with the laws of the United States of America.

9. Modifications to Terms
We reserve the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page, and it is your responsibility to review them periodically.

10. Force Majeure
We will not be liable for any delay or failure to perform resulting from causes beyond our reasonable control, including but not limited to acts of God, natural disasters, wars, pandemics, labor disputes, or disruptions in supply chains.

11. Severability
If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable and will not affect the validity and enforceability of the remaining provisions.
                </p>
                <p className="text-sm text-purple-400 font-marcellus">
                  Last updated: Never • Next update: When the stars align
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
