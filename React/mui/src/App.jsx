import { useState } from 'react'
import './App.css'
import Register from './components/boton1.jsx';
import Titulo from './components/titulo.jsx';
import Texto from './components/texto.jsx';
import Boton2 from './components/boton2.jsx';
import Parrafos from './components/parrafos.jsx';
import Producto from './components/producto.jsx';
import MyCard from './components/cards.jsx';
import Alertas1 from './components/alertas1.jsx';
import Alertas2 from './components/alertas2.jsx';
import BotonAlerta from './components/botonalerta.jsx';
import Snackbars from './components/snackbar.jsx';
import Loading from './components/loading.jsx';
import Registro from './components/registro.jsx';
import Registro2 from './components/registro2.jsx';

//Navbar
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import RouterRegister from "./components/routerregister.jsx";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

function App() {
  //Navbar
  const navegationLinks = [
    {
      title: "Register",
      path: "/register",
      icon: <MenuIcon />,
    },
  ];


  return(
    <>
      <Titulo /> 
      <Register />
      <Texto />
      <Boton2 />
      <Parrafos />  
      <Producto />
      <MyCard />
      <Alertas1 />
      <Alertas2 />  
      <BotonAlerta />

    {/* SnackBars */}

      <Snackbars />
      <Loading />
      <Registro />
      <Registro2 />

    {/* Navbar */}

    <Navbar navegationLinks={navegationLinks} />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route
            path="/register"
            element={<RouterRegister />}
          />
        </Routes>
      </Container>
    </>
  )
}

export default App
