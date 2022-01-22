import React, { useContext } from 'react'
import './PizzaPreview.css'
import {toppingSelector} from './CustomePage'
import {OrderContext} from './Order/Order';


export default function PizzaPreview({toppi}) {

  // const order = useContext(OrderContext);


  // let zCounter = 2
  // function zIncrement() {
  //   zCounter += 1
  //   return zCounter
  // }
  // let currentToppings = [];
  // console.log("bloop",toppings);
  
  // toppings.forEach(topp => {
  //   let myname = topp.name
  //   if(order[myname]){
  //     currentToppings.push(topp.preview_url)
  //   }
  // });
  
  // const favorite = user.favorites.includes(name);

  return (
   
      <div className="myPizza">
        <img src="https://i.ibb.co/6g2xtkW/Pie.png" />
        {/* {toppings.map(topp => (
          // console.log("in 🍕 return", topp.name)
          // console.log("👀",topp.preview_url)

          <img src={topp.preview_url} key={topp.name} className={order[topp.name] ? "active" : "inactive"} style={{zIndex:topp.id}} />
        
        ))} */}
      </div>
  
  )
}