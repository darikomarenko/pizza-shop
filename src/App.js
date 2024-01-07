import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Header } from './components';
import { Home } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
