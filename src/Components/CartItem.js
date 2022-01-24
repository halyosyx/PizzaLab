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

    <div>
        {cartContext.cart.map(item => (
          <div className="bar">
          <p> pizza_size_id: {item.pizza_size_id}</p>

          {<p>{item.toppings_selected_names.join(', ')}</p>}
        
          <span> Subtotal </span>
          <span> ${(item.subtotal / 100).toFixed(2)}</span>
          <button> Remove </button>
        </div>

        ))}

    </div>
  )
}
