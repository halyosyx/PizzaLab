import React, { useState, useEffect, useContext }  from 'react'
import "./Cart.css"
import { CartContext } from './Order/CartOrder';
import { OrderContext } from './Order/Order';

import CartItem from './CartItem';

const getToppings = async () => {
  const response = await fetch("http://localhost:5000/toppings");
  const jsonData = await response.json();
  return jsonData;
}



export default function Cart() {

  const [toppings, setToppings] = useState([]);


  useEffect(async () => {
    // console.log("first");
    const toppings = await getToppings();
    const toppingsWithSelector = toppings.map(v => ({ ...v, isActive: false }))
    setToppings(toppingsWithSelector);
    console.log(toppingsWithSelector);
  }, []);

  const cartContext = useContext(CartContext);
  const context = useContext(OrderContext);


  return (
    <div className="container">
      <div className="cart-content">

        <h1> Cart </h1>
        <div>
        {cartContext.cart.length === 0 && <h2> Cart Empty </h2>}


        </div>
        
        <br /><br />
        <button onClick={() => { console.log(cartContext.cart) }} > Log Cart </button>
        
        <button onClick={() => { cartContext.setCart(state => ([]))}} > RESET Cart </button>




        <div className='item-list'>
        
          {/* {cartContext.cart.length !== 0 (cartContext.cart.map(item => (<CartItem item={item}/>))} */}
          {/* {cartContext.cart.length > 0 && <h2>Hellow</h2>} */}
          {/* {cartContext.cart.length !== 0 && <CartItem item={item} />} */}

          {cartContext.cart.length > 0 &&
            <CartItem />
          }


          <p id="total">Total: $25</p>
        </div>

        <br></br>



        <span className="forms">
          <label name="name">Full Name: </label>
          <input id="name"type="text" placeholder='Name' label="name"></input>
          <br></br>
          <label name="email">Email: </label>
          <input id="email" type="email" placeholder='Email' label="email"></input>
          <br></br>
          <label name="address">Address: </label>
          <input id="address" type="text" placeholder='Address' label="address"></input>
          <br></br>
          <label name="postalcode">Postal Code: </label>
          <input id="postalcode" type="text" placeholder='Postal Code' label="postalcode"></input>
          <br></br>
          <label name="phonenumber">Phone Number: </label>
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
