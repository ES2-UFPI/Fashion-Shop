
import { useEffect } from 'react';
import {  useParams } from "react-router-dom";

import { useState } from 'react';
import Select from 'react-select';


import image from '../../images/ca.png'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CommentArea from '../../components/CommentArea';

import './styles.css';

function Product() {
  const [qtdProduto, setQtdProduto] = useState(1);

  const [data, setData] = useState({})

  let { idProduto } = useParams(); //usado para pegar o produto baseado no id passado como parametro
  useEffect(()=>{
              // recupera o produto pela api
  },[])
  const [selectedOption, setSelectedOption] = useState(null);

  const comprarAction = () => {
    //enviar dados para pagamento
  }

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

  const sizeOptions = data_produto.tamanhos.map(tamanho => (
    {
      value: tamanho,
      label: tamanho
    }
  ));

  const incrementarQtd = () => {
    setQtdProduto((prevQtd) => prevQtd + 1);
  }

  const decrementarQtd = () => {
    if (qtdProduto <= 1) return;
    setQtdProduto((prevQtd) => prevQtd - 1);
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
              <p>Tamanho: </p>
              <Select
                className="size-select"
                options={sizeOptions}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
              />
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
