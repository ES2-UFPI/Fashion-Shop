import './styles.css';
import { useSearchParams, useLocation } from "react-router-dom";
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
function Search() {

  let [searchParams, setSearchParams] = useSearchParams();
  let busca = searchParams.get('search');
  
  return (
    <div className="pesquisa-container">
      <Header/>
      <SearchBar/>
      <h1>{busca}</h1>
    </div>
  );
}

export default Search;
