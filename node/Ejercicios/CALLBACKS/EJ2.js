const baseDatos1 = [12, 21, 43, 45, 67];
const baseDatos2 = [56, 32, 67, 22, 56];
const baseDatos3 = [99, 88, 77, 55, 44, 33];

function busqueda1(dato, callbackEncontrado, callbackBusquedaSiguiente) {
    if (baseDatos1.includes(dato)) {
        return callbackEncontrado(dato);
    } else {
        return callbackBusquedaSiguiente(dato);
    }
}

function busqueda2(dato, callbackEncontrado, callbackBusquedaSiguiente) {
    if (baseDatos2.includes(dato)) {
        return callbackEncontrado(dato);
    } else {
        return callbackBusquedaSiguiente(dato);
    }
}

function busqueda3(dato, callbackEncontrado, callbackNoEncontrado) {
    if (baseDatos3.includes(dato)) {
        return callbackEncontrado(dato);
    } else {
        return callbackNoEncontrado();
    }
}

function encontrado(dato) {
    console.log("Dato encontrado, Su dato es:", dato);
}

function noEncontrado() {
    console.log("Dato no encontrado");
}

// Ejemplo de uso:
const datoBuscado = 77;

busqueda1(datoBuscado, encontrado, (dato) => {
    busqueda2(dato, encontrado, (dato) => {
        busqueda3(dato, encontrado, noEncontrado);
    });
});
