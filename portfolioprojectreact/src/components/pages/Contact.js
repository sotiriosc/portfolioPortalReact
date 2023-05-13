import React from 'react';
import '../../styles/Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
      
      <form className='contactForm'>
      <h2>Contact Page:</h2>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label className='msgLabel'>
          Message:
          <textarea name="message" className='textArea'/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
