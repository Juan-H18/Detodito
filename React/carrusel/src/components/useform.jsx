import { useForm } from "react-hook-form";

const Contacto = () => {

    // estructura del formulario
  const { register, formState: { errors }, watch, handleSubmit } = useForm({
   
});
   // Capturar la data
    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container">
        <h1 className="main-title">Contacto</h1>
        <form className="" onSubmit={handleSubmit(enviar)}>

            <input type="text" className="form-control mb-2" placeholder="Ingresá tu nombre" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            <input type="email" className="form-control mb-2" placeholder="Ingresá tu e-mail" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    required: true
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                {errors.email?.type === 'required' && <p>El campo nombre es requerido</p>}
            <input type="phone" className="form-control mb-2" placeholder="Ingresá tu teléfono" {...register('telefono', {
                    required: true,
                    minLength: 10
                })} />
                {errors.telefono?.type === 'required' && <p>El campo telefono es requerido</p>}
                {errors.telefono?.type === 'minLength' && <p>El campo telefono debe tener 10 caracteres</p>}

            <button  className="btn btn-primary" type="submit">Enviar</button>

        </form>
    </div>

  )
}

export default Contacto