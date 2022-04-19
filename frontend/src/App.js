import './App.css';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Product from './pages/Product';
import Search from './pages/Search';
import Admin from './pages/Admin/Admin';
import UserAdm from './pages/Admin/UserAdm';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ProdutosAdm from './components/ProdutosAdm';
import FemMasc from './pages/FemMasc';
import Transacoes from './components/transacoes';
import Mensagens from './components/Mensagens/Mensagens';
import Cart from './pages/Cart/Cart';
import CadastrarProduto from './components/CadastrarProduto';
import VizualizarProdutos from './components/VizualizarProdutos';


function App() {
  const user = true
  return (
    <div className="App">
        <Routes>
          <Route index element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='registrar' element={<Register/>} />
          <Route path='produto/:idProduto' element={<Product/>} />
          <Route path='resultado' element={<Search/>} />
          <Route path='masculino' element={<FemMasc opt='masculino'/>} />
          <Route path='feminino' element={<FemMasc opt='feminino'/>} />
          <Route path='carrinho' element={<Cart/>} />
          <Route path='admin' element={<Admin/>} >
            <Route path='usuarios' element={<UserAdm/>}/>
            <Route path='produtos' element={<ProdutosAdm/>}>
              <Route path='cadastrar' element={<CadastrarProduto/>}/>
              <Route path='listar' element={<VizualizarProdutos/>}/>
            </Route>
            <Route path='transacoes' element={<Transacoes/>}/>
            <Route path='mensagens' element={<Mensagens/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
