import React from "react";
import Dom from "./components/dom.jsx";
import ChatRoom from "./components/chatroom.jsx";
import AppTheme from "./components/themes.jsx";
import Youtube from "./components/youtube.jsx";
import Form from "./components/form.jsx";
import Contacto from "./components/contacto.jsx"


const App = () => {
    

 return(
  <>
  <Dom />
    <ChatRoom />
    <AppTheme />
    <Youtube />
    <Form />
    <Contacto />
  </>
 );
};

export default App;
