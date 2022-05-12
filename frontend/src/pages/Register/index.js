import { Link } from 'react-router-dom';
import { useState } from 'react';
import Input from '../../components/Input';

import './styles.css';
import '../../components/Input/styles.css'
import '../../components/Button/styles.css'
import api from '../../api';

function Register() {
  const [dados, setDados] = useState({});

  const handle = (event) => {
    dados[event.target.name] = event.target.value;
    setDados(dados);
  }

  const enviarDados = async () => {
    const token = await api.post("/auth/singIn", dados);
  }

  return (
    <div className="register-container">
      <div className="register-wrapper">

        <h2 className="title">Crie sua conta</h2>

        <form className="form">
          <Input onChange={handle} type="text" id="name" name="nome" placeholder="Nome completo" />
          <Input onChange={handle} type="text" id="username" name="username" placeholder="Nome de Usuário" />
          <Input onChange={handle} type="email" id="email" name="email" placeholder="Email" />
          <Input onChange={handle} type="password" id="password" name="pwd" placeholder="Senha" />
          <Input onChange={handle} type="password" id="confirm-password" name="confirm-password" placeholder="Confirmar Senha" />

          <button className='button-generic' onClick={() => { enviarDados() }}>Criar conta</button>

          <Link to="/login">Já possui conta? Faça o login</Link>
          <Link to="/">Página inicial</Link>
        </form>

      </div>
    </div>
  );
}

export default Register;
