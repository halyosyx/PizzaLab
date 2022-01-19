import React from "react";
import Homepage from "./components/Homepage";
import './App.css';
import Header from './components/Header';
import CustomPage from './components/CustomePage';
import RandomPage from './RandomPage/RandomPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CheckoutPage from "./CheckoutPage/CheckoutPage.js"

function App() {
  return (
    <div>
      <Header />
    
      {/*<div className="pizzaBuilder">
        <h1>SELECT THE INGREDIENTS FOR YOUR PIZZA</h1>
        <PizzaPreview />
        <ToppingMenu /> 
      </div>*/}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/custompizza" element={<CustomPage />} />
          <Route path="/randompizza" element={<RandomPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
