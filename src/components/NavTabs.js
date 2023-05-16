import React, { useEffect, useState } from 'react';
import selfimg from '../assets/images/selfimg.jpg';
import '../styles/NavTab.css';

function NavTabs({ currentPage, handlePageChange }) {
  const [nameLetters, setNameLetters] = useState([]);
  const name = 'Sotirios Chortogiannos';

  useEffect(() => {
    const delay = 150; // Delay between each letter in milliseconds
    const letters = name.split('');

    let timeout = null;
    let index = 0;

    const addLetter = () => {
      setNameLetters(prevLetters => [...prevLetters, letters[index]]);
      index++;

      if (index < letters.length) {
        timeout = setTimeout(addLetter, delay);
      }
    };

    timeout = setTimeout(addLetter, delay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className="header">
      <div className="content">
        <h1 className="myName">
          {nameLetters.map((letter, index) => (
            <span key={index} className="nameLetter">
              {letter}
            </span>
          ))}
        </h1>
      
        <ul className="navTabs">
          <li className={currentPage === 'About' ? 'pageBtn active' : 'pageBtn'}>
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className="nav-link"
            >
              About Me!
            </a>
          </li>
          <li className={currentPage === 'PortfolioPage' ? 'pageBtn active' : 'pageBtn'}>
            <a
              href="#portfolioPage"
              onClick={() => handlePageChange('PortfolioPage')}
              className="nav-link"
            >
              Portfolio
            </a>
          </li>
          <li className={currentPage === 'Resume' ? 'pageBtn active' : 'pageBtn'}>
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className="nav-link"
            >
              Resume
            </a>
          </li>
          <li className={currentPage === 'Contact' ? 'pageBtn active' : 'pageBtn'}>
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className="nav-link"
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
