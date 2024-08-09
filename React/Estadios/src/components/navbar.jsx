import { Outlet, Link } from "react-router-dom";
import '../App.css';
import { Routes, Route } from "react-router-dom";
import Inicio from "./inicio.jsx";
import SobreNosotros from "./sobrenosotros.jsx";


const Layout = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

const Navbar = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicio />} /> {/* Página de inicio */}
                    <Route path="sobrenosotros" element={<SobreNosotros />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Navbar;
