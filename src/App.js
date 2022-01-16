import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import PizzaPreview from './Components/PizzaPreview'
import ToppingMenu from './Components/ToppingMenu'


function App() {
  return (
    <div>
      <Header />
      <PizzaPreview />
      <ToppingMenu />
    </div>
  );
}

export default App;
