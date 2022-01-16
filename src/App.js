import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import PizzaPreview from './Components/PizzaPreview'
import ToppingMenu from './Components/ToppingMenu'


function App() {
  return (
    <div>
      <Header />
      <div className="pizzaBuilder">
        <h1>SELECT THE INGREDIENTS FOR YOUR PIZZA</h1>
        <PizzaPreview />
        <ToppingMenu />
      </div>
    </div>
  );
}

export default App;
