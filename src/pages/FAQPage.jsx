willimport React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiHelpCircle, FiSkull, FiMoon, FiZap } = FiIcons;

const FAQPage = () => {
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
      question: "What dark powers fuel this helpdesk?",
      answer: "Our helpdesk is powered by ancient algorithms and supernatural support spirits that work tirelessly in the digital realm to assist lost souls seeking answers."
    },
    {
      question: "When will my order ship?",
      answer: "Average time is 3 business days, but can take around 5 if there is an influx of orders. Please refer to the top banner of the shop for current processing estimates."
    },
    {
      question: "Are my digital secrets safe in your realm?",
      answer: "Your secrets are protected by layers of cryptic encryption and guarded by digital demons who have sworn eternal oaths to protect your privacy."
    },
    {
      question: "What happens if I encounter a cursed bug?",
      answer: "Fear not! Our team of digital exorcists specializes in banishing bugs and glitches back to the shadow realm from whence they came."
    },
    {
      question: "Do you offer support during the witching hour?",
      answer: "Our support spirits never sleep. Whether it's midnight or the break of dawn, we're here to guide you through the darkness of technical difficulties."
    },
    {
      question: "How do I access premium dark features?",
      answer: "Premium features are unlocked through ritual subscription offerings. These enhanced abilities grant you access to the deeper mysteries of our platform."
    },
    {
      question: "What if my account becomes possessed?",
      answer: "Account possession is rare but serious. Contact our digital clerics immediately for an emergency purification ritual to restore your account's sanctity."
    },
    {
      question: "Can I customize my dark theme preferences?",
      answer: "Absolutely! Dive into the settings abyss where you can adjust shadows, alter mystical colors, and personalize your interface to match your gothic soul."
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
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <SafeIcon icon={FiHelpCircle} className="text-6xl text-purple-400" />
            </motion.div>
            <SafeIcon icon={FiSkull} className="text-4xl text-red-400 animate-pulse" />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <SafeIcon icon={FiMoon} className="text-5xl text-yellow-400" />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent font-marcellus">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-marcellus">
            Answers to the most haunting questions that echo through our digital realm.
            <br />
            <span className="text-purple-400">Seek and ye shall find...</span>
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400/60 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-purple-600/10 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <SafeIcon icon={FiZap} className="text-purple-400 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white font-marcellus">
                    {item.question}
                  </h3>
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

        {/* Contact Section */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-purple-900/50 to-red-900/50 rounded-xl p-8 border border-purple-500/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SafeIcon icon={FiMoon} className="text-4xl text-yellow-400 mx-auto mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold text-white mb-4 font-marcellus">
            Still Lost in the Shadows?
          </h3>
          <p className="text-gray-300 mb-6 font-marcellus">
            If your question remains unanswered, reach out to our spectral support team. They dwell in the depths of our contact realm.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-marcellus"
          >
            Contact the Spirits
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
