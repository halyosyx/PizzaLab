import React from 'react'
import "./SelectButton.scss"

export default function SelectButton(props) {

  const {primaryText, secondaryText, image} = props

  
    

  return (
  <div className='selectButton'>

    <img src={image}/>
    <div className="card__content">
      <a className="primaryText">{primaryText}</a>
      <br/>
      <a className="secondaryText">{secondaryText}</a>
    </div>
    

  </div>

  )
}
