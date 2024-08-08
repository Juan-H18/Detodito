import React from "react";
import { useState } from "react";
// import Dom from "./components/dom.jsx";
// import ChatRoom from "./components/chatroom.jsx";
// import AppTheme from "./components/themes.jsx";
// import Youtube from "./components/youtube.jsx";
// import Form from "./components/form.jsx";
// import Contacto from "./components/contacto.jsx"
import { MiContexto } from "./components/micontexto.jsx";
import MiComponente from "./components/micomponente.jsx";


function App (){
    const [texto, setTexto] =useState("");


 return(
  <>
  {/* <Dom />
    <ChatRoom />
    <AppTheme />
    <Youtube />
    <Form />
    <Contacto />
    <br /> */}
    <MiContexto.Provider value={{ texto, setTexto }}>
      <MiComponente />
    </MiContexto.Provider>
  </>
 );
};

export default App;
