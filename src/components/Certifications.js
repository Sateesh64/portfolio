import React, { useState } from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "MERN Full Stack Developer Program (IRC Certified)",
    org: "NxtWave Academy",
    date: "Issued 2024",
    link: "https://certificates.ccbp.in/intensive/irc?id=C6F5E1R2MB",
  },
  {
    title: "HTML & CSS Certification",
    org: "NxtWave Academy",
    date: "Issued 2024",
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=YKITYZOENH",
  },
 {
    title: "React JS",
    org: "NxtWave Academy",
    date: "Issued Jul 2024",
    link: "https://certificates.ccbp.in/intensive/react-js?id=JSSTOUCGZS",
  },
  {
    title: "Python Certification",
    org: "NxtWave Academy",
    date: "Issued 2024",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=TUEWCOMBRK",
  },
  {
    title: "JavaScript Certification",
    org: "NxtWave Academy",
    date: "Issued Aug 2024",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=QHJBYVRNZD",
  },
  {
    title: "JavaScript Essentials",
    org: "NxtWave Academy",
    date: "Issued Dec 2024",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=JRJKUJLVGQ",
  },

  /* Extra Certifications */
  {
    title: "Responsive Web Design using Flexbox",
    org: "NxtWave Academy",
    date: "Issued Jun 2024",
    link: "https://certificates.ccbp.in/intensive/flexbox?id=KWYNBBBKUB",
  },
  {
    title: "Node JS",
    org: "NxtWave Academy",
    date: "Issued Jun 2024",
    link: "https://certificates.ccbp.in/intensive/node-js?id=BWVRDJSDUY",
  },
  {
    title: "SQL Certification",
    org: "NxtWave Academy",
    date: "Issued 2024",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=FDRUQHGLWX",
  },
];

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCerts = showAll
    ? certifications
    : certifications.slice(0, 6);

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">
        📜 <span>Certifications</span>
      </h2>

      <div className="cert-grid">
        {visibleCerts.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                {cert.title}
              </a>
            </h3>
            <p className="cert-org">{cert.org}</p>
            <span className="cert-date">{cert.date}</span>
          </div>
        ))}
      </div>

      <div className="cert-toggle">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More Certifications"}
        </button>
      </div>
    </section>
  );
};

export default Certifications;
