import { useContext } from "react";
import { MiContexto } from "./micontexto.jsx";

function MiComponente() {
    const { texto, setTexto } = useContext(MiContexto);

    return (
            <div>
                <h1>{texto}</h1>
                <button onClick={() => setTexto("Hola, mundo!")}>Cambiar Texto</button>
            </div>
        );
}

export default MiComponente;