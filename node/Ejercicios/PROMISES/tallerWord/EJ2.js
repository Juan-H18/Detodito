const temperaturas = [100, -20, 22, -1, 5, 0, -7, 8, 50, -123, -74];

let tempPositivas = [];
let tempNegativas = [];

function clasificarTemperatura(temperatura) {
    return new Promise((resolve, reject) => {
        if (temperatura >= 0) {
            resolve(temperatura); 
        } else {
            reject(temperatura); 
        }
    });
}

// Procesar todas las temperaturas
temperaturas.forEach((temp) => {
    clasificarTemperatura(temp)
        .then((tempPositiva) => {
            tempPositivas.push(tempPositiva);
        })
        .catch((tempNegativa) => {
            tempNegativas.push(tempNegativa);
        });
});

setTimeout(() => {
    console.log("Temperaturas positivas:", tempPositivas);
    console.log("Temperaturas negativas:", tempNegativas);
}, 100);
