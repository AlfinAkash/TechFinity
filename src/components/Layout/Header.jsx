import React from "react";
import "../../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="https://techfinity.vercel.app" className="logo-link">
          <img 
            src="https://i.ibb.co/BVMQVNMd/tech-finity.jpg" 
            alt="TechFinity Logo" 
            className="logo"
          />
        </a>
        <h1 className="title">TechFinity DSA Platform</h1>
    </div>
    </header>
  );
};

export default Header;
