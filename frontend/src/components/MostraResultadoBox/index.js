import ProductBox from "../ProductBox";
import ca from '../../images/ca.png';
import './styles.css'

function MostraResultadoBox({dados}) {
    return ( 
        <div className="container-mostra-box">
            
            <ProductBox img={ca} title='Titulo' preco='30.00' id='123'/>
            <ProductBox img={ca} title='Titulo' preco='30.00' id='123'/>
            <ProductBox img={ca} title='Titulo' preco='30.00' id='123'/>
            <ProductBox img={ca} title='Titulo' preco='30.00' id='123'/>
            <ProductBox img={ca} title='Titulo' preco='30.00' id='123'/>
            <ProductBox img={ca} title='Titulo' preco='30.00' id='123'/>
        </div>
     );
}

export default MostraResultadoBox;