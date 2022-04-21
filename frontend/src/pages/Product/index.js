import Header from '../../components/Header';
import './styles.css';
import image from '../../images/ca.png'
import {useState} from 'react';
import Comentarios from '../../components/Comentarios';

function Product() {

  const [qtdProduto, setQtdProduto] = useState(1);
  const data_produto = {
    titulo:'Lorem ipsum dolor sit amet',
    descricao:'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
    tamanho:'M',
    preco:'124.99',
    comentarios:[
      {
        nick:'username',
        comentario:'comentario sobre o produto'
      },
      {
        nick:'username2',
        comentario:'comentario sobre o produto'
      }
    ]
  }
  const incrementarQtd = () => {
    let qtd = qtdProduto + 1;
    setQtdProduto(qtd); 
  }

  const decrementarQtd = () => {
    if(qtdProduto <= 1) return;
    let qtd = qtdProduto - 1;
    setQtdProduto(qtd); 
  }

  return (
    <div className="produto-container">
      <Header/>
      <div className='centro-produto-container'>
        <div className='produto-image-container'>
          <img src={image} />
        </div>
        <div className='produto-infos'>
          <div className='produto-titulo'>
            <h1>{data_produto.titulo}</h1>
          </div>
          <div className='produto-descricao'>
            <h2>{data_produto.descricao}</h2>
          </div>
          <div className='produto-tamanho'>
            <p>Tamanho: <span>{data_produto.tamanho}</span></p>
          </div>
          <div className='produto-preco'>
            <span>R$ {data_produto.preco}</span>
          </div>
          <div className='produto-buttons'>
            <div className='pb-container-esq'>
              <div className='pb-btn'>
                <input type='button' value='-'  onClick={decrementarQtd}/>
              </div>
              <div className='pb-cen'>
                <span>{qtdProduto}</span>
              </div>
              <div className='pb-btn'>
                <input type='button' value='+' onClick={incrementarQtd}/>
              </div>
            </div>
            <div className='pb-container-dir'>
              <input type='button' value='Adicionar ao Carrinho'/>
            </div>
          </div>
        </div>
      </div>
      <Comentarios comentarios={data_produto.comentarios} />
    </div>
  );
}

export default Product;
