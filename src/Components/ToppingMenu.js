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


export default function ToppingMenu(props) {
    // console.log("in Button ♳", toppingToggler);
    // let keys = Object.keys(toppingToggler)
    // let order = useContext(OrderContext);
    // console.log(order);
    
  const context = useContext(OrderContext);

  // Option 1 - not setting state <<<<<<<
    // function toggle(id) {
    //   context.toppings[(id-1)].isActive = !context.toppings[id-1].isActive
    //   console.log("🤬", context.toppings);
    // }
  // Option 2 - try to set state ??? 
    function toggle(id) {
    let index = id - 1;
    let newToppings = [...context.toppings]
    // let newOrderDetails = JSON.parse(JSON.stringify(order));
    // setToppingToggler(!toppingToggler.cheese)
      
      newToppings[index].isActive = !newToppings[index].isActive
      console.log("happy", newToppings[index]);
    // order[name] = !order[name]
    context.setToppings(newToppings);
      
      console.log("🤬", context.toppings);
    }
    
  console.log(context);

  return (
    <div className="toppingsMenu" key="menu">
      {context.toppings.map(topp => (
        <div className="toppingsBox" key={topp.name}>
        <Topping 
          className="btnImage"
          key={topp.name} 
          // onClick={() => toggle(topp.id) }
          // onClick={() => {console.log("hellow")}}
          name={topp.name} 
          icon={topp.icon_url} 
          price={topp.price}
        />
        <button className="btnOverlay"
        onClick={() => toggle(topp.id)}>
        </button>
        </div>
      ))}
     {/* {context.toppings.map(topp => (
      <button 
        onClick={() => toggle(topp.id)}>
          {topp.name}<br/> {topp.price}
      </button>
      ))} */}
      
        

    </div>
  )
}
