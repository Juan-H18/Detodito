function validarNotas(nota1, nota2, nota3, callbackE, callbackP) {

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        callbackE("Tipos de datos incorrectos");
        return;
    }

    if (nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5) {
        callbackE("Rango de notas inválidos");
        return;
    }


    callbackP(nota1, nota2, nota3);
}

function errores(mensaje) {
    console.log(mensaje);
}

function promediar(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 3.5) {
        console.log("Aprobaste JS");
    } else {
        console.log("No aprobaste JS");
    }
}

// CASOS

// Caso 1
validarNotas(3, 'a', 4, errores, promediar);

// Caso 2
validarNotas(3, 6, 4, errores, promediar);

// Caso 3
validarNotas(4, 4.5, 3.5, errores, promediar);

// Caso 4
validarNotas(2, 2.5, 3, errores, promediar); 
