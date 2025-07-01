import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMoon, FiSkull, FiMail, FiMapPin, FiPhone, FiFileText, FiShield, FiHelpCircle, FiGithub, FiTwitter, FiInstagram, FiPackage } = FiIcons;

const Footer = () => {
  const quickLinks = [
    { path: '/faq', label: 'FAQ', icon: FiHelpCircle },
    { path: '/terms', label: 'Terms', icon: FiFileText },
    { path: '/privacy', label: 'Privacy', icon: FiShield },
    { path: '/returns', label: 'Returns Policy', icon: FiPackage }
  ];

  const contactInfo = [
    { icon: FiMail, label: 'support@realm13.com' },
    { icon: FiPhone, label: '+1 (666) 666-6666' },
    { icon: FiMapPin, label: 'Shadow Realm, Dark Dimension' }
  ];

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: '#' },
    { icon: FiTwitter, label: 'Twitter', href: '#' },
    { icon: FiInstagram, label: 'Instagram', href: '#' }
  ];

  return (
    <motion.footer
      className="bg-black/60 border-t border-purple-500/30 py-12 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <SafeIcon icon={FiSkull} className="text-purple-400 text-3xl" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent font-marcellus">
                Morgana Cryptoria
              </h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed font-marcellus">
              Your gateway to the supernatural support realm. We dwell in the shadows to provide 
              mystical assistance for all your digital needs. May your journey be blessed with 
              dark wisdom and eternal guidance.
            </p>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiSkull} className="text-purple-400 animate-pulse" />
              <SafeIcon icon={FiMoon} className="text-red-400 animate-bounce" />
              <SafeIcon icon={FiSkull} className="text-purple-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-4 font-marcellus flex items-center space-x-2">
              <SafeIcon icon={FiMoon} className="text-yellow-400" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors font-marcellus"
                  >
                    <SafeIcon icon={link.icon} className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold text-white mb-4 font-marcellus flex items-center space-x-2">
              <SafeIcon icon={FiSkull} className="text-red-400" />
              <span>Contact the Spirits</span>
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-2 text-gray-400 font-marcellus"
                >
                  <SafeIcon icon={contact.icon} className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contact.label}</span>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3 font-marcellus">
                Follow the Shadows
              </h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-purple-600/30 rounded-lg flex items-center justify-center text-purple-400 hover:text-white hover:bg-purple-600/60 transition-all duration-300"
                  >
                    <SafeIcon icon={social.icon} className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-purple-500/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 flex items-center justify-center md:justify-start space-x-2 font-marcellus">
                <span>Made with</span>
                <SafeIcon icon={FiHeart} className="text-red-500 animate-pulse" />
                <span>in the shadows</span>
              </p>
              <p className="text-xs text-gray-500 mt-1 font-marcellus">
                © 2025 Morgana Cryptoria. All rights reserved.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 font-marcellus">
                "In darkness we find light, in shadows we discover truth"
              </p>
              <p className="text-xs text-purple-400 mt-1 font-marcellus">
                Version 1.0.0 • Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;