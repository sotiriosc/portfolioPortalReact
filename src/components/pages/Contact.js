import React, { useState, useEffect } from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  const [height, setHeight] = useState(window.innerHeight);

  // Add an event listener to the window to adjust the height state 
  // whenever the window size changes
  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='contact'>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSeg5wh1PDr0DnPFmPd1e36BzgztCDDlMziEtIK8VHSYFF1LGw/viewform?usp=pp_url"
        style={{ width: '100%', height: `${height}px`, border: '0', overflow: 'hidden' }}
        scrolling="yes"
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  );
}
