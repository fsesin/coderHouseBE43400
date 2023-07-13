// setTimeout(() => {
//     console.log('Probando setTimeOut');
// }, 1000);

// setInterval(() => {
//     console.log('Probando setInterval');
// }, 2000);

const fs = require('fs')

// sincrono

// escribir un archivo
//fs.writeFileSync('archivo.json','cambio informacion archivo')

// leer un archivo
//const infoArchivo = fs.readFileSync('archivo.txt','utf-8')
//console.log(infoArchivo);

// existe un archivo
//const archivoExiste = fs.existsSync('archivo1.txt')
//console.log(archivoExiste);

// eliminar archivo
//s.unlinkSync('archivo.txt')

// asincrona
// fs.writeFile('archivoAsync.json','primera info',(error)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo creado con exito');
//     }
// })

// fs.readFile('archivoAsync.json','utf-8',(error,info)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log(info);
//     }
// })

// fs.unlink('archivoAsync.json',(error)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo eliminado con exito');
//     }
//     })


const productos = [
    {
        nombre: 'Iphone',
        precio: 500,
        stock: 40
    },
    {
        nombre: 'Ipad',
        precio: 200,
        stock: 20
    },
    {
        nombre: 'TV',
        precio: 800,
        stock: 10
    },
    {
        nombre: 'Computador',
        precio: 1200,
        stock: 50
    }
]

// fs.writeFile('products.json',JSON.stringify(productos),(error)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo creado con exito');
//     }
// })

// fs.readFile('products.json','utf-8',(error,info)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log(JSON.parse(info));
//     }
// })

// promesas

// .then .catch

// fs.promises.writeFile('productosProm.json',JSON.stringify(productos))
// .then(()=>console.log('Productos guardados'))
// .catch(error=>console.log(error))

// fs.promises.readFile('productosProm.json','utf-8')
// .then(info=>console.log(JSON.parse(info)))
// .catch(error=>console.log(error))

// async await 