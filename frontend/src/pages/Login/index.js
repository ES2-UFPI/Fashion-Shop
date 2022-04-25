

import './styles.css';
import '../../components/Input/styles.css'
import '../../components/Button/styles.css'

import { useState } from 'react';

function Login() {

  const [dados, setDados] = useState({email:'', senha:''})

  const handleEmail = (event) => {
    dados.email = event.target.value
    setDados(dados)
    console.log(dados)
  }
  const handleSenha = (event) => {
    dados.senha = event.target.value
    setDados(dados)
    console.log(dados)
  }
  const handleClick = (event, dados)=>{
      event.preventDefault();
      // fetch(url, dados)
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">

        <h2 className="title">Login</h2>

        <form className="form">
          <input className='input-generic' type="text" id="username" name="username" placeholder="Nome de usuário" onChange={(event)=>handleEmail(event)}/>
          <input className='input-generic' type="password" id="password" name="password" placeholder="Senha"  onChange={(event)=>handleSenha(event)} />

          <button className='button-generic' onClick={(event)=>handleClick(event,dados)}>Login</button>


          <a href="#">Não possui conta? Cadastre-se</a>
          <a href="#">Página inicial</a>
        </form>

      </div>
    </div>
  );
}

export default Login;
