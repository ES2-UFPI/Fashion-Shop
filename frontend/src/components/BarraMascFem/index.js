import { PropaneSharp } from '@mui/icons-material';
import './styles.css'
function BarraMascFem(props) {
    return ( 
        <div className='container-barra-mascfem'>
            <div className='container-barra-mascfem-centro'>
                <h2>DESTAQUES MODA {props.opt==='masculina' ? 'MASCULINA':'FEMININA'}</h2>
            </div>
        </div>
     );
}

export default BarraMascFem;