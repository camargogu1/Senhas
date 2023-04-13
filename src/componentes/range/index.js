import { useState } from 'react'
import './index.css'
import 'react-bootstrap'


var rangeValor = 10


function Range() {

    const [valor,SetValor] = useState('10')
    function mudarValor(evento){
        SetValor(evento.target.value)
        rangeValor = Number(evento.target.value)
    }
    

    return (
       <div className='range2'>
          <div className="range">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Numero de Caracteres</label>
            <div className="deep-range">
                <input type="text" id="numero" value={valor} className="numero" disabled />
                <input type="range" onChange={mudarValor} value={valor} id="range" min="0" max="20" step="1" />
            </div>
        </div>
       </div>
      



    )
}

export {rangeValor}
export default Range