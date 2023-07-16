import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/revved.png';
import balanced from '../../assets/images/balanced.png';  
import wg from '../../assets/images/WiseGuide-screenshot1.png';
import mongo from '../../assets/images/mongo.png';
import '../../styles/PortfolioPage.css'

export default function MyWork() {

  const projects = [
    {name: "AI Tutor - M.E.R.N" , img: wg, url: "https://wiseguide.herokuapp.com/search", repo: "https://github.com/sotiriosc/wg-studentTutor"},
    {name: "JATE - EXPRESS, JAVASCRIPT" , img: project2, url: "https://glacial-atoll-39751.herokuapp.com/", repo: "https://github.com/sotiriosc/personalTextEditor-PWA"},
    {name: "Revved-Up_reviews - HANDLEBARS, JAVASCRIPT, CSS, SQL" , img: project3, url: "https://protected-meadow-94073.herokuapp.com/", repo: "https://github.com/sotiriosc/Revved-Up_reviews"},
    {name: "Balanced Blueprint Blog - M.E.R.N Personal Project" , img: balanced, url: "https://www.balancedblueprint.ca/", repo: "https://github.com/sotiriosc/balancedblueprintblog"},
    
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
        Welcome to my portfolio! I'm excited to share some of my work with you
        </p>
        
        <p className='ptag'>Use the carousel below to browse through my projects. If a project piques your interest, simply click on the image to visit the project site. Want a peek under the hood? Click the button beneath the carousel to access the repository of any project.

Enjoy exploring, and don't hesitate to reach out if you have any questions!</p>

<a href={selectedProject.repo} target="_blank" rel="noopener noreferrer">
          <button className='repoBtn'>Go to Repository</button>
        </a>
     
      
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
        </div>
      </div>
    </>
  );
}