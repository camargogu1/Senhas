import React, { Component, useEffect, useState } from 'react'
import 'react-bootstrap'
import Senha, { j } from '../senha'
import Check, { valorExportado } from '../checkbox'
import './corpo.css'
import Range from '../range'
import { RegistroDAO } from '../../persistencia/registroDAO'
import { usuarioAtual } from '../../Login/Login'



function Corpo() {
    const usuario = JSON.parse(localStorage.getItem("user"))
    const [regs, SetRegs] = useState(new RegistroDAO().registro.filter((element)=>element.usuario==usuario));
    let armazenado = new RegistroDAO()
    let armazenado2 = armazenado.registro.filter((element)=>element.nome==usuario)
    let k = j
    function refresh()
    {
        armazenado = new RegistroDAO()
        armazenado2 = armazenado.registro.filter((element)=>element.usuario==usuario)
        k=j
        SetRegs(armazenado2)
        console.log(regs)
    }

    function apagar()
    {
        armazenado = new RegistroDAO()
        armazenado2 = armazenado.registro.filter((element)=>element.usuario!=usuario)
        armazenado.registro = armazenado2
        armazenado.gravar()
        refresh()
    }

        

    return (
        <section className='geral'>
            <div className='corpo'>
                <h3>Gerador de senhas. Configure para gerar a sua.</h3>
                <Senha onAction={refresh}/>
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