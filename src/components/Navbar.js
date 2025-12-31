import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <a href="#bio" className="nav-logo" onClick={() => setOpen(false)}>
          Kethavath Sateesh Naik
        </a>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* LINKS */}
        <div className={`navbar-links ${open ? "active" : ""}`}>
          <a href="#bio" onClick={() => setOpen(false)}>Bio</a>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#certifications" onClick={() => setOpen(false)}>Certifications</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

         {/* RESUME */}
           <a
            href="/portfolio/resume/Sateesh_Naik_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-nav-btn"
            >
              Resume
              </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;


