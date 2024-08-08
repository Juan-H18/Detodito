import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return (
        <div>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/sobrenosotros">Sobre Nosotros</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout 