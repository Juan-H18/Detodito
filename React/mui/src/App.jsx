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

function App() {
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

      <Snackbars />
      <Loading />
      <Registro />
      <Registro2 />
    </>
  )
}

export default App
