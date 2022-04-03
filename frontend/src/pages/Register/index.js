import Button from '../../components/Button';
import Input from '../../components/Input';

import './styles.css';

function Register() {
  return (
    <div className="register-container">
      <div className="register-wrapper">

        <h2 className="title">Crie sua conta</h2>

        <form className="form">
          <Input type="text" id="name" name="name" placeholder="Nome completo" />
          <Input type="text" id="username" name="username" placeholder="Nome de Usuário" />
          <Input type="email" id="email" name="email" placeholder="Email" />
          <Input type="password" id="password" name="password" placeholder="Senha" />
          <Input type="password" id="confirm-password" name="confirm-password" placeholder="Confirmar Senha" />

          <Button>Criar Conta</Button>

          <a href="#">Já possui conta? Faça o login</a>
          <a href="#">Página inicial</a>
        </form>

      </div>
    </div>
  );
}

export default Register;
