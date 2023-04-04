import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './page/card';
import Product from './page/product';
import Order from './page/order';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/card' element={<Card />} />
        <Route path='/order' element={<Order />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
