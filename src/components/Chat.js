import React from 'react';
import Cam from '../images/cam.png';
import Add from '../images/add.png';
import More from '../images/more.png';
import { Messages } from './Messages';
import { Input } from './Input';

export const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Mayur</span>
        <div className='chatIcons'>
          <img className='chatIconsImg' src={Cam} alt='' />
          <img className='chatIconsImg' src={Add} alt='' />
          <img className='chatIconsImg' src={More} alt='' />
        </div>
      </div>
      <div className='messages'>
        <Messages />
      </div>
      <div className='input'>
        <Input />
      </div>
    </div>
  );
};
