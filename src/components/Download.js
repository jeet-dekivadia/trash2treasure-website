import React from 'react';
import { motion } from 'framer-motion';

const Download = () => {
  return (
    <section id="download" className="py-20 bg-green-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Ready to Start?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-12"
        >
          Download the Trash2Treasure app now and join the recycling revolution!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#"
            className="bg-white text-green-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-100 transition duration-300 inline-block"
          >
            Download on the App Store
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
