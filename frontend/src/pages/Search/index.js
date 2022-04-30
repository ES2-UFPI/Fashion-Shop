import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import BoxProduct from '../../components/ProductBox';

import productsList from "../../products";

import './styles.css';


function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [filteredProducts, setFilteredProducts] = useState([]);

  let search = searchParams.get('search');

  useEffect(() => {
    const newSearch = search.trim().toUpperCase();
    setFilteredProducts(productsList.filter(product => product.name.trim().toUpperCase().includes(newSearch)));
  }, []);

  console.log(filteredProducts);

  return (
    <div className="pesquisa-container">
      <Header />
      <SearchBar />

      <div className='container-resultados-produto'>
        <div>
          <h3>Resultados</h3>
        </div>

        <div className='container-box-resultados'>
          {/* Montar resultados. Retornar erro se nenhum item for encontrado */}
        </div>

      </div>
    </div>
  );
}

export default Search;

/*<BoxProduct img={image} title='Title' preco='100.00' />
          <BoxProduct img={image} title='Title' preco='100.00' />
          <BoxProduct img={image} title='Title' preco='100.00' />
          <BoxProduct img={image} title='Title' preco='100.00' />
          <BoxProduct img={image} title='Title' preco='100.00' />*/
