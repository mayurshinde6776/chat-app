import React, { useContext, useState } from 'react';
import '../css/Search.css';
import { collection, getDocs, query, setDoc, where } from "firebase/firestore";
import {db} from '../firebase';
import { AuthContext } from '../context/AuthContext';
export const Search = () => {

  const [username, setUsername]= useState("");
const [user, setUser]= useState(null);
const [err, setErr]= useState(false);

const {currentUser}= useContext(AuthContext);

const handleSearch= async ()=>{
  const q= query(
    collection(db, "users"),
    where("displayName", "==", username)
  );

  try{
    const querySnapshot= await getDocs(q);
    querySnapshot.forEach((doc)=>{
      setUser(doc.data())
    })
  } catch(err){
    setErr(true)
  }

};


const handleKey=(e)=>{
  e.code ==='Enter' && handleSearch()
}

const handleSelect= async ()=>{
  //check whether the group(chat is firestore) exists, if not create them
const combinedId= 
currentUser.uid> user.uid
? currentUser.uid+ user.uid
: user.uid + currentUser.uid;

try{
  const res= await getDocs(db, "chats", combinedId);

  if(!res.exists()){
//create a chat in chats collection
await setDoc(doc,(db, "chats", combinedId),{messages:[]})
 
//creat user chats

userChats:{
  janrsId:{
    combinedId:{
      
    }
  }
}
}
} catch(err){

}
}

  return (
   
   <div className='container-fluid search'>
      <div className='col'>
        <div className='searchForm'>
          <input type='text' placeholder='find user here...' onKeyDown={handleKey} onChange={(e)=> setUsername(e.target.value)} />
        </div>
      </div>


      <div className='col'>
        {err && <span style={{color:'white'}}>User not found</span>}
      {user &&
        <div className='userChat' onClick={handleSelect}>
          <img
            src={user.photoURL}
            alt=''
          />
          <div className='userChatInfo'>
            <span>{user.displayName}</span>
          </div>
        </div>
         }
      </div>
    </div>
  
  );
};
