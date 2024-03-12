import React, { useContext, useEffect, useState } from 'react';
import '../css/Chats.css';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

export const Chats = () => {

const [chats, setChats]= useState([])

const {currentUser} = useContext(AuthContext);

useEffect(()=>{

  const getChats=()=>{
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      setChats(doc.data());
   });
   return ()=>{
    unsub();
  };
  }

  currentUser.uid && getChats()
}, [currentUser.uid]);

console.log(Object.entries(chats));
  return (
    <div className='container-fluid chats'>
      <div className='row'>
 <div className='col'>
      {Object.entries(chats)?.map((chat)=>{
 
   <div className='userChat' key={chat[0]}>
     <img
       src={chat[1].userInfo.photoURL}
       alt=''
     />
     <div className='userChatInfo'>
       <span>{chat[1].userInfo.displayName}</span>
       <p>{chat[1].userInfo.lastMessage?.text}</p>
     </div>
   </div>

      })}
      </div>
</div>
    </div>
  );
};
