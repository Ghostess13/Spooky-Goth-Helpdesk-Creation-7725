import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiSkull, FiMoon, FiZap, FiLock } = FiIcons;

const PrivacyPage = () => {
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
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <SafeIcon icon={FiShield} className="text-6xl text-purple-400" />
            </motion.div>
            <SafeIcon icon={FiLock} className="text-4xl text-green-400 animate-pulse" />
            <SafeIcon icon={FiSkull} className="text-5xl text-red-400 animate-bounce" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent font-marcellus">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-marcellus">
            Your secrets are safe in our cryptic vault of digital protection.
            <br />
            <span className="text-purple-400">Guarded by ancient encryption spells...</span>
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
              <SafeIcon icon={FiLock} className="text-green-400 text-2xl animate-pulse" />
              <h2 className="text-3xl font-bold text-white m-0 font-marcellus">The Vault of Secrets</h2>
            </div>

            <div className="text-gray-300 space-y-6 leading-relaxed font-marcellus">
              <p className="text-lg">
                In the depths of our digital fortress, your privacy is protected by layers of mystical encryption and supernatural security measures. This sacred document outlines how we guard your personal information...
              </p>

              <div className="bg-green-900/20 border-l-4 border-green-400 p-6 rounded-r-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <SafeIcon icon={FiShield} className="text-green-400" />
                  <h3 className="text-xl font-semibold text-white m-0 font-marcellus">Protected by Dark Magic</h3>
                </div>
                <p className="text-gray-300 m-0 font-marcellus">
                  Our privacy guardians are currently weaving powerful protection spells into our comprehensive privacy policy. These mystical safeguards will ensure your digital soul remains secure within our haunted realm.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <SafeIcon icon={FiShield} className="text-green-400" />
                    <h4 className="text-lg font-semibold text-white m-0 font-marcellus">Data Protection</h4>
                  </div>
                  <ul className="text-gray-300 space-y-2 text-sm font-marcellus">
                    <li>• Information collection practices</li>
                    <li>• Data usage and processing</li>
                    <li>• Storage and security measures</li>
                    <li>• Third-party sharing policies</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-green-900/30 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <SafeIcon icon={FiZap} className="text-purple-400" />
                    <h4 className="text-lg font-semibold text-white m-0 font-marcellus">Your Rights</h4>
                  </div>
                  <ul className="text-gray-300 space-y-2 text-sm font-marcellus">
                    <li>• Access and portability rights</li>
                    <li>• Correction and deletion options</li>
                    <li>• Consent management</li>
                    <li>• Opt-out procedures</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/20 mt-8">
                <div className="flex items-center space-x-2 mb-4">
                  <SafeIcon icon={FiMoon} className="text-yellow-400" />
                  <h4 className="text-xl font-semibold text-white m-0 font-marcellus">Mystical Security Measures</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <SafeIcon icon={FiLock} className="text-green-400 text-2xl mx-auto mb-2" />
                    <p className="text-gray-300 font-marcellus">End-to-End Encryption</p>
                  </div>
                  <div className="text-center">
                    <SafeIcon icon={FiShield} className="text-blue-400 text-2xl mx-auto mb-2" />
                    <p className="text-gray-300 font-marcellus">Secure Data Centers</p>
                  </div>
                  <div className="text-center">
                    <SafeIcon icon={FiZap} className="text-purple-400 text-2xl mx-auto mb-2" />
                    <p className="text-gray-300 font-marcellus">Regular Security Audits</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12 p-6 bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-lg border border-green-500/30">
                <SafeIcon icon={FiShield} className="text-4xl text-green-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold text-white mb-3 font-marcellus">
                  The Protection Ritual Continues
                </h3>
                <p className="text-gray-300 mb-4 font-marcellus">
                  1. Information collected: Personal information that you share when placing your order or contacting us. Typically collected while placing an order: full name, address, phone #, email address, and encrypted payment information securely transmitted via PCI-DSS certified Enterprise-Class servers.



2. Data usage: Collected information will be used to process and ship orders, or to contact the customer when necessary. This may include order related tasks, providing customer support, personalizing user experiences, and marketing communications (if opted-in). Your information is processed through our payment and shipping partners so that we can ship your order. We do not and will not sell or trade personal information, EVER. If required, mainly in cases of fraud, we will release personal information to law enforcement. 



3. Data protection: We are in compliance with the California Consumer Privacy Act (CCPA). As mentioned above, we do not and will not sell or trade your personal information. If you wish to have your data removed in accordance with the CCPA, please open a service ticket by clicking on the button at the bottom of this document. 



4. Cookies: Cookie Policy



This Cookie Policy explains how Cryptoria ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at ("cryptoria.com"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.



What are cookies?

Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.



Why do we use cookies?

We use cookies and similar technologies for a number of reasons, such as:



- To provide you with a more personalized and efficient experience when browsing our Website

- To remember your preferences and settings

- To gather analytics to help us understand how users engage with our Website and to improve our Website

- To serve you with relevant advertising



The specific types of cookies and similar technologies we use are:



- Strictly Necessary Cookies: These are cookies that are required for the operation of our Website. They include, for example, cookies that enable you to log into secure areas of our Website.

- Analytical/Performance Cookies: These cookies allow us to recognize and count the number of visitors and to see how visitors move around our Website when they are using it. This helps us to improve the way our Website works, for example, by ensuring that users are finding what they are looking for easily.

- Functionality Cookies: These are used to recognize you when you return to our Website. This enables us to personalize our content for you and remember your preferences.

- Targeting Cookies: These cookies record your visit to our Website, the pages you have visited and the links you have followed. We will use this information to make our Website and the products displayed on it more relevant to your interests.



How can you control cookies?

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided below.



You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.



In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit http://www.aboutads.info/choices/ or http://www.youronlinechoices.com.



We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. We encourage you to periodically review this page for the latest information on our cookie practices.



If you have any questions about our use of cookies or this Cookie Policy, please contact us at [Company Email].



5. User rights: 



6. Data retention: Accounts will be anonymized if there has not been at least one order placed in a 6 month period. When an account is anonymized, all personal information is removed and account information, including order history and wishlists, will no longer be available. If you have not ordered in 6 months, you will likely need to create a new account. 



7. Updates and notifications: This privacy policy may be updated periodically and will provide a date for the last revision. A clear and prominent notice on the website will notify users of any significant changes. This notice will appear for 30 days after significant changes are made. 



8. Children's privacy: Under 18 requires parental/guardian permission to place orders. This site is not directed at those under 13 years old. Children's Online Privacy Protection Act (COPPA) 
                </p>
                <p className="text-sm text-green-400 font-marcellus">
                  Last enchantment: Never • Next blessing: When the digital spirits awaken
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
