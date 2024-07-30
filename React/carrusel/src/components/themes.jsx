import React from 'react'
import '../App.css'

// Temas a Compartir
const Themes ={
    light:{
        foreground:'#000000',
        background:'#eeeeee'
    },
    dark:{
        foreground:'#ffffff',
        background:'#222222'
    }
}

//Crear el Contexto
const ThemeContext = React.createContext(Themes.light)

export default function AppTheme(){
    return(

        //proveer el valor de los temas
            <ThemeContext.Provider value = {Themes.dark}>
                <Toolbar />
            </ThemeContext.Provider>
    )
}

function Toolbar(){
    return(
        <div>
            <ThemeButton />
        </div>
    )
}

function ThemeButton(){
    const theme = React.useContext(ThemeContext);
    return(
        <button style={{background:theme.background, color:theme.foreground}}>
            Yo estoy estilizando el Tema
        </button>
    )
}