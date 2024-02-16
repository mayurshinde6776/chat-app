import React from 'react'
import '../css/Navbar.css'
export const Navbar = () => {
  return (
    <div className='navbar'>
<span className='logo px-2'>WhatsApp</span>
<div className='user px-2'>
<img src='https://images.pexels.com/photos/16920861/pexels-photo-16920861/free-photo-of-woman-in-hat-posing-with-eyes-closed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''/>
<span>wp</span>
<button className='nav-button'>Logout</button>
</div>
    </div>
  )
}
