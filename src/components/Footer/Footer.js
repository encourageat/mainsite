import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-content">
        <div class="contact-info">
            <p>Email: encouarageat@gmail.com</p>
            <p>Location: Kerala, India</p>
        </div>
        <div class="social-icons">
            <a href="https://github.com/yourprofile" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/yourprofile" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
    </div>
    <div className="copyright">
        <h3>&copy; {new Date().getFullYear()} - EncourageAt</h3>
      </div>
    </footer>
  );
};

export default Footer;
