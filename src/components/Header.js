// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['About', 'Features', 'How It Works', 'Impact', 'Download'];

  return (
    <header className="bg-green-500 text-white py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold cursor-pointer"
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            Trash2Treasure
          </Link>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-green-200 transition duration-300">
                  {item}
                </a>
              </motion.li>
            ))}
            <motion.li>
              <Link to="/leaderboard" className="hover:text-green-200 transition duration-300">
                Leaderboard & Challenges
              </Link>
            </motion.li>
          </ul>
        </nav>
        <div className="hidden md:flex">
          {currentUser ? (
            <>
              <Link to="/upload-image" className="bg-white text-green-500 px-4 py-2 rounded font-semibold hover:bg-green-200 mr-2">
                Upload Image
              </Link>
              <Link to="/dashboard" className="bg-white text-green-500 px-4 py-2 rounded font-semibold hover:bg-green-200">
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-white text-green-500 px-4 py-2 rounded font-semibold hover:bg-green-200 mr-2">
                Log In
              </Link>
              <Link to="/signup" className="bg-white text-green-500 px-4 py-2 rounded font-semibold hover:bg-green-200">
                Sign Up
              </Link>
            </>
          )}
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-green-600 py-2"
        >
          <ul className="flex flex-col items-center space-y-2">
            {menuItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="block py-2 px-4 hover:bg-green-700 w-full text-center" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Link to="/leaderboard" className="block py-2 px-4 hover:bg-green-700 w-full text-center" onClick={() => setIsOpen(false)}>
                Leaderboard & Challenges
              </Link>
            </li>
            {currentUser ? (
              <>
                <li>
                  <Link to="/upload-image" className="block py-2 px-4 hover:bg-green-700 w-full text-center" onClick={() => setIsOpen(false)}>
                    Upload Image
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="block py-2 px-4 hover:bg-green-700 w-full text-center" onClick={() => setIsOpen(false)}>
                    Dashboard
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="block py-2 px-4 hover:bg-green-700 w-full text-center" onClick={() => setIsOpen(false)}>
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="block py-2 px-4 hover:bg-green-700 w-full text-center" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
