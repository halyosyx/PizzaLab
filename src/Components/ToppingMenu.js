import React, { useContext } from 'react'
import Topping from './Topping'
import './ToppingMenu.css'
import {OrderContext} from './Order/Order';
// const toppings = [
//   {
//     name: "Cheese",
//     price: 120,
//     icon_url: "https://i.ibb.co/x2dDJjg/Cheese-thumb.png",
//     preview_url: "https://i.ibb.co/vw9JQMz/Cheese-Preview.png"
//   },
//   {
//     name: "Basil",
//     price: 120,
//     icon_url: "https://i.ibb.co/rdLCvB1/Basil-thumb.png",
//     preview_url: "https://i.ibb.co/TRFK0hD/Basil-Preview.png"
//   },
//     {
//     name: "Mushroom",
//     price: 120,
//     icon_url: "https://i.ibb.co/wCb31cp/Mushroom-thumb.png",
//     preview_url: "https://i.ibb.co/HdFrsR3/Mushroom-Preview.png"

//   },
//   {
//     name: "Pepperoni",
//     price: 120,
//     icon_url: "https://i.ibb.co/9472PW8/Pepperoni-thumb.png",
//     preview_url: "https://i.ibb.co/fMWFs0S/Pepperoni-Preview.png"

//   },
//   {
//     name: "Pineapple",
//     price: 120,
//     icon_url: "https://i.ibb.co/LSTcQNG/Pineapple-thumb.png",
//     preview_url: "https://i.ibb.co/LSTcQNG/Pineapple-thumb.png"
//   },
//   {
//     name: "Tomato",
//     price: 120,
//     icon_url: "https://i.ibb.co/b3Rcbnh/Tomato-thumb.png",
//     preview_url: "https://i.ibb.co/8NHWbQ2/Tomato-Preview.png"
//   },
// ]


// "https://i.ibb.co/6g2xtkW/Pie.png"


export default function ToppingMenu({toppi}) {
    // console.log("in Button ♳", toppingToggler);
    // let keys = Object.keys(toppingToggler)
    // let order = useContext(OrderContext);
    // console.log(order);
    



  //   function toggle(name) {

  //   // let newToppings = {...toppingToggler}
  //   // let newOrderDetails = JSON.parse(JSON.stringify(order));
  //   // setToppingToggler(!toppingToggler.cheese)
  //   order[name] = !order[name]
    
  //   // setToppingToggler(newToppings);
  //   console.log("🤬", order);

  // }

  return (
    <div className="toppingsMenu">
      {toppi.map(topp => (
        
        <Topping 
          key={topp.name} 

          name={topp.name} 
          icon={topp.icon_url} 
          price={topp.price}
        />

      ))}
      {/* {keys.map(name => (
        <button onClick={() => {toggle(name)}}>{name}</button>
      ))} */}
      
        

    </div>
  )
}
