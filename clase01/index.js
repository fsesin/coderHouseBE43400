// let nombre = 'Coderhouse';
// let numero = 5;
// const booleano = true;
// let objeto = {}
// let arreglo = []
// console.log(typeof arreglo);
// //console.log(typeof arreglo);
// console.log(Array.isArray(numero));

// actividad en clase
let nombre = 'Juan'
let edad = 20
let precio = 500
let nombreSeries = ['Friends', 'TWD']
let peliculas = ['Spiderman', 'Superman']

//console.log(nombre,edad,precio,nombreSeries,peliculas);
//edad = edad+1;
edad++
nombreSeries.push('HIMYM')
//console.log(nombre,edad,precio,nombreSeries,peliculas);

let usuario1 = {
  nombre: 'Juan',
  edad: 20,
  precio: 500,
  nombreSeries: ['Friends', 'TWD'],
  peliculas: ['Spiderman', 'Superman'],
}

//usuario1.

// variables

//let apellido = 'Hoyos'
let apellidoUsuario
apellido = 'Hoyos'

var primeraVariable = 'Hola a todos'
let segundaVariable = 'Hola'
const variableConst = 10
const variableConst2 = [10]
{
  var terceraVariable = 'Chao a todos'
  let cuartaVariable = 'Chao'
  //console.log(primeraVariable);
  //console.log(segundaVariable);
}
//console.log(terceraVariable);
//console.log(cuartaVariable);

segundaVariable = 'Modificando'
//variableConst = 15;
variableConst2.push(15)
//console.log(variableConst2)

// funciones

function sumar(n1, n2) {
  const resultado = n1 + n2
  console.log(resultado)
  //return resultado
}

// const sumarArrow = (n1,n2)=>{
//    return n1+n2
// }

const sumarArrow = (n1, n2) => n1 + n2
let resultado = 25

//console.log('El resultado de tu operacion es: '+resultado+' y tenemos que sumarle un valor adicional');
//console.log(`El resultado de tu operacion es: ${resultado} y tenemos que sumarle un valor adicional`);

function mostrarLista(arreglo) {
  if (Array.isArray(arreglo)) {
    if (!arreglo.length) {
      console.log('Lista vacia')
    } else {
      arreglo.forEach((elem) => console.log(elem))
      console.log(`La longitud del arreglo es de: ${arreglo.length}`)
    }
  } else {
    console.log('No es un arreglo')
  }
}

//mostrarLista([5,4])

// clases

class Producto{
    constructor(nombre,precio,stock,descripcion){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.descripcion = descripcion
    }
    getNombre(){
        this.nombre
    }
}

const producto1 = new Producto('Iphone',500,25,'Iphone 14');
const producto2 = new Producto('Ipad',200,15,'Ipad Pro');
producto2.
console.log(producto1,producto2);
