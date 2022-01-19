import React from 'react'
import Contact from "./Contact.js"
import PayNow from "./PayNow.js"
import Total from "./Total.js"
import Cart from "./Cart.js"



export default function Checkout() {
  return (
    <div>
    
      <Cart />
      <Total />
      <Contact />
      <PayNow />
    </div>
  )
}
