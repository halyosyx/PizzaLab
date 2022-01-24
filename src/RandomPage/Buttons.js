import React, {useEffect, useState} from 'react'
import "./Buttons.css"

export default function Buttons(props) {

  return (
      <section>
        <div className="randomize">
            <button onClick={() => window.location.reload(false)}>Randomize</button>
        </div>
        <div className="addtocart">
            <button>Add to cart</button>
        </div>
      
      </section>
  )
}
