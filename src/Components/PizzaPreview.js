import React, { useContext } from 'react'
import './PizzaPreview.css'
import {toppingSelector} from './CustomePage'


export default function PizzaPreview() {
  const cheese = useContext(toppingSelector)
  const cheeseStyle = {
    display: cheese ? 'block' : 'none'
  }

  return (
    <div className="myPizza">
      <img src="https://i.ibb.co/vw9JQMz/Cheese-Preview.png" style={cheeseStyle}/>
      <img src="https://i.ibb.co/6g2xtkW/Pie.png" />
    </div>
  )
}
