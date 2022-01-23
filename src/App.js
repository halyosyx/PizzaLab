import React from "react";
import Homepage from "./Components/Homepage";
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import CustomPage from './Components/CustomePage';
import RandomPage from './RandomPage/RandomPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      {/*<div className="pizzaBuilder">
        <h1>SELECT THE INGREDIENTS FOR YOUR PIZZA</h1>
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
  );
}



export default App;
