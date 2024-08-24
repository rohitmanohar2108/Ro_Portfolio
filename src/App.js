// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Contact from './Components/Contact';
function App() {
  return (
    <Router>
      <Header />
      <div className="pt-16"> {/* Padding to avoid overlap with the fixed header */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
