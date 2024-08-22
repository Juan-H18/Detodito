function validarPassword(password) {
    return new Promise((resolve, reject) => {
        const vocales = ['a', 'e', 'i', 'o', 'u'];
        const digitosImpares = ['1', '3', '5', '7', '9'];


        if (password.length === 5) {
            const primerCaracter = password.charAt(0).toLowerCase();
            const ultimoCaracter = password.charAt(password.length - 1);

            if (vocales.includes(primerCaracter) && digitosImpares.includes(ultimoCaracter)) {
                resolve("Contraseña cumple");
            } else {
                reject("Contraseña no cumple");
            }
        } else {
            reject("Contraseña no cumple");
        }
    });
}

// CASOS

// Caso 1
validarPassword("a1235")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));

// Caso 2
validarPassword("b1235")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));

