import React from 'react';
import { motion } from 'framer-motion';

const featureData = [
  {
    title: 'Smart Recycling',
    description: 'Use AI-powered object detection to verify and track your recyclables.',
    icon: '🔍'
  },
  {
    title: 'Challenges & Competitions',
    description: 'Participate in solo or group challenges to boost your recycling efforts.',
    icon: '🏆'
  },
  {
    title: 'Impact Dashboard',
    description: 'Visualize your environmental impact with real-time metrics and leaderboards.',
    icon: '📊'
  },
  {
    title: 'Rewards System',
    description: 'Earn points and redeem them for eco-friendly products or donate to causes.',
    icon: '🎁'
  }
];

const FeatureCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
