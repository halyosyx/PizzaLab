import './App.css';
import Header from './Components/Header';
import CustomPage from './Components/CustomePage';
import RandomPage from './RandomPage/RandomPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
          <Route path="/custompizza" element={<CustomPage />} />
          <Route path="/randompizza" element={<RandomPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
