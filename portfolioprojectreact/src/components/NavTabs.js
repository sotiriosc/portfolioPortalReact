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
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="pageBtn">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="pageBtn">
        <a
          href="#myWork"
          onClick={() => handlePageChange('MyWork')}
          className={currentPage === 'MyWork' ? 'nav-link active' : 'nav-link'}
        >
          My Work
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

