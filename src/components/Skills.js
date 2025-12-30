import React from "react";
import "./Skills.css";

const skills = [
  {
    title: "Frontend Development",
    desc: "HTML, CSS, Flexbox, JavaScript, React.js",
    icon: "🎨",
  },
  {
    title: "Backend Development",
    desc: "Node.js, REST APIs",
    icon: "⚙️",
  },
  {
    title: "Programming Languages",
    desc: "JavaScript, Python",
    icon: "💻",
  },
  {
    title: "Database & Querying",
    desc: "SQL",
    icon: "🗄️",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
