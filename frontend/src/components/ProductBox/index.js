import { Link } from 'react-router-dom';
import './style.css';

function BoxProduct({ img, title, preco, id }) {
    return (
        <div className="box-product-container">
            <Link to={`/produto/${id}`} >
                <div className='box-image-container'>
                    <img src={img} alt={title} />
                </div>

                <div>
                    <h1>{title}</h1>
                    <span>{preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                </div>
            </Link>
        </div>
    );
}

export default BoxProduct;
