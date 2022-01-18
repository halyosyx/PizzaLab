import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <nav className="header">
      <img src="https://i.ibb.co/WkWN0RW/Pizza-Logo.png" alt="Pizza-Logo" />
      <ul className="nav-links">
      <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/custompizza">
          <li>Customize pizza</li>
        </Link>
        <Link to="/randompizza">
          <li>Random pizza</li>
        </Link>
      </ul>
      <h5>Cart (0)</h5>
    </nav>
  )
}
