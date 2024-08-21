import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Lottie from 'react-lottie';
import animationDataTwo from "../Animations/Animationtwo.json";

const Experience = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  textRefs.current = [];

  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationDataTwo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      { x: '100%', opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black" ref={sectionRef}>
      <div className="flex justify-center items-start space-x-8">
        {/* Left Side: Experience Section */}
        <div className="max-w-2xl mt-20">
          <div className="mb-4">
            <div className="border rounded-lg border-teal-400 p-4 shadow-lg shadow-indigo-500/50">
              <h2 ref={addToRefs} className="text-3xl font-courier-prime text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 experience-heading">
                Experience
              </h2>
            </div>
          </div>
          <div className="relative">
            <div className="flex items-start mb-12 timeline-item">
              <div className="w-full pr-8">
                <div className="relative border-l border-cyan-400 pl-6">
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
                  <div className="mb-8">
                    <h3 ref={addToRefs} className="text-2xl font-courier-prime font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                      Member, TEDx NITK Surathkal Media Team
                    </h3>
                    <span ref={addToRefs} className="block mb-2 text-sm font-courier-prime leading-none text-gray-400">
                      Dec 2022 - May 2026
                    </span>
                    <p ref={addToRefs} className="mb-2 text-base font-courier-prime text-white dark:text-gray-300">
                      • Designed posters and promotional materials for TEDx
                      events, enhancing visual communication and branding
                      efforts.
                    </p>
                    <p ref={addToRefs} className="mb-2 text-base font-courier-prime text-white dark:text-gray-300">
                      • Collaborated on media campaigns to boost event
                      visibility and engagement.
                    </p>
                    <p ref={addToRefs} className="mb-2 text-base font-courier-prime text-white dark:text-gray-300">
                      • Technologies Used: Canva, Illustrator
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-1 border-l border-gray-300 h-full"></div>
            </div>
            <div className="flex items-start timeline-item">
              <div className="w-full pr-8">
                <div className="relative border-l border-cyan-400 pl-6">
                  <div className="absolute w-4 h-4 bg-teal-400 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
                  <div className="mb-8">
                    <h3 ref={addToRefs} className="text-2xl font-courier-prime font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                      Student, National Institute of Technology Karnataka
                    </h3>
                    <span ref={addToRefs} className="block mb-2 text-sm font-courier-prime leading-none text-gray-400">
                      Aug 2021 - Present
                    </span>
                    <p ref={addToRefs} className="mb-2 text-base font-courier-prime text-white dark:text-gray-300">
                      • Pursuing a Bachelor’s degree in Computer Science.
                    </p>
                    <p ref={addToRefs} className="mb-2 text-base font-courier-prime text-white dark:text-gray-300">
                      • Engaged in various projects and coursework related to
                      computer science and software development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-1 border-l border-gray-300 h-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Lottie Animation */}
        <div className="ml-8">
          <Lottie options={defaultOptionsTwo} height={500} width={500} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
