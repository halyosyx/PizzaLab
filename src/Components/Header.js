import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <nav className="header">
      <Link to="/">
      <img src="https://i.ibb.co/WkWN0RW/Pizza-Logo.png" alt="Pizza-Logo" />
        </Link>
      <ul className="nav-links">
          {/* <li>Home</li> */}
        <Link to="/custompizza">
          <li>Customize pizza</li>
        </Link>
        <Link to="/randompizza">
          <li>Random pizza</li>
        </Link>
      </ul>
      <Link to="/cart">
      <h5>Cart (0)</h5>
      </Link>
    </nav>
  )
}
