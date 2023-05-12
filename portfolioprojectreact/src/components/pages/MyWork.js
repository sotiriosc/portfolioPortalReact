import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function MyWork() {

  const projects = [
    {name: "Workout Buddy", img: "../assets/images/project1", url: "https://utgroup7.github.io/workout-buddy/"},
    {name: "JATE", img: "path_to_project2_image", url: "url_of_project2"},
    //...add more projects here
  ];

  return (
    <div>
      <h2>My Work</h2>
      <p>
        Here you will find some of my work displayed for you to see. 
      </p>
      <ul>Current Computer Language Knowledge:</ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>SQL</li>
      <li>MongoDB</li>
      <li>React</li>
      <li>MERN</li>

      <Carousel>
        {projects.map((project, index) => (
          <div key={index}>
            <img src={project.img} alt={project.name} />
            <p className="legend">
              <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
