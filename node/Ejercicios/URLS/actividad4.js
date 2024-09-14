const  express = require ('express');
const server = express()

server.use(express.json());

//SUMA
server.get('/sumar/:num1/:num2', (req,res) =>{
    const num1=parseInt(req.params.num1);
    const num2= parseInt(req.params.num2);
    const suma = num1 + num2;
    res.send(`La suma es: ${suma}`);
})

//MULTIPLICACION
server.get('/multiplicacion/:num1/:num2', (req,res) =>{
    const num1=parseInt(req.params.num1);
    const num2= parseInt(req.params.num2);
    const multiplicacion  = num1 + num2;
    res.send(`La multiplicacion es: ${multiplicacion}`);
})

//USUARIO JSON
server.get('/usuario', (req,res) =>{
    const usuario ={
        nombre: 'Juan',
        apellido: 'Hernandez',
        edad: 18
    };
    res.send(usuario)
})

//VALIDACION EDAD
server.get('/edad/:edad', (req, res) => {
    const edad = parseInt(req.params.edad);
    if (edad >= 18) {
        res.send('Eres mayor de edad');
    } else {
        res.send('Eres menor de edad');
    }
});

//SALUDO
server.get('/saludo', (req, res) => {
    const nombre = req.query.nombre || 'visitante';
    res.send(`Hola, ${nombre}`);
});

//AUTENTICACION
server.post('/login', (req, res) => {
    const usuario = req.body.usuario;
    const password = req.body.password;
    if (usuario === 'admin' && password === 'password') {
        res.send('Login exitoso');
    } else {
        res.status(401).send('Usuario o Contarseña invalidos inválidas');
    }
});

//PARAMETROS
server.get('/busqueda', (req, res) => {
    const categoria = req.query.categoria || 'Predeterminada';
    const pagina = req.query.pagina || 1;
    const orden = req.query.orden || 'Ascendente';
    res.json({
        categoria,
        pagina,
        orden
    });
});

//LISTA PRODUCTOS
server.get('/productos', (req, res) => {
    const productos = [
        {
            id: 1,
            nombre: 'Chorizo',
            precio: 10000,
            categoria: 'Embutidos'
        },
        {
            id: 2,
            nombre: 'Manzana',
            precio: 200,
            categoria: 'Frutas'
        }
    ];
    res.json(productos);
});

//AGREGAR PRODUCTOS
let listaProductos = [];
server.post('/agregarproductos', (req, res) => {
    const producto = req.body;
    listaProductos.push(producto);
    res.send('Producto creado exitosamente');
});

//BUSCAR PRODUCTOS
server.get('/verproductos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = listaProductos.find(p => p.id === id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});