import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Sign Up', description: 'Create your account and set your recycling goals' },
  { title: 'Scan Items', description: 'Use the in-app camera to scan recyclables' },
  { title: 'Earn Points', description: 'Get points for verified recyclables and completed challenges' },
  { title: 'Track Impact', description: 'View your progress on local and global leaderboards' },
  { title: 'Redeem Rewards', description: 'Use points for eco-friendly products or donate to causes' }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center mb-8"
            >
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600"
