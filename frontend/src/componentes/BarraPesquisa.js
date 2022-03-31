import './BarraPesquisa.css';
function BarraPesquisa(){
    return(
        <div className="barra-pesquisa-container">
            <form className="form">
                <div className='barra-label-container'>
                    <label>Pesquisar: </label>
                </div>
                <div className='barra-input-container'>
                    <div>
                        <input type='text' className='campo-input' />
                    </div>
                    <div>
                        <button>ICON</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BarraPesquisa;