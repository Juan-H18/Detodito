import React, { createContext, useState } from 'react';

export const ComentariosContext = createContext();

export const ComentariosProvider = ({ children }) => {
    const [comentarios, setComentarios] = useState([]);

    const agregarComentario = (comentario) => {
        setComentarios([...comentarios, comentario]);
    };

    return (
        <ComentariosContext.Provider value={{ comentarios, agregarComentario }}>
            {children}
        </ComentariosContext.Provider>
    );
};
