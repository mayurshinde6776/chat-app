import React from 'react';
import '../css/Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar navbar-expand-md'>
      <div className='d-flex align-items-center'>
        <span className='logo px-2'>WhatsApp</span>
      </div>
      <div className='user d-flex align-items-center'>
        <img
          className='navImg'
          src='https://images.pexels.com/photos/16920861/pexels-photo-16920861/free-photo-of-woman-in-hat-posing-with-eyes-closed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
        <span>wp</span>
        <button className='nav-button'>Logout</button>
      </div>
    </div>
  );
};
