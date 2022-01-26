import React, { useState, useEffect, useContext }  from 'react'
import "./Cart.css"
import { CartContext } from '../Components/Order/CartOrder';
import { OrderContext } from '../Components/Order/Order';

import CartItem from '../Components/CartItem';

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


  const onSubmitForm = async e => {
    e.preventDefault()
    try {
      const body = cartContext.cart;
      const res = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: body
        
      });
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
    
  }
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
        <form className="post" onSubmit={onSubmitForm}>
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
          <label name="phonenumber">Phone Number: </label>
          <input id="phonenumber" type="number" placeholder='Phone Number' label="phonenumber"></input>
        </span>

        <br></br>
        <br></br>

        <div>
          <button> Checkout</button>
        </div>
        </form>
      </div>
    </div>
    
  )
}
