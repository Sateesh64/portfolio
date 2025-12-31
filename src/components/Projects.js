import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-grid">
        {/* PROJECT 1 */}
        <div className="project-card">
          <h3>AI Productivity Hub (Self Project)</h3>
          <p className="project-tech">
            React • Node.js • Express • MongoDB • JWT
          </p>
          <p className="project-desc">
            A full-stack productivity platform that combines task management
            with AI-powered assistance. Features include user authentication,
            task creation with priorities and due dates, and an AI chat interface
            built using the MERN stack.
          </p>

          <div className="project-actions">
            <a
              href="https://sateesh64.github.io/ai-productivity-hub/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Sateesh64/ai-productivity-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <h3>Jobby App</h3>
          <p className="project-tech">
            React • REST APIs • JWT Authentication • CSS
          </p>
          <p className="project-desc">
            A job search platform that allows users to browse, filter, and apply
            for jobs. Implemented secure authentication, protected routes, API
            integration, and responsive UI as part of structured training.
          </p>

          <div className="project-actions">
            <a
              href="https://sateesh645.ccbp.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Sateesh64/JobbyApp-nxtwave"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <h3>Emoji Game</h3>
          <p className="project-tech">
            React • JavaScript • CSS • State Management
          </p>
          <p className="project-desc">
            An interactive memory-based game built with React that tracks user
            scores and game state. Focused on component-based architecture,
            state handling, and responsive UI design.
          </p>

          <div className="project-actions">
            <a
              href="https://sateesh264.ccbp.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Sateesh64/Emoji-Game"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
