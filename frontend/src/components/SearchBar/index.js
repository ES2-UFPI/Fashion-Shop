import './styles.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    return (
        <div className="barra-pesquisa-container">
            <form className="form">
                <div className='barra-label-container'>
                    <label>Pesquisar: </label>
                </div>
                <div className='barra-input-container'>
                    <div>
                        <input type='text' className='campo-input' />
                    </div>
                    <div>
                        <button className="button-search">
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
