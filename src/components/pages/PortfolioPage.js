import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/revved.png';
import balanced from '../../assets/images/balanced.png';  
import sql from '../../assets/images/sql.png';
import mongo from '../../assets/images/mongo.png';
import '../../styles/PortfolioPage.css'

export default function MyWork() {

  const projects = [
    {name: "Workout Buddy - HTML, CSS, JAVASCRIPT", img: project1, url: "https://utgroup7.github.io/workout-buddy/", repo: "https://github.com/utgroup7/workout-buddy"},
    {name: "JATE - EXPRESS, JAVASCRIPT" , img: project2, url: "https://glacial-atoll-39751.herokuapp.com/", repo: "https://github.com/sotiriosc/personalTextEditor-PWA"},
    {name: "Revved-Up_reviews - HANDLEBARS, JAVASCRIPT, CSS, SQL" , img: project3, url: "https://glacial-atoll-39751.herokuapp.com/", repo: "https://github.com/sotiriosc/Revved-Up_reviews"},
    {name: "Balanced Blueprint Blog - HTML, JAVASCRIPT, CSS," , img: balanced, url: "https://www.balancedblueprint.ca/", repo: "https://github.com/sotiriosc/balancedblueprintblog"},
    {name: "SQL- Employee Tracker - NODE, SQL" , img: sql, url: "https://github.com/sotiriosc/SQL-Employee-Tracker", repo: "https://github.com/sotiriosc/SQL-Employee-Tracker"},
    {name: "SocialNetworkAPI - MONGODB, EXPRESS JS, NODE" , img: mongo, url: "https://drive.google.com/file/d/1M5j52i_tyNYNYGV5UjPCnJe78XG-G_FW/view?usp=share_link", repo: "https://github.com/sotiriosc/SocialNetworkApi-MongoDB"},
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelect = (selectedIndex) => {
    setSelectedProject(projects[selectedIndex]);
  }

  return (
    <>
      <div className='myWorkCon'>
        <h2>My Work</h2>
        <p>
          Here you will find some of my work displayed for you to see. 
        </p>
        
        <p className='ptag'>Navigate the carousel below to view my projects, if you would like to visit the project, click the image. If you would like to visit the repository of a project, click the bottom below the carousel!</p>
     
      
      <div>
        
      <Carousel
  axis={'horizontal'}
  emulateTouch={true}
  infiniteLoop={true}
  useKeyboardArrows={true}
  labels={{
    leftArrow: 'Previous slide',
    rightArrow: 'Next slide',
    item: 'Slide item'
  }}
  onChange={handleSelect}
>
          {projects.map((project, index) => (
            <div key={index}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.name} className='projectImage'/>
              </a>
              <p className="legend">{project.name}</p>
            </div>
          ))}
        </Carousel>

        <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer">
          <button className='repoBtn'>Go to Repository</button>
        </a>
    
        </div>
      </div>
    </>
  );
}
