import React, { useState, useRef } from 'react';
import '../../styles/Contact.css';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [form, setForm] = useState({ 
    name: '', email: '', message: '', 
    nameValid: false, emailValid: false, messageValid: false, 
    nameTouched: false, emailTouched: false, messageTouched: false,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Using useRef to store whether modal has been shown
  const modalShown = useRef({name: false, email: false, message: false});

  const handleInputChange = (e) => {
    let isValid;
    if (e.target.name === 'email') {
      isValid = validateEmail(e.target.value);
      if (!isValid && !modalShown.current.email) {
        openModal('Input must be a valid email address');
        modalShown.current.email = true;
      }
    } else {
      isValid = !!e.target.value;
      if (!isValid && !modalShown.current[e.target.name]) {
        openModal('This field requires 1 or more characters');
        modalShown.current[e.target.name] = true;
      }
    }
    setForm(prevForm => ({ ...prevForm, 
      [e.target.name]: e.target.value, 
      [`${e.target.name}Valid`]: isValid,
      [`${e.target.name}Touched`]: true 
    }));
  };
  
  const handleInputBlur = (e) => {
    handleInputChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  const openModal = (message) => {
    console.log('openModal called'); 
    setModalMessage(message);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div className='contact'>
      <form className='contactForm' onSubmit={handleSubmit}>
        <h2>Contact Page:</h2>
        <label>
  Name:
  <input
    type='text'
    name='name'
    value={form.name}
    onChange={handleInputChange}
    onBlur={handleInputBlur}
    className={form.nameTouched ? (form.nameValid ? 'valid' : 'invalid') : ''}
  />
</label>
<label>
  Email:
  <input
    type='email'
    name='email'
    value={form.email}
    onChange={handleInputChange}
    onBlur={handleInputBlur}
    className={form.emailTouched ? (form.emailValid ? 'valid' : 'invalid') : ''}
  />
</label>
<label className='msgLabel'>
  Message:
  <textarea
    name='message'
    className={`textArea ${form.messageTouched ? (form.messageValid ? 'valid' : 'invalid') : ''}`}
    value={form.message}
    onChange={handleInputChange}
    onBlur={handleInputBlur}
  />
</label>

        <input type='submit' value='Submit' />
      </form>

      {modalOpen && (
        <div className='modal'>
          <div className='modalContent'>
            <p>{modalMessage}</p>
            <button onClick={closeModal} className='modalBtn'>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
