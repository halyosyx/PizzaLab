import React, {useState, useEffect} from 'react';




export default function User({id, users}) {
  
  let userObject = {}
  // let myid = id -1
  // let mydata = 
  if (users.length > 0){
  userObject = users[id-1];
  }

  // console.log("This is ONE item",userObject);
  return(
    <div> 
    <p>Name: {userObject.name} | Email: {userObject.email} | Phone: {userObject.phone}</p>  
    </div>
  ) 
}
