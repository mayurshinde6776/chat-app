import React from 'react';
import '../css/Message.css';

export const Message = () => {
  return (
    <div className='container-fluid message owner'>
      <div className='messageInfo'>
        <img
          className='message-img'
          src='https://images.pexels.com/photos/16920861/pexels-photo-16920861/free-photo-of-woman-in-hat-posing-with-eyes-closed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
        <span>Just Now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img
          className='contentImg'
          src='https://images.pexels.com/photos/16920861/pexels-photo-16920861/free-photo-of-woman-in-hat-posing-with-eyes-closed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
      </div>
    </div>
  );
};
