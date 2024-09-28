import React from 'react';
import { motion } from 'framer-motion';

const impactData = [
  { metric: 'Items Recycled', value: '1,000,000+' },
  { metric: 'CO2 Reduced', value: '500 tons' },
  { metric: 'Trees Saved', value: '10,000+' },
  { metric: 'Active Users', value: '100,000+' }
];

const ImpactCard = ({ metric, value, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 text-center"
    >
      <h3 className="text-4xl font-bold text-green-500 mb-2">{value}</h3>
      <p className="text-xl text-gray-600">{metric}</p>
    </motion.div>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item, index) => (
            <ImpactCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
