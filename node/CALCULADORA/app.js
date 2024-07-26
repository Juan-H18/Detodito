function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
}

function borrarUltimo() {
    var pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}

function agregarAPantalla(valor) {
    var pantalla = document.getElementById('pantalla');
    pantalla.value += valor;
}

function calcular() {
    var pantalla = document.getElementById('pantalla');
    try {
        pantalla.value = eval(pantalla.value);
    } catch (e) {
        pantalla.value = 'Error';
    }
}
