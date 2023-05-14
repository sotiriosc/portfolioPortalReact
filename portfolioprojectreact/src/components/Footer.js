import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} Sotirios Chortogiannos</p>
      <div className="footer-icons">
        <a href="https://github.com/sotiriosc?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub size={60} color="white" className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/sotirios-chortogiannos-668b76272/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={60} color="white" className="footer-icon" />
        </a>
        <a href="https://twitter.com/chortogiannos" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={60} color="white" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
