import React from "react";
import "../../styles/Footer.css";
import { Link } from "react-router-dom"; // Optional if you want to add routing links

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} TechFinity. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <p>
            {/* <Link to="/about" className="footer-link">About</Link> | 
            <Link to="/contact" className="footer-link"> Contact</Link> | 
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link> */}
          </p>
        </div>
        <div className="footer-right">
          <p>
            <a href="https://www.instagram.com/a.alfinakash" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a> |
            <a href="https://twitter.com/AlfinAkash" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a> |
            <a href="https://www.linkedin.com/in/AlfinAkash" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
