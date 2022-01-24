import React, { useState, useEffect, useContext }  from 'react'

export default function CartItem(props) {

  return (
    <div>
        <div className="bar">
          <span>Quantity</span>
          <button> - </button> 1 <button> + </button>
          <span> Subtotal </span>
          <span> $25 </span>
          <button> Remove </button>
        </div>
    </div>
  )
}
