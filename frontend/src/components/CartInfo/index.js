import './styles.css';

function CartInfo({total}) {
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
                    <span>R$ {(total / 100).toFixed(2)}</span>
                </div>
            </div>

            <div>
                <input type='button' value='FECHAR COMPRA' />
            </div>
        </div>
    );
}

export default CartInfo;
