import CartInfo from "../../components/CartInfo";
import CartProduct from "../../components/CartProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import './styles.css'

function Cart() {
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
            <CartProduct />
            <CartProduct />
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
