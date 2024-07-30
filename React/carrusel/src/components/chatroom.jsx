import {useState, useEffect} from 'react';

// Crear componente crear conexion con props
function createConnection(serverUrl, roomId){
    return{
        connect(){
            console.log('Conectando a la sala"'+ roomId + '"en' + serverUrl + '...')
        },
        disconnect(){
            console.log('Desconectando de la sala "' + roomId + '" en'+ serverUrl + '...')
        }
    };
}
// Sala de chat
function Chat({roomId}){
    //Estado de la url
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(()=> {
        // Crear conexion
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return() => {
            connection.disconnect();
        };
    }, [roomId,serverUrl]);

    return(
        <>
            <label>
                URL del Servidor:{' '}
                <input
                value={serverUrl}
                onChange={e => setServerUrl(e.target.value)}
                />
            </label>
            <h1>¡Bienvenido a la Sala {roomId}!</h1>
        </>
    );
}

export default function ChatRoom(){
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    return(
        <>
            <label>
                Elija el sitio de chat:{' '}
                <select
                    value={roomId}
                    onChange={e=> setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="viaje">viaje</option>
                    <option value="musica">musica</option>
                </select>
            </label>
            <button onClick={()=> setShow(!show)}>
                {show? 'Cerrar Chat' : 'Abrir Chat'}
            </button>
            {show && <hr />}
            {show && <Chat roomId={roomId} />}
        </>
    )
};