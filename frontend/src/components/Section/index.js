import ProductBox from '../ProductBox';
import { getProducts } from '../../products';
import './style.css';

function Section({ titulo }) {
    return (
        <section className='section-container'>
            <div className='section-container-center'>
                <div className='section-title-container'>
                    <span className='title-section'>{titulo}</span>
                </div>

                <div className='section-container-products'>
                  
                    <ProductBox img={getProducts()[0].img}
                        title={getProducts()[0].name}
                        preco={getProducts()[0].value}
                        id={getProducts()[0].id} />

                    <ProductBox img={getProducts()[1].img}
                        title={getProducts()[1].name}
                        preco={getProducts()[1].value}
                        id={getProducts()[1].id} />

                    <ProductBox img={getProducts()[2].img}
                        title={getProducts()[2].name}
                        preco={getProducts()[2].value}
                        id={getProducts()[2].id} />

                    <ProductBox img={getProducts()[3].img}
                        title={getProducts()[3].name}
                        preco={getProducts()[3].value}
                        id={getProducts()[3].id} />

                </div>
            </div>
        </section>
    );
}

export default Section;
