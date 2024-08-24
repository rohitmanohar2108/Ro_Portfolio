import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lottie from "react-lottie";
import animationDataTwo from "../Animations/Animationtwo.json";
import animationDataThree from "../Animations/Animationthree.json";
import { motion } from "framer-motion";

// Certification data
const certifications = [
  {
    id: 1,
    logoSrc: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
    name: "C++ Programming",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-18d6bb61-0afd-4f93-a950-22da50d68372.jpg?v=1685001837000",
    Course: "Udemy",
  },
  {
    id: 2,
    logoSrc:
      "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1732147200&v=beta&t=3VXpZyiP86LrKXtnxgm1KNkPqkxm6lndd7_x4fkXYvE",
    name: "Problem Solving Basic",
    link: "https://www.hackerrank.com/certificates/a409daa53e15",
    Course: "Hackerank",
  },
  {
    id: 3,
    logoSrc:
      "https://media.licdn.com/dms/image/v2/C4D0BAQFd9H6cxFC3wQ/company-logo_100_100/company-logo_100_100/0/1630549313166?e=1732147200&v=beta&t=lbbuC7_bSl16Rew1PlMvMKwtWRkGij7zkzxZYUNPHAo",
    name: "Namaste React",
    link: "https://media.licdn.com/dms/image/v2/D562DAQGBRip9wMxEyQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720373809961?e=1724410800&v=beta&t=cs_oObs7ai9t90xKXErxQRXLWk1g4Ifujy2mLpwGvEg",
    Course: "NamasteDev.com",
  },
  {
    id: 4,
    logoSrc: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
    name: "Web Development Bootcamp",
    link: "https://www.udemy.com/certificate/UC-e1b5392e-1cea-4d45-9b5f-ab9f453208bd/",
    Course: "Udemy",
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const certRefs = useRef([]);
  textRefs.current = [];
  certRefs.current = [];

  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationDataTwo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsThree = {
    loop: true,
    autoplay: true,
    animationData: animationDataThree,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const addCertRefs = (el) => {
    if (el && !certRefs.current.includes(el)) {
      certRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      certRefs.current,
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black" ref={sectionRef}>
      <div className="flex justify-center items-start space-x-8">
        {/* Left Side: Experience Section */}
        <div className="max-w-2xl mt-20">
          <div className="mb-4">
            <div className="border rounded-lg border-teal-400 p-4 shadow-lg shadow-indigo-500/50">
              <h2
                ref={addToRefs}
                className="text-3xl font-courier-prime text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 experience-heading"
              >
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
                    <h3
                      ref={addToRefs}
                      className="text-2xl font-courier-prime font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500"
                    >
                      Member, TEDx NITK Surathkal Media Team
                    </h3>
                    <span
                      ref={addToRefs}
                      className="block mb-2 text-sm font-courier-prime leading-none text-gray-400"
                    >
                      Dec 2022 - May 2026
                    </span>
                    <p
                      ref={addToRefs}
                      className="mb-2 text-base font-courier-prime text-white dark:text-gray-300"
                    >
                      • Designed posters and promotional materials for TEDx
                      events, enhancing visual communication and branding
                      efforts.
                    </p>
                    <p
                      ref={addToRefs}
                      className="mb-2 text-base font-courier-prime text-white dark:text-gray-300"
                    >
                      • Collaborated on media campaigns to boost event
                      visibility and engagement.
                    </p>
                    <p
                      ref={addToRefs}
                      className="mb-2 text-base font-courier-prime text-white dark:text-gray-300"
                    >
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
                    <h3
                      ref={addToRefs}
                      className="text-2xl font-courier-prime font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500"
                    >
                      Student, National Institute of Technology Karnataka
                    </h3>
                    <span
                      ref={addToRefs}
                      className="block mb-2 text-sm font-courier-prime leading-none text-gray-400"
                    >
                      Aug 2021 - Present
                    </span>
                    <p
                      ref={addToRefs}
                      className="mb-2 text-base font-courier-prime text-white dark:text-gray-300"
                    >
                      • Pursuing a Bachelor’s degree in Computer Science.
                    </p>
                    <p
                      ref={addToRefs}
                      className="mb-2 text-base font-courier-prime text-white dark:text-gray-300"
                    >
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

      {/* Certifications Section */}
      <motion.div className="mt-8 mr-8">
        <Lottie options={defaultOptionsThree} height={500} width={500} />
      </motion.div>
      <div className="flex justify-center mt">
        <div className="text-center">
          <div className="border rounded-lg border-cyan-400 p-4 shadow-lg shadow-indigo-500/50">
            <h2
              ref={addToRefs}
              className="text-3xl font-courier-prime text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500"
            >
              Certifications
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-8 mb-24">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                ref={addCertRefs}
                className="border rounded-lg border-teal-400 p-4 shadow-lg shadow-indigo-500/50 hover:scale-105 transition-transform bg-white"
              >
                <img
                  src={cert.logoSrc}
                  alt={cert.name}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-courier-prime font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-500">
                  {cert.name}
                </h3>
                <p className="text-base font-courier-prime text-black">
                  {cert.Course}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 mt-2 text-white bg-teal-400 border border-transparent rounded-lg shadow-sm hover:text-black focus:outline-none  focus:ring-teal-400 focus:ring-offset-2 transition-colors duration-300"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
