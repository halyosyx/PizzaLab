import React from "react";
require('dotenv').config()
import Homepage from "./components/Homepage";
import './App.css';
import Header from './components/Header';
import CustomPage from './components/CustomePage';
import RandomPage from './RandomPage/RandomPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const axios = require('axios').default;




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
        </Routes>
      </Router>
    </div>
  );
}



export default App;
