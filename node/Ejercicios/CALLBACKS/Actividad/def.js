const player = require('node-wav-player');
const path = require('path');

function KR2() {
    console.clear();
    const errorMessage = 
          "Se produjo un error:\n" +
          "Nombre del error: TypeError\n" +
          "Mensaje: Todos los elementos del array deben ser números.\n" +
          "Pila de llamadas:\n" +
          "    at Array.reduce (<anonymous>)\n" +
          "    at calcularPromedio (<anonymous>:8:11)\n" +
          "    at <anonymous>:7:17\n" +
          "    at Object.<anonymous> (<anonymous>:12:15)\n" +
          "    at Module._compile (node:internal/modules/cjs/compile:1226:14)\n" +
          "    at node:internal/modules/cjs/loader:1256:14\n" +
          "    at node:internal/modules/cjs/loader:1413:5\n" +
          "    at node:internal/modules/cjs/loader:1503:3\n" +
          "    at node:internal/main/run_main_module:29:12";

    console.log(errorMessage);

    setTimeout(() => {
    console.clear();
    console.log('MENTIRASSSS');
    
    }, 7000);

    setTimeout(() => {
    console.clear();
    console.log('Ahora si... ZUMBAA!!');
    
    }, 9000);
};

function despedida(){
    setTimeout(() => {
        console.clear();
        console.log("FIN");
        }, 1000);
};

function KR1(callback) {
    const audioPath = path.join(__dirname, 'tema.wav');
    player.play({
        path: audioPath,
    }).then(() => {
        callback();
    }).catch((err) => {
        console.error("Error al reproducir el audio:", err);
        callback();
    });
};

const lineas = [
    "Sono la campana y el fin de semana se deja ver",
    "Vestido, de traje, lujuria salvaje bajo mi piel",
    "Si dios, puso la manzana fue para morder",
    "Ay dios, pequemo' abrazaditos hasta el amanecer",
    "Llego la fiesta, pa' tu boquita",
    "Toda la noche, todito el dia",
    "Vamo' a bañarnos en la orillita",
    "Que la marea esta picadita-ita-ita"
];

const delayPorCaracter = [
    82,
    100,
    120,
    120,
    90,
    90,
    90,
    90 
];

const delayPorLinea = [
    2000,
    1600,
    1300,
    1600,
    400,
    550,
    550, 
    650  
];


module.exports = { KR2, despedida, KR1, lineas, delayPorCaracter, delayPorLinea};