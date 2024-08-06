import React, { useState }  from 'react';
import '../App.css'

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    identificacion: '',
    email: '',
    nivelCarrera: '',
    programa: '',
    materia: '',
    nota1: '',
    nota2: '',
    nota3: ''
  });

  const [resultado, setResultado] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nota1, nota2, nota3 } = formData;

    const notaFinal =
      (parseFloat(nota1) * 0.35) +
      (parseFloat(nota2) * 0.35) +
      (parseFloat(nota3) * 0.30);

    if (notaFinal >= 3.0) {
      setResultado('Gano la materia, aprobó el semestre y su nota final es: ' + notaFinal);
    } else {
      setResultado('No aprobó la materia, debe repetir el semestre, debido a que su nota final es: ' + notaFinal);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidNote = (nota) => {
    const number = parseFloat(nota);
    return number >= 0 && number <= 5;
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className='contenedor'>
        <h1>Ingrese sus Datos</h1>
      <div>
        <input
          placeholder='Nombre'
          className='inputs'
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          placeholder='Apellidos'
          className='inputs'
          type="text"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
        />
      </div>
      <div>

        <input
          placeholder='Telefono'
          className='inputs'
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          placeholder='No de Documento'
          className='inputs'
          type="text"
          name="identificacion"
          value={formData.identificacion}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          placeholder='Email'
          className='inputs'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          onBlur={(e) => {
            if (!validateEmail(e.target.value)) {
              alert('Ingrese un email válido');
            }
          }}
        />
      </div>
      <div>
        <select
          className='inputs'
          name="nivelCarrera"
          value={formData.nivelCarrera}
          onChange={handleChange}
          required
        >
          <option value="">Nivel de Carrera</option>
          <option value="tecnico">Técnico</option>
          <option value="tecnologo">Tecnólogo</option>
          <option value="pregrado">Pregrado</option>
          <option value="postgrado">Postgrado</option>
        </select>
      </div>
      <div>
        <input
          placeholder='Nivel de Formacion'
          className='inputs'
          type="text"
          name="programa"
          value={formData.programa}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          placeholder='Materia'
          className='inputs'
          type="text"
          name="materia"
          value={formData.materia}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          placeholder='Nota 1 (35%)'
          className='inputs'
          type="number"
          name="nota1"
          value={formData.nota1}
          onChange={handleChange}
          required
          onBlur={(e) => {
            if (!isValidNote(e.target.value)) {
              alert('La nota debe estar entre 0 y 5.0');
            }
          }}
        />
      </div>
      <div>
        <input
          placeholder='Nota 2 (35%)'
          className='inputs'
          type="number"
          name="nota2"
          value={formData.nota2}
          onChange={handleChange}
          required
          onBlur={(e) => {
            if (!isValidNote(e.target.value)) {
              alert('La nota debe estar entre 0 y 5.0');
            }
          }}
        />
      </div>
      <div>
        <input
          placeholder='Nota 3 (30%)'
          className='inputs'
          type="number"
          name="nota3"
          value={formData.nota3}
          onChange={handleChange}
          required
          onBlur={(e) => {
            if (!isValidNote(e.target.value)) {
              alert('La nota debe estar entre 0 y 5.0');
            }
          }}
        />
      </div>
      <button className='boton' type="submit">Enviar</button>
      {resultado && <div>{resultado}</div>}
      </div>
    </form>
  );
};

export default Formulario;
