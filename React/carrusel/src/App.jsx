import React from "react";
import Carousel from "./components/carrusel.jsx";

const App = () => {
  const slides = [
    {
      image: "/imagenes/santiagobernabeu.png",
      title: "Santiago Bernabeu",
      description: "Estadio del mas veces campeon de la Champions League el Real Madrid ",
    },
    {
      image: "/imagenes/campnou.png",
      title: "Camp Nou",
      description: "Estadio del equipo al cual pertenecio el jugador mas grande del mundo, Messi. El Barcelona",
    },
    {
      image: "/imagenes/wandametropolitano.png",
      title: "Wanda Metropolitano",
      description: "Estadio de un equipo que nunca a ganado una Champions, el Atletico de Madrid",
    },
    {
      image: "/imagenes/parquedelosprincipes.png",
      title: "Parque de los Principes",
      description: "Estadio de otro equipo que no ha ganado una champions, el PSG",
    },
    {
      image: "/imagenes/allianzarena.png",
      title: "Allianz Arena",
      description: "Estadio de un equipo que siempre juega bien, el Bayern Múnich",
    },
    {
      image: "/imagenes/atanasiogirardot.png",
      title: "Atanasio Girardot",
      description: "Estadio del equipo mas grande de Colombia, el Atletico Nacional",
    },
    {
      image: "/imagenes/labombonera.png",
      title: "La Bombonera",
      description: "Estadio de uno de los mas grandes de America",
    },
    {
      image: "/imagenes/wembleystadium.png",
      title: "Wembley Stadium",
      description: "Estadio en el que juega de local la seleccion de Inglaterra",
    },
    {
      image: "/imagenes/sansiro.png",
      title: "San Siro",
      description: "Estadio en el que hace de local el AC Milan",
    },
    {
      image: "/imagenes/maracana.png",
      title: "Maracana",
      description: "Estadio en el que la seleccion Colombia Derroto a Uruguay y paso a cuartos de final de una copa del mundo",
    },
  ];

  return (
    <div className="App">
      <h1>React Carrusel</h1>
      <Carousel slides={slides} />
    </div>
  );
};

export default App;
