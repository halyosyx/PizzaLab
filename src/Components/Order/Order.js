import { useState, createContext, useEffect } from 'react';
//v1
// const OrderContext = createContext();
// export default OrderContext;

//v2


const getToppings = async () => {
    const response = await fetch("http://localhost:5000/toppings");
    const jsonData = await response.json();
    return jsonData;
}


export const OrderContext = createContext();

export const OrderMaker = props => {

  const [toppings, setToppings] = useState([]);
  
  useEffect( async ()  => {
    console.log("first");
    const toppings = await getToppings();
    setToppings(toppings);
    console.log(toppings);
  }, []);



  // useEffect( async ()  => {
  //   const toppings = await getToppings();
  //   const toppingSelector = await initialOrderCreator(toppings);
  //   // order = {...toppingSelector}
  //   setToppings(toppings);
  //   setOrder(toppingSelector)
  //   console.log("in useEffect", toppingSelector);
  // }, []);

  // const [order, setOrder] = useState({});


  //set Order items to selector list
  // function initialOrderCreator(data) {
  //     let result = {}  
  //     data.forEach((topping) => {
  //      result[topping.name] = false;
  //     })
  //     return result;
  // }


  return(
     <OrderContext.Provider value={[toppings, setToppings]} >
       {props.children}
     </OrderContext.Provider>
  );
};


