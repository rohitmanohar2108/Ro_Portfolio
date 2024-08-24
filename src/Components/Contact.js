// src/pages/Contact.js
import React from "react";
import Lottie from "react-lottie";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import animationDataFive from "../Animations/Animationfive.json";

const Contact = () => {
  const defaultOptionsfive = {
    loop: true,
    autoplay: true,
    animationData: animationDataFive,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="min-h-screen bg-black flex flex-col lg:flex-row items-center justify-center p-8">
      {/* Lottie Animation on the Left */}
      <div className="flex-1 lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
        <Lottie options={defaultOptionsfive} height={700} width={700} />
      </div>

      {/* Content on the Right */}
      <div className="flex-1 lg:w-1/2 max-w-lg lg:max-w-none">
        <div className="p-6 lg:p-8 shadow-lg shadow-indigo-500/50 mb-96">
          <div className="border rounded-lg border-teal-400 p-4 shadow-lg shadow-indigo-500/50">
            <div className="w-64 mx-auto">
              <h2
              
                className="text-3xl font-courier-prime text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 experience-heading text-center"
              >
                Contact Me
              </h2>
            </div>
          </div>

          <p className="text-gray-300 mt-4 mb-6 text-xl font-courier-prime ">
          
          
          I am available on almost every social media. You can message me, I will reply within 24 hours :)
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/rohitmanohar2108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub className="text-3xl hover:text-teal-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin className="text-3xl hover:text-teal-400 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/rohitmanohar2108/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram className="text-3xl hover:text-teal-400 transition-colors" />
            </a>
            <a
              href="https://twitter.com/imrohit372"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaTwitter className="text-3xl hover:text-teal-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
