import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';

function Header() {
  const isLoged = useSelector(state => state.login.isLoged)
  const isAdmin = useSelector(state => state.login.isAdmin)
  return (
    <header className="header-container">
      {isAdmin === false ? (<Link className='logo-link' to="/">FASHION-SHOP</Link>) : (<span>ADMINISTRATIVO</span>)}

      <nav>
        <ul>

          {isLoged ? (

            <li><Link to="/registrar">Sair</Link></li>

          ) : (
            <>
              <li><Link className='opcoes-header' to="/registrar">Cadastrar</Link></li>
              <li><Link className='opcoes-header' to="/login">Entrar</Link></li>
            </>
          )}

        </ul>
      </nav>

    </header>
  );
}

export default Header;
