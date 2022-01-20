import React, { useState } from 'react'
import PizzaPreview from './PizzaPreview'
import ToppingMenu from './ToppingMenu'
import axios from 'axios'



export const toppingSelector = React.createContext()

export default function CustomPage() {
  const [cheese, setCheese] = useState(false)

  function toggleCheese() {
    console.log("first");
    setCheese(a => !a)
  }

  return (
      <div>
        <toppingSelector.Provider value={cheese}>
          <button onClick={toggleCheese}> Cheese! </button>

          <PizzaPreview />
          <ToppingMenu />
        </toppingSelector.Provider>
      </div>
  )
}
