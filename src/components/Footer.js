import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const count = localStorage.getItem("visitorCount");
    const newCount = count ? parseInt(count) + 1 : 1;

    localStorage.setItem("visitorCount", newCount);
    setVisitors(newCount);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Sateesh Naik. All rights reserved.</p>

        <div className="visitor-badge">
          👥 Visitors: {visitors}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

