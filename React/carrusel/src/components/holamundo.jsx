import {useState} from 'react'
import "../App.css";

function HolaMundo(){
    // Estructura del estado
    const [contador, setCounter] = useState(0);
    const [nombre, setName] = useState(['Hola', 'Mundo'])
      return (
        <div className='App'>
            <h1>{contador}</h1>
            <h1>{nombre}</h1>
            <button onClick={() => setCounter(contador + 1)}>+</button>
        </div>
      )
    }

export default HolaMundo;
    
