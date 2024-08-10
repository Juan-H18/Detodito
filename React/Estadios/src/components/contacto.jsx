import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ComentariosContext } from './comentarioscontext';

const Contacto = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { agregarComentario } = useContext(ComentariosContext);
    const [submitMessage, setSubmitMessage] = useState('');

    const onSubmit = (data) => {
        agregarComentario({
            nombreCompleto: data.nombreCompleto,
            celular: data.celular,
            correo: data.correo,
            comentarios: data.comentarios
        });
        setSubmitMessage('Comentario enviado exitosamente.');
        reset(); // Esto borra los datos del formulario
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='contenedor-form'>
                <h2>Ingresa tus Datos y nos pondremos en contacto</h2>
                <br />
                <div>
                    <input
                        type="text"
                        {...register('nombreCompleto', { required: "Este campo es obligatorio" })}
                        placeholder='Nombre Completo'
                        className='inputs'
                    />
                    {errors.nombreCompleto && (
                        <span className='error-mensaje'>{errors.nombreCompleto.message}</span>
                    )}
                </div>
                <div>
                    <input
                        type="tel"
                        {...register('celular', {
                            required: "Este campo es obligatorio",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Este campo debe ser numérico"
                            }
                        })}
                        placeholder='Celular'
                        className='inputs'
                    />
                    {errors.celular && (
                        <span className='error-mensaje'>{errors.celular.message}</span>
                    )}
                </div>
                <div>
                    <input
                        type="email"
                        {...register('correo', {
                            required: "Por favor, introduce un correo válido",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Por favor, introduce un correo válido"
                            }
                        })}
                        placeholder='Correo'
                        className='inputs'
                    />
                    {errors.correo && (
                        <span className='error-mensaje'>{errors.correo.message}</span>
                    )}
                </div>
                <div>
                    <textarea
                        {...register('comentarios')}
                        placeholder='Déjanos tus comentarios'
                        className='inputs'
                    />
                </div>
                <button type="submit" className='boton'>Enviar</button>
                {/* Mensaje de éxito */}
                {submitMessage && <p className='success-message'>{submitMessage}</p>}
            </div>
        </form>
    );
};

export default Contacto;
