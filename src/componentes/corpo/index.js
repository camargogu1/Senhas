import React, { Component, useEffect, useState } from 'react'
import 'react-bootstrap'
import Senha, { j } from '../senha'
import Check, { valorExportado } from '../checkbox'
import './corpo.css'
import Range from '../range'
import { RegistroDAO } from '../../persistencia/registroDAO'
import { usuarioAtual } from '../../Login/Login'
import { redirect, useNavigate } from 'react-router-dom'



function Corpo() {
    const history = useNavigate();
    const usuario = JSON.parse(localStorage.getItem("user"))
    const [regs, SetRegs] = useState(new RegistroDAO().registro.filter((element) => element.usuario == usuario));
    let armazenado = new RegistroDAO()
    let armazenado2 = armazenado.registro.filter((element) => element.nome == usuario)
    let k = j
    function refresh() {
        armazenado = new RegistroDAO()
        armazenado2 = armazenado.registro.filter((element) => element.usuario == usuario)
        k = j
        SetRegs(armazenado2)
        console.log(regs)
    }

    function apagar() {
        armazenado = new RegistroDAO()
        armazenado2 = armazenado.registro.filter((element) => element.usuario != usuario)
        armazenado.registro = armazenado2
        armazenado.gravar()
        refresh()
    }

    useEffect(() => {
        if (usuario == null)
            history("/")
    }, [])

    function home(){
        history("/")
    }

    return (
        <section className='geral'>
            
            <div className='home'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" onClick={home} height="35" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                </svg>
            </div>

            <div className='corpo'>
                <h3>Gerador de senhas. Configure para gerar a sua.</h3>
                <Senha onAction={refresh} />
                <Range />
                <div className='checks'>
                    <Check />
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Usuário</th>
                            <th>Senha</th>
                            <th>Utilidade</th>
                        </tr>
                    </thead>

                    <tbody>
                        {regs.map((element, index) =>
                        (
                            <tr key={index}>
                                <td>{element.usuario}</td>
                                <td>{element.senha}</td>
                                <td>{element.utilidade}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
                <button type="button" onClick={apagar} class="btn btn-outline-danger">Apagar</button>
            </div>


        </section>
    )




}

export default Corpo