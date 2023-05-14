import React from 'react';
import selfimg from '../assets/images/selfimg.jpg';
import '../styles/NavTab.css';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// We are able to extract the key value pairs from props by using the curly braces and the key name.
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className='header'>
      <div className="content">
        <h1 className='myName'>Sotirios Chortogiannos</h1>
      
        <ul className="navTabs">
      <li className="pageBtn">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me!
        </a>
      </li>
      <li className="pageBtn">
        <a
          href="#portfolioPage"
          onClick={() => handlePageChange('PortfolioPage')}
          className={currentPage === 'PortfolioPage' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="pageBtn">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="pageBtn">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      </ul>
      </div>
      <div>
      <p id="floating-text">Digital Creations!!</p>
      </div>
      <img src={selfimg} alt="Sotirios Chortogiannos" className="image" />
    </header>
  );
}

export default NavTabs;

