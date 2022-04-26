import ProductBox from '../ProductBox';
import ca from '../../images/ca.png';
import './style.css';

function Section(props) {
    const dados = []
    return (
        <section className='section-container'>
            <div className='section-container-center'>
                <div className='section-title-container'>
                    <span className='title-section'>{props.title}</span>
                </div>

                <div className='section-container-products'>
                    <ProductBox img={ca} title='Titulo' preco='30.00' />
                    <ProductBox img={ca} title='Titulo' preco='30.00' />
                    <ProductBox img={ca} title='Titulo' preco='30.00' />
                    <ProductBox img={ca} title='Titulo' preco='30.00' />
                </div>
            </div>
        </section>
    );
}

export default Section;
