const validarNumero = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero > 10) {
            resolve("El número es mayor que 10");
        } else {
            reject("El número es menor o igual que 10");
        }
    });
};

validarNumero(15)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((mensaje) => {
        console.error(mensaje);
    });