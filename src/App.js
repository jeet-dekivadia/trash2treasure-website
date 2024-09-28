import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Download from './components/Download';
import Footer from './components/Footer';

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen"
    >
      <Header />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Impact />
      <Download />
      <Footer />
    </motion.div>
  );
};

export default App;
