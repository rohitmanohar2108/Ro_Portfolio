import React from 'react';
import Lottie from 'react-lottie';
import animationDataTwo from "../Animations/Animationtwo.json"


const Experience = () => {

  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationDataTwo, // Use the first animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="flex justify-center items-start space-x-8">
        {/* Left Side: Experience Section */}
        <div className="max-w-2xl mt-20">
          <div className="mb-4">
            <div className="border rounded-lg border-cyan-400 p-4 shadow-lg shadow-indigo-500/50">
              <h2 className="text-3xl font-courier-prime text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 experience-heading">
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
                    <h3 className="text-2xl font-courier-prime font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                      Member, TEDx NITK Surathkal Media Team
                    </h3>
                    <span className="block mb-2 text-sm font-courier-prime leading-none text-gray-400">
                      Dec 2022 - May 2026
                    </span>
                    <p className="mb-2 text-base font-courier-prime text-white dark:text-gray-300">
                      • Designed posters and promotional materials for TEDx
                      events, enhancing visual communication and branding
                      efforts.
                    </p>
                    <p className="mb-2 text-base font-courier-prime text-white dark:text-gray-300">
                      • Collaborated on media campaigns to boost event
                      visibility and engagement.
                    </p>
                    <p className="mb-2 text-base font-courier-prime text-white dark:text-gray-300">
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
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-courier-prime font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                      Student, National Institute of Technology Karnataka
                    </h3>
                    <span className="block mb-2 text-sm font-courier-prime leading-none text-gray-400">
                      Aug 2021 - Present
                    </span>
                    <p className="mb-2 text-base font-courier-prime text-white dark:text-gray-300">
                      • Pursuing a Bachelor’s degree in Computer Science.
                    </p>
                    <p className="mb-2 text-base font-courier-prime text-white dark:text-gray-300">
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
