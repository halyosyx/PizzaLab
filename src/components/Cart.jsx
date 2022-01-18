import React from 'react'
import "./Cart.css"

export default function Cart() {
  return (
    <>
    <body>
    <div>
      <h2 className="title"> Cart </h2>
    </div>

    <div className="bar">
      <span>Quantity</span>
      <button> - </button> 1 <button> + </button>
      <span> Subtotal </span>
      <span> $25 </span>
    </div>

    <button> Remove </button>

    <p id="total">Total: $25</p>

    <br></br>

    <span className="forms">
      <label for="name">Full Name: </label>
      <input id="name"type="text" placeholder='Name' label="name"></input>
      <br></br>
      <label for="email">Email: </label>
      <input id="email" type="email" placeholder='Email' label="email"></input>
      <br></br>
      <label for="address">Address: </label>
      <input id="address" type="text" placeholder='Address' label="address"></input>
      <br></br>
      <label for="postalcode">Postal Code: </label>
      <input id="postalcode" type="text" placeholder='Postal Code' label="postalcode"></input>
      <br></br>
      <label for="phonenumber">Phone Number: </label>
      <input id="phonenumber" type="number" placeholder='Phone Number' label="phonenumber"></input>
    </span>

    <br></br>
    <br></br>

    <div>
      <button> Checkout</button>
    </div>
    </body>
    </>
    
  )
}
