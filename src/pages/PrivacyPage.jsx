import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiSkull, FiMoon, FiZap, FiLock, FiEye, FiDatabase, FiUserCheck, FiClock, FiUsers } = FiIcons;

const PrivacyPage = () => {
  const privacySections = [
    {
      title: "Information Collected",
      icon: FiDatabase,
      content: "Personal information that you share when placing your order or contacting us. Typically collected while placing an order: full name, address, phone #, email address, and encrypted payment information securely transmitted via PCI-DSS certified Enterprise-Class servers.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Usage",
      icon: FiZap,
      content: "Collected information will be used to process and ship orders, or to contact the customer when necessary. This may include order related tasks, providing customer support, personalizing user experiences, and marketing communications (if opted-in). Your information is processed through our payment and shipping partners so that we can ship your order. We do not and will not sell or trade personal information, EVER. If required, mainly in cases of fraud, we will release personal information to law enforcement.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Protection",
      icon: FiShield,
      content: "We are in compliance with the California Consumer Privacy Act (CCPA). As mentioned above, we do not and will not sell or trade your personal information. If you wish to have your data removed in accordance with the CCPA, please open a service ticket by clicking on the button at the bottom of this document.",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cookie Policy",
      icon: FiEye,
      content: "This Cookie Policy explains how Cryptoria (\"we\", \"us\", and \"our\") uses cookies and similar technologies to recognize you when you visit our website at (\"cryptoria.com\"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
      subsections: [
        {
          subtitle: "What are cookies?",
          content: "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information."
        },
        {
          subtitle: "Why do we use cookies?",
          content: "We use cookies and similar technologies for a number of reasons, such as: To provide you with a more personalized and efficient experience when browsing our Website, to remember your preferences and settings, to gather analytics to help us understand how users engage with our Website and to improve our Website, and to serve you with relevant advertising."
        },
        {
          subtitle: "Types of cookies we use",
          content: "Strictly Necessary Cookies: These are cookies that are required for the operation of our Website. They include, for example, cookies that enable you to log into secure areas of our Website. Analytical/Performance Cookies: These cookies allow us to recognize and count the number of visitors and to see how visitors move around our Website when they are using it. Functionality Cookies: These are used to recognize you when you return to our Website. This enables us to personalize our content for you and remember your preferences. Targeting Cookies: These cookies record your visit to our Website, the pages you have visited and the links you have followed."
        },
        {
          subtitle: "How can you control cookies?",
          content: "You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas may be restricted. Most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit http://www.aboutads.info/choices/ or http://www.youronlinechoices.com."
        }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "User Rights",
      icon: FiUserCheck,
      content: "You have the right to access, correct, delete, or transfer your personal data. You may also opt-out of certain communications and data processing activities. Contact us to exercise these rights or for any privacy-related inquiries.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Data Retention",
      icon: FiClock,
      content: "Accounts will be anonymized if there has not been at least one order placed in a 6 month period. When an account is anonymized, all personal information is removed and account information, including order history and wishlists, will no longer be available. If you have not ordered in 6 months, you will likely need to create a new account.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Updates and Notifications",
      icon: FiMoon,
      content: "This privacy policy may be updated periodically and will provide a date for the last revision. A clear and prominent notice on the website will notify users of any significant changes. This notice will appear for 30 days after significant changes are made.",
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Children's Privacy",
      icon: FiUsers,
      content: "Under 18 requires parental/guardian permission to place orders. This site is not directed at those under 13 years old. Children's Online Privacy Protection Act (COPPA) compliance is maintained throughout our data collection and processing practices.",
      color: "from-pink-500 to-rose-500"
    }
  ];

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

        {/* Privacy Sections */}
        <div className="space-y-8">
          {privacySections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                  <SafeIcon icon={section.icon} className="text-xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white font-marcellus">
                  {index + 1}. {section.title}
                </h2>
              </div>

              <div className="mb-4">
                <p className="text-gray-300 leading-relaxed font-marcellus ml-16">
                  {section.content}
                </p>
              </div>

              {section.subsections && (
                <div className="space-y-4 ml-16">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="border-l-2 border-purple-500/30 pl-4">
                      <h3 className="text-lg font-semibold text-purple-300 mb-2 font-marcellus">
                        {String.fromCharCode(97 + subIndex)}. {subsection.subtitle}
                      </h3>
                      <p className="text-gray-300 leading-relaxed font-marcellus">
                        {subsection.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Security Features */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-500/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <SafeIcon icon={FiMoon} className="text-yellow-400 text-3xl" />
            <h3 className="text-2xl font-bold text-white font-marcellus">Mystical Security Measures</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <SafeIcon icon={FiLock} className="text-green-400 text-3xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2 font-marcellus">End-to-End Encryption</h4>
              <p className="text-gray-300 text-sm font-marcellus">All data transmitted through our servers is protected by enterprise-grade encryption protocols.</p>
            </div>
            <div className="text-center">
              <SafeIcon icon={FiShield} className="text-blue-400 text-3xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2 font-marcellus">Secure Data Centers</h4>
              <p className="text-gray-300 text-sm font-marcellus">Our servers are housed in certified facilities with 24/7 monitoring and physical security.</p>
            </div>
            <div className="text-center">
              <SafeIcon icon={FiZap} className="text-purple-400 text-3xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2 font-marcellus">Regular Security Audits</h4>
              <p className="text-gray-300 text-sm font-marcellus">We conduct frequent security assessments to ensure your data remains protected.</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-lg border border-green-500/30 p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SafeIcon icon={FiShield} className="text-4xl text-green-400 mx-auto mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold text-white mb-4 font-marcellus">
            Questions About Your Privacy?
          </h3>
          <p className="text-gray-300 mb-6 font-marcellus">
            If you have any questions about our privacy practices or wish to exercise your rights under CCPA, 
            please don't hesitate to contact our privacy guardians.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 font-marcellus"
          >
            Open Privacy Ticket
          </motion.button>
          <p className="text-sm text-green-400 mt-4 font-marcellus">
            Last updated: December 2024 • Effective: Upon your acceptance
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;