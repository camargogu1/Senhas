import 'react-bootstrap'
import './index.css'
import { useState } from 'react';
import { LoginM } from '../model/login';
import { LoginDAO } from '../persistencia/loginDAO';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import App from '../App';

function Cadastro() {
    const navigate = useNavigate()
    const [log, SetLog] = useState("")
    const [senha, SetSenha] = useState("")



    function alteraLogin(evento) {
        SetLog(evento.target.value)
    }

    function alteraSenha(evento) {
        SetSenha(evento.target.value)
    }

    var vetor = new LoginDAO()

    function valida() {
        if (log == "" || senha == "") {
            alert("Preencha todos os campos!")
            return false
        }
        else return true

    }

    function cadastra() {
        if (valida()) {
            let logg = new LoginM(log, senha)
            let lista = new LoginDAO()
            let achou = 0
            lista.login.forEach(element => {
                if (element.login == logg.login)
                    achou = 1
            })
            if (achou == 1)
                alert("Esse usuário já existe!")
            else {
                lista.adicionar(logg)
                lista.gravar()
                localStorage.setItem("user", JSON.stringify(log))
                navigate('/app')
            }
        }


    }


    return (
        <div className="containe">
            <div className='div'>
                <form className='form'>
                    <h1>CADASTRO</h1>
                    <label>Usuário</label>
                    <input type='text' onChange={alteraLogin} />
                    <label>Senha</label>
                    <input type='password' onChange={alteraSenha} />
                    <button type="button" id="btncad" onClick={cadastra} className="btn btn-primary">Cadastrar</button>
                    <Link to={"/"}>Já tenho conta</Link>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;