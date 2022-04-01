import Input from '../../components/Input';
import Button from '../../components/Button';

import './styles.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">

        <h2 className="title">Login</h2>

        <form className="form">
          <Input type="text" id="username" name="username" placeholder="username" />
          <Input type="password" id="password" name="password" placeholder="password" />

          <Button>Login</Button>

          <a href="#">Não possui conta? Cadastre-se</a>
          <a href="#">Página inicial</a>
        </form>

      </div>
    </div>
  );
}

export default Login;
