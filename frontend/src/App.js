import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Search from './pages/Search';
import FemMasc from './pages/FemMasc';
import Cart from './pages/Cart';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='registrar' element={<Register />} />
        <Route path='produto/:idProduto' element={<Product />} />
        <Route path='resultado' element={<Search />} />
        <Route path='masculino' element={<FemMasc opt='masculino' />} />
        <Route path='feminino' element={<FemMasc opt='feminino' />} />
        <Route path='carrinho' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
