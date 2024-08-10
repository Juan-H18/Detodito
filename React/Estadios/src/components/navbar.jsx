import { Outlet, Link } from "react-router-dom";
import '../App.css';
import { Routes, Route } from "react-router-dom";
import Inicio from "./inicio.jsx";
import SobreNosotros from "./sobrenosotros.jsx";
import Clientes from "./clientes.jsx";
import Contacto from "./contacto.jsx"; 




const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
            <br /> <br /><br />
            <Outlet />
        </>

    );
}

const Navbar = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path="sobrenosotros" element={<SobreNosotros />} />
                    <Route path="clientes" element={<Clientes />} />
                    <Route path="contacto" element={<Contacto />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Navbar;
