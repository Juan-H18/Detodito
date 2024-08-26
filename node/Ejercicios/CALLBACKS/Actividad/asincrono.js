const { KR2, despedida, KR1, lineas, delayPorCaracter, delayPorLinea } = require('./def.js');

function imprimirLetras(lineas, delayPorCaracter, delayPorLinea, indiceLinea, indiceCaracter, callback) {
    if (indiceLinea >= lineas.length) 
      return callback();

    const linea = lineas[indiceLinea];
    const delayCaracter = delayPorCaracter[indiceLinea];
    const delayLinea = delayPorLinea[indiceLinea];

    if (indiceCaracter < linea.length) {
        process.stdout.write(linea[indiceCaracter]);
        setTimeout(() => {
            imprimirLetras(lineas, delayPorCaracter, delayPorLinea, indiceLinea, indiceCaracter + 1, callback);
        }, delayCaracter);
    } else {
        console.log("\n");
        setTimeout(() => {
            imprimirLetras(lineas, delayPorCaracter, delayPorLinea, indiceLinea + 1, 0, callback);
        }, delayLinea);
    }
};

KR2();

setTimeout(() => {
    KR1(() => {
        console.clear();
        setTimeout(() => {
            imprimirLetras(lineas, delayPorCaracter, delayPorLinea, 0, 0, despedida);
        }, 9000); //11000
    });
}, 11500);
