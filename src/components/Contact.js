import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact</h2>

      <div className="contact-card">
        <div className="contact-grid">
          <div className="contact-item">
            <span className="icon">✉️</span>
            <a href="mailto:sateeshkethavath4@gmail.com">
              sateeshkethavath4@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span className="icon">📞</span>
            <a href="tel:+919999999999">
              +91 7675808864
            </a>
          </div>

          <div className="contact-item">
            <span className="icon">💼</span>
            <a
              href="https://www.linkedin.com/in/sateesh264/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sateesh264
            </a>
          </div>

          <div className="contact-item">
            <span className="icon">💻</span>
            <a
              href="https://github.com/Sateesh64"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Sateesh64
            </a>
          </div>

          <div className="contact-item">
            <span className="icon">📍</span>
            <p>Hyderabad, India</p>
          </div>
        </div>

        <a
          href="mailto:sateeshkethavath4@gmail.com"
          className="contact-btn"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;

