import { useEffect, useState } from 'react';
import {  useParams } from "react-router-dom";

import image from '../../images/ca.png'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CommentArea from '../../components/CommentArea';

import './styles.css';

function Product() {
  const [qtdProduto, setQtdProduto] = useState(1);
  const [data, setData] = useState({})

  let { idProduto } = useParams();
  useEffect(()=>{
    fetch(`url_do_backend/${idProduto}`)
      .then((resposta) => {
          if(!resposta.ok){
            throw new Error(`HTTP Erro: ${resposta.status}`);
          }
          return JSON.parse(resposta.json());
      })
      .then(data => setData(data))
      .catch(err => console.log(err))
  },[])

  const data_produto = {
    titulo: 'Lorem ipsum dolor sit amet',
    descricao: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
    tamanho: 'M',
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
    setQtdProduto((prevQtd) => prevQtd - 1);
    /*let qtd = qtdProduto - 1;
    setQtdProduto(qtd);*/
  }

  return (
    <>
      <Header />

      <div className="produto-container">

        <div className='centro-produto-container'>
          <div className='produto-image-container'>
            <img src={image} />
          </div>

          <div className='produto-infos'>
            <div className='produto-titulo'>
              <h1>{data_produto.titulo}</h1>
            </div>

            <div className='produto-descricao'>
              <p>{data_produto.descricao}</p>
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

      <Footer />
    </>
  );
}

export default Product;
