import React from 'react'
import "./SelectButton.scss"
import { Link } from 'react-router-dom'

export default function SelectButton(props) {

  const {primaryText, secondaryText, image, link} = props

  
    

  return (
  <div className='selectButton'>
    <Link to={link}>

    <img src={image}/>
    <div className="card__content">
      <a className="primaryText">{primaryText}</a>
      <br/>
      <a className="secondaryText">{secondaryText}</a>
    </div>
    </Link>

  </div>

  )
}
