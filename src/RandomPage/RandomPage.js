import React from 'react'
import Buttons from './Buttons'

import "./RandomPage.css"

export default function RandomPage(props) {
  return (
      <div className="Random_Page">
        <h1>HERE IS YOUR PIZZA!</h1>
        <div className="pizza_image">
            <img src="https://i.ibb.co/6g2xtkW/Pie.png" />
        </div>
        <Buttons />
    </div>
  )
}
