import ProductBox from '../ProductBox';
import productsList from '../../products';
import './style.css';

function Section({ titulo }) {
    return (
        <section className='section-container'>
            <div className='section-container-center'>
                <div className='section-title-container'>
                    <span className='title-section'>{titulo}</span>
                </div>

                <div className='section-container-products'>
                    <ProductBox img={productsList[0].img} title={productsList[0].name} preco={productsList[0].value} />
                    <ProductBox img={productsList[1].img} title={productsList[1].name} preco={productsList[1].value} />
                    <ProductBox img={productsList[2].img} title={productsList[2].name} preco={productsList[2].value} />
                    <ProductBox img={productsList[3].img} title={productsList[3].name} preco={productsList[3].value} />
                </div>
            </div>
        </section>
    );
}

export default Section;
