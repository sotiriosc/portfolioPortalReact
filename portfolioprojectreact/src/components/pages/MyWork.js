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
        <ul>Current Computer Language Knowledge:
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>React</li>
        <li>MERN</li>
        </ul>
        <p className='ptag'>Navigate the carousel to view my projects, if you would like to visit my project click the image. The repositories for all my projects can be found at <a href="https://github.com/sotiriosc?tab=repositories">https://github.com/sotiriosc?tab=repositories</a></p>
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
