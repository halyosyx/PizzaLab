import React, { useState, useEffect, useContext }  from 'react'
import { CartContext } from './Order/CartOrder';
import {OrderContext} from './Order/Order';

const getToppings = async () => {
  const response = await fetch("http://localhost:5000/toppings");
  const jsonData = await response.json();
  return jsonData;
}

export default function CartItem(props) {
  const cartContext = useContext(CartContext);
  const context = useContext(OrderContext);

  const [toppings, setToppings] = useState([]);
  const [mytoppings, setMyToppings] = useState('');
  

  useEffect(async () => {
    // console.log("first");
    const toppings = await getToppings();
    const toppingsWithSelector = toppings.map(v => ({ ...v, isActive: false }))
    setToppings(toppingsWithSelector);
    console.log("🤑",toppingsWithSelector);
  }, []);



  return (

    <div key="cart-item" className="bar-list-item">
        {cartContext.cart.map(item => (
          <div className="bar" key={item.pizza_size_id+"itme key"}>

          <p><b>Toppings Selected: </b></p>  {<p>{item.toppings_selected_names.join(', ')}</p>}
        
          <p><b> Subtotal </b></p>
          <p> ${(item.subtotal / 100).toFixed(2)}</p>
          <button> Remove </button>
        </div>

        ))}
    </div>
  )
}
