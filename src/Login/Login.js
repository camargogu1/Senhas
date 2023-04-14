import 'react-bootstrap'
import './Login.css'
import { useEffect, useState } from 'react';
import { LoginM } from '../model/login';
import { LoginDAO } from '../persistencia/loginDAO';
import { Link, useNavigate } from 'react-router-dom';
import { Registro } from '../model/senha';
import { RegistroDAO } from '../persistencia/registroDAO';

var usuarioAtual

function Login() {
    const history = useNavigate();
    const [log, SetLog] = useState("")
    const [senha, SetSenha] = useState("")
    let lista = new LoginDAO()

    useEffect(() => {
        localStorage.setItem("user",null);
      }, []);

    function alteraLogin(evento) {
        SetLog(evento.target.value)
    }

    function alteraSenha(evento) {
        SetSenha(evento.target.value)
    }

    var vetor = new LoginDAO()

    function valida(login, senha) {
        let existe = 0
        vetor.login.forEach(element => {
            if (element.login == login && element.senha == senha) {
                existe = 1
            }
        });
        if (existe == 1)
            return true
        else
            return false
    }

    function verifica() {
        if (valida(log, senha)) {
            localStorage.setItem("user", JSON.stringify(log))
            history('')
            history('/app');
        }
        else {
            alert("Usuário ou senha incorretos")
        }
    }


    return (
        <div className="containe">
            <div className='div'>
                <form className='form'>
               <h1>LOGIN</h1>
                    <label>Usuário</label>
                    <input type='text' onChange={alteraLogin} />
                    <label>Senha</label>
                    <input type='password' onChange={alteraSenha} />
                    <button type="button" id="btnlogin" onClick={verifica} className="btn btn-primary">Entrar</button>
                    <Link to={"/cad"}>Criar conta</Link>
                </form>

            </div>

        </div>

    )
}
export { usuarioAtual }
export default Login;