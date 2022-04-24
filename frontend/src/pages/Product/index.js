import { useState } from 'react';

import image from '../../images/ca.png'

import Header from '../../components/Header';
import Dropdown from '../../components/Dropdown';
import CommentArea from '../../components/CommentArea';

import './styles.css';

function Product() {
  const [qtdProduto, setQtdProduto] = useState(1);

  const data_produto = {
    titulo: 'Lorem ipsum dolor sit amet',
    descricao: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
    tamanhos: ['P', 'M', 'G'],
    preco: '124.99',
    comentarios: [
      {
        nick: 'username',
        comentario: 'comentario sobre o produto'
      },
      {
        nick: 'username2',
        comentario: 'comentario sobre o produto'
      }
    ]
  }

  const incrementarQtd = () => {
    setQtdProduto((prevQtd) => prevQtd + 1);
    /*let qtd = qtdProduto + 1;
    setQtdProduto(qtd);*/
  }

  const decrementarQtd = () => {
    if (qtdProduto <= 1) return;
    setQtdProduto((prevQtd) => prevQtd + 1);
    /*let qtd = qtdProduto - 1;
    setQtdProduto(qtd);*/
  }

  return (
    <div className="produto-container">
      <Header />

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
            <label htmlFor="size-select">Tamanho: </label>
            <Dropdown id="size-select" name="size" options={data_produto.tamanhos} />
          </div>

          <div className='produto-preco'>
            <span>R$ {data_produto.preco}</span>
          </div>

          <div className='produto-buttons'>
            <div className='pb-container-esq'>
              <div className='pb-btn'>
                <input type='button' value='-' onClick={decrementarQtd} />
              </div>
              <div className='pb-cen'>
                <span>{qtdProduto}</span>
              </div>
              <div className='pb-btn'>
                <input type='button' value='+' onClick={incrementarQtd} />
              </div>
            </div>
            <div className='pb-container-dir'>
              <input type='button' value='Adicionar ao Carrinho' />
            </div>
          </div>
        </div>
      </div>

      <CommentArea comentarios={data_produto.comentarios} />
    </div>
  );
}

export default Product;
