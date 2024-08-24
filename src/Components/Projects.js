import React, { useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import animationDataFour from "../Animations/Animationfour.json"; // Adjust path if necessary
import Lottie from "react-lottie";
import gsap from "gsap";

const projects = [
  {
    title: "FilmNinja",
    image: "https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png",
    description:
      "I created a Netflix clone using ReactJs and Tailwindcss. This is a clone of Netflix website. And played a lot with Api.",
    githubLink: "https://github.com/rohitmanohar2108/FilmNinja",
  },
  {
    title: "NewScope",
    image:
      "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_5b2kSrGxTACKkULtVm7do4bESsEN%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_7KgoXXMEhgteKcMRKe239MXk5jiP",
    description:
      "A simple and beautiful News Website made with Pure React JS by data fetching using NEWS API.",
    githubLink: "https://github.com/rohitmanohar2108/Newscope",
  },
  {
    title: "Portfolio",
    image:
      "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_vANqWYc2hBq5DbhgBDAxpeYepfDo%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_65jN9Gnuq15XcvrDMn6Z17eEWW88",
    description:
      "A simple and beautiful Portfolio Website made with Pure React JS. With some beautiful Animation.",
    githubLink: "https://github.com/rohitmanohar2108/Portfolio",
  },
  {
    title: "Page Replacement Algo",
    image:
      "https://cdn.educba.com/academy/wp-content/uploads/2020/04/Page-Replacement-Algorithms.jpg",
    description:
      "Developed a dynamic web application using HTML, CSS, Bootstrap, and jQuery to simulate and analyze FIFO, LRU,and Optimal page replacement algorithms.",
    githubLink:
      "https://github.com/rohitmanohar2108/OS-LAB-PROJECT/tree/main/Page-Replacement",
  },
];

const Projects = () => {
  const defaultOptionsFour = {
    loop: true,
    autoplay: true,
    animationData: animationDataFour,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const textRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex flex-col lg:flex-row">
        {/* Lottie Animation */}
        <div className="flex-1 lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <div className="flex justify-center">
            <Lottie options={defaultOptionsFour} height={600} width={600} />
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex-1 lg:w-1/2">
          <div className="border rounded-lg border-teal-400 p-4 shadow-lg shadow-indigo-500/50 mb-8">
            <h2
              ref={addToRefs}
              className="text-3xl font-courier-prime text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 experience-heading"
            >
              Projects
            </h2>
          </div>
          {/* Description Below Experience */}
          <p
            ref={addToRefs}
            className="text-gray-300 mb-8 text-xl font-courier-prime"
          >
            Here are some of the projects I have worked on. Each project showcases different skills and technologies I have used. Feel free to explore them and see the results of my work.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div
        ref={addToRefs}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl shadow-cyan-500/50 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover font-courier-prime" // Adjust height if needed
            />
            <div className="p-4">
              <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-400 font-bold mb-2 font-courier-prime">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-base font-courier-prime">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 flex items-center"
              >
                <FaGithub className="text-2xl mr-2 font-courier-prime" />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center font-courier-prime text-xl text-white mt-10">
        Made by Rohit
      </p>
    </div>
  );
};

export default Projects;

