import React, { useState, useEffect, useContext }  from 'react'
import "./Cart.css"
import { CartContext } from './Order/CartOrder';
import { OrderContext } from './Order/Order';
import CartItem from './CartItem';

const getToppings = async () => {
  const response = await fetch("http://localhost:5000/toppings");
  const jsonData = await response.json();
  return jsonData;
}

export default function CartThankYou() {




  return (
    <div className="container">
      <div className="cart-content">

        <h1> THANK YOU </h1>
        <h1> For Your Order  </h1>


        <p><a href="http://localhost:3000/admin">DEMO: see order on Admin Page</a></p>

      </div>
    </div>
    
  )
}
