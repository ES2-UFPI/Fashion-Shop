import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from '../../components/Button';

import '../../components/Input/styles.css'
import '../../components/Button/styles.css'

import './styles.css';
import api from '../../api';

function Login() {

  const [dados, setDados] = useState({ email: '', senha: '' });
  const [erro, setErro] = useState(false)
  const handleEmail = (event) => {
    dados.email = event.target.value
    setDados(dados)
  }

  const handleSenha = (event) => {
    dados.senha = event.target.value
    setDados(dados)
  }

  const handleClick = async (event, dados) => {
    event.preventDefault();
    console.log(event, dados);
    const { token } = await (await api.post("/auth/logIn", { email: dados.email, pwd: dados.senha })).data
    if (token == null) {
      setErro(true)
    } else {
      api.defaults.headers["authorization"] = token
      localStorage.setItem("fashion-shop-authorization", token)
    }
    // fetch(url, dados)
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">

        <h2 className="title">Login</h2>

        <form className="form">
          <input className='input-generic' type="text" id="username" name="username" placeholder="Nome de usuário" onChange={(event) => handleEmail(event)} />
          <input className='input-generic' type="password" id="password" name="password" placeholder="Senha" onChange={(event) => handleSenha(event)} />

          {erro &&
            <p style={{ fontSize: "14px", color: "red" }}>
              Dados incorretos
            </p>
          }
          <Button onClick={(event) => handleClick(event, dados)}>Login</Button>

          <Link to="/registrar">Não possui conta? Cadastre-se</Link>
          <Link to="/">Página inicial</Link>
        </form>

      </div>
    </div>
  );
}

export default Login;
