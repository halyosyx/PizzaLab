import React from 'react'
import "./Topping.css"

export default function Topping(props) {
 
  return (
    <div className="Topping" >
      <img src={props.icon} />
      <div className="Topping_text">
        <h2>{props.name}</h2>
        <h4>${(props.price / 100).toFixed(2)}</h4>
      </div>
    </div>
  )
}
