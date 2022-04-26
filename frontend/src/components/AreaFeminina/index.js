import BarraMascFem from "../BarraMascFem";
import Header from '../Header';
import MostraResultadoBox from "../MostraResultadoBox";
import './styles.css'

function AreaFeminina() {
    const dados = []
    return ( 
        <div className="container-area-fem">
            <Header/>
            <BarraMascFem opt='feminina'/>
            <div className="container-box-resultados-mascfem">
                <MostraResultadoBox dados={dados}/>
            </div>
        </div>
     );
}

export default AreaFeminina;