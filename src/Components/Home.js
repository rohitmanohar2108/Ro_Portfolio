import React from 'react';
import animationData from '../Animations/Animation.json';
import { motion } from "framer-motion";
import Lottie from 'lottie-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-between px-8">
      {/* Left Side: Text Content */}
      <div className="flex flex-col ml-16 justify-center">
        <h1 className="text-4xl font-bold mb-2">Hi,</h1>
        <h2 className="text-3xl font-semibold mb-2">I am Rohit</h2>
        <p className="text-2xl text-gray-700 mb-4">Computer Science Undergrad at NITK</p>
        <div className="border-2 border-gray-500 px-4 py-2 text-lg font-medium">
          Seeking Internship Opportunities
        </div>
      </div>

      {/* Right Side: Lottie Animation */}
      <motion.div className="mr-20" whileHover={{ scale: 1.1 }}>
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true} 
          style={{ height: 600, width: 600 }} 
        />
      </motion.div>
    </div>
  );
};

export default Home;
