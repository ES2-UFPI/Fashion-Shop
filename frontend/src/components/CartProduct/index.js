import { useState } from 'react';
import image from '../../images/ca.png';
import './styles.css';

function CartProduct() {
    const [qtdProduto, setQtdProduto] = useState(1);

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
                    <img src={image} />
                </div>
            </div>
            <div className="c-2">
                <div className='container-info-carrinhno'>
                    <div className='cic'>
                        <p className=''>Produto: <br /><span>Lorem Impsum</span></p>
                    </div>
                    <div className='cic'>
                        <p>ID: <span>123</span></p>
                    </div>
                    <div className='cic'>
                        <p>Tamanho: <span>M</span></p>
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
                        <span>R$ 100.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;