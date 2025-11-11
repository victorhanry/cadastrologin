import "./LoginRegister.css";
import React, { useState } from 'react';

const LoginRegister = () => {
  const [action, setAction] = useState('');

  const registerLink = () => {
    setAction('active');
  };

  const loginLink = () => {
    setAction('');
  };

  return (
    <div className={`wrapper ${action}`}>
      {/* Login */}
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Lembre-me.
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="btn">Entrar</button>

          <div className="login-register">
            <p>
              Não tem uma conta?{" "}
              <a href="#" onClick={registerLink} className="register-link">
                Registre-se
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Registro */}
      <div className="form-box register">
        <form action="">
          <h1>Registrar</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" required /> Concordo com os Termos e Condições.
            </label>
          </div>

          <button type="submit" className="btn">Registrar</button>

          <div className="login-register">
            <p>
              Já tem uma conta?{" "}
              <a href="#" onClick={loginLink} className="register-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};


export default LoginRegister;
