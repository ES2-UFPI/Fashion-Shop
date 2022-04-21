import './styles.css';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function SearchBar() {

    const [pesquisa, setPesquisa] = useState('');
    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();

    const onChanchefunc = (e) => {
        setPesquisa(e.target.value)
    }

    const handleInput = (e) => {
        e.preventDefault()
        let p = pesquisa
        if (p) {
            navigate(`resultado?search=${p}`)
        }
    }

    return (
        <div className="barra-pesquisa-container">
            <form className="form">
                <div className='barra-label-container'>
                    <label>Pesquisar: </label>
                </div>
                <div className='barra-input-container'>
                    <div>
                        <input type='text' className='campo-input' onChange={onChanchefunc} />
                    </div>
                    <div>
                        <button className="button-search-h" onClick={handleInput}>
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
