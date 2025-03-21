import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navigation.css";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className={`navigation ${darkMode ? "dark-mode" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">TechFinity</Link>
        </div>

        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Menu button */}
        <button className="nav-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>

          {/* Multi-Level Dropdown */}
          <li className="dropdown">
            <span>DSA &#9662;</span>
            <ul className="dropdown-menu">
              <li><Link to="/dsa/array/basic" onClick={() => setIsOpen(false)}>Array Basics</Link></li>
              <li><Link to="/dsa/array/medium" onClick={() => setIsOpen(false)}>Array Medium</Link></li>
              <li><Link to="/dsa/array/hard" onClick={() => setIsOpen(false)}>Array Hard</Link></li>
            </ul>
          </li>

          <li>
            <Link to="/compiler" onClick={() => setIsOpen(false)}>Compiler</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
