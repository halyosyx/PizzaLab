import React, {useEffect, useState, useContext} from 'react'
import Buttons from './Buttons'
import { OrderContext } from '../Components/Order/Order';
import "./RandomPage.css"

const getToppings = async () => {
  const response = await fetch("http://localhost:5000/toppings");
  const jsonData = await response.json();
  return jsonData
  
}

export default function RandomPage() {
  const [toppings, setToppings] = useState([]);

  useEffect( async () => {
    const toppings = await getToppings();
    const toppingSelector = toppings.map(e => ({...e, isActive: false}))
    setToppings(toppingSelector)
  }, []);

  const selectedToppings = toggleToppings(toppings).filter(topping => topping.isActive === true);
  console.log(toppings);

  return (
    <OrderContext.Provider value={{toppings, setToppings}}>
      <div className="Random_Page">
        <h1>HERE IS YOUR PIZZA!</h1>
        <div className="pizza_image">
            <img className="base"src="https://i.ibb.co/6g2xtkW/Pie.png" />
            {selectedToppings.map(topping => (
              <img key={topping.id} className={topping.name} src={topping.preview_url}/>
            ))}
        </div>
        <section className="bottom">
        <div className="topping_names">{
          selectedToppings.map(topping => (
          <div key={topping.id}>{topping.name}</div>
          ))
        }
        </div>
        <Buttons />
        </section>
    </div>
    </OrderContext.Provider>
  )
}

const toggleToppings = function(toppings){
  let shuffledToppings = shuffleToppings(toppings);
  let count = 0;
  
  for (const topping of shuffledToppings) {

    if (count < 4) {
      topping.isActive = true;
    } else {
      topping.isActive = false;
    }
    count++;
  }
  return shuffledToppings;

}


const shuffleToppings = function(toppingsArray)
{
  let currentIndex = toppingsArray.length, randomIndex;

  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [toppingsArray[currentIndex], toppingsArray[randomIndex]] = [
      toppingsArray[randomIndex], toppingsArray[currentIndex]];
  }

  return toppingsArray;
}

