import React from 'react';
import Img from '../images/img.png';
import Attach from '../images/attach.png';

export const Input = () => {
  return (
    <div className='container-fluid input'>
      <div className='row'>
       
        <div className='col-auto'>
          <div className='send'>
            <img className='input-img' src={Img} alt='' />
            <input type='file' style={{ display: 'none' }} id='file' />
            <label htmlFor='file'>
              <img className='input-img' src={Attach} alt='' />
            </label>
            <button className='btn btn-primary'>Send</button>
          </div>
        </div>
        <div className='col'>
          <input className=' input-text ' type='text' placeholder='Type something...'  />
        </div>
      </div>
    </div>
  );
};
