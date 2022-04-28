import { useState } from 'react';

import './styles.css';

function CartProduct({id,imagen,titulo,tamanho,value, qtd}) {
    
    const [qtdProduto, setQtdProduto] = useState(qtd);

    const incrementarQtdCart = () => {
        setQtdProduto((prevQtd) => prevQtd + 1);
    }

    const decrementarQtdCart = () => {
        if (qtdProduto <= 1) return;
        setQtdProduto((prevQtd) => prevQtd - 1);
    }

    return (
        <div className='container-carrinho-box'>
            <div className="c-1">
                <div className='div-image-carrinho'>
                    <img src={imagen} />
                </div>
            </div>
            <div className="c-2">
                <div className='container-info-carrinhno'>
                    <div className='cic'>
                        <p className=''>Produto: <br /><span>{titulo}</span></p>
                    </div>
                    <div className='cic'>
                        <p>ID: <span>{id}</span></p>
                    </div>
                    <div className='cic'>
                        <p>Tamanho: <span>{tamanho.value}</span></p>
                    </div>
                </div>
                <div className='container-quant-preco'>
                    <div className='c-container-buttons'>
                        <div className='c-btn-carrinho'>
                            <input type='button' value='-' onClick={decrementarQtdCart} />
                        </div>
                        <div className='c-cen-carrinho'>
                            <span>{qtdProduto}</span>
                        </div>
                        <div className='c-btn-carrinho'>
                            <input type='button' value='+' onClick={incrementarQtdCart} />
                        </div>
                    </div>
                    <div className='container-preco-carrinho'>
                        <span>R$ {value / 100}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
