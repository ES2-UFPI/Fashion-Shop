import ProductBox from "../ProductBox";

import './styles.css';

function SearchResults({ dados }) {
    return (
        <div className="container-mostra-box">
            {
                dados.map((item) => {
                    return (
                        <ProductBox key={item.id} img={item.img} title={item.name} preco={item.value} id={item.id} />
                    );
                })
            }
        </div>
    );
}

export default SearchResults;
