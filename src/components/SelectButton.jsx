import React from 'react'
import "./SelectButton.scss"
import { Link } from 'react-router-dom'

export default function SelectButton(props) {

  const {primaryText, secondaryText, image, link} = props

  
    

  return (
    <div className='selectButton' key={primaryText}>
    <Link to={link}>

    <img src={image}/>
    <div className="card__content">
      <span className="primaryText">{primaryText}</span>
      <br/>
      <span className="secondaryText">{secondaryText}</span>
    </div>
    </Link>

  </div>

  )
}
