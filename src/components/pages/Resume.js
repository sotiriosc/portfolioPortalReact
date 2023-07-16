import React from 'react';
import '../../styles/Resume.css';
import resume from '../../assets/files/sotiriosResume.pdf';

export default function About() {
  return (
    <div className='resumeCont'>
      <h2 className=' resumeH2'>Skills:</h2>
        
      <p>Current Computer Language Knowledge:</p>
        <ul>
        <li>
        <label>HTML</label>
        <meter value="0.9" min="0" max="1">90%</meter>
        </li>
        <li>
        <label>CSS</label>
        <meter value="0.8" min="0" max="1">80%</meter>
        </li>
        <li>
        <label>JavaScript</label>
        <meter value="0.85" min="0" max="1">85%</meter>
        </li>
        <li>
        <label>Node.js</label>
        <meter value="0.7" min="0" max="1">70%</meter>
        </li>
        <li>
        <label>Express.JS</label>
        <meter value="0.7" min="0" max="1">80%</meter>
        </li>
        <li>
        <label>SQL</label>
        <meter value="0.85" min="0" max="1">85%</meter>
        </li>
        <li>
        <label>MongoDB</label>
        <meter value="0.7" min="0" max="1">70%</meter>
        </li>
        <li>
        <label>React</label>
       <meter value="0.7" min="0" max="1">80%</meter>
       </li>
       <li>
       <label>MERN</label>
       <meter value="0.7" min="0" max="1">85%</meter>
       </li>
        </ul>
        <a href={resume} download>
        <button className='resumeButton'>Download My Resume</button>
      </a>
      </div>
  );
}
