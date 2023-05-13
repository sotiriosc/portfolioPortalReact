import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import '../../styles/MyWork.css'

export default function MyWork() {

  const projects = [
    {name: "Workout Buddy", img: project1, url: "https://utgroup7.github.io/workout-buddy/"},
    {name: "JATE", img: project2, url: "https://glacial-atoll-39751.herokuapp.com/"},
    //...add more projects here
  ];

  return (
    <>
      <div className='myWorkCon'>
        <h2>My Work</h2>
        <p>
          Here you will find some of my work displayed for you to see. 
        </p>
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
        <p className='ptag'>Navigate the carousel below to view my projects, if you would like to visit the project, click the image. The repositories for all my projects can be found at <a href="https://github.com/sotiriosc?tab=repositories">https://github.com/sotiriosc?tab=repositories</a></p>
      </div>
      
      <div>
        <Carousel>
          {projects.map((project, index) => (
            <div key={index}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.name} className='projectImage'/>
              </a>
              <p className="legend">{project.name}</p>
            </div>
          ))}
        </Carousel>
    
       
      </div>
    </>
  );
}
