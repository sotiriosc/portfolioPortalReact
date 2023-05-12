import React from 'react';
import '../styles/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} Sotirios Chortogiannos</p>
    </footer>
  );
}

export default Footer;
