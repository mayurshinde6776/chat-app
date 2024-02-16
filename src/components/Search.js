import React from 'react'
import '../css/Search.css'
export const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find user here...' />
      </div>

      <div className='userChat'>
        <img src='https://images.pexels.com/photos/16920861/pexels-photo-16920861/free-photo-of-woman-in-hat-posing-with-eyes-closed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
        <div className='userChatInfo'>
          <span>wp</span>
        </div>
      </div>
    </div>
  )
}
