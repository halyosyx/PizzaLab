import React from "react";
import SelectButton from "./SelectButton";
import './Homepage.scss';



export default function Homepage() {
  return (
    <div className="buttons">
      
      <SelectButton
      primaryText="Create your own!"
      secondaryText="Choose your topings"
      onClick=""
      image="https://i.ibb.co/W3qDgRG/Blank-Canvas.jpg"
      />
      <SelectButton
      primaryText="Feeling Lucky?"
      secondaryText="Randomly generate your pizza"
      onClick=""
      image="https://i.ibb.co/pyQh8zr/Feeling-Lucky.jpg"
      />
      
    </div>
  )
}
