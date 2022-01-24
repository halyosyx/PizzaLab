import React, { useState, useEffect, useContext }  from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { CartContext } from './Order/CartOrder';



export default function Header() {
  const cartContext = useContext(CartContext);

  return (
    <nav className="header">
      <Link to="/">
      <img src="https://i.ibb.co/WkWN0RW/Pizza-Logo.png" alt="Pizza-Logo" />
        </Link>
      <ul className="nav-links">
          {/* <li>Home</li> */}
        {/* <Link to="/custompizza">
          <li>Customize pizza</li>
        </Link>
        <Link to="/randompizza">
          <li>Random pizza</li>
        </Link> */}
      {/* BUTTONS NOW WORK ON THE HOME PAGE */}

      </ul>
      <Link to="/cart">
      <h5>Cart ({cartContext.cart.length})</h5>
      </Link>
    </nav>
  )
}
