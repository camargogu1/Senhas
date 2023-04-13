import { useState } from 'react'
import './index.css'
import 'react-bootstrap'
import { rangeValor } from '../range'
import { valorCaracteres, valorMaiusculas, valorMinusculas, valorNumeros } from '../checkbox'
import { Registro } from '../../model/senha'
import { usuarioAtual } from '../../Login/Login'
import { RegistroDAO } from '../../persistencia/registroDAO'


var i = 0
var j = 0




function Senha(props) {
    const [valor, SetValor] = useState('')
    const [lista, listaAtual] = useState()
    const [select,SetSelect] = useState('Outros')

    function sortear() {
        let codigo = ''
        let letra = ''
        let sorteio = 0
        let novaSenha = ''

        for (i = 0; i < rangeValor;) {
            sorteio = Math.floor(Math.random() * 4) + 1
            if (sorteio == 1 && valorMaiusculas == true) {
                codigo = Math.floor(Math.random() * 26) + 65;
                letra = String.fromCharCode(codigo);
                novaSenha += letra
                i++
            }
            if (sorteio == 2 && valorMinusculas == true) {
                codigo = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
                letra = String.fromCharCode(codigo);
                novaSenha += letra
                i++
            }
            if (sorteio == 3 && valorNumeros == true) {
                codigo = Math.floor(Math.random() * 10)
                novaSenha += codigo
                i++
            }
            if (sorteio == 4 && valorCaracteres == true) {
                codigo = Math.floor(Math.random() * (42 - 33 + 1)) + 33;
                letra = String.fromCharCode(codigo);
                novaSenha += letra
                i++
            }
        }
        console.log(novaSenha)
        let lista2 = new Registro(novaSenha, JSON.parse(localStorage.getItem("user")), select)
        let armazenar = new RegistroDAO()
        SetValor(novaSenha)
        armazenar.adicionar(lista2)
        armazenar.gravar()
        props.onAction()
    }

    function mudarSelect(evento)
    {
        SetSelect(evento.target.value)
    }

    return (
        <div>
            <div className="senha">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Senha</span>
                    <input type="text" className="form-control" aria-label="Username"
                        aria-describedby="basic-addon1" value={valor} disabled />
                    <button type="button" onClick={sortear} className="btn btn-primary">Gerar</button>
                </div>
            </div>
            <select class="form-select" onChange={mudarSelect} aria-label="Default select example">
                <option selected value="Outros">Selecione uma utilidade</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Internet Banking">Internet Banking</option>
                <option value="Outros">Outros</option>
            </select>
        </div>
    )
}


export { j }
export default Senha