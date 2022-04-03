import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <span>Fashion-Shop</span>
      <div>
        <ul>
          <li><a href='#'>Cadastrar</a></li>
          <li><a href='#'>Entrar</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
