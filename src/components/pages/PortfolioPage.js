import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/revved.png';
import '../../styles/PortfolioPage.css'

export default function MyWork() {

  const projects = [
    {name: "Workout Buddy - HTML, CSS, JAVASCRIPT", img: project1, url: "https://utgroup7.github.io/workout-buddy/"},
    {name: "JATE - EXPRESS, JAVASCRIPT" , img: project2, url: "https://glacial-atoll-39751.herokuapp.com/"},
    {name: "Revved-Up_reviews - HANDLEBARS, JAVASCRIPT, CSS, SQL" , img: project3, url: "https://glacial-atoll-39751.herokuapp.com/"},
    //...add more projects here
  ];

  return (
    <>
      <div className='myWorkCon'>
        <h2>My Work</h2>
        <p>
          Here you will find some of my work displayed for you to see. 
        </p>
        
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
