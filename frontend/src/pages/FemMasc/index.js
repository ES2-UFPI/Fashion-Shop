import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BarraMascFem from "../../components/BarraMascFem";
import MostraResultadoBox from "../../components/MostraResultadoBox";
import { data } from '../../data-test';
import { useEffect } from "react";
import './styles.css'

function FemMasc(props) {
    useEffect(() => {
        if (props.opt === 'masculino') {
            // pega so produto masculino
        } else if (props.opt === 'feminino') {
            // pega so produto feminino
        }
    })
    return (
        <div className="container-area-mascfem">
            <Header />

            <BarraMascFem opt={props.opt} />
            <MostraResultadoBox dados={data} />

            <Footer />
        </div>
    );
}

export default FemMasc;
