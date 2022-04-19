import './styles.css';
import { useSearchParams, useLocation } from "react-router-dom";
function Search() {

  let [searchParams, setSearchParams] = useSearchParams();
  let busca = searchParams.get('search');
  
  return (
    <div className="pesquisa-container">
      <h1>{busca}</h1>
    </div>
  );
}

export default Search;
