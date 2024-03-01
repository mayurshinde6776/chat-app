import React, { useContext } from 'react';
import '../css/Navbar.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const {currentUser}= useContext(AuthContext)
  return (
    <div className='navbar navbar-expand-md'>
      <div className='d-flex align-items-center'>
        <span className='logo px-2'>WhatsApp</span>
      </div>
      <div className='user d-flex align-items-center'>
        <img
          className='navImg'
          src={currentUser.photoURL}
          alt=''
        />
        <span>{currentUser.displayName}</span>
        <button className='nav-button' onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};
