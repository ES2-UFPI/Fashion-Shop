import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/carrinhoSlice';

import DeleteIcon from '@mui/icons-material/Delete';

import './styles.css';

function CartProduct({ id, img, name, size, value, qtd }) {
    const dispatch = useDispatch();

    const excluirItemCarrinho = () => {
        dispatch(removeItem(id))
    }

    return (
        <div className='container-carrinho-box'>
            <div className="c-1">
                <div className='div-image-carrinho'>
                    <img src={img} alt={name} />
                </div>
            </div>

            <div className="c-2">
                <div className='container-info-carrinhno'>
                    <div className='cic'>
                        <p className=''>Produto: <br /><span>{name}</span></p>
                    </div>
                    <div className='cic'>
                        <p>ID: <span>{id}</span></p>
                    </div>
                    <div className='cic'>
                        <p>Tamanho: <span>{size.value}</span></p>
                    </div>
                    <div className='cic'>
                        <p>Quantidade: <span>{qtd}</span></p>
                    </div>
                </div>

                <div className='container-cart-price-exc-button'>
                    <div className='container-preco-carrinho'>
                        <span>R$ {(value / 100).toFixed(2)}</span>
                    </div>

                    <div className="delete-item-cart-button">
                        <button
                            className='delete-item-cart-button'
                            type='button'
                            onClick={() => excluirItemCarrinho()}><DeleteIcon fontSize='large' /></button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CartProduct;
