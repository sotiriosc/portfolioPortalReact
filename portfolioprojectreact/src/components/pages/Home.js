import React from 'react';
import '../../styles/Home.css';
import peach from '../../assets/images/peach.jpg';
import mango from '../../assets/images/mango.jpg';
import grape from '../../assets/images/grape.jpg';
import order from '../../assets/images/order.jpg';
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
        <div style={{ width: '40%' }}>
          <h3>Intro:</h3>
          <p>Welcome to my personal portfolio page. This website is a compilation of my experiences and work. I am a person who greatly appreciates the power of the mind. The influence of thought can not only transform your emotional state, but there is no problem that can't be solved with careful and considered thought!</p>
          <p>That's why I love to learn. The breadth of tools and resources we can acquire by utilizing our minds unlocks our potential and empowers us to overcome any challenges we may face. Furthermore, learning also fosters our self-awareness. As we grow more knowledgeable, we can assess ourselves with greater precision. This, in turn, allows us to better evaluate our position in relation to our goals, so we can enhance our talents and skills to reach success.</p>
          <p>I am a person engulfed with passion. My high motivation and thirst for learning further amplify this passion. This was evident when I started my own business to serve my community during the pandemic. I launched a business, www.healthyandtasty.ca, and throughout the pandemic, I successfully delivered thousands of orders all on my own. I was responsible for every aspect of the business - from creating the website and sourcing products to processing orders and handling fulfillment. To this day, my customers still reach out to me, wondering when I will resume operations!</p>
        </div>
        <div style={{ width: '60%' }}>
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
    </div>
  );
}
