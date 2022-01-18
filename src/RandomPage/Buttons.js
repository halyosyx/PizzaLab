import React from 'react'
import "./Buttons.css"

export default function Buttons(props) {
  return (
      <h1 className="title">
          SELECT THE SIZE OF YOUR PIZZA
      <section className="sizes">
          <button className='small_size'>Small Pizza</button>
          <button className='medium_size'>Medium Pizza</button>
          <button className='large_size'>Large Pizza</button>
      </section>
      </h1>
  )
}
