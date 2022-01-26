import React, {useState, useEffect} from 'react';
import Pizza from './Pizza'




export default function OrderedItems({id}) {

const getOrderItems = async () => {
  const myID = id
  const response = await fetch(`http://localhost:5000/order_list/${myID}`);
  const jsonData = await response.json();
  return jsonData;
}

   const [pizzas, setPizzas] = useState([]);

  useEffect( async () => {
    const pizzas = await getOrderItems();
    setPizzas(pizzas);
    console.log(pizzas);

  }, []);


  return (
    <div>
      <h3>Pizzas selected for Order #{id}</h3>
      {pizzas.map(pizza => <Pizza id={pizza.id}/> )}
    </div>
  );
}
