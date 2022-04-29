import ProductBox from "../ProductBox";
import './styles.css';

function MostraResultadoBox({ dados }) {
    return (
        <div className="container-mostra-box">
            {
                dados.map((item) => {
                    return (
                        <ProductBox key={item.id} img={item.img} title={item.nome} preco={item.value} id={item.id} />
                    );
                })
            }
        </div>
    );
}

export default MostraResultadoBox;
