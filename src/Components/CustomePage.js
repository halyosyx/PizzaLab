// import { jsxOpeningElement } from '@babel/types';
import React, { useState, useEffect } from 'react'
import PizzaPreview from './PizzaPreview'
import ToppingMenu from './ToppingMenu'
import { createUseStyles } from 'react-jss';
import OrderContext from './Order/Order';
//import axios from 'axios'

let order = {}

export const toppingSelector = React.createContext()

export default function CustomPage() {

  // GET toppings list from db
  const [toppings, setToppings] = useState([]);
  
  // Create object to keep track of toppings selected - using state?
  // should look like: { "cheese":true, "tomato":false, "pinapple":true ... }
  const [toppingToggler, setToppingToggler] = useState({});

  const getToppings = async () => {
      const response = await fetch("http://localhost:5000/toppings");
      const jsonData = await response.json();

      return jsonData;

      //Object to control toppings selected by user

      //let result = {}  
      //jsonData.forEach((topping) => {
      //  result[topping.name] = false;
      //})
      //setToppingToggler(result)
  }

  useEffect( async ()  => {
    const toppings = await getToppings();
    const toppingSelector = await toggleObjectCreator(toppings);
    order = {...toppingSelector}
    setToppings(toppings);
    setToppingToggler(toppingSelector)
    console.log("in useEffect", toppingSelector);
  }, []);

  function toggleObjectCreator(data) {
      let result = {}  
      data.forEach((topping) => {
       result[topping.name] = false;
      })
      return result;
  }

  console.log(toppings);
  
  // useState to toggle on and off each topping
  // needs to accept id or name of topping
  // and update the appropriate topping

  // function toggle(name) {

  //   // let newToppings = {...toppingToggler}
  //   let newToppings = JSON.parse(JSON.stringify(toppingToggler));

  //   // setToppingToggler(!toppingToggler.cheese)
  //   // newToppings[name] = !newToppings[name]
  //   // setToppingToggler(newToppings);
  //   console.log("🤬", newToppings);

  // }

  // let button

  // if (toppingToggler.length) {
  //     button = <button onClick={toggle()}> hello</button>;
  //   } else {
  //     button = <button onClick={toggle("nope")}> nope </button>;
  //   }


  return (
      
      
        <OrderContext.Provider value={order}>
          <div>
          {/* {button} */}
          {/* Should display the image based on the state of toppings */}
          {/* we might have to add z-index of the topping as a style on the element -- maybe based on the id */}
          <PizzaPreview />
          {/* Should get list of topping available and generate buttons... interacting with toggle function */}
          <ToppingMenu toppings={toppings} toppingToggler={toppingToggler} />
          </div>
       </OrderContext.Provider>

  )
}
