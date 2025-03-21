import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import "../../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  return (
    <header className={`header ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-container">
        {/* Logo & Title */}
        <div className="header-content">
          <a href="https://techfinity.vercel.app" className="logo-link">
            <img
              src="https://i.ibb.co/BVMQVNMd/tech-finity.jpg"
              alt="TechFinity Logo"
              className="logo"
            />
          </a>
          <h1 className="title">TechFinity</h1> {/* Add the title here */}
        </div>

        {/* Theme & Hamburger Menu */}
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleDarkMode} title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {isMobile && (
            <button className="nav-btn" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMobile ? (isOpen ? "open" : "") : "desktop"}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/compiler" onClick={() => setIsOpen(false)}>Compiler</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
