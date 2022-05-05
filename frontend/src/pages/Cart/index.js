import CartInfo from "../../components/CartInfo";
import CartProduct from "../../components/CartProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

import './styles.css';

function Cart() {
  const carrinho = useSelector(state => state.carrinho);
  const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
  //const [qtdProdutos, setQtdPtodutos] = useState(0);

  const initialCartValue = 0;

  const array_valores = carrinho.map((item) => item.value);

  useEffect(() => {
    setValorTotalCarrinho(array_valores.reduce((previousValue, currentValue) => previousValue + currentValue, initialCartValue));
  }, [valorTotalCarrinho]);

  return (
    <>
      <Header />

      <div className="carrinho-container">
        <div className="container-boxes-titulos">
          <div>
            <h1>CARRINHO</h1>
          </div>
          <div>
            <h3>{carrinho.length} Produto(s)</h3>
          </div>
        </div>

        <div className='container-boxes-carrinho'>
          <div>
            {
              carrinho.map((item) => {
                return (
                  <CartProduct key={item.id} id={item.id} name={item.name} img={item.img} size={item.tamanho} value={item.value} qtd={item.qtd} />
                );
              })
            }

          </div>
          <div>
            <CartInfo total={valorTotalCarrinho.toFixed(2)} />
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Cart;
