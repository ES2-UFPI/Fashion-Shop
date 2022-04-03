import BoxProduct from '../Product-box';
import './style.css';
import ca from '../../images/ca.png';
function Section(props){
    return(
        <div className='section-container'>
            <div className='section-container-center'>
                <div className='section-title-container'>
                    <span className='titulo-section'>{props.title}</span>
                </div>
                <div className='section-container-products'>
                    <BoxProduct img={ca} title='Titulo' preco='30.00'/>
                    <BoxProduct img={ca} title='Titulo' preco='30.00'/>
                    <BoxProduct img={ca} title='Titulo' preco='30.00'/>
                    <BoxProduct img={ca} title='Titulo' preco='30.00'/>
                </div>
            </div>
        </div>
    );
}

export default Section;