import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Header } from './components';
import { Home } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
      console.log(data);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home render={() => <Home items={pizzas} />} />
      </div>
    </div>
  );
}

export default App;
