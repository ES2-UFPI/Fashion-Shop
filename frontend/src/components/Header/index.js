import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';

function Header() {
  const isLoged = useSelector(state => state.login.isLoged)
  const isAdmin = useSelector(state => state.login.isAdmin)
  return (
    <header className="header-container">
      {isAdmin === false ? (<span>FASHION-SHOP</span>) : (<span>ADMINISTRATIVO</span>)}

      <nav>
        <ul>

          {isLoged ? (

            <li><a href='#'>Sair</a></li>

          ) : (
            <>
              <li><Link to="/registrar">Cadastrar</Link></li>
              <li><Link to="/login">Entrar</Link></li>
            </>
          )}

        </ul>
      </nav>

    </header>
  );
}

export default Header;
