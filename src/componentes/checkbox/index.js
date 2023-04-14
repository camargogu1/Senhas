import { useState } from 'react'
import './index.css'
import 'react-bootstrap'

var valorMaiusculas
var valorMinusculas
var valorNumeros
var valorCaracteres

function Check() {

    const [maiusculas,SetMaiusculas] = useState(false)
    const [minusculas,SetMinusuclas] = useState(false)
    const [numeros,SetNumeros] = useState(false)
    const [caracteres,SetCaracteres] = useState(false)

    function mudarMaiusculas(evento){
        SetMaiusculas(!maiusculas)
        valorMaiusculas = !maiusculas
    }

    function mudarMinusculas(evento){
        SetMinusuclas(!minusculas)
        valorMinusculas = !minusculas
    }
    
    function mudarNumeros(evento){
        SetNumeros(!numeros)
        valorNumeros = !numeros
    }

    function mudarCaracteres(evento){
        SetCaracteres(!caracteres)
        valorCaracteres = !caracteres
    }

    return (
        <div className='checkss'>
            <div className="form-check form-switch">
                <input className="form-check-input" checked={maiusculas} onChange={mudarMaiusculas} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Maiúsculas</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" checked={minusculas} onChange={mudarMinusculas} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Minúsculas</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" checked={numeros} onChange={mudarNumeros} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Números</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" checked={caracteres} onChange={mudarCaracteres} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Caracteres</label>
            </div>
        </div>
    )

}

export {valorCaracteres}
export{valorMaiusculas}
export{valorMinusculas}
export{valorNumeros}

export default Check
