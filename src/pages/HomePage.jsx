import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHelpCircle, FiFileText, FiShield, FiMoon, FiSkull, FiZap } = FiIcons;

const HomePage = () => {
  const services = [
    {
      icon: FiHelpCircle,
      title: 'Frequently Asked Questions',
      description: 'Uncover answers to the most haunting questions from the depths of our knowledge.',
      link: '/faq',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiFileText,
      title: 'Terms & Conditions',
      description: 'The sacred covenant that binds us in this digital realm of shadows.',
      link: '/terms',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: FiShield,
      title: 'Privacy Policy',
      description: 'Your secrets are safe in our cryptic vault of digital protection.',
      link: '/privacy',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <motion.section
        className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-8"
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          >
            <SafeIcon icon={FiSkull} className="text-8xl text-purple-400 mx-auto mb-6" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent font-marcellus"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to the Shadows
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-marcellus"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Enter our realm of digital darkness where support meets the supernatural.
            <br />
            <span className="text-purple-400">Your questions shall be answered...</span>
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SafeIcon icon={FiMoon} className="text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
            <SafeIcon icon={FiZap} className="text-purple-400 animate-pulse" />
            <SafeIcon icon={FiMoon} className="text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-marcellus"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Services from Beyond
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 h-full transition-all duration-300 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:animate-pulse`}>
                      <SafeIcon icon={service.icon} className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors font-marcellus">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors font-marcellus">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm font-medium font-marcellus">Enter the realm</span>
                      <SafeIcon icon={FiZap} className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;