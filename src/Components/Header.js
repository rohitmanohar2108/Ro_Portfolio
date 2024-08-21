// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-black p-4 fixed w-full mt-6">
      <nav className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/experience" className="hover:text-gray-300">Experience</Link>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
