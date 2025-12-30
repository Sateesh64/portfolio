import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LEFT LOGO */}
          <a href="#bio" className="nav-logo">
          Kethavath Sateesh Naik
        </a>

        {/* RIGHT LINKS */}
        <div className="navbar-links">
          <a href="#bio">Bio</a>  
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>




        </div>
      </div>
    </nav>
  );
};

export default Navbar;

