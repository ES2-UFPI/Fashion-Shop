import { Link } from 'react-router-dom';
import './style.css';

function BoxProduct({ img, title, preco }) {
    return (
        <div className="box-product-container">
            <Link to='/produto/:idProduto'>
                <div className='box-image-container'>
                    <img src={img} />
                </div>

                <div>
                    <h1>{title}</h1>
                    <span>R$ {preco}</span>
                </div>
            </Link>
        </div>
    );
}

export default BoxProduct;
