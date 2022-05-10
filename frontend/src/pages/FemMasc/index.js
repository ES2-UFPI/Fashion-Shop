import { useEffect, useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BarraMascFem from "../../components/BarraMascFem";
import SearchResults from "../../components/SearchResults";

import { getProducts } from '../../products';

import './styles.css';

function FemMasc({ opt }) {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (opt === 'masculino') {
            setFilteredProducts(getProducts().filter(product => product.sex === 'man'));
        } else if (opt === 'feminino') {
            setFilteredProducts(getProducts().filter(product => product.sex === 'woman'));
        }
    }, [opt]);

    return (
        <div className="container-area-mascfem">
            <Header />

            <BarraMascFem opt={opt} />
            <SearchResults dados={filteredProducts} />

            <Footer />
        </div>
    );
}

export default FemMasc;
