import React, {useState, useEffect} from 'react';




export default function User({id, users}) {
  
  // let myid = id -1
  // let mydata = 
  const userObject = users[id-1];


  console.log("This is ONE item",userObject);
  return(
    <div> 
    <p>Name: {userObject.name} | Email: {userObject.email} | Phone: {userObject.phone}</p>  
    </div>
  ) 
}
