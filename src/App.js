import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    const colors = [
      "#00FF00", "#FFFF00", "#00FFFF", "#FF0000", "#FF00FF",
      "#0000FF", "#FF007F", "#FFBF00", "#00FFBF", "#BF00FF",
    ];

    const numCircles = 10;
    const circles = [];

    // Create the circles and append them to the body
    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.backgroundColor = colors[i % colors.length];
      document.body.appendChild(circle);
      circles.push(circle);
    }

    // Animate the circles based on mouse movement
    const animateCircles = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      // Use requestAnimationFrame for smoother animations
      requestAnimationFrame(() => {
        circles.forEach((circle, index) => {
          circle.style.left = `${x}px`;
          circle.style.top = `${y}px`;
          circle.style.transform = `scale(${1 - index * 0.1})`;
          circle.style.opacity = `${1 - index * 0.1}`;

          const nextX = x + (Math.random() * 20 - 10);
          const nextY = y + (Math.random() * 20 - 10);

          circle.style.transform += ` translate(${nextX - x}px, ${nextY - y}px)`;
        });
      });
    };

    document.addEventListener("mousemove", animateCircles);

    // Cleanup the event listener and circles when the component is unmounted
    return () => {
      document.removeEventListener("mousemove", animateCircles);
      circles.forEach(circle => document.body.removeChild(circle));
    };
  }, []);

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
