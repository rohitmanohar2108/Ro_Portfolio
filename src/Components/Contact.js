import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import animationDataFive from "../Animations/Animationfive.json";
import gsap from "gsap";

const Contact = () => {
  const lottieRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const socialIconsRef = useRef(null);
  const mailButtonRef = useRef(null);
  const addressRef = useRef(null);

  const defaultOptionsfive = {
    loop: true,
    autoplay: true,
    animationData: animationDataFive,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
    gsap.fromTo(
      socialIconsRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.4,
      }
    );
    gsap.fromTo(
      mailButtonRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.6 }
    );
    gsap.fromTo(
      addressRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black p-8">
      <div className="flex-grow flex flex-col lg:flex-row items-center justify-center">
        {/* Lottie Animation on the Left */}
        <div className="flex-1 lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <Lottie options={defaultOptionsfive} height={700} width={700} />
        </div>

        {/* Content on the Right */}
        <div className="flex-1 lg:w-1/2 max-w-lg lg:max-w-none">
          <div className="p-6 lg:p-8 shadow-lg shadow-indigo-500/50 mb-12">
            <div className="border rounded-lg border-teal-400 p-4 shadow-lg shadow-indigo-500/50">
              <div className="w-64 mx-auto">
                <h2
                  ref={headingRef}
                  className="text-3xl font-courier-prime text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 experience-heading text-center"
                >
                  Contact Me
                </h2>
              </div>
            </div>

            <p
              ref={descriptionRef}
              className="text-gray-300 mt-4 mb-6 text-xl font-courier-prime"
            >
              I am available on almost every social media. You can message me, I
              will reply within 24 hours :)
            </p>
            <div ref={socialIconsRef} className="flex space-x-4 mb-6">
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

            {/* Drop a Mail Button */}
            <div className="mt-8 text-center">
              <a
                ref={mailButtonRef}
                href="mailto:rohitmanohar2108@gmail.com"
                className="shadow-md shadow-white text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-500 font-normal font-courier-prime text-xl py-2 px-4 rounded-lg hover:bg-violet-700  transition-transform transform hover:scale-105"
              >
                Drop a Mail
              </a>
            </div>

            {/* Address and Phone Number */}
            <div className="mt-8 text-center">
              <div
                ref={addressRef}
                className="text-gray-300 text-xl font-courier-prime mb-4"
              >
                <p>Address: National Institute of Technology Karnataka (NITK)</p>
                <p>Phone: +91-123-456-xxxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="text-center mt-8">
        <p className="font-courier-prime text-xl text-white">
          Made by Rohit
        </p>
      </div>
    </div>
  );
};

export default Contact;
