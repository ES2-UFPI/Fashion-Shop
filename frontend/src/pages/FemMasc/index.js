import AreaFeminina from "../../components/AreaFeminina";
import AreaMasculina from "../../components/AreaMasculina";

function FemMasc(props) {
    return ( 
        <div>
            {props.opt==='feminino' && <AreaFeminina/>}
            {props.opt==='masculino' && <AreaMasculina/>}
        </div>
     );
}

export default FemMasc;