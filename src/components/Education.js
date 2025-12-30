import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="education-title">
        📘 <span>Education</span>
      </h2>

      {/* NxtWave Academy Program */}
      <div className="education-card">
        <div className="education-header">
          <div>
            <h3>MERN Full Stack Developer Program</h3>
            <p className="education-university">NxtWave Academy</p>
          </div>

          <span className="education-badge">Certified</span>
        </div>

        <p className="education-desc">
          Completed an IRC-certified MERN Full Stack Developer program at NxtWave Academy.
          Built and completed multiple real-world projects during the training period, gaining strong hands-on experience in frontend development, backend fundamentals, and database integration.
        </p>
      </div>

      {/* B.Tech Education */}
      <div className="education-card">
        <div className="education-header">
          <div>
            <h3>B.Tech – Electrical and Electronics Engineering (EEE)</h3>
            <p className="education-university">
              Vardhaman College of Engineering
            </p>
          </div>

          <span className="education-badge">2013 – 2017</span>
        </div>

        <p className="education-desc">
          Developed strong analytical and problem-solving skills and gained
          exposure to core engineering fundamentals applicable to software
          development and logical reasoning.
        </p>
      </div>
    </section>
  );
};

export default Education;
