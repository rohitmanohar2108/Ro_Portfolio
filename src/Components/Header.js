import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white fixed w-full top-0 z-50 py-4">
      <nav className="flex justify-between items-center px-8">
        <div className="text-4xl font-extrabold font-great-vibes ml-16 cursor-pointer hover:text-teal-500 transition-colors duration-300">
          Rohit Manohar
        </div>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className="px-8 py-4 relative group"
            style={({ isActive }) =>
              isActive
                ? { borderBottom: "2px solid #14b8a6", paddingBottom: "5px" } // Cyan color (#14b8a6) for active link
                : {}
            }
          >
            <div className="relative z-10 group-hover:text-black">Home</div>
            <span className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </NavLink>
          <NavLink
            to="/experience"
            className="px-8 py-4 relative group"
            style={({ isActive }) =>
              isActive
                ? { borderBottom: "2px solid #14b8a6", paddingBottom: "5px" }
                : {}
            }
          >
            <div className="relative z-10 group-hover:text-black">Experience</div>
            <span className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </NavLink>
          <NavLink
            to="/projects"
            className="px-8 py-4 relative group"
            style={({ isActive }) =>
              isActive
                ? { borderBottom: "2px solid #14b8a6", paddingBottom: "5px" }
                : {}
            }
          >
            <div className="relative z-10 group-hover:text-black">Projects</div>
            <span className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </NavLink>
          <NavLink
            to="/contact"
            className="px-8 py-4 relative group"
            style={({ isActive }) =>
              isActive
                ? { borderBottom: "2px solid #14b8a6", paddingBottom: "5px" }
                : {}
            }
          >
            <div className="relative z-10 group-hover:text-black">Contact</div>
            <span className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
