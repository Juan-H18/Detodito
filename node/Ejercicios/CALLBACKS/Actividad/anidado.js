const valorInicial = 1;

function cuadradoCallback(valor, callback) {
    callback(valor, valor * valor);
}

cuadradoCallback(valorInicial, (valor, resultado) => {
    console.log("Inicia Callback");
    console.log(`El cuadrado del número ${valor} es: ${resultado}`);
    
    cuadradoCallback(valor + 1, (valor, resultado) => {
        console.log(`El cuadrado del número ${valor} es: ${resultado}`);
        cuadradoCallback(valor + 1, (valor, resultado) => {
            console.log(`El cuadrado del número ${valor} es: ${resultado}`);
            cuadradoCallback(valor + 1, (valor, resultado) => {
                console.log(`El cuadrado del número ${valor} es: ${resultado}`);
                cuadradoCallback(valor + 1, (valor, resultado) => {
                    console.log(`El cuadrado del número ${valor} es: ${resultado}`);
                    cuadradoCallback(valor + 1, (valor, resultado) => {
                        console.log(`El cuadrado del número ${valor} es: ${resultado}`);
                        cuadradoCallback(valor + 1, (valor, resultado) => {
                            console.log(`El cuadrado del número ${valor} es: ${resultado}`);
                            cuadradoCallback(valor + 1, (valor, resultado) => {
                                console.log(`El cuadrado del número ${valor} es: ${resultado}`);
                                cuadradoCallback(valor + 1, (valor, resultado) => {
                                    console.log(`El cuadrado del número ${valor} es: ${resultado}`);
                                    cuadradoCallback(valor + 1, (valor, resultado) => {
                                        console.log(`El cuadrado del número ${valor} es: ${resultado}`);
                                        cuadradoCallback(valor + 1, (valor, resultado) => {
                                            console.log(`El cuadrado del número ${valor} es: ${resultado}`);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
    });
});