// src/App.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Download from './components/Download';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UploadImage from './components/UploadImage';

const App = () => {
  const [userPoints, setUserPoints] = useState(1000); // Initialize points

  return (
    <Router>
      <AuthProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen"
        >
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Features />
                <HowItWorks />
                <Impact />
                <Download />
                <Footer />
              </>
            } />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard userPoints={userPoints} setUserPoints={setUserPoints} />} />
            <Route path="/upload-image" element={<UploadImage setUserPoints={setUserPoints} />} />
          </Routes>
        </motion.div>
      </AuthProvider>
    </Router>
  );
};

export default App;
