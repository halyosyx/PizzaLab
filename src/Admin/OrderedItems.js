import React, {useState, useEffect} from 'react';

// const getOrderItems = async () => {
//   const response = await fetch("http://localhost:5000/orders");
//   const jsonData = await response.json();
//   return jsonData;
// }


export default function OrderedItems({id}) {
  return (
    <div>
      I'm order #{id}

      {/* <Pizza /> */}
    </div>
  );
}
