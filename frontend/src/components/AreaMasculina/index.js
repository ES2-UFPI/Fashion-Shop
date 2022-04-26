import BarraMascFem from "../BarraMascFem";
import Header from '../Header';
import MostraResultadoBox from "../MostraResultadoBox";
import '../AreaFeminina/styles.css'

function AreaMasculina() {
    const dados = []
    return ( 
        <div className="container-area-fem">
            <Header/>
            <BarraMascFem opt='masculina'/>
            <div className="container-box-resultados-mascfem">
                <MostraResultadoBox dados={dados}/>
            </div>
        </div>
     );
}

export default AreaMasculina;