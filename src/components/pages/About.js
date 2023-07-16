import React from 'react';
import '../../styles/Home.css';
import mysql from '../../assets/images/mysql.png';
import css from '../../assets/images/702306.png';
import js from '../../assets/images/js.png';
import orders from '../../assets/images/orders.jpg';
import mern from '../../assets/images/MERN.webp';
import html from '../../assets/images/html.png';
import tomato from '../../assets/images/tomato.jpg';

export default function Home() {
  return (
    <div className='home'>
      <div>
        <h1 className='welcome'>Welcome!!!</h1>
      </div>
      <div className='firstSec'>
        
      <div style={{ width: '50%', '@media (max-width: 600px)': { width: '100%' } }}>
          <h3 className='h1Title'>Strengths:</h3>
          <p className='big'>Creative thinking, empathetic, analytical, curious, passion for learning, self motivated/aware, service oriented, cooperative, intuitive, enthusiastic, good attitude.</p>
          
        </div>
        <div style={{ width: '40%', '@media (max-width: 600px)': { width: '100%' } }}>
        <div className='one'>
        <img src={html} alt="HTML" className="image1"/>
        <img src={css} alt="CSS" className="image2"/>
        <img src={js} alt="JavaScript" className="image3"/>
        </div>
        <div className='two'>
        <img src={mern} alt="M.E.R.N Stack" className="image4"/>
        
        <img src={mysql} alt="mySQL" className="image6"/>
        </div>
        </div>
        </div>
        
    
      <div className='aboutPar'>
        <h3 className='h2Title'>About Me:</h3>
        <p>I am deeply drawn to life's endless possibilities, valuing each opportunity for enrichment. My drive for knowledge and aptitude for analytical thinking complement my work in coding, where I enjoy problem-solving and delivering efficient, precise solutions.</p>
        <p>Coding provides a rewarding blend of creativity and logic, allowing me to contribute meaningfully to our technologically evolving world. This exciting intersection stirred my interest in software development, a journey I'm enthusiastically pursuing.</p>
        <p>I am not afraid of problems or challenges. Coding is a great platform to exercise my thirst for learning and exploring new technologies!</p>
        <p>I believe success is a combination of passion, persistence, continuous learning, and consistency. These principles have guided me to success in diverse areas and as I look forward, I aim to maintain these values in my life and work, striving for growth and positive contribution in software development. Life, after all, is about growth and enrichment.</p>
       
      </div>
    
    
    </div>
  );
}
