import React from 'react';
import { Message } from './Message';

export const Messages = () => {
  return (
    <div className='container-fluid messages'>
      <div className='row'>
        <div className='col'>
          <Message />
          <Message />
          <Message />
        </div>
      </div>
    </div>
  );
};
