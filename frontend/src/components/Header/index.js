import './styles.css';

function Header(props) {
  return (
    <header className="header-container">
      {props.title !== 'adm' ? (<span>FASHION-SHOP</span>) : (<span>ADMINISTRATIVO</span>)}

      <nav>
        <ul>
          <li><a href='#'>Cadastrar</a></li>
          <li><a href='#'>Entrar</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
