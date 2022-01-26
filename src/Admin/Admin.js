import React, {useState, useEffect} from 'react';
import Order from './Order';

const getOrders = async () => {
  const response = await fetch("http://localhost:5000/orders");
  const jsonData = await response.json();
  return jsonData;
}
const getUsers = async () => {
  const response = await fetch("http://localhost:5000/users");
  const jsonData = await response.json();
  // console.log(jsonData);
  return jsonData;
}

// console.log("💃",getOrders);

export default function Admin() {

  const [orders, setOrders] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect( async () => {
    const orders = await getOrders();
    setOrders(orders);
    // console.log(orders);

    console.log("first");
    const myUsers = await getUsers();
    // console.log(myUsers);
    setUsers(myUsers);
    console.log("My user???", myUsers); 
  }, []);


  console.log(users);

  // useEffect(async () => {
  //   // console.log("first");
  //   const orders = await getOrders();
  //   // const toppingsWithSelector = toppings.map(v => ({ ...v, isActive: false }))
  //   setOrders(orders);
  //   console.log(orders);
  // }, []);

  return (
    <div>
        <h1>Welcome to the Admin Page</h1>
        {/* <hr /> */}
        {orders.map(order => (
          
          <Order 
            id={order.id}
            user_id={order.user_id}
            user_info={users}
            total={order.total}
            order_created={order.order_created}
            order_accepted={order.order_accepted}
            order_closed={order.order_closed}
          />

        ))}


    </div>
  )
}

