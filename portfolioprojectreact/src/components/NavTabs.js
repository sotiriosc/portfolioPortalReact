import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// We are able to extract the key value pairs from props by using the curly braces and the key name.
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          //*  This is a ternary operator that is checking to see if the 
          //currentPage is equal to 'Home'. If it is, then it will return 
          //the 'nav-link active' class. If it is not, then it will return 
          //the 'nav-link' class.
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing
          //This logic is checking to see if the currentPage is equal to 'About'.

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#myWork"
          onClick={() => handlePageChange('MyWork')}
          //  TODO: Add a comment explaining what this logic is doing
          //This logic is checking to see if the currentPage is equal to 'Blog'.
          className={currentPage === 'MyWork' ? 'nav-link active' : 'nav-link'}
        >
          My Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
          //This logic is checking to see if the currentPage is equal to 'Contact'.
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
