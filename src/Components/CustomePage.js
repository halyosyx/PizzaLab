import React, { useState, useEffect, useContext } from 'react'
import './CustomPage.css'
import PizzaPreview from './PizzaPreview'
import ToppingMenu from './ToppingMenu'
import {OrderContext} from './Order/Order';
import {CartContext} from './Order/CartOrder';


const getToppings = async () => {
    const response = await fetch("http://localhost:5000/toppings");
    const jsonData = await response.json();
    return jsonData;
}

export default function CustomPage() {

  const [toppings, setToppings] = useState([]);

  // const context = useContext(OrderContext);
  // console.log(context);
  useEffect( async ()  => {
    // console.log("first");
    const toppings = await getToppings();
    const toppingsWithSelector = toppings.map(v => ({...v, isActive: false}))
    setToppings(toppingsWithSelector);
    console.log(toppingsWithSelector);
  }, []);

  const context = useContext(CartContext);

  return (
      
      
       
        <OrderContext.Provider value={{toppings, setToppings}} >
          <h1>SELECT THE INGREDIENTS FOR YOUR PIZZA</h1>

          {/* {button} */}
          {/* Should display the image based on the state of toppings */}
          {/* we might have to add z-index of the topping as a style on the element -- maybe based on the id */}
          <div className="custom-pizza-interface" >

          <PizzaPreview toppi={toppings}/>
          {/* Should get list of topping available and generate buttons... interacting with toggle function */}
          {/* <ToppingMenu toppings={toppings} toppingToggler={toppingToggler} /> */}
          <ToppingMenu />


          </div>
          <br/>
          <br/>
          <br/>
          <button onClick={()=>{console.log(context.cart)}}> CL Cart </button>
          {/* <button onClick={()=>{setCart((context.cart) => {...context.cart, yes: "hellow"} ) }> Add to Cart </button> */}



        </OrderContext.Provider>
      

  )
}
