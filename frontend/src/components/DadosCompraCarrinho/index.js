import './style.css'

function DadosCompraCarrinho() {
    return ( 
        <div className="container-box-fechar-compra">
            <div>
                <h3>Dados da compra</h3>
            </div>
            <div className='cbf-meio'>
                <div>
                    <h3>Total</h3>
                </div>
                <div>
                    <h3>R$ 200.00</h3>
                </div>
            </div>
            <div>
                <input type='button' value='FECHAR COMPRA'/>
            </div>
        </div>
     );
}

export default DadosCompraCarrinho;