import './styles.css';
import { useSearchParams } from "react-router-dom";
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import BoxProduct from '../../components/ProductBox';
import image from '../../images/ca.png'
import {data} from '../../data-test'
import { useEffect } from 'react';


function Search() {

  let [searchParams, setSearchParams] = useSearchParams();
  let busca = searchParams.get('search');
  useEffect(()=>{
      //recupera produtos do banco de dados com o parametro passado 
  });   
  console.log(data) 
  
  return (
    <div className="pesquisa-container">
      <Header/>
      <SearchBar/>
      <div className='container-resultados-produto'>
        <div>
          <h3>Resultados</h3>
        </div>
        <div className='container-box-resultados'>
          <BoxProduct img={image} title='Title' preco='100.00'/>
          <BoxProduct img={image} title='Title' preco='100.00'/>
          <BoxProduct img={image} title='Title' preco='100.00'/>
          <BoxProduct img={image} title='Title' preco='100.00'/>
          <BoxProduct img={image} title='Title' preco='100.00'/>
        </div>
      </div>
    </div>
  );
}

export default Search;
