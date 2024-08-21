import React, { useRef } from 'react';
import animationData from '../Animations/Animation.json';
import { motion } from "framer-motion";
import Lottie from 'lottie-react';

const Home = () => {
  const textRef = useRef(null);
  const elementRef = useRef(null);

  // Array of words to animate
  const words = ["I", "am", "Rohit,", "Computer", "Science", "Undergrad", "at", "NITK"];

  return (
    <div className="min-h-screen bg-white flex items-center justify-between px-8">
      {/* Left Side: Text Content */}
      <div className="flex flex-col items-start ml-20">
        <motion.h1
          className="text-6xl text-blue-500 font-courier-prime"
          ref={textRef}
          initial={{ y: "-100vh", opacity: 0 }} // Start from above the viewport
          animate={{ y: 0, opacity: 1 }} // Move to its original position
          transition={{ duration: 0.5, ease: "easeOut" }} // Adjust duration for speed
          whileHover={{
            scale: 1.1,
            color: "#1E90FF",
            textShadow: "0px 8px 15px rgba(30, 144, 255, 0.8)",
          }}
        >
          Hi👋!
        </motion.h1>

        <motion.h2
          className="mb-6 text-4xl text-teal-500 font-normal font-courier-prime mt-4"
          whileHover={{
            y: -10,
            opacity: 0.8,
            color: "#38B2AC",
            textShadow: "0px 4px 8px rgba(56, 179, 172, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }} // Start with some vertical offset
              animate={{ opacity: 1, y: 0 }} // Animate to original position
              transition={{
                duration: 2.5,
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: 1,
              }} // Slow reveal with longer delay
              style={{ display: "inline-block", marginRight: "0.5rem" }} // Add space between words
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <div
          ref={elementRef}
          className="border rounded-lg border-teal-400 w-full max-w-md mt-4 pt-4 text-center shadow-lg shadow-teal-500/50"
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 px-4 py-2 font-bold mb-3 text-3xl font-courier-prime animate-color-change">
            Seeking Internship Opportunities
          </p>
        </div>
      </div>

      {/* Right Side: Lottie Animation */}
      <motion.div className="mr-16">
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

