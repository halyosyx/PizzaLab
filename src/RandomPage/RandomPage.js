import React, {useEffect, useState} from 'react'
import Buttons from './Buttons'

import "./RandomPage.css"

export default function RandomPage(props) {
  const [toppings, setToppings] = useState([]);
  let count = 0;

  const getToppings = async () => {
      const response = await fetch("http://localhost:5000/toppings");
      const jsonData = await response.json();

      setToppings(jsonData);
  }

  useEffect(() => {
    getToppings();
  }, []);

  const selectedToppings = shuffleToppings(toppings)
  console.log(selectedToppings.slice(0,4));

  //If id from randomized topping matches the id for jsonData, insert that data into selected toppings

  return (
      <div className="Random_Page">
        <h1>HERE IS YOUR PIZZA!</h1>
        <div className="pizza_image">
            <img className="base"src="https://i.ibb.co/6g2xtkW/Pie.png" />
            {selectedToppings.slice(0,4).map(topping => (
              <img key={topping.id} className={topping.name} src={topping.preview_url}/>
            ))}
        </div>
        <section className="bottom">
        <div className="topping_names">{
          selectedToppings.slice(0,4).map(topping => (
          <div key={topping.id}>{topping.name}</div>))
        }
        </div>
        <Buttons />
        </section>
    </div>
  )
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

