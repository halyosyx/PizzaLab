import React from 'react'
import "./Contact.css"




export default function Contact() {
  return (
    <>
    <h2> Contact Information</h2>
    <div className="contact-info">
      <label for="fullname">Full name:</label>
      <input 
      type="text" 
      id="fullname" 
      />
      <br />
      <label for="email">Email:</label>
      <input 
      type="email" 
      id="email" 
      />
      <br />
      <label for="address">Address:</label>
      <input 
      type="text" 
      id="address" 
      />
      <br />
      <label for="postal-code">Postal Code:</label>
      <input 
      type="text" 
      id="postal-code" 
      />
      <br />
      <label for="phone-number">Phone Number:</label>
      <input 
      type="number" 
      id="phone-number" 
      />

    </div>

    
    </>
  )
}
