import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { addItem, removeItem } from '../../redux/carrinhoSlice';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { getProducts } from '../../products';
import './styles.css';
import api from '../../api';

function Product() {
  const [qtdProduto, setQtdProduto] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [preco, setPreco] = useState(0);
  const [produtoData, setProdutoData] = useState({});
  const [opcoesTamanho, setOpcoesTamanho] = useState([]);
  const [checkSize, setCheckSize] = useState(true);
  const dispatch = useDispatch();

  let { idProduto } = useParams(); //usado para pegar o produto baseado no id passado como parametro

  useEffect(() => {
    getProducts().find((item) => {
      if (item.id === idProduto) {
        setPreco(Number(item.value) * 100);
        const sizeOptions = item.sizes.map((tamanho) => (
          {
            value: tamanho,
            label: tamanho
          }
        )
        )
        setOpcoesTamanho(sizeOptions);
        setProdutoData(item);
      }
    })
  }, [])

  const somaPrecoComEleMesmo = () => {
    let soma = Number(preco + Number(produtoData.value) * 100);
    setPreco(soma);
  }

  const subtraiPrecoComEleMesmo = () => {
    let sub = Number(preco - (Number(produtoData.value) * 100));
    setPreco(sub);
  }

  const incrementarQtd = () => {
    setQtdProduto((prevQtd) => prevQtd + 1);
    somaPrecoComEleMesmo();
  }

  const decrementarQtd = () => {
    if (qtdProduto <= 1) return;
    setQtdProduto((prevQtd) => prevQtd - 1);
    subtraiPrecoComEleMesmo();
  }

  const addItemCarrinho = () => {

    if (selectedOption !== null) {
      const payload = {
        id: produtoData.id,
        img: produtoData.img[0],
        name: produtoData.name,
        tamanho: selectedOption,
        value: preco,
        qtd: qtdProduto
      }
      dispatch(addItem(
        payload
      ));
      api.post("/app/cart", payload)
    } else {
      setCheckSize(false);
    }
  }


  return (
    <>
      <Header />

      <div className="produto-container">

        <div className='centro-produto-container'>
          <div className='produto-image-container'>
            <img src={produtoData.img} />
          </div>

          <div className='produto-infos'>
            <div className='produto-titulo'>
              <h1>{!produtoData ? 'loading...' : produtoData.name}</h1>
            </div>

            <div className='produto-descricao'>
              <p>{produtoData.description}</p>
            </div>

            <div className='produto-tamanho'>
              <p>Tamanho: </p>
              <Select
                className="size-select"
                options={opcoesTamanho}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
              />
              <p>{!checkSize ? <span className="alert">Escolha um tamanho</span> : ''}</p>
            </div>

            <div className='produto-preco'>
              <span>R$ {(preco / 100).toFixed(2)}</span>
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
                  {produtoData && <input type='button' value='+' onClick={incrementarQtd} />}

                </div>
              </div>

              <div className='pb-container-dir'>
                <input type='button' value='Adicionar ao Carrinho' onClick={() => addItemCarrinho()} />
              </div>

            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Product;
