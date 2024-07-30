import React, {useRef} from 'react'
import '../App.css'

//Funcion para capturar

function Youtube(){
    const inputRef = useRef()

    const handleClick = () =>{
        alert(inputRef.current.value)
    }
    return(
        <div>
            <h1>Hello Youtube</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>useRef</button>
        </div>
    )
}

export default Youtube;