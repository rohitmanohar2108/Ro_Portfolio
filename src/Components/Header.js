// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-black p-4 fixed w-full mt-6">
      <nav className="container mx-auto flex justify-between">
        <div className="text-3xl mt-3 font-extrabold font-great-vibes">Rohit Manohar</div>
        <div className="space-x-4 flex">
          <Link to="/" className="relative group">
            <div className="px-8 py-4 relative z-10 group-hover:text-white">
              Home
            </div>
            <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></span>
          </Link>
          <Link to="/experience" className="relative group">
            <div className="px-8 py-4 relative z-10 group-hover:text-white">
              Experience
            </div>
            <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          <Link to="/projects" className="relative group">
            <div className="px-8 py-4 relative z-10 group-hover:text-white">
              Projects
            </div>
            <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          <Link to="/contact" className="relative group">
            <div className="px-8 py-4 relative z-10 group-hover:text-white">
              Contact
            </div>
            <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
