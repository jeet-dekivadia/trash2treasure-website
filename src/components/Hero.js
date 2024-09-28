import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-green-400 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Trash2Treasure</h1>
        <p className="text-xl md:text-2xl mb-8">Compete, recycle, and watch your impact grow</p>
        <motion.a
          href="#download"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-green-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-100 transition duration-300 inline-block"
        >
          Get Started
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 z-0"
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              animation: `float ${Math.random() * 10 + 5}s infinite linear`
            }}
          ></div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
