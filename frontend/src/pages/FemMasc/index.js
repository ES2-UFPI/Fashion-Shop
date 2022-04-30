import { useEffect, useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BarraMascFem from "../../components/BarraMascFem";
import MostraResultadoBox from "../../components/MostraResultadoBox";

import productsList from '../../products';

import './styles.css';

function FemMasc({ opt }) {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (opt === 'masculino') {
            setFilteredProducts(productsList.filter(product => product.sex === 'man'));
        } else if (opt === 'feminino') {
            setFilteredProducts(productsList.filter(product => product.sex === 'woman'));
        }
    }, [opt]);

    return (
        <div className="container-area-mascfem">
            <Header />

            <BarraMascFem opt={opt} />
            <MostraResultadoBox dados={filteredProducts} />

            <Footer />
        </div>
    );
}

export default FemMasc;
