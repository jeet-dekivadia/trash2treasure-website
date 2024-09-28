import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-4">Trash2Treasure</h3>
            <p>Compete, recycle, and watch your impact grow</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 mb-8 md:mb-0"
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#about" className="hover:text-green-300 transition duration-300">About</a></li>
              <li><a href="#features" className="hover:text-green-300 transition duration-300">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-green-300 transition duration-300">How It Works</a></li>
              <li><a href="#impact" className="hover:text-green-300 transition duration-300">Impact</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/3"
          >
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>Email: info@trash2treasure.com</p>
            <p>Phone: (123) 456-7890</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p>&copy; 2024 Trash2Treasure. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
