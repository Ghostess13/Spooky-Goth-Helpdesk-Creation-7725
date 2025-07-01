import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMoon, FiSkull } = FiIcons;

const Footer = () => {
  return (
    <motion.footer
      className="bg-black/60 border-t border-purple-500/30 py-8 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <SafeIcon icon={FiSkull} className="text-purple-400 animate-pulse" />
            <SafeIcon icon={FiMoon} className="text-red-400 animate-bounce" />
            <SafeIcon icon={FiSkull} className="text-purple-400 animate-pulse" />
          </div>
          <p className="text-gray-400 flex items-center justify-center space-x-2 font-marcellus">
            <span>Made with</span>
            <SafeIcon icon={FiHeart} className="text-red-500 animate-pulse" />
            <span>in the shadows</span>
          </p>
          <p className="text-xs text-gray-500 mt-2 font-marcellus">
            © 2025 Morgana Xryptoria. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
