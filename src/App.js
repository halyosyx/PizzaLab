import React, { useState, useEffect, useContext }  from "react";
import Homepage from "./Components/Homepage";
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import CustomPage from './Components/CustomePage';
import RandomPage from './RandomPage/RandomPage';
import {CartContext} from './Components/Order/CartOrder';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [cart, setCart] = useState({user:"me"});

  // function startCart() {
  //   setCart(cart => {...cart, yes: "or no"})
  // }
 
  // startCart();
  
  return (
    <CartContext.Provider value={{cart, setCart}} > 

    <div>
      {/*<div className="pizzaBuilder">
        <PizzaPreview />
        <ToppingMenu /> 
      </div>*/}
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/custompizza" element={<CustomPage />} />
          <Route path="/randompizza" element={<RandomPage />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Router>
    </div>
    </CartContext.Provider>
  );
}



export default App;
