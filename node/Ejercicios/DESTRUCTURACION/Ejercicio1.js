const persona = {
  nombreCompleto: 'Juan Jose Hernandez',
  edad: 30,
  direccion: 'calle 1'
};

const { nombreCompleto: nombre, edad:años, direccion:casa  } = persona;

console.log(nombre);
console.log(años);
console.log(casa); 