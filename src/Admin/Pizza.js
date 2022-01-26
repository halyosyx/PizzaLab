import React, {useState, useEffect} from 'react';

export default function Pizza({id}) {


const getPizzaToppings = async () => {
  const myID = id
  const response = await fetch(`http://localhost:5000/pizza_name/${myID}`);
  const jsonData = await response.json();
  return jsonData;
}

   const [toppings, setToppings] = useState([]);

  useEffect( async () => {
    const toppings = await getPizzaToppings();
    setToppings(toppings);
    console.log(toppings);

  }, []);


  return (
    <div>
      <strong>Pizza item {id} | </strong>
      Toppings selected: {toppings.join(' ')}
    </div>
    )
}
