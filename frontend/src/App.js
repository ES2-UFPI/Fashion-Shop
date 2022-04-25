import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Search from './pages/Search';
import Admin from './pages/Admin/Admin';
import UserAdm from './pages/Admin/UserAdm';
import FemMasc from './pages/FemMasc';
import Cart from './pages/Cart';

import AdmProducts from './components/AdmProducts';
import Transations from './components/Transations';
import Messages from './components/Messages';
import NewProduct from './components/NewProduct';
import ProductsList from './components/ProductsList';


import { useSelector } from 'react-redux'
import './App.css';

function App() {
  const isAdmin = useSelector(state => state.login.isAdmin)

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
        
          <Route path='admin' element={isAdmin ? <Admin />: <Login/>} >
            <Route path='usuarios' element={<UserAdm />} />
            <Route path='produtos' element={<AdmProducts />}>
              <Route path='cadastrar' element={<NewProduct />} />
              <Route path='listar' element={<ProductsList />} />
            </Route>
            <Route path='transacoes' element={<Transations />} />
            <Route path='mensagens' element={<Messages />} />
          </Route>
          
      </Routes>
    </div>
  );
}

export default App;
