import React, { useState, useEffect, useContext } from 'react'
import PizzaPreview from './PizzaPreview'
import ToppingMenu from './ToppingMenu'
import {OrderContext} from './Order/Order';


export default function CustomPage() {


  const [toppings, setToppings] = useContext(OrderContext);


  return (
      
       <OrderContext>
       
          <div>
          {/* {button} */}
          {/* Should display the image based on the state of toppings */}
          {/* we might have to add z-index of the topping as a style on the element -- maybe based on the id */}
          <PizzaPreview toppi={toppings}/>
          {/* Should get list of topping available and generate buttons... interacting with toggle function */}
          {/* <ToppingMenu toppings={toppings} toppingToggler={toppingToggler} /> */}
          <ToppingMenu toppi={toppings} />

          </div>
      </OrderContext>

  )
}
