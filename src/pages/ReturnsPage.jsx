import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPackage, FiSkull, FiMoon, FiZap, FiShield, FiXCircle, FiAlertTriangle, FiChevronDown, FiTruck, FiClock } = FiIcons;

const ReturnsPage = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "Why don't you offer returns or exchanges?",
      answer: "As a specialized mystical retailer, all our products are carefully curated and often custom-prepared for each order. This policy allows us to maintain the highest quality standards and keep our prices competitive while supporting our small business operations in the shadow realm."
    },
    {
      question: "What if I receive the wrong item?",
      answer: "If you receive an incorrect item due to our error, please contact us immediately with photos of what you received. We will work to resolve the issue promptly, which may include sending the correct item or providing store credit."
    },
    {
      question: "What happens if my package is damaged during shipping?",
      answer: "We understand that the journey through mortal shipping realms can be perilous. If your package arrives damaged, contact us within 48 hours with photos of the damage and packaging. We will work with you to resolve the issue."
    },
    {
      question: "My tracking shows delivered but I didn't receive my package. What now?",
      answer: "If your tracking shows delivered but you haven't received your package, please check with neighbors, building management, or other household members first. If still not found, contact us within 7 days and we'll investigate with the carrier."
    },
    {
      question: "Can I modify or cancel my order after placing it?",
      answer: "Orders enter our mystical fulfillment process quickly. Contact us immediately if you need to modify or cancel - we may be able to help if the order hasn't been processed yet, but we cannot guarantee changes once the ritual has begun."
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer: "We strive for complete customer satisfaction. While we don't offer returns, if you have concerns about product quality or description accuracy, please contact us. We value feedback and may offer solutions on a case-by-case basis."
    },
    {
      question: "Do you offer store credit instead of refunds?",
      answer: "In exceptional circumstances involving our errors or quality issues, we may offer store credit at our discretion. This is evaluated case-by-case and is not guaranteed for general dissatisfaction."
    },
    {
      question: "How can I avoid ordering the wrong item?",
      answer: "Please read product descriptions carefully, check sizing charts, and review all product details before completing your purchase. Our customer service spirits are available to answer questions before you order."
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
              <SafeIcon icon={FiPackage} className="text-6xl text-purple-400" />
            </motion.div>
            <SafeIcon icon={FiXCircle} className="text-4xl text-red-400 animate-pulse" />
            <SafeIcon icon={FiSkull} className="text-5xl text-red-400 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent font-marcellus">
            Returns & Refunds Policy
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-marcellus">
            Understanding our final sales policy in the mystical realm.
            <br />
            <span className="text-purple-400">All transactions are bound by ancient law...</span>
          </p>
        </motion.div>

        {/* Policy Statement */}
        <motion.div
          className="mb-16 bg-gradient-to-r from-red-900/40 to-purple-900/40 rounded-xl p-8 border border-red-500/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <SafeIcon icon={FiAlertTriangle} className="text-red-400 text-4xl" />
            <h2 className="text-3xl font-bold text-white font-marcellus">Important Policy Notice</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 font-marcellus leading-relaxed">
            <p className="text-lg">
              <strong className="text-red-400">We do not offer refunds, exchanges, or returns</strong> on any items 
              shipped from our store or website. Please read the FAQ below for more detailed information on this policy.
            </p>
            
            <p className="text-lg">
              <strong className="text-purple-400">All sales are final</strong>, with the exception of shipping damages 
              or lost packages (must not show delivered). We appreciate your understanding and support of our business.
            </p>
            
            <p className="text-base text-yellow-400">
              If you have any questions or concerns, please contact Realm13 customer service by opening a ticket below.
            </p>
          </div>
        </motion.div>

        {/* Exceptions Section */}
        <motion.div
          className="mb-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-500/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <SafeIcon icon={FiShield} className="text-blue-400 text-3xl" />
            <h3 className="text-2xl font-bold text-white font-marcellus">Limited Exceptions</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <SafeIcon icon={FiTruck} className="text-orange-400 text-3xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2 font-marcellus">Shipping Damage</h4>
              <p className="text-gray-300 text-sm font-marcellus">
                Items damaged during shipping will be addressed. Contact us within 48 hours with photos.
              </p>
            </div>
            
            <div className="text-center">
              <SafeIcon icon={FiPackage} className="text-green-400 text-3xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2 font-marcellus">Lost Packages</h4>
              <p className="text-gray-300 text-sm font-marcellus">
                Packages that don't show as delivered and are confirmed lost may be replaced or refunded.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-marcellus"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h3>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400/60 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-purple-600/10 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <SafeIcon icon={FiZap} className="text-purple-400 flex-shrink-0" />
                    <h4 className="text-lg font-semibold text-white font-marcellus">
                      {item.question}
                    </h4>
                  </div>
                  <motion.div
                    animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400 flex-shrink-0"
                  >
                    <SafeIcon icon={FiChevronDown} className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="flex items-start space-x-4">
                          <SafeIcon icon={FiSkull} className="text-red-400 mt-1 flex-shrink-0" />
                          <p className="text-gray-300 leading-relaxed font-marcellus">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-500/30 p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SafeIcon icon={FiMoon} className="text-4xl text-yellow-400 mx-auto mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold text-white mb-4 font-marcellus">
            Need Assistance from the Shadows?
          </h3>
          <p className="text-gray-300 mb-6 font-marcellus">
            If you have concerns about shipping damage, lost packages, or other qualifying issues, 
            our spectral customer service team is here to help guide you through the darkness.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-marcellus"
          >
            Open Support Ticket
          </motion.button>
          
          <p className="text-sm text-purple-400 mt-4 font-marcellus">
            Email: support@realm13.com • Response within 24-48 hours
          </p>
        </motion.div>

        {/* Bottom Notice */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500 font-marcellus">
            Policy effective as of December 2024 • Subject to change without notice
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ReturnsPage;