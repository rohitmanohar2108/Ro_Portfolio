import React, { useState, useRef } from 'react';
import animationData from '../Animations/Animation.json';
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import React Icons

const quotes = [
  {
    text: " 'Because the people who are crazy enough to think they can change the world are the ones who do.'",
    author: "Steve Jobs",
    image: "https://akshaysaini.in/img/quotes/steve-jobs.jpg",
  },
  {
    text: " 'Success is a lousy teacher. It seduces smart people into thinking they can't lose.'",
    author: "Bill Gates",
    image: "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
  },
  {
    text: "' I think it is possible for ordinary people to choose to be extraordinary.'",
    author: "Elon Musk",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCPblxoSQ8E0dWaakrQDUt73M_hS63hE9cg&s",
  },
  {
    text: "'Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.'",
    author: "Mark Zuckerberg",
    image: "https://media.vanityfair.com/photos/5cf71b7e5d0130aa612df063/master/pass/zuckerberg1.jpg",
  },
  {
    text: "'See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too.'",
    author: "Linus Torvalds",
    image: "https://akshaysaini.in/img/quotes/linus-torvalds.jpg",
  },
  {
    text: "'If you're changing the world, you're working on important things. You're excited to get up in the morning.'",
    author: "Larry Page",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c76bcaaa7ea43100043c836/0x0.jpg?format=jpg&crop=1795,1795,x227,y22,safe&height=416&width=416&fit=bounds",
  },
  {
    text: " 'You don’t need to be a genius or a visionary, or even a college graduate for that matter, to be successful. You just need framework and a dream.'",
    author: "Michael Dell",
    image: "https://imageio.forbes.com/specials-images/imageserve/615c93f9da61f2ff5b9ecf9b/0x0.jpg?format=jpg&crop=1678,1679,x0,y118,safe&height=416&width=416&fit=bounds",
  },
];

const Home = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const textRef = useRef(null);
  const elementRef = useRef(null);

  // Function to handle quote navigation
  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePrevQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  // Array of words to animate
  const words = ["I", "am", "Rohit,", "Computer", "Science", "Undergrad", "at", "NITK"];

  return (
    <div className="min-h-screen bg-black flex flex-col px-8">
      <div className="flex flex-row items-start justify-between flex-1">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start ml-24 mt-32">
          <motion.h1
            className="text-6xl text-blue-500 font-courier-prime"
            ref={textRef}
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2.5,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                style={{ display: "inline-block", marginRight: "0.5rem" }}
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
        <div className="mr-16">
          <Lottie 
            animationData={animationData} 
            loop={true} 
            autoplay={true} 
            style={{ height: 600, width: 600 }} 
          />
        </div>
      </div>

      {/* Bottom: Quotes Section */}
      <div className="mt-16  bg-teal-400  flex items-center">
        <div className="w-full mx-auto relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 ml-5 rounded-full cursor-pointer hover:bg-gray-800 z-10">
            <FaArrowLeft onClick={handlePrevQuote} />
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 mr-5  rounded-full cursor-pointer hover:bg-gray-800 z-10">
            <FaArrowRight onClick={handleNextQuote} />
          </div>
          <div className="w-full px-7 py-8 bg-black bg-opacity-30  shadow-lg shadow-cyan-500/50 border-multicolor outline hover:outline-2 ring-2 relative">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={quotes[currentQuoteIndex].image}
                alt={quotes[currentQuoteIndex].author}
                className="h-56 w-56 object-cover rounded-full mb-4"
              />
              <div className="text-center">
                <p className="text-3xl text-white font-dancing-script">
                  {quotes[currentQuoteIndex].text}
                </p>
                <p className="text-xl font-courier-prime mt-3 text-white">
                  - {quotes[currentQuoteIndex].author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
