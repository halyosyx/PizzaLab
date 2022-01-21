import React, { useContext } from 'react'
import './PizzaPreview.css'
import {toppingSelector} from './CustomePage'
import OrderContext from './Order/Order';


export default function PizzaPreview({toppings}) {
  const cheese = useContext(toppingSelector)
  const cheeseStyle = {
    display: cheese ? 'block' : 'none'
  }
  let order = useContext(OrderContext);
  let zCounter = 2
  function zIncrement() {
    zCounter += 1
    return zCounter
  }
  return (
    <div className="myPizza">
      {toppings.map(topp => (
       
        <img src={topp.preview_url} />

      ))}

     
      <img src="https://i.ibb.co/6g2xtkW/Pie.png" />
    </div>
  )
}
