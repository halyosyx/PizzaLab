import React, {useEffect, useState, useContext} from 'react'
import Buttons from './Buttons'
import { OrderContext } from '../Components/Order/Order';
import "./RandomPage.css"
import "./Buttons.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../Components/Order/CartOrder';

const getToppings = async () => {
  const response = await fetch("http://localhost:5000/toppings");
  const jsonData = await response.json();
  return jsonData
  
}

export default function RandomPage() {
  const [toppings, setToppings] = useState([]);
  const {cart, setCart} = useContext(CartContext);
  const selectedToppings = toggleToppings(toppings).filter(topping => topping.isActive === true);
  
  useEffect( async () => {
    const toppings = await getToppings();
    const toppingSelector = toppings.map(e => ({...e, isActive: false}))
    setToppings(toppingSelector)
  }, []);

  function sumTotal(toppings) {
    let result;
    for (const topping of toppings) {
      result += topping.price
    }
    return result;
  }

  console.log(sumTotal(selectedToppings));

  function addPizza() {
    setCart([...cart, { toppings_selected_id: selectedToppings.map(topping => topping.id),
        toppings_selected_names: selectedToppings.map(topping => topping.name),
        subtotal: sumTotal(selectedToppings)}]);
  };


  return (
    <CartContext.Provider value={null}>
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
        <div className="randomize">
            <button onClick={() => null}>Randomize</button>
        </div>
        <div className="addtocart">
          <Link to="/cart">
            <button onClick={() => addPizza()}>Add to cart</button>
          </Link>
        </div>
        </section>
    </div>
    </CartContext.Provider>
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

