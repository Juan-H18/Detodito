const  express = require ('express');
const server = express()

//SUMA
server.get('/sumar/:num1/:num2', (req,res) =>{
    const num1=parseInt(req.params.num1);
    const num2= parseInt(req.params.num2);
    const suma = num1 + num2;
    res.send(`La suma es: ${suma}`);
})

//Multiplicacion
server.get('/multiplicacion/:num1/:num2', (req,res) =>{
    const num1=parseInt(req.params.num1);
    const num2= parseInt(req.params.num2);
    const multiplicaion  = num1 + num2;
    res.send(`La multiplicacion es: ${multiplicacion}`);
})

server.get('/usuario', (req,res) =>{
    const usuario ={
        nombre: 'Juan',
        apellido: 'Hernandez',
        edad: 18
    };
    res.send(usuario)
})

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });