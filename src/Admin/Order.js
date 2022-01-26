import React from 'react';
import './Order.css';
import User from './User';
import OrderedItems from './OrderedItems';


export default function Order(props) {
  return (
    <div className="order_list_item"> 
      <h2>Order #{props.id}</h2>
      <h3>User Information</h3>
      <User id={props.id} users={props.user_info}/>   
      <OrderedItems id={props.id} />
    </div>


  )
}
