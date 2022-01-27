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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [mytotal, setMyTotal] = useState(10);

  const onSubmitForm = async e => {
    e.preventDefault()
    try {
      const pizzas = cartContext.cart;
      const body = { name: name, email: email, phone: phonenumber, pizzas: pizzas, total: mytotal };
    
      console.log("Before POST",JSON.stringify(body));
      const res = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
         
      });
      console.log("After POST");
      cartContext.setCart([])
      console.log(res);
      window.location.replace("/CartTY")
       } catch (err) {
      console.log(err.message);
    }
    
  }

  const total = function (carts){
    let result = 0;
    for (const cart of carts) {
      result += cart.subtotal;
      console.log(result);
    }

    return result
  }



  return (
    <div className="container">
      <div className="cart-content">

        <h1> Cart </h1>

        <div className="sub-container">
          {cartContext.cart.length === 0 && <h2> Cart Empty </h2>}
        </div>
        
        <div className="sub-container">

          <button onClick={() => { console.log(cartContext.cart) }} > Log Cart </button>
          <button onClick={() => { cartContext.setCart(state => ([])) }} > RESET Cart </button>
        </div>


          <form className="post" onSubmit={onSubmitForm}>
            <div className='item-list'>
          
            {/* {cartContext.cart.length !== 0 (cartContext.cart.map(item => (<CartItem item={item}/>))} */}
            {/* {cartContext.cart.length > 0 && <h2>Hellow</h2>} */}
            {/* {cartContext.cart.length !== 0 && <CartItem item={item} />} */}

            {cartContext.cart.length > 0 &&
              <CartItem />
            }


            <p id="total" className="total">Total: ${(total(cartContext.cart) / 100).toFixed(2)}</p>
          </div>


          
          <div className="forms">

            <div className="form-box">
              <label name="name">Full Name: </label>
              <input 
                id="name"
                type="text" 
                placeholder='Name' 
                label="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>


            <div className="form-box">
              <label name="email">Email: </label>
              <input 
                id="email" 
                type="email" 
                placeholder='Email' 
                label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-box">
              <label name="phonenumber">Phone Number: </label>
              <input 
                id="phonenumber" 
                type="number" 
                placeholder='Phone Number' 
                label="phonenumber"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
          </div>

          <br></br>
          <br></br>

          <div className="checkout">
            <button id="checkout"> Checkout</button>
          </div>
        </form>
      </div>
    </div>
    
  )
}
