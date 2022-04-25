import './style.css'

function DadosCompraCarrinho() {
    return (
        <div className="container-box-fechar-compra">
            <div className='cbf-topo'>
                <h3>Dados da compra</h3>
            </div>

            <div className='cbf-meio'>
                <div>
                    <h4>Total</h4>
                </div>
                <div>
                    <span>R$ 200.00</span>
                </div>
            </div>

            <div>
                <input type='button' value='FECHAR COMPRA' />
            </div>
        </div>
    );
}

export default DadosCompraCarrinho;
