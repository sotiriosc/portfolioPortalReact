import React from 'react';
import '../../styles/Home.css';
import peach from '../../assets/images/peach.jpg';
import mango from '../../assets/images/mango.jpg';
import grape from '../../assets/images/grape.jpg';
import orders from '../../assets/images/orders.jpg';
import sumo from '../../assets/images/sumo.jpg';
import tomato from '../../assets/images/tomato.jpg';

export default function Home() {
  return (
    <div className='home'>
      <div>
        <h1 className='welcome'>Welcome</h1>
      </div>
      <div className='firstSec'>
        <div style={{ width: '50%' }}>
          <h3>Intro:</h3>
          <p>Welcome to my personal portfolio. This space is a curated collection of my experiences, achievements, and professional pursuits. My approach to life and work is deeply rooted in the power of the mind, the transformative influence of thought, and the belief that there are no unsolvable problems, only untried solutions.</p>
          <p>My zest for learning is a natural extension of this philosophy. Every nugget of knowledge we gather, every skill we hone, is a tool to unlock potential and navigate challenges. Learning fosters self-awareness, allowing us to assess our abilities and ambitions with clarity and precision. It's this understanding that equips us to continuously refine our talents and chart a course towards success.</p>
          <p>Passion is the heartbeat of all I do. My high motivation and unquenchable thirst for learning are the fuel to this fire. This was evident when I single-handedly established my own business, www.healthyandtasty.ca, to serve my community during the pandemic. The business was my brainchild and baby—I was responsible for everything from website creation and product sourcing to order processing and fulfillment. Despite the hiatus, customers still inquire about its return—an affirmation of the impact and success of my initiative.</p>
          <p>Buoyed by this success, I decided to dive into a new challenge and returned to school to become a full-stack software developer.</p>
        </div>
        <div style={{ width: '50%' }}>
        <div className='one'>
        <img src={mango} alt="mango" className="image1"/>
        <img src={peach} alt="peach" className="image2"/>
        <img src={grape} alt="grape" className="image3"/>
        </div>
        <div className='two'>
        
        <img src={sumo} alt="sumo citrus" className="image4"/>
        <img src={tomato} alt="tomato" className="image5"/>
        <img src={orders} alt="orders" className="image6"/>
        </div>
        </div>
      </div>


    <div className='about'>
      <h2>About Me:</h2>
      <div className='aboutPar'>
        
        <p>
        My fascination with life extends into every domain. From tangible physical pursuits to the limitless landscapes of imagination, I embrace the plethora of enriching opportunities life offers. My openness to these experiences fuels my hunger for knowledge, while my analytical mindset makes computational concepts intuitive, enabling me to solve problems and deliver solutions with efficiency and precision.
        </p>
        <p>
        Coding offers a unique and fulfilling experience—it's a fascinating intersection of creativity and logic that serves as a platform to contribute meaningfully to the rapidly evolving technological landscape. This confluence stirred my interest in software development, a journey I'm thrilled to embark upon. Beyond the intellectual challenge of understanding new concepts and ideas, coding also allows me to serve the interests of the community around me.
        </p>
        <p>In this field, there's a profound sense of belonging, of being part of something bigger than oneself. It's more than just contributing code; it's about contributing to collective happiness and progress. It's an honor and an opportunity to make a difference, no matter how small or large. This sense of community is one of the many reasons I'm eager to forge ahead in the realm of software development.</p>
        <p>Over the years, I've observed a formula for success: passion, persistence, education, and consistency. Passion is the appreciation of life as an abundant gift; Persistence is the grit to overcome challenges; Education is the continuous quest for improvement; Consistency is maintaining unwavering focus on our goals. These principles have been the guiding lights in my life, leading me to success in various arenas. As I look forward, I aim to apply these principles in all areas of my life, enriching myself and contributing positively to the world around me. After all, the essence of life is growth and enrichment.</p>
       
      </div>
    </div>
    </div>
  );
}
