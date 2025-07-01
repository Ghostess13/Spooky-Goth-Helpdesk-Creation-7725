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
                  Our mystical legal team is putting the finishing touches on these binding agreements. Return soon to witness the full manifestation of our terms and conditions.
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