import { Nav } from 'react-bootstrap'
import './index.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Navb() {
    const navegar = useNavigate()
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <button >Gerador de Senhas</button>
            </div>
        </nav>
    )
}

export default Navb