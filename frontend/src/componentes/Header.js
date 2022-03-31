import './Header.css';

function Header() {
    return (
      <div className="header-container">
        <span>FASHION-SHOP</span>
        <div>
            <ul>
                <li><a href='#'>Cadastrar</a></li>
                <li><a href='#'>Entrar</a></li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Header;