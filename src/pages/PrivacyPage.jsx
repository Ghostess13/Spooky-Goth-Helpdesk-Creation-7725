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
                  Our digital guardians are crafting the final enchantments for our comprehensive privacy policy. Your data fortress grows stronger with each passing moon cycle.
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