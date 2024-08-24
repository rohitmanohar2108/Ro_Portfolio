// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto flex justify-between">
        <div className="text-4xl mt-3 font-extrabold font-great-vibes cursor-pointer hover:text-teal-500 transition-colors duration-300">Rohit Manohar</div>
        <div className="space-x-4 flex">
          <Link to="/" className="relative group">
            <div className="px-8 py-4 relative z-10 group-hover:text-black">
              Home
            </div>
            <span className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          <Link to="/experience" className="relative group">
            <div className="px-8 py-4 relative z-10 group-hover:text-black">
              Experience
            </div>
            <span className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          <Link to="/projects" className="relative group">
            <div className="px-8 py-4 relative z-10 group-hover:text-black">
              Projects
            </div>
            <span className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          <Link to="/contact" className="relative group">
            <div className="px-8 py-4 relative z-10 group-hover:text-black">
              Contact
            </div>
            <span className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
