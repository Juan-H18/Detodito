import React, { useContext } from 'react';
import { ComentariosContext } from './comentarioscontext';
import '../App.css'; // Asegúrate de tener este archivo CSS

const Clientes = () => {
    const { comentarios } = useContext(ComentariosContext);

    return (
        <div className='contenedor'>
            <br />
            <h1>Comentarios de Clientes</h1>
            <br />
            {comentarios.length > 0 ? (
                <div>
                    {comentarios.map((comentario, index) => (
                        <div className='comentario-item' key={index}>
                            <p>{comentario.nombreCompleto}</p>
                            <p>{comentario.celular}</p>
                            <p>{comentario.comentarios}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No se han enviado comentarios aún.</p>
            )}
        </div>
    );
};

export default Clientes;
