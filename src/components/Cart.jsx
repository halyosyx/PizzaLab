import React, { useState, useEffect, useContext }  from 'react'
import "./Cart.css"
import { CartContext } from './Order/CartOrder';
import CartItem from './CartItem';

export default function Cart() {

  const cartContext = useContext(CartContext);

  

  return (
    <div className="container">
      <div className="cart-content">

        <h1> Cart </h1>
        <div>
        {cartContext.cart.length === 0 && <h2> Cart Empty </h2>}


        </div>
        
        <br /><br />
        <button onClick={() => { console.log(cartContext.cart) }} > CL Cart </button>
        
        <button onClick={() => { cartContext.setCart(state => ([]))}} > RESET Cart </button>




        <div className='item-list'>
        
          {/* {cartContext.cart.length !== 0 (cartContext.cart.map(item => (<CartItem item={item}/>))} */}
          {/* {cartContext.cart.length > 0 && <h2>Hellow</h2>} */}
          {/* {cartContext.cart.length !== 0 && <CartItem item={item} />} */}

          {cartContext.cart.length > 0 &&
            <h2>
              You have {cartContext.cart.length} items in Cart.
            </h2>


          }




          {/* */}

          <p id="total">Total: $25</p>
        </div>

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
      </div>
    </div>
    
  )
}
