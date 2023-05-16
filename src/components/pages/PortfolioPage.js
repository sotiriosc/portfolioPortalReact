// This code imports necessary components and styles for the PortfolioContainer component.
import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Resume from './pages/Resume';
import PortfolioPage from './pages/PortfolioPage';
import Contact from './pages/Contact';
import Footer from './Footer';
import '../styles/PortfolioContainer.css';

// This code exports a function called PortfolioContainer as the default export of this module.
export default function PortfolioContainer() {
  // This code initializes a state variable called currentPage with the value 'About'.
  const [currentPage, setCurrentPage] = useState('About');
  
  // This code defines a function called renderPage that returns a component based on the value of currentPage.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'PortfolioPage') {
      return <PortfolioPage />;
    }
    return <Contact />;
  };
  
  // This code defines a function called handlePageChange that updates the value of currentPage to the provided page argument.
  const handlePageChange = (page) => setCurrentPage(page);
  
  // This code returns a JSX element that renders the NavTabs, mainContent, and Footer components.
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='mainContent'>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
