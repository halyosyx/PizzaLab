import React, {useEffect, useState} from 'react'
import Buttons from './Buttons'

import "./RandomPage.css"

export default function RandomPage(props) {
  const [toppings, setToppings] = useState([]);

  const getToppings = async () => {
      const response = await fetch("http://localhost:5000/toppings");
      const jsonData = await response.json();

      setToppings(jsonData);
  }

  useEffect(() => {
    getToppings();
  }, []);


  const randomizedToppings = randomtoppings(toppings);

  return (
      <div className="Random_Page">
        <h1>HERE IS YOUR PIZZA!</h1>
        <div className="pizza_image">
            <img className="base"src="https://i.ibb.co/6g2xtkW/Pie.png" />
            {randomizedToppings.map(topping => (
              <img key={topping.id} className={topping.name} src={topping.img}/>
            ))}
        </div>
        <section className="bottom">
        <div className="topping_names">{
          randomizedToppings.map(topping => (
          <div key={topping.id}>{topping.name}</div>))
        }
        </div>
        <Buttons />
        </section>
    </div>
  )
}

// Will refactor at some point
const randomtoppings = function(listOfToppings){

  let count = 0;
  let toppingList = {}
  let resultsArray = [];

  shuffle(listOfToppings);

  for (const toppings of listOfToppings) {

    if (count >= 4) {
      break;
    }

    toppingList.name = toppings.name;
    toppingList.img = toppings.preview_url;
    toppingList.id = toppings.id;

    resultsArray.push(toppingList);
    toppingList = {};

    count++;
  }
  
  console.log(resultsArray);

  return resultsArray;
}

const shuffle = function(toppingsArray)
{
  let currentIndex = toppingsArray.length, randomIndex;

  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [toppingsArray[currentIndex], toppingsArray[randomIndex]] = [
      toppingsArray[randomIndex], toppingsArray[currentIndex]];
  }

  return toppingsArray;
}

