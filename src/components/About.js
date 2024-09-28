import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          About Trash2Treasure
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center max-w-3xl mx-auto"
        >
          Trash2Treasure is a gamified recycling app that turns reducing waste into rewards and tracks your impact as you compete for a greener world. We're on a mission to make recycling fun, engaging, and rewarding for everyone.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
