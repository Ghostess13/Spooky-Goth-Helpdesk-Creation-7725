import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiSkull, FiMoon, FiZap, FiShield, FiDollarSign, FiPackage, FiGlobe, FiClock, FiAlertTriangle } = FiIcons;

const TermsPage = () => {
  const sections = [
    {
      title: "Agreement to Terms",
      icon: FiFileText,
      content: "By accessing or purchasing products from our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please refrain from using Realm13.com.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Use of Our Store",
      icon: FiShield,
      subsections: [
        {
          subtitle: "Eligibility",
          content: "You must be at least 18 years old or have the consent of a parent or legal guardian to purchase from Realm 13 or any other website operated by Morgana Cryptoria."
        },
        {
          subtitle: "License",
          content: "We grant you a limited, non-exclusive, non-transferable license to use our website for personal shopping purposes. This license does not permit any resale or commercial use of our products, website, or content without our express written consent."
        }
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Product Information",
      icon: FiPackage,
      subsections: [
        {
          subtitle: "Accuracy",
          content: "We strive to ensure all product descriptions, images, and information are accurate. However, we do not warrant that such information is complete, current, or error-free."
        },
        {
          subtitle: "Ingredients and Allergens",
          content: "It is your responsibility to review the ingredients listed for each product and determine whether they are suitable for you, considering any allergies or sensitivities."
        },
        {
          subtitle: "Colors and Variations",
          content: "Due to differences in monitor settings and the unique nature of handmade products, colors and appearances may vary slightly from images shown on our site. When available, samples will be listed in the samples section."
        }
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Orders and Payments",
      icon: FiDollarSign,
      subsections: [
        {
          subtitle: "Order Acceptance",
          content: "We reserve the right to refuse or cancel any order at our discretion, including for reasons such as product availability, pricing errors, or suspected fraud."
        },
        {
          subtitle: "Pricing and Payment",
          content: "All prices are listed in U.S. Dollars (USD) and are subject to change without notice. Payments must be made using accepted payment methods outlined on our website."
        }
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Shipping and Returns",
      icon: FiPackage,
      subsections: [
        {
          subtitle: "Shipping",
          content: "Products will be shipped to the address provided at checkout. Any delivery dates provided are estimates only and not guaranteed."
        },
        {
          subtitle: "Returns and Refunds",
          content: "For detailed information on returns, exchanges, and refunds, please refer to our Refunds and Returns Policy."
        }
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Intellectual Property",
      icon: FiShield,
      subsections: [
        {
          subtitle: "Ownership",
          content: "All content on this website, including images, logos, designs, and text, is owned by Morgana Cryptoria and protected by copyright and other intellectual property laws. Stock photos and videos are the property of their respective owners and subject to their licensing terms."
        },
        {
          subtitle: "Limited Use",
          content: "You may download or print content from our website for personal, non-commercial use only. Any other use without our prior written permission is strictly prohibited."
        }
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Limitation of Liability",
      icon: FiAlertTriangle,
      subsections: [
        {
          subtitle: "Disclaimer",
          content: "We make no warranties, express or implied, regarding the performance, safety, or suitability of our products for any particular purpose. You use our products at your own risk."
        },
        {
          subtitle: "Indirect Damages",
          content: "We are not liable for any indirect, incidental, special, or consequential damages arising out of or related to the use or inability to use our products."
        },
        {
          subtitle: "Total Liability",
          content: "In no event will our total liability exceed the amount you paid for the product(s) in question."
        }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Governing Law",
      icon: FiGlobe,
      content: "These Terms and Conditions are governed by and construed in accordance with the laws of the United States of America.",
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Modifications to Terms",
      icon: FiClock,
      content: "We reserve the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page, and it is your responsibility to review them periodically.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Force Majeure",
      icon: FiZap,
      content: "We will not be liable for any delay or failure to perform resulting from causes beyond our reasonable control, including but not limited to acts of God, natural disasters, wars, pandemics, labor disputes, or disruptions in supply chains.",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Severability",
      icon: FiShield,
      content: "If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable and will not affect the validity and enforceability of the remaining provisions.",
      color: "from-cyan-500 to-blue-500"
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
            <span className="text-purple-400">Read carefully, mortal soul...</span>
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
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

              {section.content && (
                <div className="mb-4">
                  <p className="text-gray-300 leading-relaxed font-marcellus ml-16">
                    {section.content}
                  </p>
                </div>
              )}

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

        {/* Footer Notice */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30 p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <SafeIcon icon={FiFileText} className="text-4xl text-purple-400 animate-pulse" />
            <SafeIcon icon={FiSkull} className="text-3xl text-red-400" />
            <SafeIcon icon={FiMoon} className="text-4xl text-yellow-400 animate-pulse" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 font-marcellus">
            The Sacred Contract is Complete
          </h3>
          <p className="text-gray-300 mb-4 font-marcellus">
            By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. May your journey through our realm be blessed with protection and prosperity.
          </p>
          <p className="text-sm text-purple-400 font-marcellus">
            Last updated: December 2024 • Effective: Upon your acceptance
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;