import './styles.css';

function BarraMascFem(props) {
    return (
        <div className='container-barra-mascfem'>
            <div className='container-barra-mascfem-centro'>
                <h2>DESTAQUES MODA {props.opt === 'masculino' ? 'MASCULINA' : 'FEMININA'}</h2>
            </div>
        </div>
    );
}

export default BarraMascFem;
