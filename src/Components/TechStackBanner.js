

import "devicon/devicon.min.css";

const TechStackBanner = () => {
  

  return (
    <div
      
      className="border-teal-400   mt-16 p-8 mb-28 rounded-lg shadow-lg flex items-center shadow-teal-400/50"
    >
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500 px-4 py-2 text-2xl font-courier-prime font-normal mb-3">
        Some of the Tech Stack I know:
      </p>

      <div className="flex mb-5 mt-4 space-x-4">
        <i className="devicon-react-original colored text-4xl" title="React"></i>
        <i className="devicon-javascript-plain colored text-4xl" title="JavaScript"></i>
        <i className="devicon-redux-plain colored text-4xl" title="Redux"></i>
        <i className="devicon-html5-plain colored text-4xl" title="HTML5"></i>
        <i className="devicon-css3-plain colored text-4xl" title="CSS3"></i>
        <i className="devicon-tailwindcss-plain colored text-4xl" title="Tailwind CSS"></i>
        <i className="devicon-c-plain colored text-4xl" title="C"></i>
        <i className="devicon-cplusplus-plain colored text-4xl" title="C++"></i>
        <i className="devicon-reactrouter-plain colored text-4xl" title="ReactRouter"></i>
        <i className="devicon-ubuntu-plain colored text-4xl" title="Ubuntu"></i>
        <i className="devicon-canva-plain colored text-4xl" title="Canva"></i>
      </div>
    </div>
  );
};

export default TechStackBanner;
