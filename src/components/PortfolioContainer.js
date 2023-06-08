import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Resume from './pages/Resume';
import PortfolioPage from './pages/PortfolioPage';
import Contact from './pages/Contact';
import Footer from './Footer';
import '../styles/PortfolioContainer.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  
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
  
  const handlePageChange = (page) => setCurrentPage(page);
  
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