const verificarPropiedad = (objeto, propiedad) => {
    return new Promise((resolve, reject) => {
        if (objeto.hasOwnProperty(propiedad)) {
            resolve(`El objeto tiene la propiedad ${propiedad}`);
        } else {
            reject(`El objeto no tiene la propiedad ${propiedad}`);
        }
    });
};

const objeto = { nombre: "Juan", edad: 30 };

verificarPropiedad(objeto, "pais" )
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((mensaje) => {
        console.error(mensaje);
    });