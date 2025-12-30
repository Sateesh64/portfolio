import React from "react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="bio">
      <div className="hero-container">

        {/* LEFT: IMAGE + BUTTONS */}
        <div className="hero-left">
          <div className="hero-image-wrapper">
            <img src={profile} alt="Sateesh Naik" />
          </div>

          <div className="hero-actions hero-actions-left">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="hero-right">
          <h1 className="hero-name">Sateesh</h1>

          <h2 className="hero-role">
            Frontend / <span>Full Stack Developer</span>
          </h2>

          <p className="hero-stack">
            React • MERN • UI Engineering
          </p>

          <p className="hero-desc">
            I am a MERN Full Stack Developer certified by NxtWave Academy, with strong hands-on experience in building modern, responsive web applications. I have worked extensively with React.js, JavaScript, HTML, and CSS, and have developed multiple real-world projects focusing on clean UI, performance, and usability.

            I have independently built a self-driven project called AI Productivity Hub, a full-stack application that integrates task management and AI-powered assistance, demonstrating my ability to design, develop, and deploy complete solutions. In addition to MERN, I have completed certifications in SQL and Python, strengthening my problem-solving and backend fundamentals.

            I am actively seeking Frontend Developer or Full Stack Developer opportunities where I can contribute to building impactful products while continuously enhancing my technical skills.
          </p>
          <div className="hero-points">
            <p>⚡ Frontend & MERN Developer</p>
            <p>🎨 Clean UI & UX Focus</p>
            <p>🚀 Continuous Learner</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
