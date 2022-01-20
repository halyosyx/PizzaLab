import React, {useEffect, useState} from 'react'
import "./Buttons.css"

export default function Buttons(props) {
  const [sizes, setSizes] = useState([]);

  const getSizes = async () => {
      const response = await fetch("http://localhost:5000/pizzasizes");
      const jsonData = await response.json();

      setSizes(jsonData);
  }

  useEffect(() => {
      getSizes();
  }, []);

  return (
      <h1 className="title">
          SELECT THE SIZE OF YOUR PIZZA
      <section className="sizes">
          {sizes.map(size => (
            <button key={size.id}>{size.name} Pizza {size.price} </button>
          ))}
      </section>
      </h1>
  )
}
