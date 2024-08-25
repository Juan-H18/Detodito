//Navbar
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import '../src/App.css'

import Navbar from "./components/navbar.jsx";
import Footer from './components/footer.jsx';
import RegistroUsuario from "./components/registrousuario.jsx";
import Inicio from "./components/inicio.jsx";
import SobreNosotros from "./components/sobrenosotros.jsx";
import Contacto from "./components/contacto.jsx";

import Groups3Icon from '@mui/icons-material/Groups3';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';

function App() {
  //Navbar
  const navegationLinks = [
    {
      title: "Inicio",
      path: "",
      icon: <HomeIcon />,
    },
    {
      title: "Sobre Nosotros",
      path: "/sobrenosotros",
      icon: <Groups3Icon />,
    },
    {
      title: "Contacto",
      path: "/contacto",
      icon: <ThumbsUpDownIcon />,
    },
    {
      title: "Registro",
      path: "/registro",
      icon: <AccountCircleIcon />,
    },

  ];


  return(
    <>
    {/* Navbar */}

    <Navbar navegationLinks={navegationLinks} />
      <Container sx={{ mt: 5, textAlign: 'center' }}>
        <Routes>
          <Route 
            path=''
            element={<Inicio />}
            />
          <Route
            path="/sobrenosotros"
            element={<SobreNosotros />}
          />
          <Route
            path="/contacto"
            element={<Contacto />}
          />
          <Route
            path="/registro"
            element={<RegistroUsuario />}
          />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
