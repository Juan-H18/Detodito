// Reacts Hooks
import React from "react";
// import { useState } from "react";

// import Dom from "./components/dom.jsx";
// import ChatRoom from "./components/chatroom.jsx";
// import AppTheme from "./components/themes.jsx";
// import Youtube from "./components/youtube.jsx";
// import Form from "./components/form.jsx";
// import Contacto from "./components/contacto.jsx"

// import { MiContexto } from "./components/micontexto.jsx";
// import MiComponente from "./components/micomponente.jsx";

//React Router

// import { Routes, Route } from "react-router-dom";
// import Inicio from "./components/inicio.jsx";
// import SobreNosotros from "./components/sobrenosotros.jsx";
// import Layout from "./components/layout.jsx";

//slide
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "./components/counter-slice";

// function App (){
//     // const [texto, setTexto] =useState("");


//  return(

//   <>
//   {/* <Dom />
//     <ChatRoom />
//     <AppTheme />
//     <Youtube />
//     <Form />
//     <Contacto />
//     <br /> */}
//     {/* <MiContexto.Provider value={{ texto, setTexto }}>
//       <MiComponente />
//     </MiContexto.Provider> */}

//     {/* React Router
//     <div className="App">
//       <Routes>
//        < Route path="/" element={<Layout />} >
//         <Route path="/" element={<Inicio />} />
//         <Route path="/sobrenosotros" element={<SobreNosotros />} />
//         <Route path="/contacto" element={<Contacto />} />
//         </Route>
//       </Routes>
//     </div>
//     */ }

//   </>
//  );
// };

export default function TodoReduxToolKitComponent(){
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

