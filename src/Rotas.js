import App from "./App";
import Cadastro from "./Cadastro";
import Login from "./Login/Login";
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App/>} path="app" />
                <Route path="/" element={<Login/>} />
                <Route path="cad" element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Rotas