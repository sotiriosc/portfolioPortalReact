import React, { useState } from 'react';
import '../../styles/Contact.css'
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleInputBlur = (e) => {
    if (e.target.name === 'email' && !validateEmail(e.target.value)) {
      window.alert('Invalid email address');
    } else if (!e.target.value) {
      window.alert('This field is required');
    }
  }

  return (
    <div className='contact'>
      <form className='contactForm'>
        <h2>Contact Page:</h2>
        <label>
         Name:
        <input 
         type="text" 
         name="name" 
         value={form.name} 
         onChange={handleInputChange}
        onBlur={handleInputBlur} 
  />
</label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleInputChange}
            onBlur={handleInputBlur} 
          />
        </label>
        <label className='msgLabel'>
          Message:
          <textarea 
            name="message" 
            className='textArea' 
            value={form.message} 
            onChange={handleInputChange}
            onBlur={handleInputBlur} 
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
