const prompt = require('prompt-sync')();

let frutas = []
let factura = []

function numeroAleatorio() {
    let codigo = "";
  
    for (let i = 0; i < 3; i++) {
      let randomDigit = Math.round(Math.random() * 10);
      codigo += randomDigit;
    }
  
    return codigo
}

function precioAleatorio() {
    let precio = "";
  
    for (let i = 0; i < 4; i++) {
      let randomDigit = Math.round(Math.random() * 10);
      precio += randomDigit;
    }
  
    return precio
}

function catAleatoria(){
    let categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'];
    let categoria = categorias[Math.floor(Math.random() * categorias.length)];
    return categoria;
}

function ingresarFrutas() {
    for (let i = 0; i < nFrutas; i++) {
        let fruta = prompt('¿Que fruta desea comprar?: ');
        frutas.push(fruta)
        console.log(frutas)
    }
}

function crearFactura() {

    frutas.forEach(fruta => {
        var Elemento = {
            codigo: numeroAleatorio(),
            fruta: fruta,
            precio: precioAleatorio(),
            categoria: catAleatoria()
        }

        factura.push(Elemento)
    });
    console.log('Factura:', factura)
}

//------INGRESO DE DATOS------
console.log('------TIENDA DE FRUTAS------')
let nFrutas = parseInt(prompt('¿Cuantas frutas desea comprar?: '));
if (nFrutas > 0) {
    ingresarFrutas()
    crearFactura()
}else{
    console.log('Por favor, ingrese un número positivo.')
}
