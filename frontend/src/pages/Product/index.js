import Header from '../../components/Header';
import './styles.css';
import image from '../../images/ca.png'

function Product() {
  return (
    <div className="produto-container">
      <Header/>
      <div className='centro-produto-container'>
        <div className='produto-image-container'>
          <img src={image} />
        </div>
        <div className='produto-infos'>
          <div className='produto-titulo'>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
          <div className='produto-descricao'>
            <h2>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</h2>
          </div>
          <div className='produto-tamanho'>
            <h1>Tamanho:M</h1>
          </div>
          <div className='produto-preco'>
            <h1>R$ 100.00</h1>
          </div>
          <div className='produto-buttons'>
            <div className='pb-container-esq'>
              <div className='pb-esq'>
                <input type='button' value='-'/>
              </div>
              <div className='pb-cen'>
                <span>num</span>
              </div>
              <div className='pb-dir'>
                <input type='button' value='+'/>
              </div>
            </div>
            <div className='pb-container-dir'>
              <input type='button' value='Adicionar ao carrinho'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
