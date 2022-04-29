import CartInfo from "../../components/CartInfo";
import CartProduct from "../../components/CartProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useSelector  } from 'react-redux'

import './styles.css'

function Cart() {

  const carrinho = useSelector(state => state.carrinho);
  console.log(carrinho)

  return (
    <>
      <Header />

      <div className="carrinho-container">
        <div className="container-boxes-titulos">
          <div>
            <h1>CARRINHO</h1>
          </div>
          <div>
            <h3>2 Produto(s)</h3>
          </div>
        </div>

        <div className='container-boxes-carrinho'>
          <div>
            {
              carrinho.map((item)=>{
                return(
                  <CartProduct key={item.id} id={item.id} titulo={item.titulo} imagen={item.img} tamanho={item.tamanho} value={item.value} qtd={item.qtd}/>
                );
              })
            }
            
          </div>
          <div>
            <CartInfo />
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Cart;
